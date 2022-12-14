import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const PlaceInfo = ({place, sx}) => {

    // Data loading...
    if(place === null) {
        return( <Alert sx={sx} icon={<CircularProgress size={20}/>} severity="info" variant="outlined" color="primary">Loading...</Alert> );
    }
    // No data to show
    else if(place === '') {
        return;
    }
    // If found location is correct
    else if(place.name != null && place.coordinates !== null) {
        return( <Alert sx={sx} variant="outlined" severity="success">{place.name}</Alert> );
    }
    else {
        return( <Alert sx={sx} variant="outlined" severity="error">Cannot find location</Alert> );
    }

}
 
export default PlaceInfo;