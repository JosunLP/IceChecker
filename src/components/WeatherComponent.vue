<template>
  <div id="weather_app">
    <div id="headline">
      <h1>Ice Checker</h1>
      <h2>Ist es warm genug, für ein Eis für alle?</h2>
      <h3>Aktuelle Temperatur: {{ temperature }} {{ system }}</h3>
      <div id="config" class="row justify-evenly">
        <q-btn class="btn-control" @click="getCoordinates()">Wo bin ich?</q-btn>
        <div id="coords" class="row justify-evenly">
          <q-input v-model="coordinates.lat" readonly />
          <q-input v-model="coordinates.lng" readonly />
        </div>
      </div>
      <div id="controlls" class="row justify-evenly">
        <q-btn v-if="appRunning" @click="stopApp()" color="orange"
          >App Stoppen</q-btn
        >
        <q-btn v-else color="green" @click="startApp()">App Starten</q-btn>
        <q-btn @click="resetSession()" color="red">App zurücksetzen</q-btn>
      </div>
    </div>
    <ice-popup-component v-if="iceTime" :iceTime="iceTime" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { LocationController } from 'src/classes/locationController';
import { Session } from 'src/classes/sessionHandler';
import Message from 'src/classes/messageHandler';
import { App } from 'src/app';
import IcePopupComponent from './IcePopupComponent.vue';
import { Config } from 'src/models/config';
import { WeatherController } from 'src/classes/weatherController';
import { Helper } from 'src/classes/helper';

const lc = new LocationController();
const app = App.getInstance();

export default defineComponent({
  name: 'ExampleComponent',
  components: {
    IcePopupComponent,
  },

  data() {
    return {
      coordinates: {
        lat: ref(0),
        lng: ref(0),
      },
      appRunning: ref(app.active),
      iceTime: ref(false),
      temperature: ref(0),
      system: ref(''),
    };
  },

  methods: {
    async getCoordinates() {
      Session.reloadSession();
      let session = Session.getInstance();
      let msg = new Message();
      let location = {
        coords: {
          latitude: 0,
          longitude: 0,
        },
      };

      try {
        location = await lc.getCurrentLocation();
      } catch (error) {
        location.coords = {
          latitude: 0,
          longitude: 0,
        };
        return;
      }

      this.coordinates.lat = location.coords.latitude;
      this.coordinates.lng = location.coords.longitude;
      session.coordinates.latitude = location.coords.latitude;
      session.coordinates.longitude = location.coords.longitude;
      Session.save();
      msg.success('Koordinaten erfolgreich geladen');
    },

    decideSystem() {
      if (Config.apiUnits === 'metric') {
        this.system = 'C';
      } else {
        this.system = 'F';
      }
    },

    async setTemperature() {
      while (true) {
        const weather = WeatherController.getInstance();
        this.temperature = weather.temp;
        await Helper.sleep(1000);
      }
    },

    setNewEvent() {
      document.addEventListener('fireworks', () => {
        this.iceTime = true;
      });
    },

    startApp() {
      if (this.coordinates.lat === 0 || this.coordinates.lng === 0) {
        let msg = new Message();
        msg.error('Bitte Koordinaten eingeben');
        return;
      }
      const app = App.getInstance();
      this.appRunning = true;
      app.start();
    },

    stopApp() {
      const app = App.getInstance();
      this.appRunning = false;
      app.stop();
    },

    resetSession() {
      Session.resetSession();
    },
  },

  mounted() {
    Session.reloadSession();
    let session = Session.getInstance();
    this.coordinates.lat = session.coordinates.latitude;
    this.coordinates.lng = session.coordinates.longitude;
    this.setNewEvent();
    this.decideSystem();
    this.setTemperature();
  },
});
</script>

<style lang="sass">
@import "../css/color"
@import "../css/mixin"
@import "../css/font"
#weather_app
  padding: 20px
  margin-bottom: 20px
  min-width: 40rem
  font-family: Quicksand, sans-serif
  text-align: center

  #headline
    margin-bottom: 20px
    h1
      font-size: 2rem
      font-weight: bold
      @include noselect
    h2
      font-size: 1.5rem
      font-weight: bold
      @include noselect
    color: $main-color
    h3
      font-size: 1.5rem
      font-weight: bold
      @include noselect

  #controlls
    margin-top: 2rem
</style>
