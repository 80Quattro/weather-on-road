import React, { Component } from 'react';
import NominatimAPI from './services/nominatim';
import OpenrouteserviceAPI from './services/openrouteservice';
 
class App extends Component {

    state = {
        placeName: 'placeText'
    };

    handleInputChange = (e) => {
        const place = e.target.value;
        NominatimAPI.searchForLocation(place).then(response => {
            const display_name = response.features[0]?.properties.display_name;
            this.setState({ placeName: display_name });
        })
    }

    componentDidMount() {
        OpenrouteserviceAPI.getRoute({ coordinates: [[8.681495,49.41461],[8.686507,49.41943]] }).then(response => {
            console.log(response);
        });
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