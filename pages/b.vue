<template>
  <v-card class="d-inline-block mx-auto">
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="auto"
          align="center"
        >
          <v-row>
            <v-col>
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
                vertical
                hide-details
              >
                <template v-slot:prepend>
                  <v-icon :color="hexcolorR" @click="decrement1"
                  >mdi-arrow-down-drop-circle</v-icon
                  >
                </template>

                <template v-slot:append>
                  <v-icon :color="hexcolorR" @click="increment1"
                  >mdi-arrow-up-drop-circle</v-icon
                  >
                </template>
              </v-slider>
            </v-col>
            <v-col>
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
                vertical
                hide-details
              >
                <template v-slot:prepend>
                  <v-icon :color="hexcolorG" @click="decrement2"
                  >mdi-arrow-down-drop-circle</v-icon
                  >
                </template>

                <template v-slot:append>
                  <v-icon :color="hexcolorG" @click="increment2"
                  >mdi-arrow-up-drop-circle</v-icon
                  >
                </template>
              </v-slider>
            </v-col>
            <v-col>
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
                vertical
                hide-details
              >
                <template v-slot:prepend>
                  <v-icon :color="hexcolorB" @click="decrement3"
                  >mdi-arrow-down-drop-circle</v-icon
                  >
                </template>

                <template v-slot:append>
                  <v-icon :color="hexcolorB" @click="increment3"
                  >mdi-arrow-up-drop-circle</v-icon
                  >
                </template>
              </v-slider>
            </v-col>
          </v-row>


        </v-col>

        <v-col cols="auto">
          <a href :style="{
          '--base': canvas,
          '--ink': hexcolorRGB,
          '--hasMonocleL': visible1,
          '--hasMonocleR': visible2,
          '--hasMask': visible3,
          '--hasMonopod': visible4,
          '--hasMic': visible5,
          '--hasM16': visible6,
          '--hasMonohat': switch7,
          '--hasMoustache': switch8,
          '--hasMonoplane': switch9,
          '--hasMoon': switch10
          }">
            <monoLisaAvatar/>
          </a>

          <v-row justify="space-around">

          </v-row>

        </v-col>

        <v-col
          cols="auto"
          class="text-center pl-0"
        >
          <v-row
            class="flex-column ma-0"
            justify="center"
          >
            <v-col class="px-0">
              <v-switch v-model="switch1" color="yellow" hide-details>Fade Transition</v-switch>
              <v-switch v-model="switch2" color="yellow" hide-details>Fade Transition</v-switch>
              <v-switch v-model="switch3" color="yellow" hide-details>Fade Transition</v-switch>
            </v-col>

            <v-col class="px-0">
              <v-switch v-model="switch4" color="light-green" hide-details></v-switch>
              <v-switch v-model="switch5" color="light-green" hide-details></v-switch>
              <v-switch v-model="switch6" color="light-green" hide-details></v-switch>            </v-col>

            <v-col class="px-0">
              <v-switch
                v-model="switch7"
                color="orange"
                false-value="none"
                true-value="one"
                hide-details
              ></v-switch>

              <v-switch
                v-model="switch8"
                color="lime"
                false-value="none"
                true-value="one"
                hide-details
              ></v-switch>

              <v-switch
                v-model="switch9"
                color="cyan"
                false-value="none"
                true-value="one"
                hide-details
              ></v-switch>

              <v-switch
                v-model="switch10"
                color="purple"
                false-value="none"
                true-value="one"
                hide-details
              ></v-switch>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>

  import monoLisaAvatar from "~/assets/mono7.svg";

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
    name: "dapp",
    components: {
      monoLisaAvatar
    },
    data() {
      return {
        activeSwitch1: -1,
        activeSwitch2: -1,
        visible1: "none",
        visible2: "none",
        visible3: "none",
        visible4: "none",
        visible5: "none",
        visible6: "none",
        switch7: "none",
        switch8: "none",
        switch9: "none",
        switch10: "none",
        sliderInput1: 0,
        sliderInput2: 0,
        sliderInput3: 0,
        hexSign: "#",

        monocleL: "none",
        monocleR: "none",

        canvas: '#FFF',
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
      };
    },
    computed: {
      switch1: switchComputed1(1),
      switch2: switchComputed1(2),
      switch3: switchComputed1(3),
      switch4: switchComputed2(4),
      switch5: switchComputed2(5),
      switch6: switchComputed2(6),

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

      hexcolorR()  {
        return "#" + this.sliderHex1 + "0" + "0";
      },

      hexcolorG()  {
        return "#" + "0" + this.sliderHex2 + "0";
      },

      hexcolorB()  {
        return "#" + "0" + "0" + this.sliderHex3;
      },


      hexcolorRGB()  {
        return "#" + this.sliderHex1 + this.sliderHex2 + this.sliderHex3;
      },

    },
    methods: {
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
      }
    }
  };
</script>

<style>
  .v-slider--vertical {
    min-height: 420px;
    margin-top: 12px;
    margin-bottom: 12px;
  }



</style>

<style scoped>
  svg:not(:root) {
    height:500px;
  }
</style>
