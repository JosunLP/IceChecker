<template>
  <q-dialog
    v-model="iceTimeTrigger"
    id="modalDialog"
    @load="fireWork()"
    persistent
  >
    <q-card>
      <q-card-section class="row items-center">
        <h2 class="q-ml-sm">{{ notificationText }}</h2>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn
          flat
          label="Schließen und Eis hohlen!"
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
  name: 'IcePopupComponent',

  props: {
    iceTime: {
      type: Boolean,
      default: false,
    },
  },

  data(props: { iceTime: boolean }) {
    return {
      iceTimeTrigger: ref(props.iceTime),
      notificationText: ref(Config.notificationText),
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
