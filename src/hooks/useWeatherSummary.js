import {useState, useEffect} from 'react';

const useWeatherSummary = (weather) => {
    
    const [weatherSummary, setWeatherSummary] = useState({});

    useEffect(() => {
        // Data not yet loaded
        if(weather === null || weather === '') {
            return;
        }

        const breakpoints = {
            precipitation: 0.5,
            rain: 0.5,
            showers: 0.5,
            snowfall: 5,
            soil_temperature_0cm: {
                min: -2,
                max: 2
            },
            windspeed_10m: 39 // km/h
        };

        let summary = {};
        // change received data structure to simpler get interesting weather condition
        let forecast = {
            precipitation: [],
            rain: [],
            showers: [],
            snowfall: [],
            temperature: [],
            windspeed: []
        }
        weather.forEach((w) => {
            forecast.precipitation.push(w.forecast[0].precipitation);
            forecast.rain.push(w.forecast[0].rain);
            forecast.showers.push(w.forecast[0].showers);
            forecast.snowfall.push(w.forecast[0].precipitation);
            forecast.temperature.push(w.forecast[0].soil_temperature_0cm);
            forecast.windspeed.push(w.forecast[0].windspeed_10m);
        });

        summary.maxWindspeed = Math.max(...forecast.windspeed);
        summary.maxRain = Math.max(...forecast.rain);
        summary.maxSnow = Math.max(...forecast.snowfall);

        // check if exist any dangers for driver
        summary.isWind = summary.maxWindspeed >= breakpoints.windspeed_10m ? true : false; // TOTO: without true false ???
        summary.isRain = summary.maxRain >= breakpoints.rain ? true : false;
        summary.isSnow = summary.maxSnow >= breakpoints.snowfall ? true : false;
        summary.isBlackIce = false;
        forecast.temperature.every(t => {
            if(t >= breakpoints.soil_temperature_0cm.min && t <= breakpoints.soil_temperature_0cm.max) {
                summary.isBlackIce = true;
                return false; // break;
            }
            return true;
        });

        setWeatherSummary(summary);
    }, [weather]);

    return weatherSummary;

}
 
export default useWeatherSummary;