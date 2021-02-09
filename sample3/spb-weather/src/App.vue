<template>
  <div id="app">
    <app-header :city-name="cityInfo.name" @citySelected="citySelected"></app-header>
    <div class="content">
      <info-block :city-info="cityInfo"></info-block>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/appHeader/appHeader";
import InfoBlock from "@/components/infoBlock/infoBlock";

export default {
  name: 'App',
  components: {InfoBlock, AppHeader},
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
      console.log(`Выбрали город ${cityInfo.name}`)
      this.cityInfo = cityInfo
    },
  },
}
</script>

<style src="./css/main.css">
</style>
