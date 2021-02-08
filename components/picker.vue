<template>
  <v-card class="mx-auto" max-width="600">
    <v-toolbar flat dense>
      <v-toolbar-title>
        <span class="subheading">Picker</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon @click.stop="aboutPickerDialog = true">
        <v-icon>mdi-guitar-pick</v-icon>
      </v-btn>

    </v-toolbar>

    <v-dialog
      v-model="aboutPickerDialog"
      width="500"
    >
      <v-card>
        <v-card-title
          class="accent"
          primary-title
        >
          About Picker
        </v-card-title>

        <v-card-text>
          Please select the add-ons to your Mono Lisa. Some of them overlap, however, we have made sure that you will
          make the right choice every time.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="aboutPickerDialog = false"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <v-card-text>
      <v-container fluid>
        <v-row
          justify="center"
        >
          <v-col class="px-0">
            <v-switch v-model="switch1" label="Monocle Right" color="yellow" hide-details>Fade Transition</v-switch>
            <v-switch v-model="switch2" label="Monocle Left" color="yellow" hide-details>Fade Transition</v-switch>
            <v-switch v-model="switch3" label="Mask" color="yellow" hide-details>Fade Transition</v-switch>
          </v-col>
          <v-col class="px-1">
            <v-switch v-model="switch4" label="Monopod" color="light-green" hide-details></v-switch>
            <v-switch v-model="switch5" label="Mic" color="light-green" hide-details></v-switch>
            <v-switch v-model="switch6" label="Machine Gun" color="light-green" hide-details></v-switch>
            <v-switch v-model="switch0" label="Milk Bottle" color="light-green" hide-details></v-switch>
          </v-col>

          <v-col class="px-0">
            <v-switch
              v-model="switch7"
              label="Monogram Hat"
              color="orange"
              false-value="none"
              true-value="one"
              hide-details
            ></v-switch>

            <v-switch
              v-model="switch8"
              label="Moustache"
              color="lime"
              false-value="none"
              true-value="one"
              hide-details
            ></v-switch>

            <v-switch
              v-model="switch9"
              label="Monoplane"
              color="cyan"
              false-value="none"
              true-value="one"
              hide-details
            ></v-switch>

            <v-switch
              v-model="switch10"
              label="Moon"
              color="purple"
              false-value="none"
              true-value="one"
              hide-details
            ></v-switch>

            <v-switch
              v-model="switch11"
              label="Marijuana"
              color="blue"
              false-value="none"
              true-value="one"
              hide-details
            ></v-switch>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>

  function switchComputed1(index) {
    return {
      get() {
        return this.activeSwitch1 === index;
      },
      set(value) {
        if (value) {
          this.activeSwitch1 = index;
        } else {
          this.activeSwitch1 = -1;
        }
      }
    };
  }

  function switchComputed2(index) {
    return {
      get() {
        return this.activeSwitch2 === index;
      },
      set(value) {
        if (value) {
          this.activeSwitch2 = index;
        } else {
          this.activeSwitch2 = -1;
        }
      }
    };
  }


  export default {

    name: "picker",

    components: {},

    data: () => ({
      aboutPickerDialog: false,
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
      switch11: "none"
    }),


    computed: {

      switch1: switchComputed1(1),
      switch2: switchComputed1(2),
      switch3: switchComputed1(3),
      switch4: switchComputed2(4),
      switch5: switchComputed2(5),
      switch6: switchComputed2(6),
      switch0: switchComputed2(0),

    },

    methods: {},

    watch: {
      switch1: function (newValue) {
        if (newValue === true) {
          return (this.visible1 = "one");
        } else {
          return (this.visible1 = "none");
        }
      },

      switch2: function (newValue) {
        if (newValue === true) {
          return (this.visible2 = "one");
        } else {
          return (this.visible2 = "none");
        }
      },

      switch3: function (newValue) {
        if (newValue === true) {
          return (this.visible3 = "one");
        } else {
          return (this.visible3 = "none");
        }
      },
      switch4: function (newValue) {
        if (newValue === true) {
          return (this.visible4 = "one");
        } else {
          return (this.visible4 = "none");
        }
      },

      switch5: function (newValue) {
        if (newValue === true) {
          return (this.visible5 = "one");
        } else {
          return (this.visible5 = "none");
        }
      },

      switch6: function (newValue) {
        if (newValue === true) {
          return (this.visible6 = "one");
        } else {
          return (this.visible6 = "none");
        }
      },

      switch0: function (newValue) {
        if (newValue === true) {
          return (this.visible0 = "one");
        } else {
          return (this.visible0 = "none");
        }
      },
    },
  };
</script>
