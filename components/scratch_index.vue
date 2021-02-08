<template>

    <v-container>
        <v-layout row wrap justify-space-around>

            <v-flex xs12 md6>
                <v-card class="mx-auto" max-width="600">
                    <v-toolbar flat dense>
                        <v-toolbar-title>
                            <span class="subheading">Canvas {{ canvas || 'null' }}</span>
                        </v-toolbar-title>
                        <v-spacer/>
                        <v-btn icon>
                            <v-icon :color="canvas">mdi-pen</v-icon>
                        </v-btn>
                    </v-toolbar>
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

                    <p>
                        Ask a yes/no question:
                        <input v-model="fullcolorRGB">
                    </p>
                    <p>{{ answer }}</p>
                    </div>

                    <v-container fluid>
                        <v-row justify="space-around">

                        </v-row>
                    </v-container>
                </v-card>
            </v-flex>

            <v-flex xs12 md6>
                <v-card class="mx-auto" max-width="600">
                    <v-toolbar flat dense>
                        <v-toolbar-title>
                            <span class="subheading">INK COLOR {{ hexcolorRGB }}</span>
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon :color="hexcolorRGB">mdi-tune</v-icon>
                        </v-btn>
                    </v-toolbar>

                    <v-card-text>

                        <v-row class="mb-4-hex">


                            <v-col class="text-left">
                                <v-spacer/>
                                <v-icon class="text-left" style="font-size: 10em;" :color="hexcolorRGB">mdi-panorama</v-icon>

                                <span class="hexDisp" v-text="hexcolorRGB" ></span>
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
                                >mdi-arrow-left-drop-circle</v-icon
                                >
                            </template>

                            <template v-slot:append>
                                <v-icon :color="hexcolorR" @click="increment1"
                                >mdi-arrow-right-drop-circle</v-icon
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
                                >mdi-arrow-left-drop-circle</v-icon
                                >
                            </template>

                            <template v-slot:append>
                                <v-icon :color="hexcolorG" @click="increment2"
                                >mdi-arrow-right-drop-circle</v-icon
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
                                >mdi-arrow-left-drop-circle</v-icon
                                >
                            </template>

                            <template v-slot:append>
                                <v-icon :color="hexcolorB" @click="increment3"
                                >mdi-arrow-right-drop-circle</v-icon
                                >
                            </template>
                        </v-slider>
                    </v-card-text>
                </v-card>

                <v-card class="mx-auto" max-width="600">
                    <v-toolbar flat dense>
                        <v-toolbar-title>
                            <span class="subheading">PARTS {{ hexcolorRGB }}</span>
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon :color="hexcolorRGB">mdi-guitar-pick</v-icon>
                        </v-btn>
                    </v-toolbar>
                    <v-card-text>
                        <v-container fluid>

                            <v-row

                                    justify="center"
                            >
                                <v-col class="px-0">
                                    <v-switch v-model="switch1" label="Left Monocle" color="yellow" hide-details>Fade Transition</v-switch>
                                    <v-switch v-model="switch2" label="Right Monocle" color="yellow" hide-details>Fade Transition</v-switch>
                                    <v-switch v-model="switch3" label="Mask" color="yellow" hide-details>Fade Transition</v-switch>
                                </v-col>
                                <v-col class="px-1">
                                    <v-switch v-model="switch4" label="Monopod" color="light-green" hide-details></v-switch>
                                    <v-switch v-model="switch5" label="Mic" color="light-green" hide-details></v-switch>
                                    <v-switch v-model="switch6" label="M16" color="light-green" hide-details></v-switch>            </v-col>

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
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
    //import './src/sass/main.scss';
    const colorbaseUrl = "https://api.color.pizza/v1";

    import axios from "axios";
    import monoLisaAvatar from "~/assets/mono8.svg";

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

        data: () => ({

            answer: 'I cannot give you an answer until you ask a question!',
            sliderInput1: 0,
            sliderInput2: 0,
            sliderInput3: 0,
            hexSign: "#",
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
            ]
        }),


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

            fullcolorRGB()  {
                return this.sliderHex1 + this.sliderHex1 + this.sliderHex2 + this.sliderHex2 + this.sliderHex3 + this.sliderHex3;
            }

        },

        methods: {
            getAnswer: function () {
                this.answer = 'Thinking...'
                var vm = this
                axios.get(`${colorbaseUrl}/${this.fullcolorRGB}`)
                    .then(function (response) {
                        vm.answer = _.capitalize(response.data.answer)
                        console.log(_.capitalize(response.data.answer))
                    })
                    .catch(function (error) {
                        vm.answer = 'Error! Could not reach the API. ' + error
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

            // whenever question changes, this function will run
            fullcolorRGB: function (newFullcolorRGB, oldFullcolorRGB) {
                this.answer = 'Waiting for you to select color...'
                this.debouncedGetAnswer()
            }

        },

        created: function () {
            this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
        },

    };
</script>

<style type="text/css">

    .v-application{font-family: 'Fira Code', monospace !important;}
    .mb-4-hex{font-family: 'Fira Code', monospace !important;}

    .v-application .mx-auto {
        margin-bottom: 1em !important;
        margin-right: 1em !important;
    }

    .hexDisp{
        font-size: 5em;
        font-weight: lighter;
    }


    :root {
        --base: #fff;
        --ink: #000;

        --hasLogo: none;
        --hasMonocleL: none;
        --hasMonocleR: none;
        --hasMouthpiece: non;
        --hasMonopod: none;
        --hasMic: none;
        --hasMoustache: none;
        --hasMonohat: non;
        --hasMoon: none;
        --hasMonoplane: none;
        --hasM16: none;
        --hasMonolisi: non;
    }
</style>
