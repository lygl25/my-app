<template>
  <v-app>
    <AppBar />
 
     <router-view></router-view>
  </v-app>

</template>

<script>

import AppBar from "./components/core/AppBar";


export default {
  name: "App",

  components: {

    AppBar
  },

  data: () => ({
    //
  })
};
</script>
