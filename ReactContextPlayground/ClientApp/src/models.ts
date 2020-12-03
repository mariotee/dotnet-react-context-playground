export interface IWeatherForecast {
    current: IWeatherRecord;
    hourly: IWeatherRecord[];
    daily: IDailyWeatherRecord[];
}

export interface IWeatherRecord {
    date: Date;
    temp: number;
    summary: string;
}

export interface IDailyWeatherRecord {
    date: Date;
    dayTemp: number;
    minTemp: number;
    maxTemp: number;
    summary: string;
}