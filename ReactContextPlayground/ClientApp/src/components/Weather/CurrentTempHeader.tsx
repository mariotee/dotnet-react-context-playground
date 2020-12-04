import * as React from "react";

import { ToFahrenheit } from "Util/Weather";

interface IProps {
    currentTemp: number,
    isFahrenheit: boolean,
}

export default function CurrentTempHeader(props: IProps) {
    return  <h3>
        Current Temp: {props.isFahrenheit ? ToFahrenheit(props.currentTemp) : props.currentTemp} {props.isFahrenheit ? "°­F" : "°C"}
    </h3>
}