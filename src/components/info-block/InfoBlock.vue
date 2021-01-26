<template>
  <div>
    <ul class="info-block">
      <info-row v-for="param in weather"
                :key="param.title"
                :title="param.title"
                :value="param.value"
                :measure="param.measure"></info-row>
      <city-info :city-name="cityInfo.name"></city-info>
    </ul>
  </div>
</template>

<script>
import CityInfo from "@/components/city-info/CityInfo";
import InfoRow from "@/components/info-row/InfoRow";
import weatherService from "@/js/weatherService";
import {hpaToMmHg, kelvinToCelsius} from "@/js/converters";

export default {
  name: 'InfoBlock',
  components: {InfoRow, CityInfo},
  props: {
    cityInfo: Object
  },
  data() {
    return {
      weather: [
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
      this.weather[0].value = kelvinToCelsius(temp)
      this.weather[1].value = kelvinToCelsius(feels_like)
      this.weather[2].value = hpaToMmHg(pressure)
      this.weather[3].value = humidity
    }
  },
  watch: {
    cityInfo() {
      this.updateWeatherInfo()
    }
  },
  mounted() {
    this.updateWeatherInfo()
  }
}
</script>

<style scoped>

</style>
