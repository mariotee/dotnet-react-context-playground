namespace DotNetReact
{
    public static class OptionsKeys
    {
        public const string WeatherApiOptions = nameof(WeatherApiOptions);
    }

    public class WeatherApiOptions
    {
        public string AppId { get; set; }
    }
}