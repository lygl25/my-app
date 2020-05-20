<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
 

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="./assets/phaser3-logo-nav.png"
          width="100"
        /><v-toolbar-title>极客中文站</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <!-- <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2">Phaser3例子</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
