<template>
  <v-app id="MonoLisa">
    <v-navigation-drawer v-model="drawer" :clipped="clipped" app overflow>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clippedLeft" app>
      <v-app-bar-nav-icon x-large @click.stop="drawer = !drawer" />
      <v-flex>
        <v-toolbar-title v-text="title" />
        <v-spacer />
      </v-flex>
      <v-toolbar-title v-text="subtitle" />
      <v-spacer />
      <h2>Light&nbsp&nbsp&nbsp</h2>
      <v-switch accent inset v-model="$vuetify.theme.dark" hide-details />
      <h2>Dark</h2>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer :inset="footer.inset" app>
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      subtitle: "Blockchain Mono Lisa",
      clipped: true,
      clippedLeft: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-tune",
          title: "Mono Lisa",
          to: "/"
        },
        {
          icon: "mdi-book-open",
          title: "FAQ",
          to: "/FAQ"
        }
      ],

      head() {
        return {
          title: this.title,
          meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            {
              hid: "description",
              name: "Dapp Vinci",
              content: "My custom description"
            }
          ]
        };
      },

      footer: {
        inset: false
      },
      title: "Dapp Vinci"
    };
  }
};
</script>

<style type="text/css"></style>
