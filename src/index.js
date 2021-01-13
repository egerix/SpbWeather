import "./css/main.css"

import {kelvinToCelsius, hpaToMmHg} from "./js/converters";
import axios from "axios";
import Chart from  "chart.js";

const apiKey = "3114ef266454173d76a765b67d2f18b9"
const spbId = 498817
const apiUrl = "http://api.openweathermap.org/data/2.5"

axios.get(`${apiUrl}/forecast?id=${spbId}&appid=${apiKey}`)
    .then(function (response) {
        drawChart(response.data.list)
    })
    .catch(function (err) {
        console.log(err)
    })

axios.get(`${apiUrl}/weather?id=${spbId}&appid=${apiKey}`)
    .then(function (response) {
        drawInfo(response.data.main)
    })
    .catch(function (err) {
        console.log(err)
    })

const ctx = document.getElementById('chart-container').getContext('2d');
const forecastChart = new Chart(ctx, {
    type: 'line',
    options: {
        responsive: false,
        legend: {
            display: false
        },
        title: {
            display: false,
        },
        scales: {
            xAxes: [{
                ticks: {
                    callback: function (dataLabel, index) {
                        return index % 3 === 0 ? dataLabel : '';
                    }
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

function drawChart(forecast) {
    const temperatures = forecast.map((weather) => {
        return kelvinToCelsius(weather.main.temp)
    })

    const chartData = forecastChart.data

    chartData.labels = forecast.map((weather) => {
        return weather.dt_txt
    })
    chartData.datasets.push({
        fill: false,
        borderColor: "rgb(6,48,177)",
        lineTension: 0.1,
        data: temperatures
    })
    forecastChart.update();
}

function drawInfo({feels_like, humidity, pressure, temp}) {
    document.getElementById("temp").innerText = `${kelvinToCelsius(temp)} C`
    document.getElementById("feels_like").innerText = `${kelvinToCelsius(feels_like)} C`
    document.getElementById("pressure").innerText = `${hpaToMmHg(pressure)} мм.рт.ст`
    document.getElementById("humidity").innerText = `${humidity} %`
}