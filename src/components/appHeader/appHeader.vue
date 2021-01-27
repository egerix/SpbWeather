<template>
  <div class="app-header">
    <div class="app-header__title md-display-2">{{ cityName }}</div>
    <div class="app-header__buttons">
      <md-button class="md-raised" @click="citySelected(498817,'Санкт-Петербург')">Санкт-Петербург</md-button>
      <md-button class="md-raised" @click="citySelected(511196,'Пермь')">Пермь</md-button>
      <md-button class="md-raised" @click="citySelected(484907,'Таганрог')">Таганрог</md-button>
      <md-button class="md-raised" @click="citySelected(2123628,'Магадан')">Магадан</md-button>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'AppHeader',
  computed: {
    ...mapState({
      cityName: state => state.city.cityInfo.name
    }),
  },
  methods: {
    ...mapMutations(["changeCityInfo"]),
    citySelected(id, name) {
      this.changeCityInfo({id, name})
    }
  }
}
</script>

<style src="./appHeader.css" scoped>
</style>