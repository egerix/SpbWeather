<template>
  <div>
    <a :href="url" target="_blank" class="md-title">О городе</a>
  </div>
</template>

<script>
export default {
  name: 'CityInfo',
  props: {
    cityName: String
  },
  computed: {
    url: function (){
      return `https://ru.wikipedia.org/wiki/${this.cityName}`
    }
  },
}
</script>
