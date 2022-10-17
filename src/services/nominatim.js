import axios from "axios";

class NominatimAPI {

    static async searchForLocation(location) {

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

    static async findLocationName(coordinates) {
        //https://nominatim.openstreetmap.org/reverse?format=json&lat=48.3&lon=14.279999
        const url = 'https://nominatim.openstreetmap.org/reverse';

        const options = {
            params: {
                lat: coordinates.lat,
                lon: coordinates.long,
                format: 'json'
            }
        }

        try {
            const response = await axios.get(url, options);
            return response.data;
        } catch(error) {
            Promise.reject(error);
            console.log(error);
        }

    }
    
}

export const searchForLocation = NominatimAPI.searchForLocation;
export const findLocationName = NominatimAPI.findLocationName;

export default NominatimAPI;