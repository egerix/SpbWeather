import "./css/main.css"

import {kelvinToCelsius, hpaToMmHg} from "./js/converters";
import axios from "axios";

const apiKey = "806ffcabb92390f0071e908c61a2724c"
const apiUrl = "http://api.openweathermap.org/data/2.5"

function updateTemperature(cityId) {
    axios.get(`${apiUrl}/weather?id=${cityId}&appid=${apiKey}`)
        .then(function (response) {
            drawInfo(response.data.main)
        })
        .catch(function (err) {
            console.log(err)
        })
}

function updateHeader(cityName){
    document.getElementById("cityName").innerText = cityName
}

function updateLink(cityName) {
    const href = `https://ru.wikipedia.org/wiki/${cityName}`
    document.getElementById("infoLink").setAttribute('href',href);
}

window.citySelected = function citySelected(cityInfo){
    updateTemperature(cityInfo.id)
    updateHeader(cityInfo.name)
    updateLink(cityInfo.name)
}

document.addEventListener("DOMContentLoaded", () => {
    citySelected({id:498817,name:'Санкт-Петербург'})
});

function drawInfo({feels_like, humidity, pressure, temp}) {
    document.getElementById("tempValue").innerText = `${kelvinToCelsius(temp)} C`
    document.getElementById("feelsLikeTempValue").innerText = `${kelvinToCelsius(feels_like)} C`
    document.getElementById("pressure").innerText = `${hpaToMmHg(pressure)} мм.рт.ст`
    document.getElementById("humidity").innerText = `${humidity} %`
}