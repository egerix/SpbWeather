<template>
  <div id="app">
    <div class="app-header">
      <div class="app-header__title" ref="cityName">{{ cityInfo.name }}</div>
      <div class="app-header__buttons">
        <button @click="citySelected({id:498817,name:'Санкт-Петербург'})">Санкт-Петербург</button>
        <button @click="citySelected({id:511196,name:'Пермь'})">Пермь</button>
        <button @click="citySelected({id:484907,name:'Таганрог'})">Таганрог</button>
        <button @click="citySelected({id:2123628,name:'Магадан'})">Магадан</button>
      </div>
    </div>
    <div class="content">
      <div class="info-block">
        <ul class="weather-info">
          <li v-for="param in weatherParams" :key="param.title" class="weather-info-row">
            <div class="weather-info-row__title md-title">
              {{ param.title }}
            </div>
            <div class="weather-info-row__value md-title">
              {{ param.value }}
            </div>
            <div class="weather-info-row__measure md-title">
              {{ param.measure }}
            </div>
          </li>
        </ul>
        <div class="city-info">
          <a :href="cityInfoUrl" target="_blank">О городе</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import weatherService from "./js/weatherService";
import {hpaToMmHg, kelvinToCelsius} from "./js/converters";
import _ from "lodash"

export default {
  name: 'App',
  data() {
    return {
      cityInfo: {
        name: "Санкт-Петербург",
        id: 498817
      },
      weatherParams: [
        {
          title: "Температура",
          value: "-",
          measure: "°С"
        },
        {
          title: "Ощущается как",
          value: "-",
          measure: "°С"
        },
        {
          title: "Давление",
          value: "-",
          measure: "мм.рт.ст"
        },
        {
          title: "Влажность",
          value: "-",
          measure: "%"
        },
      ],
    }
  },
  methods: {
    citySelected(cityInfo) {
      console.log(`Выбрали город ${cityInfo.name}`)
      this.cityInfo = cityInfo
      this.updateWeatherInfo()
    },
    async updateWeatherInfo() {
      const {temp, feels_like, pressure, humidity} = await weatherService.getWeather(this.cityInfo.id)
      this.weatherParams[0].value = kelvinToCelsius(temp)
      this.weatherParams[1].value = kelvinToCelsius(feels_like)
      this.weatherParams[2].value = hpaToMmHg(pressure)
      this.weatherParams[3].value = humidity
    },
  },
  created() {
    this.updateWeatherInfo()
  },
  mounted() {
    this.$refs.cityName.style.color = _.sample(['red', 'blue', 'gray'])
  },
  computed: {
    cityInfoUrl: function () {
      return `https://ru.wikipedia.org/wiki/${this.cityInfo.name}`
    }
  },
}
</script>

<style src="./css/main.css">
</style>
