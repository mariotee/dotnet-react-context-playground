using System;
using System.Collections.Generic;

namespace ReactContextPlayground.Models
{
    public class WeatherForecast
    {
        public WeatherRecord Current { get; set; }
        public IEnumerable<WeatherRecord> Hourly { get; set; }
        public IEnumerable<DailyWeatherRecord> Daily { get; set; }
    }

    public class WeatherRecord
    {
        public DateTime Date { get; set; }

        public double Temp { get; set; }

        public string Summary { get; set; }
    }

    public class DailyWeatherRecord
    {
        public DateTime Date { get; set; }

        public double DayTemp { get; set; }

        public double MinTemp { get; set; }
        public double MaxTemp { get; set; }
        public string Summary { get; set; }
    }
}