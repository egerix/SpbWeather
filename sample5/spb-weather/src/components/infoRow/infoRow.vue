<template>
  <li class="weather-info-row">
    <div class="weather-info-row__title md-title">
      {{ weatherParam.title }}
    </div>
    <div class="weather-info-row__value md-title">
      {{ weatherParam.value }}
    </div>
    <div class="weather-info-row__measure md-title">
      {{ weatherParam.measure }}
    </div>
  </li>
</template>
<script>
export default {
  props: {
    weatherParam: Object
  }
}
</script>
<style scoped>

.weather-info-row {
  display: flex;
  justify-content: stretch;
  margin-bottom: 5px;
}

.weather-info-row__value {
  text-align: right;
  flex-grow: 1;
}

.weather-info-row__measure {
  margin-left: 10px;
  text-align: left;
  width: 50px;
}

</style>