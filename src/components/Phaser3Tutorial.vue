<template>
  <v-app id="inspire">
    <v-card class="mx-auto">
      <v-navigation-drawer
     
        clipped
        app
        width="350"
      >
        <v-list>
          <v-list-item-group>
            <template v-for="(directory, x) in directory" :key1="x">
              <!-- :prepend-icon="directory.icon"  这个是目录前面的图标属性-->
              <v-list-group sub-group :key="directory.text" value="true">
                <template v-slot:activator>
                  <v-list-item-title>{{ directory.text }}</v-list-item-title>
                </template>

                <v-list-item
                  link
                  v-for="(crud, i) in directory.children"
                  :key="i"
                  v-on:click="content(directory.text, crud.text)"
                >
                  <v-list-item-action> </v-list-item-action>

                  <v-list-item-title v-text="crud.text"></v-list-item-title>
                </v-list-item>
              </v-list-group>
            </template>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>

    <TutorialContent />

 
    <v-navigation-drawer
  
     clipped
      right
        app
        width="250"
        class="d-block"
    >
    google广告
    </v-navigation-drawer>

  </v-app>
</template>

<script>
import TutorialContent from "./base/TutorialContent";
import directory from "../unit/directory";
import articleContents from "../unit/articleContent";
export default {
  props: {
    source: String,
  },
  components: {
    TutorialContent,
  },
  methods: {
    content: function(directory, crud) {
      var data = {
        directory: directory,
        crud: crud,
      };
      this.$store.commit("upTutoriaContent", data);
      for (const value of articleContents) {
        if (directory == value.directory && crud == value.crud) {
          this.$store.commit("upArticleContent", value.text);
          return;
        }
      }
    },
  },
  data: () => ({
    dialog: false,
    drawer: null,
    directory: directory,
  }),
};
</script>
