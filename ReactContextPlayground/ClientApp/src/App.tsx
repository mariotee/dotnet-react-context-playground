import * as React from 'react';
import { Route } from 'react-router';

import Layout from 'components/Layout';
import Login from "Pages/Login";
import DailyForecast from 'Pages/DailyForecast';
import HourlyForecast from 'Pages/HourlyForecast';

//this context is to demonstrate a global app state
import { AppStateContextProvider } from "Context/AppStateContext";
//this context is to demonstrate a shareable state that may not be needed in the whole app
import { WeatherContextProvider } from "Context/WeatherContext"

import './custom.css'

export default function App() {
    return <Layout>
        <AppStateContextProvider>
            <Route exact path='/' component={Login} />
            <WeatherContextProvider>
                <Route path='/daily' component={DailyForecast} />
                <Route path='/hourly' component={HourlyForecast} />
            </WeatherContextProvider>
        </AppStateContextProvider>
    </Layout >
}