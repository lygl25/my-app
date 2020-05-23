<template>
  <v-app-bar app color="primary" dark flat  clipped-left>
    <div class="d-flex">
      <v-img
        alt="极客游途"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="38"
        src="../../assets/k15.png"
        width="38"
      />

      <v-img
        alt="极客游途"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="176"
        src="../../assets/jkyt-logo-nav.png"
        width="40"
      />
      <v-toolbar-title></v-toolbar-title>
    </div>

    <router-link to="/">
    <v-btn href target="_blank" text class="ml-12">
      <v-icon>mdi-home</v-icon>
      <span class="ml-1">首页</span>
    </v-btn>
    </router-link>
    <router-link to="/phaser3Tutorial">
      <v-btn href target="_blank" text class="ml-12">
        <v-icon>mdi-book-open-page-variant</v-icon>
        <span class="ml-1">Phaser3教程</span>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>>



<script>
export default {
  name: "AppBar"
};
</script>