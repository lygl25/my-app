<template>
  <v-app id="inspire">
    <v-card class="mx-auto">
      <v-navigation-drawer
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
        width="300"
      >
        <v-list dense expand>
          <template v-for="item in items">
            <v-list-group
              :key="item.text"
              :prepend-icon="item.icon"
              value="true"
            >
              <template v-slot:activator> 
              <v-list-item-title  >{{ item.text }}</v-list-item-title> 
              </template>
              <v-list-item v-for="(crud, i) in item.children" :key="i" link v-on:click="content(item.text+i+crud.text)"> 
                <v-list-item-action> </v-list-item-action>
                <v-list-item-title v-text="crud.text" ></v-list-item-title>
              </v-list-item>
            </v-list-group>
          </template>
        </v-list>
      </v-navigation-drawer>
    </v-card>

    <TutorialContent />
  </v-app>
</template>

<script>
import TutorialContent from "./base/TutorialContent";
export default {
  props: {
    source: String,
  },
  components: {
    TutorialContent,
  },
  methods:{
      content:function(i){
        alert(i)
      }

  },
  data: () => ({
    dialog: false,
    drawer: null,
    items: [
      {
        icon: "mdi-book-open-page-variant",
        "icon-alt": "mdi-chevron-down",
        text: "导言",
        model: false,
        children: [
          { text: "为什么是Web而不是Unity？" },
          { text: "为什么使用现代JavaScript" },
          { text: "如何使用这本书" },
          { text: "示例源码" },
        ],
      },
      {
        icon: "mdi-speedometer",
        text: "入门",
        model: false,
        children: [
          { text: "创建新文件夹" },
          { text: "开发服务器" },
          { text: "创建index.html" },
          { text: "创建入口点" },
          { text: "让我们去直播吧" },
          { text: "现代JavaScript" },
          { text: "使用模块" },
          { text: "VS代码IntelliSense" },
          { text: "准备好，一号9号选手" },
        ],
      },
      {
        icon: "mdi-cogs",
        text: "设置游戏",
        model: false,
        children: [
          { text: "创建相位器游戏" },
          { text: "创建游戏场景" },
          { text: "绕道入班" },
          { text: "开始游戏场景" },
          { text: "预加载背景" },
          { text: "创造背景" },
        ],
      },
      {
        icon: "mdi-scooter",
        text: "创建平台",
        model: false,
        children: [
          { text: "添加拱廊物理" },
          { text: "添加物理支持平台" },
          { text: "添加多个平台" },
        ],
      },
      {
        icon: "mdi-ski-water",
        text: "创建播放器",
        model: false,
        children: [
          { text: "添加碰撞" },
          { text: "使用类属性" },
          { text: "我们跳吧" },
          { text: "我们跳吧" },
          { text: "迂回进入速度" },
          { text: "跟着那只兔子" },
        ],
      },
      {
        icon: "mdi-vector-circle-variant",
        text: "滚动平台",
        model: false,
        children: [{ text: "再利用和再循环" }, { text: "保持背景滚动" }],
      },
      {
        icon: "mdi-ski-cross-country",
        text: "左右移动",
        model: false,
        children: [
          { text: "处理移动逻辑" },
          { text: "使用相机死区" },
          { text: "水平环绕" },
        ],
      },
      {
        icon: "mdi-spade",
        text: "收集胡萝卜",
        model: false,
        children: [
          { text: "在游戏中加入胡萝卜" },
          { text: "创建一组物理驱动的胡萝卜" },
          { text: "清理绕道" },
          { text: "把胡萝卜放在平台上" },
          { text: "让我们收集一些胡萝卜" },
          { text: "再利用胡萝卜" },
        ],
      },
      {
        icon: "mdi-marker",
        text: "记分",
        model: false,
        children: [{ text: "更新收集的胡萝卜案文" }],
      },
      {
        icon: "mdi-play-speed",
        text: "处理游戏超过",
        model: false,
        children: [
          { text: "Scene52上的游戏" },
          { text: "添加再次播放" },
          { text: "初始化场景属性" },
        ],
      },
      {
        icon: "mdi-sunglasses",
        text: "简单的动画与跳转纹理",
        model: false,
        children: [{ text: "切换回Stand" }, { text: "还有一件事…" }],
      },
    ],
  }),
};
</script>
