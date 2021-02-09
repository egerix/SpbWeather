<template>
  <div id="app">
    <app-header></app-header>
    <div class="content">
      <info-block></info-block>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/appHeader/appHeader";
import InfoBlock from "@/components/infoBlock/infoBlock";

export default {
  name: 'App',
  components: {InfoBlock, AppHeader}
}
</script>

<style src="./css/main.css">
</style>
