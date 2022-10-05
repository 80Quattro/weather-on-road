import axios from "axios";

class OpenrouteserviceAPI {

    static async getRoute(coordinates) {
        
        const url = 'https://api.openrouteservice.org/v2/directions/driving-car/geojson';
        
        const options = {
            method: 'post',
            headers: {
                Authorization: '5b3ce3597851110001cf62489af52dbef08b437e9f65086cd703a8b2'
            },
            data: coordinates
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