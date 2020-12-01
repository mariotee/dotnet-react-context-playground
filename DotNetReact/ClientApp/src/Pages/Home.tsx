import * as React from 'react';

import { useAppStateContext } from 'Context/AppStateContext';

import { WeatherContext } from "Context/WeatherContext";

import DailyForecastTable from 'components/Weather/DailyForecastTable';
import CurrentTempHeader from 'components/Weather/CurrentTempHeader';
import DailyTempHeader from 'components/Weather/DailyTempHeader';
import LoadingSpinner from 'components/Weather/LoadingSpinner';

export default () => {
    const { currentZipcode, isFahrenheit } = useAppStateContext();
    const { forecast, setForecasts } = React.useContext(WeatherContext);

    const [loading, setLoading] = React.useState(false);

    const populateWeatherData = async () => {
        setLoading(true);
        const response = await fetch(`weatherforecast?zipcode=${currentZipcode}`);

        const data = await response.json();
        
        setForecasts(data);
        setLoading(false);
    }

    return <main>
        <DailyTempHeader populateWeatherData={populateWeatherData}/>
        { 
            loading && <LoadingSpinner />
        }
        {
            forecast.current && <CurrentTempHeader currentTemp={forecast.current.temp} isFahrenheit={isFahrenheit} />
        }
        {
            forecast.daily && <DailyForecastTable forecast={forecast} isFahrenheit={isFahrenheit} />
        }
    </main>
}