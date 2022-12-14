import React, { useState } from 'react';

import usePlace from '../hooks/usePlace';

import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import PlaceInfo from './PlaceInfo';

const LocationsForm = ({parentCallback}) => {

    const [place1Searchtext, setPlace1Searchtext] = useState('');
    const [place2Searchtext, setPlace2Searchtext] = useState('');

    const place1 = usePlace(place1Searchtext);
    const place2 = usePlace(place2Searchtext);

    const handleSubmit = (e) => {
        parentCallback(place1, place2);
        e.preventDefault();
    };

    return ( 
        <Container sx={{mt: 5}}>
            <form onSubmit={handleSubmit}>
                <TextField sx={{mb: 1}} id="place1" label="Start point" variant="outlined" fullWidth value={place1Searchtext} onChange={(e) => {setPlace1Searchtext(e.target.value)}} />
                <PlaceInfo sx={{my: 1}} place={place1} />
                <TextField sx={{my: 1}} id="place2" label="End point" variant="outlined" fullWidth value={place2Searchtext} onChange={(e) => {setPlace2Searchtext(e.target.value)}} />
                <PlaceInfo sx={{my: 1}} place={place2} />
                <Button sx={{my: 1}} variant="contained" color="primary" type="submit" fullWidth>
                    Go!
                </Button>
            </form>
        </Container>
        
    );
}
 
export default LocationsForm;