using System;
using System.Collections.Generic;

namespace DotNetReact
{
    public class WeatherForecast
    {
        public WeatherRecord Current { get; set; }
        public IEnumerable<WeatherRecord> Hourly { get; set; }
        public IEnumerable<WeatherRecord> Daily { get; set; }
    }

    public class WeatherRecord
    {
        public DateTime Date { get; set; }

        public int TemperatureC { get; set; }

        public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);

        public string Summary { get; set; }
    }
}
