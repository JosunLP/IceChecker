<template>
  <q-dialog
    v-model="chaiTimeTrigger"
    id="modalDialog"
    persistent
  >
    <q-card>
      <q-card-section class="row items-center">
        <h2 class="q-ml-sm">{{ notificationText }}</h2>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn
          flat
          label="Schließen und Glühwein hohlen!"
          color="blue"
          v-close-popup
        ></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import Config from 'src/models/config';
import { ref } from 'vue';

export default {
  name: 'WinterPopupComponent',

  props: {
    chaiTime: {
      type: Boolean,
      default: false,
    },
  },

  data(props: { chaiTime: boolean }) {
    return {
      chaiTimeTrigger: ref(props.chaiTime),
      notificationText: ref(Config.notificationTextWinter),
    };
  },
};
</script>

<style lang="sass">
@import "../css/_mixin"

#modalDialog
  @include noselect
  text-align: center
</style>
