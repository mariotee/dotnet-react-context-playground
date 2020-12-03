import * as React from "react";

interface IAppState {
    authenticated: boolean;
    setAuthenticated(input: boolean): void;
    username: string;
    setUsername(input: string): void;    
}

const GlobalStateContext = React.createContext(undefined as unknown as IAppState);

//export context provider and custom hook
export const AppStateContextProvider: React.FunctionComponent = (props) => {
    const [authenticated, setAuthenticated] = React.useState(false);
    const [username, setUsername] = React.useState("");
    
    const initState: IAppState = {
        authenticated,
        setAuthenticated,
        username,
        setUsername,
    }

    return <GlobalStateContext.Provider value={initState}>{props.children}</GlobalStateContext.Provider>
}

export const useAppStateContext = () => {
    return React.useContext(GlobalStateContext);
}