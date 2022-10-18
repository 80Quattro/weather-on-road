import axios from "axios";

class OpenrouteserviceAPI {

    static async getRoute(coords) {
        
        const url = 'https://api.openrouteservice.org/v2/directions/driving-car/geojson';
        
        const options = {
            method: 'post',
            headers: {
                Authorization: process.env.REACT_APP_OPENROUTESERVICE_API_KEY
            },
            data: { coordinates: coords }
        }

        try {
            const response = await axios(url, options);
            return response.data;
        } catch(error) {
            console.log(error);
        }
        
    }

}

export const getRoute = OpenrouteserviceAPI.getRoute;

export default OpenrouteserviceAPI;