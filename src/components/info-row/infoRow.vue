<template>
  <li class="info-row">
    <div class="info-row__title md-title">
      {{ title }}
    </div>
    <div class="info-row__value md-title">
      {{ value }}
    </div>
    <div class="info-row__measure md-title">
      {{ measure }}
    </div>
  </li>
</template>

<script>
export default {
  name: 'InfoRow',
  props: {
    title: String,
    value: String,
    measure: String
  }
}
</script>

<style scoped>
.info-row {
  display: flex;
  justify-content: stretch;
  margin-bottom: 5px;
}
.info-row__value {
  text-align: right;
  flex-grow: 1;
}
.info-row__measure {
  margin-left: 10px;
  text-align: left;
  width: 50px;
}
</style>
