import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import OpacityIcon from '@mui/icons-material/Opacity';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AirIcon from '@mui/icons-material/Air';

const WeatherInLocation = ({forecast}) => {
    return ( 
        <List>
            <ListItem><ListItemIcon><OpacityIcon /></ListItemIcon><ListItemText>Precipitation: {forecast.precipitation}</ListItemText></ListItem>
            <ListItem><ListItemIcon><ThermostatIcon /></ListItemIcon><ListItemText>Temperature: {forecast.soil_temperature_0cm}</ListItemText></ListItem>
            <ListItem><ListItemIcon><AirIcon /></ListItemIcon><ListItemText>Windspeed: {forecast.windspeed_10m}</ListItemText></ListItem>
        </List>
    );
}
 
export default WeatherInLocation;