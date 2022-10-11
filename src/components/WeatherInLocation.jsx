import React from 'react';

const WeatherInLocation = ({forecast}) => {
    return ( 
        <div>
            <span>Precipitation: {forecast.precipitation} </span>
            <span>Temperature: {forecast.soil_temperature_0cm} </span>
            <span>Windspeed: {forecast.windspeed_10m}</span>
        </div>
    );
}
 
export default WeatherInLocation;