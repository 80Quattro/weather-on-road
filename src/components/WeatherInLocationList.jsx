import React from 'react';

import WeatherInLocation from './WeatherInLocation';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const WeatherInLocationList = ({weatherList}) => {

    let display = <></>;
    if(weatherList === null) {
        display = <h4>Choose locations first</h4>;
    }
    else if(weatherList === '') {
        display = (
            <CircularProgress />
        );
    }
    else {
        display = (
            <ul>
                {weatherList.map((w) => <li key={w.id}><WeatherInLocation forecast={w.forecast[0]}/></li> )}  
            </ul>
        );
    }

    return (
        <>
            {display}
        </>
     );
}
 
export default WeatherInLocationList;