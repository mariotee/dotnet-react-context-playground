import * as React from 'react';
import { Route } from 'react-router';

import Layout from 'components/Layout';
import Home from 'Pages/Home';
import HourlyForecast from 'Pages/HourlyForecast';

import { WeatherContext, defaultForecast } from "Context/WeatherContext"
import { AppStateContextProvider } from "Context/AppStateContext";

import './custom.css'

export default () => {
    const [forecast, setForecasts] = React.useState(defaultForecast);

    return <Layout>
        <AppStateContextProvider>
            <WeatherContext.Provider value={{ forecast, setForecasts }}>
                <Route exact path='/' component={Home} />
                <Route path='/hourly' component={HourlyForecast} />
            </WeatherContext.Provider>
        </AppStateContextProvider>
    </Layout >
}