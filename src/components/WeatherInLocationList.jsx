import React from 'react';

import WeatherInLocation from './WeatherInLocation';
import useWeatherSummary from '../hooks/useWeatherSummary';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import WeatherSummary from './WeatherSummary';

const WeatherInLocationList = ({weatherList}) => {

    let display = <></>;
    // At the beginning when we have no data
    if(weatherList === null) {
        display = <Typography variant='h4'><ArrowBackOutlinedIcon /> Choose locations first</Typography>;
    }
    // While loading
    else if(weatherList === '') {
        display = <CircularProgress />;
    }
    // Display data
    else {
        display = (
            <>
                <WeatherSummary weather={weatherList}/>
                <List>
                    {weatherList.map((w) => <ListItem key={w.id}><WeatherInLocation coordinates={w.coordinates} forecast={w.forecast[0]}/></ListItem> )}  
                </List>
            </>
        );
    }

    return (
        <>
            {display}
        </>
     );
}
 
export default WeatherInLocationList;