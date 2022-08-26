<template>
  <div id="wrapper">
    <div id="message_container"></div>
    <q-page class="row items-center justify-evenly">
      <q-img alt="logo" src="../assets/logo.svg" id="logo" />
      <weather-component />
    </q-page>
  </div>
</template>

<script lang="ts">
import WeatherComponent from 'components/WeatherComponent.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { WeatherComponent },
});
</script>

<style lang="sass" scoped>
@import "../css/_mixin"

#logo
    width: 20rem
    height: auto

    @include noselect

#wrapper
    width: 100%
    height: 100%
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
</style>
