import React, { useState } from 'react';
import NominatimAPI from './services/nominatim';
import Location from './models/Location';

import usePlace from './hooks/usePlace';
import useWeather from './hooks/useWeather';
 
function App() {

    const [place1Searchtext, setPlace1Searchtext] = useState('');
    const [place2Searchtext, setPlace2Searchtext] = useState('');

    const place1 = usePlace(place1Searchtext);
    const place2 = usePlace(place2Searchtext);

    const [coordinates, setCoordinates] = useState( [[],[]] );
    const weather = useWeather(coordinates);

    const handleGoButtonClick = () => {
        setCoordinates([
            [ place1.coordinates.lat, place1.coordinates.long ],
            [ place2.coordinates.lat, place2.coordinates.long ]
        ]);
    }

    return (
        <React.Fragment>
            <input type='text' name='place1' onChange={(e) => {setPlace1Searchtext(e.target.value)}} />
            <p>{place1.name}</p>
            <input type='text' name='place2' onChange={(e) => {setPlace2Searchtext(e.target.value)}} />
            <p>{place2.name}</p>
            <input type="button" value="Go!" onClick={handleGoButtonClick} />
            <div>{JSON.stringify(weather)}</div>
        </React.Fragment>
    );

}
 
 export default App;