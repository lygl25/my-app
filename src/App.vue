<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
    <v-img
          alt="极客游途"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="38"
          src="./assets/k15.png"
            width="38"
        />

        <v-img
          alt="极客游途"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="176"
          src="./assets/jkyt-logo-nav.png"
          width="40"
        />
        <v-toolbar-title></v-toolbar-title>
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
