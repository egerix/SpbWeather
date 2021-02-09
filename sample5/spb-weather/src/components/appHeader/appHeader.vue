<template>
  <div class="app-header">
    <div class="app-header__title md-display-2" ref="cityName">{{ cityName }}</div>
    <div class="app-header__buttons">
      <md-button class="md-raised"  @click="citySelected({id:498817,name:'Санкт-Петербург'})">Санкт-Петербург</md-button>
      <md-button class="md-raised" @click="citySelected({id:511196,name:'Пермь'})">Пермь</md-button>
      <md-button class="md-raised" @click="citySelected({id:484907,name:'Таганрог'})">Таганрог</md-button>
      <md-button class="md-raised" @click="citySelected({id:2123628,name:'Магадан'})">Магадан</md-button>
    </div>
  </div>
</template>
<script>
import _ from "lodash";

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
    citySelected(cityInfo) {
      this.changeCityInfo(cityInfo)
    }
  },
  mounted() {
    this.$refs.cityName.style.color = _.sample(['red', 'blue', 'gray'])
  },
}
</script>
<style src="./appHeader.css" scoped>

</style>