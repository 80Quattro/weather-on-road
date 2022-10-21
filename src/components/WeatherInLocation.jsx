import React from 'react';

import usePlaceName from '../hooks/usePlaceName';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import OpacityIcon from '@mui/icons-material/Opacity';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import SleddingIcon from '@mui/icons-material/Sledding';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CircularProgress from '@mui/material/CircularProgress';

const WeatherInLocation = ({coordinates, forecast}) => {

    const placeName = usePlaceName(coordinates);

    return (
        <List>
            <Box sx={{fontSize: 25}}>
                <LocationOnIcon /> 
                {placeName === null &&
                    <CircularProgress /> }
                {placeName !== null &&
                    placeName }
            </Box>
            <ListItem><ListItemIcon><OpacityIcon /></ListItemIcon><ListItemText>Precipitation: {forecast.precipitation}mm/h</ListItemText></ListItem>
            <Container>
                {forecast.rain >= 0.5 && 
                    <ListItem>
                        <ListItemIcon><UmbrellaIcon /></ListItemIcon>
                        <ListItemText>Rainfall up to {forecast.rain}mm/h</ListItemText>
                    </ListItem>}
                {forecast.snowFall >= 0.5 &&
                    <ListItem>
                        <ListItemIcon><SleddingIcon /></ListItemIcon>
                        <ListItemText>Snowfall up to {forecast.snow}cm/h</ListItemText>
                    </ListItem>}
            </Container>
            <ListItem><ListItemIcon><ThermostatIcon /></ListItemIcon><ListItemText>Temperature: {forecast.soil_temperature_0cm}°C</ListItemText></ListItem>
            <ListItem><ListItemIcon><AirIcon /></ListItemIcon><ListItemText>Windspeed: {forecast.windspeed_10m}km/h</ListItemText></ListItem>
        </List>
    );
}
 
export default WeatherInLocation;