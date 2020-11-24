import  * as React from 'react';

import { WeatherContext } from "../Context/WeatherContext";

export default () => {
    const { forecast, setForecasts } = React.useContext(WeatherContext);

    const [zipcode, setZipcode] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const populateWeatherData = async () => {
        setLoading(true);
        const response = await fetch('weatherforecast?zipcode=' + zipcode);

        const data = await response.json();
        
        setForecasts(data);
        setLoading(false);
    }

    const checkEnter = async (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            await populateWeatherData();
        }
    }

    return <div>
        <input placeholder={"Enter Zipcode"} value={zipcode} onChange={(e) => setZipcode(e.target.value)} onKeyPress={checkEnter} />
        <button onClick={populateWeatherData}> Fetch</button>

        <section>
        { loading && "Loading..."}
        <h3>Current Temp: { forecast.current && <span>{forecast.current.temp}&deg;C</span> }</h3>
        <h3>Daily Temp</h3>
        {
            forecast.daily.map((e, i) => <p key={"p" + i}>{e.date} // {e.dayTemp}&deg;C</p>)
        }
        </section>
    </div>
}