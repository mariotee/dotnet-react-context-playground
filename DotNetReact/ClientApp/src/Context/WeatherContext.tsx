import * as React from "react";

import { IWeatherForecast, IWeatherRecord } from "../models";

export const defaultForecast: IWeatherForecast = {
    current: null as unknown as IWeatherRecord,
    hourly: [],
    daily: [],
};

export const WeatherContext = React.createContext({
    forecast: defaultForecast,
    setForecasts: (input: IWeatherForecast) => { },
});