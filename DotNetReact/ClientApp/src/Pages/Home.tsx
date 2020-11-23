import  * as React from 'react';

import { WeatherContext } from "../Context/WeatherContext";

export default () => {
    const { forecast, setForecasts } = React.useContext(WeatherContext);

    const [zipcode, setZipcode] = React.useState("");

    const populateWeatherData = async () => {
        const response = await fetch('weatherforecast?zipcode=' + zipcode);

        const data = await response.json();
        
        setForecasts(data);
    }

    return <div>
        <input placeholder={"Enter Zipcode"} value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
        <button onClick={populateWeatherData}> Fetch</button>

        <section>
            {forecast.current && <h3>Current Temp: {forecast.current.temperatureC} degress C</h3>}
            {forecast.daily.length > 0 && <h3>Daily Temp</h3>}
            {
                forecast.daily.map((e, i) => <p key={"p"+i}>{e.date} // {e.temperatureC} degrees C</p>)
            }
        </section>
    </div>
}