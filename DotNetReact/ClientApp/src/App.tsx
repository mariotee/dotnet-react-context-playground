import React from 'react';
import { Route } from 'react-router';
import Layout from 'components/Layout';
import Home from 'Pages/Home';
import FetchData from 'Pages/FetchData';

import { WeatherContext, IForecast } from "Context/WeatherContext"

import './custom.css'

export default () => {
    const [forecasts, setForecasts] = React.useState(new Array<IForecast>());

    return <Layout>
        <WeatherContext.Provider value={{ forecasts, setForecasts }}>
            <Route exact path='/' component={Home} />
            <Route path='/fetch-data' component={FetchData} />
        </WeatherContext.Provider>
    </Layout >
}