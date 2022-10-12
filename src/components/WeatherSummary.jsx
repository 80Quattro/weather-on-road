import React from 'react';
import useWeatherSummary from '../hooks/useWeatherSummary';

const WeatherSummary = ({weather}) => {

    const weatherSummary = useWeatherSummary(weather);

    return ( 
        <><h1>SUMMARY</h1></>
     );
}
 
export default WeatherSummary;