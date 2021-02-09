<template>
  <div class="city-info">
    <a :href="cityInfoUrl" target="_blank">О городе</a>
  </div>
</template>
<script>
export default {
  props: {
    cityName: String
  },
  computed: {
    cityInfoUrl: function () {
      return `https://ru.wikipedia.org/wiki/${this.cityName}`
    }
  },
}
</script>
<style scoped>

</style>