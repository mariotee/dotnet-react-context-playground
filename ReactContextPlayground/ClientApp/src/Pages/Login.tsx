import * as React from "react";

import { useAppStateContext } from "Context/AppStateContext";

import FakeLogin from "components/Auth/FakeLogin";

import { Toast, ToastBody, ToastHeader } from "reactstrap"

export default function LoginPage() {
    const { authenticated, username } = useAppStateContext();

    return <React.Fragment>
        <h1>Please Login</h1>

        {/* this component is just to show how an app state login can be set */}
        <FakeLogin />

        {/*a kind of bad usage of this component, but i just wanted a better looking success message*/}
        <Toast isOpen={authenticated}>
            <ToastHeader icon="success">Successful Login</ToastHeader>
            <ToastBody>Welcome {username}!</ToastBody>
        </Toast>
        

    </React.Fragment>
}