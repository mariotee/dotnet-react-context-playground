import * as React from 'react';
import { Route } from 'react-router';

import Layout from './components/Layout';
import Home from './Pages/Home';
import HourlyForecast from './Pages/HourlyForecast';

import { WeatherContext, defaultForecast } from "./Context/WeatherContext"

import './custom.css'

export default () => {
    const [forecast, setForecasts] = React.useState(defaultForecast);
    const [isFahrenheit, setFahrenheit] = React.useState(false);

    return <Layout>
        <WeatherContext.Provider value={{ forecast, setForecasts, isFahrenheit, setFahrenheit }}>
            <Route exact path='/' component={Home} />
            <Route path='/hourly' component={HourlyForecast} />
        </WeatherContext.Provider>
    </Layout >
}