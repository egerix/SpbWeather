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
export default {
  name: 'AppHeader',
  props: {
    cityName: String
  },
  methods: {
    citySelected(id, name) {
      this.$emit('citySelected', {id, name})
    }
  }
}
</script>

<style src="./AppHeader.css" scoped>
</style>