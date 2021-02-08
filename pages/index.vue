<template>
  <v-container>
    <v-layout row wrap justify-space-around>
      <v-flex xs12 md6>
        <v-card class="mx-auto" max-width="600">
          <v-toolbar flat dense>
            <v-toolbar-title>
              <span class="subheading">Canvas</span>
            </v-toolbar-title>
            <v-spacer />
            <v-btn icon @click.stop="aboutCanvasDialog = true">
              <v-icon>mdi-pen</v-icon>
            </v-btn>
          </v-toolbar>

          <v-dialog v-model="aboutCanvasDialog" width="500">
            <v-card>
              <v-card-title class="grey" primary-title>About Canvas</v-card-title>

              <v-card-text>This is where Mono Lisi happens!</v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="aboutCanvasDialog = false">OK</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <p
            :style="{
          '--ink': hexcolorRGB,
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
          }"
          >
            <monoLisaAvatar />
          </p>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card class="mx-auto" max-width="600">
          <v-toolbar flat dense>
            <v-toolbar-title>
              <span class="subheading">Color&nbsp;</span>
            </v-toolbar-title>
            <span class="nameDispSm">{{ hexcolorRGB }}</span>
            <v-spacer></v-spacer>
            <span class="subheading">{{ myColor }}</span>
            <v-btn icon @click.stop="aboutSlidersDialog = true">
              <v-icon :color="hexcolorRGB">mdi-tune</v-icon>
            </v-btn>
          </v-toolbar>

          <v-dialog v-model="aboutSlidersDialog" width="500">
            <v-card>
              <v-card-title class="success" primary-title>About Sliders</v-card-title>

              <v-card-text>Please use the sliders to select a color out of 4096 possible combinations.</v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="aboutSlidersDialog = false">OK</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-card-text>
            <v-row class="mb-4-hex">
              <v-col class="text-left">
                <v-spacer />
                <v-icon class="text-left" style="font-size: 10em;" :color="hexcolorRGB">mdi-panorama</v-icon>
                <span class="hexDisp" v-text="hexcolorRGB"></span>
                <v-row margin="1em">
                  <v-col class="text-left">
                    <h2 class="nameDisp">{{ answer }}</h2>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-slider
              v-model="sliderInput1"
              :color="hexcolorR"
              track-color="grey"
              always-dirty
              :min="0"
              :max="15"
              step="1"
              ticks="always"
              tick-size="4"
              tick-label="always"
              :tick-labels="ticksLabels"
              hide-details
            >
              <template v-slot:prepend>
                <v-icon :color="hexcolorR" @click="decrement1">mdi-arrow-left-drop-circle</v-icon>
              </template>

              <template v-slot:append>
                <v-icon :color="hexcolorR" @click="increment1">mdi-arrow-right-drop-circle</v-icon>
              </template>
            </v-slider>
            <v-slider
              v-model="sliderInput2"
              :color="hexcolorG"
              track-color="grey"
              always-dirty
              :min="0"
              :max="15"
              step="1"
              ticks="always"
              tick-size="4"
              tick-label="always"
              :tick-labels="ticksLabels"
              hide-details
            >
              <template v-slot:prepend>
                <v-icon :color="hexcolorG" @click="decrement2">mdi-arrow-left-drop-circle</v-icon>
              </template>

              <template v-slot:append>
                <v-icon :color="hexcolorG" @click="increment2">mdi-arrow-right-drop-circle</v-icon>
              </template>
            </v-slider>
            <v-slider
              v-model="sliderInput3"
              :color="hexcolorB"
              track-color="grey"
              always-dirty
              :min="0"
              :max="15"
              step="1"
              ticks="always"
              tick-size="4"
              tick-label="always"
              :tick-labels="ticksLabels"
              hide-details
            >
              <template v-slot:prepend>
                <v-icon :color="hexcolorB" @click="decrement3">mdi-arrow-left-drop-circle</v-icon>
              </template>

              <template v-slot:append>
                <v-icon :color="hexcolorB" @click="increment3">mdi-arrow-right-drop-circle</v-icon>
              </template>
            </v-slider>
          </v-card-text>
        </v-card>

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

          <v-dialog v-model="aboutPickerDialog" width="500">
            <v-card>
              <v-card-title class="accent" primary-title>About Picker</v-card-title>

              <v-card-text>
                Please select the add-ons to your Mono Lisa. Some of them overlap, however, we have made sure that you will
                make the right choice every time.
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="aboutPickerDialog = false">OK</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-card-text>
            <v-container fluid>
              <v-row justify="center">
                <v-col class="px-0">
                  <v-switch
                    v-model="switch1"
                    label="Monocle Right"
                    color="yellow"
                    hide-details
                  >Fade Transition</v-switch>
                  <v-switch
                    v-model="switch2"
                    label="Monocle Left"
                    color="yellow"
                    hide-details
                  >Fade Transition</v-switch>
                  <v-switch
                    v-model="switch3"
                    label="Mask"
                    color="yellow"
                    hide-details
                  >Fade Transition</v-switch>
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

        <v-card class="mx-auto" max-width="600">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">For more info, you may</v-list-item-title>
              <div class="my-2">
                <v-btn
                  x-large
                  color="success"
                  onclick="location.href='mailto:invite1010@monolisa.club?subject=Interested In Mono Lisa';"
                >Request an invitation</v-btn>
              </div>
            </v-list-item-content>
            <v-icon class="text-left" style="font-size: 9em;" :color="hexcolorRGB">mdi-email</v-icon>
          </v-list-item>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import monoLisaAvatar from "~/assets/mono8.svg";
