import React from 'react';

interface Forecast {
    date: String;
    temperatureC: Number;
    temperatureF: Number;
    summary: String;
}

export default () => {
    const [forecasts, setForecasts] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const populateWeatherData = async () => {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        
        setForecasts(data);

        setLoading(false);
    }

    React.useEffect(() => {
        populateWeatherData();
    }, []);

    const renderForecastsTable = (forecasts: Forecast[]) => {
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
                    {forecasts.map(forecast =>
                        <tr key={forecast.date}>
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
                    : renderForecastsTable(forecasts)
            }
        </div>
    );
}