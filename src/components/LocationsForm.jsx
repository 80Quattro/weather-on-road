import React, { useState } from 'react';

import usePlace from '../hooks/usePlace';

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
        <form onSubmit={handleSubmit}>
            <input type='text' name='place1' value={place1Searchtext} onChange={(e) => {setPlace1Searchtext(e.target.value)}} />
            <p>{place1.name}</p>
            <input type='text' name='place2' value={place2Searchtext} onChange={(e) => {setPlace2Searchtext(e.target.value)}} />
            <p>{place2.name}</p>
            <input type="submit" value="Go!" />
        </form>
    );
}
 
export default LocationsForm;