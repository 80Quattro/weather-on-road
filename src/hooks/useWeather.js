import { useState, useEffect } from "react";

import OpenrouteserviceAPI from "../services/openrouteservice";
import OpenMeteoAPI from "../services/openMeteo";
import Route from "../models/Route";
import Weather from "../models/Weather";

const useWeather = (coordinates) => {

    const [weather, setWeather] = useState(null);

    useEffect(() => {

        if(coordinates[0][0] !== undefined) {
            OpenrouteserviceAPI.getRoute( coordinates ).then(response => {
                const route = new Route(response);
                getWeatherOnRoute(route);
            });
        }

    }, coordinates);

    const getWeatherOnRoute = (route) => {

        const stepsCount = Math.floor(route.points.length / 5);
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

            setWeather(weathers);
            
        });

    }

    return weather;

};

export default useWeather