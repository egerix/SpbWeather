import axios from "axios";

const apiKey = "806ffcabb92390f0071e908c61a2724c"
const apiUrl = "http://api.openweathermap.org/data/2.5"


export default {
    getForecast: async function getForecast(cityId) {
        const {data} = await axios.get(`${apiUrl}/forecast?id=${cityId}&appid=${apiKey}`);
        return data.list
    },
    getWeather: async function getWeather(cityId) {
        const {data} = await axios.get(`${apiUrl}/weather?id=${cityId}&appid=${apiKey}`)
        return data.main
    }
}
