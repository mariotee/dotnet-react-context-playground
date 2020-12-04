import * as React from "react";

import { useAppStateContext } from "Context/AppStateContext";

export default () => {    
    const { setUsername, setAuthenticated } = useAppStateContext();

    const [login, setLogin] = React.useState("");

    const LoggedIn = () => {
        setUsername(login);
        setAuthenticated(true);
    }

    const checkEnter = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            LoggedIn();
        }
    }

    return <React.Fragment>
        <input className="w-25 my-4" placeholder="(just enter anything and submit)" value={login} onChange={(e) => setLogin(e.target.value)} onKeyPress={checkEnter} />
        <button className="btn btn-primary mx-5" onClick={LoggedIn}>Submit</button>
    </React.Fragment>
}