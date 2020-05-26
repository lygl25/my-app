<template>
  <v-app id="inspire">
    <v-card class="mx-auto">
      <v-navigation-drawer 
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
        width="350"
      >
        <v-list >
          <v-list-item-group   v-model="model"   >
          <template v-for="(directory,x) in directory" :key1="x">
            <!-- :prepend-icon="directory.icon"  这个是目录前面的图标属性-->
            <v-list-group
              sub-group
              :key="directory.text"
              value="true"
           
            >
              <template v-slot:activator> 
              <v-list-item-title  >{{ directory.text }}</v-list-item-title> 
              </template>
             
              
              <v-list-item link v-for="(crud, i) in directory.children" :key="i"  v-on:click="content(x+directory.text+i+crud.text)" > 
                <v-list-item-action> </v-list-item-action>
               
                <v-list-item-title v-text="crud.text" ></v-list-item-title>
               
              </v-list-item>
               
            
            </v-list-group>
          </template>
            </v-list-item-group>
        </v-list>
 
      </v-navigation-drawer>
    </v-card>

    <TutorialContent />
  </v-app>
</template>

<script>
import TutorialContent from "./base/TutorialContent"
import directory from "../unit/directory"
export default {
  props: {
    source: String,
  },
  components: {
    TutorialContent,
  },
  methods:{
      content:function(i){
          this.$store.commit('upTutoriaContent',i)
      }

  },
  data: () => ({
    dialog: false,
    drawer: null,
    directory,
  }),
};
</script>
