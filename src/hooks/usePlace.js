import { useState, useEffect } from "react";

import NominatimAPI from "../services/nominatim";
import Location from "../Models/Location";

const usePlace = (placeSearchText) => {

    const [place, setPlace] = useState('');

    useEffect(() => {

        if(placeSearchText !== '') {
            setPlace(null);
            NominatimAPI.searchForLocation(placeSearchText).then(response => {
                if(response.features.length > 0) {
                    setPlace( new Location(response.features[0]) );
                }
            });
        }

    }, [placeSearchText]);

    return place;

}

export default usePlace;