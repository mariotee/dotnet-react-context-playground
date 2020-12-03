import * as React from "react";

interface IAppState {
    
}

interface IContextProps {
    children: React.ReactNode;
}

const GlobalStateContext = React.createContext(undefined as unknown as IAppState);

export const AppStateContextProvider = (props: IContextProps) => {
    const initState: IAppState = {
        
    }

    return <GlobalStateContext.Provider value={initState}>{props.children}</GlobalStateContext.Provider>
}

export const useAppStateContext = () => {
    return React.useContext(GlobalStateContext);
}