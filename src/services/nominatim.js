const axios = require('axios');

export async function searchForLocation(location) {

    const url = 'https://nominatim.openstreetmap.org/search';
    
    const options = {
        params: {
            q: location,
            format: 'geojson'
        }
    }

    try {
        const response = await axios.get(url, options);
        return response.data;
    } catch(error) {
        console.log(error);
    }
    
}