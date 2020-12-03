import * as React from "react";

import { IWeatherForecast } from "models";

interface IWeatherState {
    forecast: IWeatherForecast;
    setForecast(input: IWeatherForecast): void;
    currentZipcode: string,
    setCurrentZipcode(input: string): void;
    savedZipcodes: string[];
    setSavedZipcodes(input:string[]): void;
    isFahrenheit: boolean;
    setFahrenheit(input:boolean):void;
}

interface IContextProps {
    children: React.ReactNode;
}

const WeatherContext = React.createContext(undefined as unknown as IWeatherState);

export const WeatherContextProvider = (props: IContextProps) => {
    const [forecast, setForecast] = React.useState(undefined as unknown as IWeatherForecast);
    const [currentZipcode, setCurrentZipcode] = React.useState("");
    const [savedZipcodes, setSavedZipcodes] = React.useState([] as string[]);
    const [isFahrenheit, setFahrenheit] = React.useState(false);

    const initState: IWeatherState = {
        forecast,
        setForecast,
        currentZipcode,
        setCurrentZipcode,
        savedZipcodes,
        setSavedZipcodes,
        isFahrenheit,
        setFahrenheit,
    }

    return <WeatherContext.Provider value={initState}>{props.children}</WeatherContext.Provider>
}

export const useWeatherContext = () => {
    return React.useContext(WeatherContext);
}