const colorbaseUrl = "https://api.color.pizza/v1";
import axios from "axios";
import _ from "lodash";

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
  name: "MonoLisa",

  components: {
    monoLisaAvatar
  },

  data: () => ({
    //iEmail: "invite1010@monolisa.club",
    aboutCanvasDialog: false,
    aboutSlidersDialog: false,
    aboutPickerDialog: false,
    answer: "Choose a color",
    sliderInput1: 0,
    sliderInput2: 0,
    sliderInput3: 0,
    hexSign: "#",
    myColor: "Black",
    ticksLabels: [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F"
    ],

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

    sliderHex1() {
      if (this.sliderInput1 === 0) return "0";
      if (this.sliderInput1 === 1) return "1";
      if (this.sliderInput1 === 2) return "2";
      if (this.sliderInput1 === 3) return "3";
      if (this.sliderInput1 === 4) return "4";
      if (this.sliderInput1 === 5) return "5";
      if (this.sliderInput1 === 6) return "6";
      if (this.sliderInput1 === 7) return "7";
      if (this.sliderInput1 === 8) return "8";
      if (this.sliderInput1 === 9) return "9";
      if (this.sliderInput1 === 10) return "A";
      if (this.sliderInput1 === 11) return "B";
      if (this.sliderInput1 === 12) return "C";
      if (this.sliderInput1 === 13) return "D";
      if (this.sliderInput1 === 14) return "E";
      if (this.sliderInput1 === 15) return "F";
      return "0";
    },

    sliderHex2() {
      if (this.sliderInput2 === 0) return "0";
      if (this.sliderInput2 === 1) return "1";
      if (this.sliderInput2 === 2) return "2";
      if (this.sliderInput2 === 3) return "3";
      if (this.sliderInput2 === 4) return "4";
      if (this.sliderInput2 === 5) return "5";
      if (this.sliderInput2 === 6) return "6";
      if (this.sliderInput2 === 7) return "7";
      if (this.sliderInput2 === 8) return "8";
      if (this.sliderInput2 === 9) return "9";
      if (this.sliderInput2 === 10) return "A";
      if (this.sliderInput2 === 11) return "B";
      if (this.sliderInput2 === 12) return "C";
      if (this.sliderInput2 === 13) return "D";
      if (this.sliderInput2 === 14) return "E";
      if (this.sliderInput2 === 15) return "F";
      return "0";
    },

    sliderHex3() {
      if (this.sliderInput3 === 0) return "0";
      if (this.sliderInput3 === 1) return "1";
      if (this.sliderInput3 === 2) return "2";
      if (this.sliderInput3 === 3) return "3";
      if (this.sliderInput3 === 4) return "4";
      if (this.sliderInput3 === 5) return "5";
      if (this.sliderInput3 === 6) return "6";
      if (this.sliderInput3 === 7) return "7";
      if (this.sliderInput3 === 8) return "8";
      if (this.sliderInput3 === 9) return "9";
      if (this.sliderInput3 === 10) return "A";
      if (this.sliderInput3 === 11) return "B";
      if (this.sliderInput3 === 12) return "C";
      if (this.sliderInput3 === 13) return "D";
      if (this.sliderInput3 === 14) return "E";
      if (this.sliderInput3 === 15) return "F";
      return "0";
    },

    hexcolorR() {
      return "#" + this.sliderHex1 + "0" + "0";
    },

    hexcolorG() {
      return "#" + "0" + this.sliderHex2 + "0";
    },

    hexcolorB() {
      return "#" + "0" + "0" + this.sliderHex3;
    },

    hexcolorRGB() {
      return "#" + this.sliderHex1 + this.sliderHex2 + this.sliderHex3;
    },

    fullcolorRGB() {
      return (
        this.sliderHex1 +
        this.sliderHex1 +
        this.sliderHex2 +
        this.sliderHex2 +
        this.sliderHex3 +
        this.sliderHex3
      );
    }
  },

  methods: {
    getAnswer: function() {
      this.answer = "Getting...";
      const vm = this;
      axios
        .get(`${colorbaseUrl}/${this.fullcolorRGB}`)
        .then(function(response) {
          vm.answer = response.data.colors[0].name;
          vm.myColor = response.data.colors[0].name;
        })
        .catch(function(error) {
          vm.answer = "Something is raptus regaliter";
        });
    },

    decrement1() {
      this.sliderInput1--;
    },
    increment1() {
      this.sliderInput1++;
    },

    decrement2() {
      this.sliderInput1--;
    },
    increment2() {
      this.sliderInput1++;
    },

    decrement3() {
      this.sliderInput1--;
    },
    increment3() {
      this.sliderInput1++;
    }
  },

  watch: {
    switch1: function(newValue) {
      if (newValue === true) {
        return (this.visible1 = "one");
      } else {
        return (this.visible1 = "none");
      }
    },

    switch2: function(newValue) {
      if (newValue === true) {
        return (this.visible2 = "one");
      } else {
        return (this.visible2 = "none");
      }
    },

    switch3: function(newValue) {
      if (newValue === true) {
        return (this.visible3 = "one");
      } else {
        return (this.visible3 = "none");
      }
    },
    switch4: function(newValue) {
      if (newValue === true) {
        return (this.visible4 = "one");
      } else {
        return (this.visible4 = "none");
      }
    },

    switch5: function(newValue) {
      if (newValue === true) {
        return (this.visible5 = "one");
      } else {
        return (this.visible5 = "none");
      }
    },

    switch6: function(newValue) {
      if (newValue === true) {
        return (this.visible6 = "one");
      } else {
        return (this.visible6 = "none");
      }
    },

    switch0: function(newValue) {
      if (newValue === true) {
        return (this.visible0 = "one");
      } else {
        return (this.visible0 = "none");
      }
    },

    // whenever color changes, this function will run
    hexcolorRGB: function() {
      this.answer = "Waiting...";
      this.debouncedGetAnswer();
    }
  },
  created: function() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  }
};
</script>

<style>
.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
  margin-bottom: 1em !important;
  margin-right: 1em !important;
}

.hexDisp {
  font-family: "Fira Mono", monospace !important;
  font-size: 5em;
  font-weight: lighter;
}

.nameDisp {
  font-weight: bold;
  font-size: 2em;
}

.v-input--selection-controls .v-input__slot > .v-label,
.v-input--selection-controls .v-radio > .v-label {
  font-size: large;
}

.v-dialog > .v-card > .v-card__text {
  font-size: large;
  padding: 0 24px 20px;
}
</style>
