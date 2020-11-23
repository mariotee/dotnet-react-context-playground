import * as React from 'react';

import { WeatherContext } from "../Context/WeatherContext"

import { IWeatherForecast, IWeatherRecord } from '../models';

export default () => {
    const [loading, setLoading] = React.useState(false);

    const { forecast, setForecasts } = React.useContext(WeatherContext);

    const populateWeatherData = async () => {
        const response = await fetch('weatherforecast');
        const data = await response.json();

        setForecasts(data);

        setLoading(false);
    }

    React.useEffect(() => {
        if (forecast.current === null) {
            populateWeatherData();
        }
    }, []);

    const renderForecastsTable = (records: IWeatherRecord[]) => {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((forecast,i) =>
                        <tr key={"tr"+i}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    return (
        <div>
            <h1 id="tabelLabel" >Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {
                loading
                    ? <p><em>Loading...</em></p>
                    : renderForecastsTable(forecast.daily)
            }
        </div>
    );
}