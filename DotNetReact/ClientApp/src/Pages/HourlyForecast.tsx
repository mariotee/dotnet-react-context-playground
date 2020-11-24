import * as React from 'react';

import { WeatherContext } from "../Context/WeatherContext"

export default () => {
    const { forecast, isFahrenheit } = React.useContext(WeatherContext);

    return <main>
        <h3>Hourly Forecast</h3>
        <table className="table">
            <thead className="font-weight-bold">
                <tr>
                    <td>Date</td>
                    <td>Temperature ({isFahrenheit ? "°­F" : "°C"})</td>
                    <td>Summary</td>
                </tr>
            </thead>
            <tbody>
            {
                forecast.hourly && forecast.hourly.map((e, i) => <tr key={"tr" + i}>
                    <td>{new Date(e.date).toDateString()}{" @ "}{new Date(e.date).toLocaleString('en-US', { hour: 'numeric', hour12: true })}</td>
                    <td>{isFahrenheit ? (e.temp * 1.8 + 32).toFixed(2) : e.temp}</td>
                    <td>{e.summary}</td>
                </tr>)
            }
            </tbody>
        </table>
    </main>
}