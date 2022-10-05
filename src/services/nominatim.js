import axios from "axios";

class NominatimAPI {

    //export async function searchForLocation(location) {
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
    
}

export const searchForLocation = NominatimAPI.searchForLocation;

export default NominatimAPI;