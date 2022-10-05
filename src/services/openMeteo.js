import axios from "axios";

class OpenMeteoAPI {

    static async getWeather(coordinates) {

        // get today's date and format it in proper way
        const currDate = new Date();
        let currDateString = currDate.getFullYear()+'-'+(currDate.getMonth()+1)+'-';
        currDateString += currDate.getDate() < 10 ? '0' + currDate.getDate() : currDate.getDate();

        const url = 'https://api.open-meteo.com/v1/forecast';

        const options = {
            params: {
                latitude: coordinates[0],
                longitude: coordinates[1],
                hourly: 'temperature_2m,precipitation,rain,showers,snowfall,windspeed_10m,soil_temperature_0cm',
                timezone: 'auto',
                start_date: currDateString,
                end_date: currDateString
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