import React, { Component, useState, useEffect } from 'react';
import NominatimAPI from './services/nominatim';
import OpenrouteserviceAPI from './services/openrouteservice';
import OpenMeteoAPI from './services/openMeteo';
import Location from './Models/Location';
import Route from './Models/Route';
import Weather from './Models/Weather';
 
function App() {

    const [place1Name, setPlace1Name] = useState('');
    const [place2Name, setPlace2Name] = useState('');

    let place1 = null, place2 = null;


    const handleInputChange = (e) => {
        const place = e.target.value;
        NominatimAPI.searchForLocation(place).then(response => {

            const locations = response.features.map(d => new Location(d));

            if(locations.length > 0) {
                
                const { name } = locations[0];
                if(e.target.name === 'place1') {
                    place1 = locations[0];
                    setPlace1Name(name);
                }
                else {
                    place2 = locations[0];
                    setPlace2Name(name);
                }
            }

        })
    }

    const handleGoButtonClick = () => {
        console.log(place1);
        OpenrouteserviceAPI.getRoute({ coordinates: [[8.681495,49.41461],[8.686507,49.41943]] }).then(response => {
            const route = new Route(response);
            //console.log(response);
            //console.log(route);
        });
    }

    useEffect(() => {
        /*OpenrouteserviceAPI.getRoute({ coordinates: [[8.681495,49.41461],[8.686507,49.41943]] }).then(response => {
            const route = new Route(response);
            console.log(response);
            console.log(route);
        });*/
        /*OpenMeteoAPI.getWeather([8.681495,49.41461]).then(response => {
            const weather = new Weather(response);
            console.log(response);
            console.log(weather);
        })*/
    }, []);

    return (
        <React.Fragment>
            <input type='text' name='place1' onChange={handleInputChange} />
            <p>{place1Name}</p>
            <input type='text' name='place2' onChange={handleInputChange} />
            <p>{place2Name}</p>
            <input type="button" value="Go!" onClick={handleGoButtonClick} />
        </React.Fragment>
    );

}
 
 export default App;