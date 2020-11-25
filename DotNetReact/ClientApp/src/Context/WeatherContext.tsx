import * as React from "react";

import { IWeatherForecast, IWeatherRecord, IDailyWeatherRecord } from "../models";

export const defaultForecast: IWeatherForecast = {
    current: null as unknown as IWeatherRecord,
    hourly: null as unknown as IWeatherRecord[],
    daily: null as unknown as IDailyWeatherRecord[],
};

export const WeatherContext = React.createContext({
    forecast: defaultForecast,
    setForecasts: (input: IWeatherForecast) => { },
});