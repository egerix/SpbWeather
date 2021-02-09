<template>
  <div class="city-info">
    <a :href="cityInfoUrl" target="_blank" class="md-title">О городе</a>
  </div>
</template>
<script>
import {mapState} from "vuex";

export default {
  computed: {
    ...mapState({
      cityName: state => state.city.cityInfo.name
    }),
    cityInfoUrl: function () {
      return `https://ru.wikipedia.org/wiki/${this.cityName}`
    }
  },
}
</script>
<style scoped>

</style>