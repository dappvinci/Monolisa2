<template>
  <v-layout>
    <v-flex class="text-center">
      <div>
        <v-card class="mx-auto" max-width="1200">
          <v-toolbar flat dense>
            <v-toolbar-title>
              <span class="subheading">FAQ</span>
            </v-toolbar-title>
            <v-spacer/>
            <v-btn icon @click.stop="aboutFAQdialog = true">
              <v-icon>mdi-pen</v-icon>
            </v-btn>
          </v-toolbar>


          <div>
            <v-expansion-panels
              v-model="panel"
              multiple
            >
              <v-expansion-panel>
                <v-expansion-panel-header>1. What is Mono Lisa?</v-expansion-panel-header>
                <v-expansion-panel-content>
                  A Mono Lisa is a minimalist monochromatic rendition of Mona Lisa, in SVG format, on-chain. There are 4096 Mona Lisas only, and each one is unique. Mono Lisas are complete art tokens that are immortal on the Ethereum blockchain. Both the artwork and token, live on-chain making authentication, verification, and provenance, a breeze.
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>2. Why only 4096 Mono Lisas?</v-expansion-panel-header>
                <v-expansion-panel-content>
                  Out of 16,777,216. six-digit hexadecimal colors, only 4096 are legal as three-digit color codes. There's a Mono Lisa for each of those 4096 three-digit color codes. No two Mono Lisa sport the same color. All are unique, and there's a hard cap on the total number of Mono Lisas at 4096. Mono Lisas are measurable and provably scarce.
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>3. How was Mono Lisa made?</v-expansion-panel-header>
                <v-expansion-panel-content>
                  The technologies at the heart of Mono Lisa are Scalable Vector Graphics (SVG) and the Ethereum. The artwork reduced down to the fewest points possible is stored as SVG code in a smart contract. Despite its minimalism, Mono Lisa scales without limits as artwork. You could print a MonoLisa the size of Eiffel Tower and it would still be crisp.
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
              <v-expansion-panel-header>4. Is Mono Lisa a Non-fungible Token?</v-expansion-panel-header>
              <v-expansion-panel-content>
                Mono Lisas are non-fungible tokens or NFTs. Some call them ERC-721, they are a new asset class called digital collectibles. Uniquely suited to art, NFTs are instantly tradeable on the open market.  Now, art is an asset class for the masses that provides instant liquidity. You no longer need an uncle in the trade to auction, buy or sell art profitably.
              </v-expansion-panel-content>
            </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>5. Reinterpretation of Mona Lisa</v-expansion-panel-header>
                <v-expansion-panel-content>
                  Mono Lisa offers it's collectors the novel experience of a reinterpretation. Once only in the purview of artists such as Marcel Duchamp and Salvador Dalí, now you too can unleash your inner Banksy. You may be satisfied with the default Mono Lisa, or you may do a little reinterpretation of your own with the add-ons that we have provided.
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>6. How can I get a Mono Lisa?</v-expansion-panel-header>
                <v-expansion-panel-content>
                  If you are reading this, you are an early bird. That's good because you may now <h3>
                  <a v-bind:href="['mailto:' + iEmail + '?subject=Interested In Mono Lisa']">
                    Request an invitation
                  </a>
                </h3>
                </v-expansion-panel-content>
              </v-expansion-panel>

            </v-expansion-panels>
          </div>


          <v-dialog
            v-model="aboutFAQdialog"
            width="500"
          >
            <v-card>
              <v-card-title
                class="accent"
                primary-title
              >
                About FAQ
              </v-card-title>

              <v-card-text>
                FAQ is Mono Lisa?
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  text
                  @click="aboutFAQdialog = false"
                >
                  OK
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>

  export default {

    name: "FAQ",

    components: {},

    data: () => ({
      aboutFAQdialog: false,
      panel: [0,1,2,3,4,5,],
      readonly: false,
    }),

    computed: {},

    methods: {
      // Create an array the length of our items
      // with all values as true
      all() {
        this.panel = [...Array(this.items).keys()].map((k, i) => i)
      },
      // Reset the panel
      none() {
        this.panel = []
      },
    },

    watch: {},
  }
</script>

<style>

  .v-expansion-panel-header {
    font-weight: bold;
    font-size: x-large !important;
  }

  .v-expansion-panel-content__wrap {
    font-size: x-large !important;

    text-align: left;
  }

</style>
