import React, { useState } from 'react';
import NavigationDrawer from '../components/NavigationDrawer';

import useWeather from '../hooks/useWeather';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import WeatherInLocationList from '../components/WeatherInLocationList';
 
function Main() {

    const [isNavOpened, setIsNavOpened] = useState(false);
    const [coordinates, setCoordinates] = useState( [[],[]] );

    const weather = useWeather(coordinates);

    const handleDrawerToggle = () => {
        setIsNavOpened( !isNavOpened );
    };

    // Sumbit of the form in LocationsForm component
    const handleSubmit = (place1, place2) => {
        setCoordinates([
            [ place1.coordinates.lat, place1.coordinates.long ],
            [ place2.coordinates.lat, place2.coordinates.long ]
        ]);
    }

    return (
        <React.Fragment>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <NavigationDrawer opened={isNavOpened} handleSubmit={handleSubmit} />
            <WeatherInLocationList weatherList={weather} />
        </React.Fragment>
    );

}
 
export default Main;