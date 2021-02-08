<template>
    <v-card class="mx-auto" max-width="600">
      <v-toolbar flat dense>
        <v-toolbar-title>
          <span class="subheading">COLOR&nbsp</span>
        </v-toolbar-title>
        <span class="nameDispSm">{{ hexcolorRGB }}</span>
        <v-spacer></v-spacer>
        <span class="subheading">{{ myColor }}</span>
        <v-btn icon @click.stop="aboutSlidersDialog = true">
          <v-icon :color="hexcolorRGB">mdi-tune</v-icon>
        </v-btn>
      </v-toolbar>

      <v-dialog
        v-model="aboutSlidersDialog"
        width="500"
      >
        <v-card>
          <v-card-title
            class="success"
            primary-title
          >
            About Sliders
          </v-card-title>

          <v-card-text>
            Please use the sliders to select a color out of 4096 possible combinations.
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              @click="aboutSlidersDialog = false"
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


      <v-card-text>
        <v-row class="mb-4-hex">
          <v-col class="text-left">
            <v-spacer/>
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
            <v-icon :color="hexcolorR" @click="decrement1"
            >mdi-arrow-left-drop-circle
            </v-icon
            >
          </template>

          <template v-slot:append>
            <v-icon :color="hexcolorR" @click="increment1"
            >mdi-arrow-right-drop-circle
            </v-icon
            >
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
            <v-icon :color="hexcolorG" @click="decrement2"
            >mdi-arrow-left-drop-circle
            </v-icon
            >
          </template>

          <template v-slot:append>
            <v-icon :color="hexcolorG" @click="increment2"
            >mdi-arrow-right-drop-circle
            </v-icon
            >
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
            <v-icon :color="hexcolorB" @click="decrement3"
            >mdi-arrow-left-drop-circle
            </v-icon
            >
          </template>

          <template v-slot:append>
            <v-icon :color="hexcolorB" @click="increment3"
            >mdi-arrow-right-drop-circle
            </v-icon
            >
          </template>
        </v-slider>
      </v-card-text>
    </v-card>
</template>

<script>
  const colorbaseUrl = "https://api.color.pizza/v1";
  import axios from "axios";
  import _ from 'lodash';

  export default {
    name: "sliders",

    data: () => ({
      aboutSlidersDialog: false,
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
      ]
    }),

    computed: {

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
        return this.sliderHex1 + this.sliderHex1 + this.sliderHex2 + this.sliderHex2 + this.sliderHex3 + this.sliderHex3;
      }
    },

    methods: {
      getAnswer: function () {
        this.answer = 'Getting...';
        const vm = this;
        axios.get(`${colorbaseUrl}/${this.fullcolorRGB}`)
          .then(function (response) {
            vm.answer = (response.data.colors[0].name);
            vm.myColor = (response.data.colors[0].name);
          })
          .catch(function (error) {
            vm.answer = 'Something is raptus regaliter'
          })
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
      },
    },

    watch: {
      // whenever color changes, this function will run
      hexcolorRGB: function () {
        this.answer = 'Waiting...';
        this.debouncedGetAnswer()
      }
    },
    created: function () {
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
  };
</script>

<style type="text/css">
  .hexDisp {
    font-family: 'Fira Mono', monospace !important;
    font-size: 5em;
    font-weight: lighter;
  }

  .nameDisp {
    font-weight: bold;
    font-size: 2em;
  }
</style>
