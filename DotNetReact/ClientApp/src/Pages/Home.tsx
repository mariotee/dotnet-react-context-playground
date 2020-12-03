import * as React from 'react';

import { useWeatherContext } from "Context/WeatherContext";

import DailyForecastTable from 'components/Weather/DailyForecastTable';
import CurrentTempHeader from 'components/Weather/CurrentTempHeader';
import DailyTempControls from 'components/Weather/DailyTempControls';
import LoadingSpinner from 'components/Weather/LoadingSpinner';

export default () => {
    const { forecast, setForecast, currentZipcode, isFahrenheit } = useWeatherContext();

    const [loading, setLoading] = React.useState(false);

    const populateWeatherData = async () => {
        setLoading(true);
        const response = await fetch(`weatherforecast?zipcode=${currentZipcode}`);

        const data = await response.json();
        
        setForecast(data);
        setLoading(false);
    }

    return <main>
        <DailyTempControls populateWeatherData={populateWeatherData}/>
        { 
            loading && <LoadingSpinner />
        }
        {
            forecast && forecast.current && <CurrentTempHeader currentTemp={forecast.current.temp} isFahrenheit={isFahrenheit} />
        }
        {
            forecast && forecast.daily && <DailyForecastTable forecast={forecast} isFahrenheit={isFahrenheit} />
        }
    </main>
}