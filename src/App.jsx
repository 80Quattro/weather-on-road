import React, { Component } from 'react';
import NominatimAPI from './services/nominatim';
import OpenrouteserviceAPI from './services/openrouteservice';
import OpenMeteoAPI from './services/openMeteo';
import Location from './Models/Location';
import Route from './Models/Route';
import Weather from './Models/Weather';
 
class App extends Component {

    state = {
        placeName: 'placeText'
    };

    handleInputChange = (e) => {
        const place = e.target.value;
        NominatimAPI.searchForLocation(place).then(response => {
            const locations = response.features.map(d => new Location(d));
            console.log(locations);
            //const display_name = response.features[0]?.properties.display_name;
            const { name } = locations[0];
            this.setState({ placeName: name });
        })
    }

    componentDidMount() {
        /*OpenrouteserviceAPI.getRoute({ coordinates: [[8.681495,49.41461],[8.686507,49.41943]] }).then(response => {
            const route = new Route(response);
            console.log(response);
            console.log(route);
        });*/
        OpenMeteoAPI.getWeather([8.681495,49.41461]).then(response => {
            const weather = new Weather(response);
            console.log(response);
            console.log(weather);
        })
    }

    render() { 
        return (
            <React.Fragment>
                <input type='text' onChange={this.handleInputChange} />
                <p>{this.state.placeName}</p>
            </React.Fragment>
        );
    }
}
 
 export default App;