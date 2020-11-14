import React from "react";

export interface IForecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

export const WeatherContext = React.createContext({
    forecasts: new Array<IForecast>(),
    setForecasts: null as any,
});