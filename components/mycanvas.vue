<template>
  <v-card class="mx-auto" max-width="600">
    <v-toolbar flat dense>
      <v-toolbar-title>
        <span class="subheading">Canvas</span>
      </v-toolbar-title>
      <v-spacer/>
      <v-btn icon @click.stop="aboutCanvasDialog = true">
        <v-icon>mdi-pen</v-icon>
      </v-btn>
    </v-toolbar>

    <v-dialog
      v-model="aboutCanvasDialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="accent"
          primary-title
        >
          About Canvas
        </v-card-title>

        <v-card-text>
          This is where Mono Lisi happens!
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="aboutCanvasDialog = false"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <p :style="{
          '--ink': '--base',
          '--hasMonocleL': visible1,
          '--hasMonocleR': visible2,
          '--hasMask': visible3,
          '--hasMonopod': visible4,
          '--hasMic': visible5,
          '--hasM16': visible6,
          '--hasMilkBottle': visible0,
          '--hasMonohat': switch7,
          '--hasMoustache': switch8,
          '--hasMonoplane': switch9,
          '--hasMoon': switch10,
          '--hasMarijuana': switch11
          }">
      <monoLisaAvatar/>
    </p>
  </v-card>
</template>

<script>
  import monoLisaAvatar from "~/assets/mono8.svg";

  export default {

    name: "mycanvas",

    components: {
      monoLisaAvatar
    },

    data: () => ({
      aboutCanvasDialog: false,
      activeSwitch1: -1,
      activeSwitch2: -1,
      visible1: "none",
      visible2: "none",
      visible3: "none",
      visible4: "none",
      visible5: "none",
      visible6: "none",
      visible0: "none",
      switch7: "none",
      switch8: "none",
      switch9: "none",
      switch10: "none",
      switch11: "none",
    }),

    computed: {

    },

    methods: {},

    watch: {
    },
  };
</script>

<style type="text/css">

  :root {
    --base: #fff;
    --ink: #000;

    --hasLogo: none;
    --hasMonocleL: none;
    --hasMonocleR: none;
    --hasMilkBottle: none;
    --hasMonopod: none;
    --hasMic: none;
    --hasMoustache: none;
    --hasMonohat: none;
    --hasMoon: none;
    --hasMonoplane: none;
    --hasM16: none;
    --hasMarijuana: none;
  }
</style>
