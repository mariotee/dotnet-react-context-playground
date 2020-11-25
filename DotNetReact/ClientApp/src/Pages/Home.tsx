import  * as React from 'react';

import { WeatherContext } from "../Context/WeatherContext";

export default () => {
    const { forecast, setForecasts } = React.useContext(WeatherContext);
    const { isFahrenheit, setFahrenheit } = React.useContext(WeatherContext);

    const [zipcode, setZipcode] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const populateWeatherData = async () => {
        setLoading(true);
        const response = await fetch(`weatherforecast?zipcode=${zipcode}`);

        const data = await response.json();
        
        setForecasts(data);
        setLoading(false);
    }

    const checkEnter = async (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            await populateWeatherData();
        }
    }

    const toggleFahrenheit = () => {
        setFahrenheit(!isFahrenheit);
    }

    const renderTable = () => {
        return <table className="table">
            <thead>
                <tr className="font-weight-bold">
                    <td>Date</td>
                    <td>Day Temp ({isFahrenheit ? "°­F" : "°C"})</td>
                    <td>Summary</td>
                    <td>Day Low ({isFahrenheit ? "°­F" : "°C"})</td>
                    <td>Day High ({isFahrenheit ? "°­F" : "°C"})</td>
                </tr>
            </thead>
            <tbody>
            {
                forecast.daily.map((e, i) => <tr key={"tr" + i}>
                    <td>{new Date(e.date).toDateString()}</td>
                    <td>{isFahrenheit ? (e.dayTemp * 1.8 + 32).toFixed(2) : e.dayTemp}</td>
                    <td>{e.summary}</td>
                    <td>{isFahrenheit ? (e.minTemp * 1.8 + 32).toFixed(2) : e.minTemp}</td>
                    <td>{isFahrenheit ? (e.maxTemp * 1.8 + 32).toFixed(2) : e.maxTemp}</td>
                </tr>)
            }
            </tbody>
        </table>
    }

    return <main>
        <div className="d-flex justify-content-between">
            <section>
                <input placeholder={"Enter Zipcode"} value={zipcode} onChange={(e) => setZipcode(e.target.value)} onKeyPress={checkEnter} />
                <button className="btn-primary mx-2" onClick={populateWeatherData}>Fetch</button>
            </section>
            <section>
                <label className="mx-2 font-weight-bold">Toggle Fahrenheit</label>
                <input className="mx-2" type="checkbox" onChange={toggleFahrenheit} checked={isFahrenheit}/>
            </section>
        </div>        

        { loading && "Loading..." }
        {
            forecast.current && <h3>Current Temp: 
            {
                (isFahrenheit ? (forecast.current.temp * 1.8 + 32).toFixed(2) : forecast.current.temp)
            }
            {
                isFahrenheit ? "°­F" : "°C"
            }
            </h3>
        }
        {
            forecast.daily && <h3>Daily Temp</h3>
        }
        {
            forecast.daily && renderTable()
        }
    </main>
}