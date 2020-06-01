<template>
  <v-app id="inspire">
    <v-card class="mx-auto">
      <v-navigation-drawer clipped app width="350">
        <v-list>
          <v-list-item-group>
            <template v-for="(directory, x) in directory" :key1="x">
              <!-- :prepend-icon="directory.icon"  这个是目录前面的图标属性-->
              <v-list-group sub-group :key="directory.text" value="true">
                <template v-slot:activator>
                  <v-list-item-title>{{ directory.text }}</v-list-item-title>
                </template>
                <router-link
                  :to="`/phaser3Tutorial/TutorialContent/${crud.id}`"
                  v-for="(crud, i) in directory.children"
                  :key="i"
                >
                  <v-list-item link v-on:click="pushShow(crud.id)">
                    <v-list-item-action> </v-list-item-action>
                    <v-list-item-title v-text="crud.text"></v-list-item-title>
                  </v-list-item>
                </router-link>
              </v-list-group>
            </template>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>

    <v-content class="pa-0 mt-10">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-content>
    <v-navigation-drawer clipped right app width="250" class="d-block">
      google广告
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import directory from "../unit/directory";//教程目录结构

export default {
  props: {
    source: String,
  },
  components: {},
  methods: {
      pushShow:function(id){
           //根据文章id 异步加载文章内容
    this.$router.push(`/phaser3Tutorial/TutorialContent/${id}`)//路由后退的方式
  // this.htmlMD = require('../assets/articleContent/'+id+'.md');//获取保存在md文件的教程
    //this.$store.commit('upTutoriaContent',this.htmlMD)

         
      }

  },
  watch:{
    $route:function (v) {
      //地址发生改变就重新获取MD文件，修改显示的文章内容
        var id=v.params.id
            console.log(id)
         this.htmlMD = require('../assets/articleContent/'+id+'.md');//获取保存在md文件的教程
         this.$store.commit('upTutoriaContent',this.htmlMD)//修改文章内容
    }
  },
  data: () => ({
    dialog: false,
    drawer: null,
    directory: directory,
  }),
};
</script>

<style >
 code{
  width: 100%;

}


a {
  text-decoration: none;
}


</style>>
