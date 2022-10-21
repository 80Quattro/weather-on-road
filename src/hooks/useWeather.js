import { useState, useEffect } from "react";

import OpenrouteserviceAPI from "../services/openrouteservice";
import OpenMeteoAPI from "../services/openMeteo";
import Route from "../Models/Route";
import Weather from "../Models/Weather";

const useWeather = (coordinates) => {

    const [weather, setWeather] = useState(null);

    useEffect(() => {

        if(coordinates[0][0] !== undefined) {
            setWeather(''); // loading...
            OpenrouteserviceAPI.getRoute( coordinates ).then(response => {
                const route = new Route(response);
                getWeatherOnRoute(route);
            });
        }

    }, [coordinates]);

    const getWeatherOnRoute = (route) => {

        // calculate locations which will be used to check weather
        const stepsCount = Math.floor(route.points.length / 5);
        let steps = [];

        for(let i = 0; i < route.points.length - 1; i += stepsCount) {
            steps.push([route.points[i].coordinates.lat, route.points[i].coordinates.long]);
        }
        steps.push([
            route.points[route.points.length - 1].coordinates.lat, 
            route.points[route.points.length - 1].coordinates.long
        ]);

        const weathers = [];

        OpenMeteoAPI.getWeather(steps).then(responses => {

            const now = (new Date()).getHours();

            responses.forEach(e => {
                const weather = new Weather(e);
                // save weather only in interesting hours - (now)
                weather.forecast = weather.forecast.filter(f => f.date.getHours() === now);
                weathers.push(weather);
            })

            setWeather(weathers);
            
        });

    }

    return weather;

};

export default useWeather