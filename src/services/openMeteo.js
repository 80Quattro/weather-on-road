import axios from "axios";

class OpenMeteoAPI {

    static async getWeather(coordinates) {

        const url = 'https://api.open-meteo.com/v1/forecast';

        const options = {
            params: {
                latitude: coordinates[0],
                longitude: coordinates[1],
                hourly: 'temperature_2m,precipitation,rain,showers,snowfall,windspeed_10m,soil_temperature_0cm',
                timezone: 'auto'
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

export const getWeather = OpenMeteoAPI.getWeather;

export default OpenMeteoAPI;