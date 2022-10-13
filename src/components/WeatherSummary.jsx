import React from 'react';
import useWeatherSummary from '../hooks/useWeatherSummary';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import SevereColdIcon from '@mui/icons-material/SevereCold';
import AirIcon from '@mui/icons-material/Air';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const WeatherSummary = ({weather}) => {

    const weatherSummary = useWeatherSummary(weather);

    return ( 
        <Grid container spacing={2}>
            {//weatherSummary.isBlackIce &&
                <Grid item><Alert icon={<SevereColdIcon />} severity="warning" variant="outlined">
                    possible black ice!
                </Alert></Grid>
            }
            {//weatherSummary.isWind &&
                <Grid item><Alert icon={<AirIcon />} severity="warning" variant="outlined">
                    strong crosswinds possible (up to {weatherSummary.maxWindspeed}km/h)
                </Alert></Grid>
            }
            {//weatherSummary.isSnow &&
                <Grid item><Alert icon={<AcUnitIcon />} severity="warning" variant="outlined">
                    possible snowstorm (snowfall up to {weatherSummary.maxSnow}(UNIT!))
                </Alert></Grid>
            }
            {//weatherSummary.isRain &&
                <Grid item><Alert icon={<ThunderstormIcon />} severity="warning" variant="outlined">
                    possible rain (rainfall up to {weatherSummary.maxRain}(UNIT!))
                </Alert></Grid>
            }
        </Grid>
     );
}
 
export default WeatherSummary;