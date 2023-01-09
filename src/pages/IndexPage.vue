<template>
  <div id="wrapper">
    <div id="message_container"></div>
    <q-page class="row items-center justify-evenly">
      <q-img v-if="winter" alt="logo" src="../assets/winter.svg" id="logo" />
      <q-img v-if="summer" alt="logo" src="../assets/logo.svg" id="logo" />
      <weather-component />
    </q-page>
  </div>
</template>

<script lang="ts">
import WeatherComponent from 'components/WeatherComponent.vue';
import Helper from 'src/classes/helper';
import { TimeMode } from 'src/types/timeMode.type';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { WeatherComponent },

  data() {
    return {
      winter: ref(false),
      summer: ref(false),
    };
  },

  mounted() {
    const mode = Helper.getTimeMode();
    switch (mode) {
      case 'winter':
        this.winter = true;
        this.summer = false;
        this.changeFavicon(mode);
        Helper.changePageTitle('Glühwein Checker');
        break;

      case 'summer':
        this.summer = true;
        this.winter = false;
        this.changeFavicon(mode);
        Helper.changePageTitle('Ice Checker');
        break;

      default:
        break;
    }
    this.decideColorTheme();
  },

  methods: {
    /**
     * Changes the favicon of the page
     * @param {string} mode
     */
    changeFavicon(mode: TimeMode) {
      let src: string;
      let src16: string;
      let src32: string;
      let src96: string;
      let src128: string;

      switch (mode) {
        case 'winter':
          src = '/favicon-winter.ico';
          src16 = '/icons/favicon-16x16-winter.png';
          src32 = '/icons/favicon-32x32-winter.png';
          src96 = '/icons/favicon-96x96-winter.png';
          src128 = '/icons/favicon-128x128-winter.png';
          break;

        case 'summer':
          src = '/favicon.ico';
          src16 = '/icons/favicon-16x16.png';
          src32 = '/icons/favicon-32x32.png';
          src96 = '/icons/favicon-96x96.png';
          src128 = '/icons/favicon-128x128.png';
          break;
      }
      const favicon = <HTMLLinkElement>document.getElementById('favicon');
      const favicon16 = <HTMLLinkElement>document.getElementById('favicon-16');
      const favicon32 = <HTMLLinkElement>document.getElementById('favicon-32');
      const favicon96 = <HTMLLinkElement>document.getElementById('favicon-96');
      const favicon128 = <HTMLLinkElement>(
        document.getElementById('favicon-128')
      );

      favicon.href = src;
      favicon16.href = src16;
      favicon32.href = src32;
      favicon96.href = src96;
      favicon128.href = src128;
    },

    decideColorTheme() {
      const mode = Helper.getTimeMode();
      let body: HTMLBodyElement;
      switch (mode) {
        case 'winter':
          body = document.getElementsByTagName('body')[0];
          body.id = 'winterTime';
          break;

        case 'summer':
          body = document.getElementsByTagName('body')[0];
          body.id = 'summerTime';
          break;

        default:
          break;
      }
    },
  },
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
