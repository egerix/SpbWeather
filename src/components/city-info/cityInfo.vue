<template>
  <div>
    <a :href="url" target="_blank" class="md-title">О городе</a>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: 'CityInfo',
  computed: {
    ...mapState({
      cityName: state => state.city.cityInfo.name
    }),
    url: function () {
      return `https://ru.wikipedia.org/wiki/${this.cityName}`
    }
  },
}
</script>
