import Coordinates from "./Coordinates";

class Weather {

    constructor(d) {

        this.coordinates = new Coordinates(d.latitude, d.longitude);
        this.timezone = d.timezone;

        this.forecast = new Array();

        d.hourly.time.forEach((e, i) => {

            this.forecast.push({
                date: new Date(e),
                precipitation: d.hourly.precipitation[i],
                rain: d.hourly.rain[i],
                showers: d.hourly.showers[i],
                snowfall: d.hourly.snowfall[i],
                soil_temperature_0cm: d.hourly.soil_temperature_0cm[i],
                temperature_2m: d.hourly.temperature_2m[i],
                windspeed_10m: d.hourly.windspeed_10m[i]
            });

        });
        
    }

}

export default Weather;