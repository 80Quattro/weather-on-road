import React from 'react';
import useWeatherSummary from '../hooks/useWeatherSummary';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import SevereColdIcon from '@mui/icons-material/SevereCold';
import AirIcon from '@mui/icons-material/Air';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import Typography from '@mui/material/Typography';

const WeatherSummary = ({weather}) => {

    const weatherSummary = useWeatherSummary(weather);

    let display = <></>;

    if(!weatherSummary.isBlackIce && !weatherSummary.isWind && !weatherSummary.isSnow && !weatherSummary.isRain) {
        display = (
            <Alert severity="success">
                <AlertTitle>There are no dangers on your road</AlertTitle>
                Drive safetly!
            </Alert>
        );
    }
    else {
        display = (
            <>
                <Typography variant='boedy1' sx={{fontSize: 20}}>
                    <Typography variant='span' sx={{color: 'warning.main'}}><strong>Be careful! </strong></Typography>
                    <Typography variant='span'>On your road:</Typography>
                </Typography>
                <Box sx={{p:1}}>
                    <Grid container spacing={2}>
                        {weatherSummary.isBlackIce &&
                            <Grid item><Alert icon={<SevereColdIcon />} severity="info" variant="outlined">
                                possible black ice!
                            </Alert></Grid>
                        }
                        {weatherSummary.isWind &&
                            <Grid item><Alert icon={<AirIcon />} severity="info" variant="outlined">
                                strong crosswinds possible (up to {weatherSummary.maxWindspeed}km/h)
                            </Alert></Grid>
                        }
                        {weatherSummary.isSnow &&
                            <Grid item><Alert icon={<AcUnitIcon />} severity="info" variant="outlined">
                                possible snowstorm (snowfall up to {weatherSummary.maxSnow}cm/h)
                            </Alert></Grid>
                        }
                        {weatherSummary.isRain &&
                            <Grid item><Alert icon={<ThunderstormIcon />} severity="info" variant="outlined">
                                possible rain (rainfall up to {weatherSummary.maxRain}mm/h)
                            </Alert></Grid>
                        }
                    </Grid>
                </Box>
            </>
        );
    }

    return (
        <>
            {display}
        </>
     );
}
 
export default WeatherSummary;