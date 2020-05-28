<template>
  <v-app>
    <AppBar />
 <v-content >
     <keep-alive>
     <router-view></router-view>
     </keep-alive>
     </v-content >
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
