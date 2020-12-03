import * as React from 'react';

import { useWeatherContext } from "Context/WeatherContext"
import { ToFahrenheit } from 'Util/Weather';

export default () => {
    const { forecast, isFahrenheit } = useWeatherContext();

    return <main>
        <h3>Hourly Forecast</h3>
        <table className="table table-striped table-bordered table-sm">
            <thead className="font-weight-bold">
                <tr>
                    <td>Date</td>
                    <td>Temperature ({isFahrenheit ? "°­F" : "°C"})</td>
                    <td>Summary</td>
                </tr>
            </thead>
            <tbody>
            {
                forecast && forecast.hourly && forecast.hourly.map((e, i) => <tr key={"tr" + i}>
                    <td>{new Date(e.date).toDateString()}{" @ "}{new Date(e.date).toLocaleString('en-US', { hour: 'numeric', hour12: true })}</td>
                    <td>{isFahrenheit ? ToFahrenheit(e.temp) : e.temp}</td>
                    <td>{e.summary}</td>
                </tr>)
            }
            </tbody>
        </table>
    </main>
}