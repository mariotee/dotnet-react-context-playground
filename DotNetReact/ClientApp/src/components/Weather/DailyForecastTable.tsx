import { IWeatherForecast } from "models";
import * as React from "react";

import { ToFahrenheit } from "Util/Weather";

interface IProps {
    forecast: IWeatherForecast,
    isFahrenheit: boolean,
}

export default (props: IProps) => <React.Fragment>
    <h3>Daily Temp</h3>
    <table className="table table-striped table-bordered">
        <thead>
            <tr className="font-weight-bold">
                <td>Date</td>
                <td>Day Temp ({props.isFahrenheit ? "°­F" : "°C"})</td>
                <td>Summary</td>
                <td>Day Low ({props.isFahrenheit ? "°­F" : "°C"})</td>
                <td>Day High ({props.isFahrenheit ? "°­F" : "°C"})</td>
            </tr>
        </thead>
        <tbody>
        {
            props.forecast.daily.map((e, i) => <tr key={"tr" + i}>
                <td>{new Date(e.date).toDateString()}</td>
                <td>{props.isFahrenheit ? ToFahrenheit(e.dayTemp) : e.dayTemp}</td>
                <td>{e.summary}</td>
                <td>{props.isFahrenheit ? ToFahrenheit(e.minTemp) : e.minTemp}</td>
                <td>{props.isFahrenheit ? ToFahrenheit(e.maxTemp) : e.maxTemp}</td>
            </tr>)
        }
        </tbody>
    </table>
</React.Fragment>