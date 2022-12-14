import React, { useState } from 'react';
import NavigationDrawer from './components/NavigationDrawer';
import WeatherInLocationList from './components/WeatherInLocationList';
import Header from './components/Header';

import useWeather from './hooks/useWeather';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
 
function App() {

    const [isNavOpened, setIsNavOpened] = useState(true); // (mobile) menu dafault opened on start
    const [coordinates, setCoordinates] = useState( [[],[]] );

    const weather = useWeather(coordinates);

    const drawerWidth = 300; // width of drawer menu (left side)

    const handleDrawerToggle = () => {
        setIsNavOpened( !isNavOpened );
    };

    // Sumbit of the form in LocationsForm component
    const handleSubmit = (place1, place2) => {
        handleDrawerToggle();
        setCoordinates([
            [ place1.coordinates.lat, place1.coordinates.long ],
            [ place2.coordinates.lat, place2.coordinates.long ]
        ]);
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Header parentCallback={handleDrawerToggle} />
            <NavigationDrawer drawerWidth={drawerWidth} opened={isNavOpened} handleSubmit={handleSubmit} />
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, mt: { xs: 8, sm: 2 }}}
            >
                <WeatherInLocationList weatherList={weather} />
            </Box>
        </Box>
    );

}
 
 export default App;