export interface IWeatherForecast {
    current: IWeatherRecord;
    hourly: IWeatherRecord[];
    daily: IWeatherRecord[];
}

export interface IWeatherRecord {
    date: Date;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}