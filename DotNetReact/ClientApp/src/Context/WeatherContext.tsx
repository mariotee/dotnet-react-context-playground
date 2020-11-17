import React from "react";

import { IForecast } from "../models";

export const WeatherContext = React.createContext({
    forecasts: new Array<IForecast>(),
    setForecasts: (input: IForecast[]) => { },
});