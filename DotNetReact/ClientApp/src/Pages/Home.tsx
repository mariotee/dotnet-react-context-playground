import React from 'react';

import { WeatherContext } from "../Context/WeatherContext";

export default () => {
    const { forecasts, setForecasts } = React.useContext(WeatherContext);

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
        {
            forecasts.map((e, i) => <p>{e.temperatureC} degrees C</p>)
        }
        </section>
    </div>
}