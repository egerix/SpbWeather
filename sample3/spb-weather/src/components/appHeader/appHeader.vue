<template>
  <div class="app-header">
    <div class="app-header__title" ref="cityName">{{ cityName }}</div>
    <div class="app-header__buttons">
      <button @click="citySelected({id:498817,name:'Санкт-Петербург'})">Санкт-Петербург</button>
      <button @click="citySelected({id:511196,name:'Пермь'})">Пермь</button>
      <button @click="citySelected({id:484907,name:'Таганрог'})">Таганрог</button>
      <button @click="citySelected({id:2123628,name:'Магадан'})">Магадан</button>
    </div>
  </div>
</template>
<script>
import _ from "lodash";

export default {
  props: {
    cityName: String
  },
  methods: {
    citySelected(cityInfo) {
      this.$emit('citySelected', cityInfo)
    }
  },
  mounted() {
    this.$refs.cityName.style.color = _.sample(['red', 'blue', 'gray'])
  },
}
</script>
<style src="./appHeader.css" scoped>

</style>