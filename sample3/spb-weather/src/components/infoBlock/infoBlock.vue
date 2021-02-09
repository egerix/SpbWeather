<template>
  <div class="info-block">
    <ul class="weather-info">
      <info-row v-for="param in weatherParams" :key="param.title" :weather-param="param"></info-row>
    </ul>
    <city-info :city-name="this.cityInfo.name"></city-info>
  </div>
</template>
<script>

import weatherService from "@/js/weatherService";
import {hpaToMmHg, kelvinToCelsius} from "@/js/converters";
import CityInfo from "@/components/cityInfo/cityInfo";
import InfoRow from "@/components/infoRow/infoRow";

export default {
  components: {InfoRow, CityInfo},
  props: {
    cityInfo: Object
  },
  data() {
    return {
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
    async updateWeatherInfo() {
      const {temp, feels_like, pressure, humidity} = await weatherService.getWeather(this.cityInfo.id)
      this.weatherParams[0].value = kelvinToCelsius(temp)
      this.weatherParams[1].value = kelvinToCelsius(feels_like)
      this.weatherParams[2].value = hpaToMmHg(pressure)
      this.weatherParams[3].value = humidity
    },
  },
  watch: {
    cityInfo() {
      this.updateWeatherInfo()
    }
  },
  created() {
    this.updateWeatherInfo()
  },
}
</script>
<style scoped>
.info-block {
  flex-grow: 1;
  max-width: 400px;
}
</style>