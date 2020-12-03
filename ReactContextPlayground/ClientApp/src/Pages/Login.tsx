import * as React from "react";

import { useAppStateContext } from "Context/AppStateContext";

import FakeLogin from "components/Auth/FakeLogin";

export default () => {
    const { authenticated, username } = useAppStateContext();

    return <React.Fragment>
        <h1>Please Login</h1>

        {/* this component is just to show how an app state login can be set */}
        <FakeLogin />
        {
            authenticated && <p>Logged in. Welcome {username}!</p>
        }

    </React.Fragment>
}