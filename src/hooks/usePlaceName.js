import {useState, useEffect} from 'react';

import NominatimAPI from '../services/nominatim';

const usePlaceName = (coordinates) => {
    
    const [placeName, setPlaceName] = useState('');

    useEffect(() => {
        if(coordinates !== '') {
            setPlaceName(null);
            NominatimAPI.findLocationName(coordinates).then(response => {
                if(!response) {
                    setPlaceName('lat: ' + coordinates.lat + ' long: ' + coordinates.long);
                    return;
                }
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