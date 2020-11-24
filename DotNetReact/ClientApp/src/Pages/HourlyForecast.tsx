import * as React from 'react';

import { WeatherContext } from "../Context/WeatherContext"

export default () => {
    const {forecast} = React.useContext(WeatherContext);
    return <main>
        <h3>Hourly Forecast</h3>
        <table>
            <thead>
                <tr>
                    <td>Date</td>
                    <td>Temperature</td>
                    <td>Summary</td>
                </tr>
            </thead>
            <tbody>
            {
                forecast.hourly && forecast.hourly.map((e,i) => <tr key={"tr"+i}>
                    <td>{e.date}</td>
                    <td>{e.temp}</td>
                    <td>{e.summary}</td>
                </tr>)
            }
            </tbody>
        </table>
    </main>
}