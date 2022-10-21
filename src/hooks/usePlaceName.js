import {useState, useEffect} from 'react';

import NominatimAPI from '../services/nominatim';

const usePlaceName = (coordinates) => {
    
    const [placeName, setPlaceName] = useState('');

    useEffect(() => {
        if(coordinates !== '') {
            setPlaceName(null); // placeName = null - data loading - spinner is shown
            NominatimAPI.findLocationName(coordinates).then(response => {
                // if something went wrong and the place isn't found - create location name only with coordinates
                if(!response) {
                    setPlaceName('lat: ' + coordinates.lat + ' long: ' + coordinates.long);
                    return;
                }
                // build a place name from existing data (not every address field (like city, village, county) is available)
                let name = '';
                if(response.address.city) {
                    name = response.address.city
                }
                else if(response.address.village) {
                    name = response.address.village;
                }
                if(response.address.county) {
                    if(name !== '') {
                        name += ', ';
                    }
                    name += response.address.county;
                }
                if(name === '') {
                    name = response.display_name;
                }
                setPlaceName(name);
            });
        }
    }, [coordinates]);

    return placeName;

}
 
export default usePlaceName;