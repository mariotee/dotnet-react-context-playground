import * as React from "react";

interface IAppState {
    currentZipcode: string,
    setCurrentZipcode(input: string): void;
    savedZipcodes: string[];
    setSavedZipcodes(input:string[]): void;
    isFahrenheit: boolean;
    setFahrenheit(input:boolean):void;
}

interface IProps {
    children: React.ReactNode;
}

const GlobalStateContext = React.createContext(null as unknown as IAppState);

export const AppStateContextProvider = (props: IProps) => {
    const [currentZipcode, setCurrentZipcode] = React.useState("");
    const [savedZipcodes, setSavedZipcodes] = React.useState([] as string[]);
    const [isFahrenheit, setFahrenheit] = React.useState(false);

    const state: IAppState = {
        currentZipcode,
        setCurrentZipcode,
        savedZipcodes,
        setSavedZipcodes,
        isFahrenheit,
        setFahrenheit,
    }

    return <GlobalStateContext.Provider value={state}>{props.children}</GlobalStateContext.Provider>
}

export const useAppStateContext = () => {
    return React.useContext(GlobalStateContext);
}