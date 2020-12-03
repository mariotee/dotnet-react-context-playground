import * as React from 'react';
import { Route } from 'react-router';

import Layout from 'components/Layout';
import Login from "Pages/Login";
import DailyForecast from 'Pages/DailyForecast';
import HourlyForecast from 'Pages/HourlyForecast';

import { WeatherContextProvider } from "Context/WeatherContext"
import { AppStateContextProvider } from "Context/AppStateContext";

import './custom.css'

export default () => {
    return <Layout>
        <AppStateContextProvider>
            <WeatherContextProvider>
                <Route exact path='/' component={Login} />
                <Route path='/daily' component={DailyForecast} />
                <Route path='/hourly' component={HourlyForecast} />
            </WeatherContextProvider>
        </AppStateContextProvider>
    </Layout >
}