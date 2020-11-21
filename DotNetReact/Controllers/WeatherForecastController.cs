using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json.Linq;
using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace DotNetReact.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly ILogger<WeatherForecastController> _logger;

        private readonly string _appId;

        public WeatherForecastController(IOptions<WeatherApiOptions> options, ILogger<WeatherForecastController> logger)
        {
            if (options?.Value is null) throw new ArgumentNullException(nameof(options));

            _appId = options.Value.AppId;

            _logger = logger;
        }

        [HttpGet]
        public async Task<WeatherForecast> Get([FromQuery] string zipcode)
        {
            using var client = new HttpClient();

            var (latitude, longitude) = await GetLatLonFromZipcodeAsync(client, zipcode);

            return await GetForecastsFromLatLon(client, latitude, longitude, _appId);
        }

        private static async Task<WeatherForecast> GetForecastsFromLatLon(HttpClient client, string latitude, string longitude, string appId)
        {
            var res = await client.SendAsync(new HttpRequestMessage
            {
                RequestUri = new Uri($"https://api.openweathermap.org/data/2.5/onecall?lat={latitude}&lon={longitude}&units=metric&appid={appId}&exclude=minutely,alerts"),
                Method = HttpMethod.Get,
            });

            var json = JObject.Parse(await res.Content.ReadAsStringAsync());

            return new WeatherForecast
            {
                Current = null,
                Hourly = null,
                Daily = null,
            };
        }

        private static async Task<(string latitude, string longitude)> GetLatLonFromZipcodeAsync(HttpClient client, string zipcode)
        {
            var res = await client.SendAsync(new HttpRequestMessage
            {
                RequestUri = new Uri($"https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-zip-code-latitude-and-longitude&q={zipcode}"),
                Method = HttpMethod.Get,
            });

            var json = JObject.Parse(await res.Content.ReadAsStringAsync())["records"][0]["fields"];

            return (json["latitude"].Value<string>(), json["longitude"].Value<string>());
        }
    }
}