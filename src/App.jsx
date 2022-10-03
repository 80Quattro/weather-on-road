import React, { Component } from 'react';
import { searchForLocation } from './services/nominatim'
 
class App extends Component {

    componentDidMount() {
        searchForLocation("Sulkowice").then(response => {
            console.log(response.features[0].geometry.coordinates);
        })
    }

    render() { 
        return (
            <h1>Hello World!</h1>
        );
    }
}
 
 export default App;