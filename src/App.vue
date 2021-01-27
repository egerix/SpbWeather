<template>
  <div id="app">
    <app-header></app-header>
    <div class="content">
      <div class="content__left">
        <info-block></info-block>
      </div>
      <div class="content__right">
        <temperature-chart class="chart"></temperature-chart>
      </div>
    </div>
  </div>
</template>

<script>
import TemperatureChart from "@/components/chart/temperatureChart";
import AppHeader from "@/components/appHeader/appHeader";
import InfoBlock from "@/components/info-block/infoBlock";

export default {
  name: 'App',
  components: {
    InfoBlock,
    AppHeader,
    TemperatureChart,
  }
}
</script>

<style src="./css/main.css">
</style>
