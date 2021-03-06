import * as React from 'react';

import { useAppStateContext } from 'Context/AppStateContext';
import { useWeatherContext } from "Context/WeatherContext";

import DailyForecastTable from 'components/Weather/DailyForecastTable';
import CurrentTempHeader from 'components/Weather/CurrentTempHeader';
import DailyTempControls from 'components/Weather/DailyTempControls';
import LoadingSpinner from 'components/Weather/LoadingSpinner';

export default function DailyForecastPage() {
    const { authenticated } = useAppStateContext();    
    const { forecast, setForecast, currentZipcode, isFahrenheit, savedZipcodes, setSavedZipcodes } = useWeatherContext();

    const [loading, setLoading] = React.useState(false);

    const populateWeatherData = async () => {
        setLoading(true);

        if (!savedZipcodes.includes(currentZipcode)) {
            if (savedZipcodes.length === 5) {
                setSavedZipcodes([currentZipcode, ...savedZipcodes.slice(0,4)]);
            } else {
                setSavedZipcodes([currentZipcode, ...savedZipcodes]);
            }
        }

        const response = await fetch(`weatherforecast?zipcode=${currentZipcode}`);

        const data = await response.json();
        
        setForecast(data);
        setLoading(false);
    }

    return authenticated 
        ? <main>
            <h2>Daily Forecast</h2>
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
        : <p>not logged in</p>
}