import React, { Component, useState, useEffect, useRef } from 'react';
import NominatimAPI from './services/nominatim';
import OpenrouteserviceAPI from './services/openrouteservice';
import OpenMeteoAPI from './services/openMeteo';
import Location from './Models/Location';
import Route from './Models/Route';
import Weather from './Models/Weather';
 
function App() {

    const [place1Name, setPlace1Name] = useState('');
    const [place2Name, setPlace2Name] = useState('');

    const place1 = useRef(null);
    const place2 = useRef(null);

    const handleInputChange = (e) => {
        const place = e.target.value;
        NominatimAPI.searchForLocation(place).then(response => {

            const locations = response.features.map(d => new Location(d));

            if(locations.length > 0) {
                
                const { name } = locations[0];
                if(e.target.name === 'place1') {
                    place1.current = locations[0];
                    setPlace1Name(name);
                }
                else {
                    place2.current = locations[0];
                    setPlace2Name(name);
                }
            }

        })
    }

    const handleGoButtonClick = () => {

        const coordinates = [
            [ place1.current.coordinates.lat, place1.current.coordinates.long ],
            [ place2.current.coordinates.lat, place2.current.coordinates.long ]
        ];

        OpenrouteserviceAPI.getRoute( coordinates ).then(response => {
            const route = new Route(response);
            console.log(route);
            getWeatherOnRoute(route);
        });
    }

    const getWeatherOnRoute = (route) => {

        const stepsCount = Math.floor(route.points.length / 3);
        let steps = new Array();

        for(let i = 0; i < route.points.length - 1; i += stepsCount) {
            steps.push([route.points[i].coordinates.lat, route.points[i].coordinates.long]);
        }
        steps.push([
            route.points[route.points.length - 1].coordinates.lat, 
            route.points[route.points.length - 1].coordinates.long
        ]);

        const weathers = new Array();

        OpenMeteoAPI.getWeather(steps).then(responses => {

            responses.forEach(e => {
                weathers.push(new Weather(e));
            })

            console.log(weathers);
            
        });

    }

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