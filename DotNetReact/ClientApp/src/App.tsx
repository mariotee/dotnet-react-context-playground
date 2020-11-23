import * as React from 'react';
import { Route } from 'react-router';

import Layout from './components/Layout';
import Home from './Pages/Home';
import FetchData from './Pages/FetchData';

import { WeatherContext, defaultForecast } from "./Context/WeatherContext"

import './custom.css'

export default () => {
    const [forecast, setForecasts] = React.useState(defaultForecast);

    return <Layout>
        <WeatherContext.Provider value={{ forecast, setForecasts }}>
            <Route exact path='/' component={Home} />
            <Route path='/fetch-data' component={FetchData} />
        </WeatherContext.Provider>
    </Layout >
}