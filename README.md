2020-11-13_dotnet-react

# How to Run:
`appsettings.Local.json` file will need to be created with a structure like:
```json
{
  "WeatherApiOptions": {
    "appId": "<enter your openweathermap.org API key>"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning",
      "Microsoft.Hosting.Lifetime": "Information"
    }
  },
  "AllowedHosts": "*"
}
```

note: this file is currently git-ignored
