import React, { useState } from 'react';
import NavigationDrawer from '../components/NavigationDrawer';

import useWeather from '../hooks/useWeather';

import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import WeatherInLocationList from '../components/WeatherInLocationList';
import Header from '../components/Header';
import Container from '@mui/material/Container';
 
function Main() {

    const [isNavOpened, setIsNavOpened] = useState(false);
    const [coordinates, setCoordinates] = useState( [[],[]] );

    const weather = useWeather(coordinates);

    const drawerWidth = 300;

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
            <CssBaseline />
            <Header parentCallback={handleDrawerToggle} />
            <NavigationDrawer drawerWidth={drawerWidth} opened={isNavOpened} handleSubmit={handleSubmit} />
            <Container>
                <WeatherInLocationList weatherList={weather} />
            </Container>
        </React.Fragment>
    );

}
 
export default Main;