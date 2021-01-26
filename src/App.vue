<template>
  <div id="app">
    <app-header :city-name="cityInfo.name" @citySelected="citySelected"></app-header>
    <div class="content">
      <div class="content__left">
        <info-block :city-info="cityInfo"></info-block>
      </div>
      <div class="content__right">
        <temperature-chart class="chart" :cityId="cityInfo.id"></temperature-chart>
      </div>
    </div>
  </div>
</template>

<script>
import TemperatureChart from "@/components/chart/TemperatureChart";
import AppHeader from "@/components/AppHeader/AppHeader";
import InfoBlock from "@/components/info-block/InfoBlock";

export default {
  name: 'App',
  components: {
    InfoBlock,
    AppHeader,
    TemperatureChart,
  },
  data() {
    return {
      cityInfo: {
        name: "Санкт-Петербург",
        id: 498817
      }
    }
  },
  methods: {
    citySelected(cityInfo) {
      this.cityInfo = cityInfo
    }
  }
}
</script>

<style src="./css/main.css">
</style>
