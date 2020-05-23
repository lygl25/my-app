
<template>
  <v-app id="inspire">
         <v-card
    class="mx-auto"

  >
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      width=300
    >

      <v-list dense>
        
        <template v-for="item in items">
          <v-list-group
          :key="item.text"
        :prepend-icon="item.icon"
        value="true"
      
      >
        <template v-slot:activator>
          <v-list-item-title>   {{ item.text }}</v-list-item-title>
        </template>
          <v-list-item
            v-for="(crud, i) in item.children"
            :key="i"
              link
              
          >
             <v-list-item-action ></v-list-item-action>
            <v-list-item-title v-text="crud.text"  ></v-list-item-title>
        
          </v-list-item>
      </v-list-group>
     
        </template>
      </v-list>

    </v-navigation-drawer>

              </v-card
  >
    <v-content>
      <v-container
       
        fluid
      >
     <h1>我们正在完成一本Phaser3教程的翻译工作，敬请期待！</h1><br><br>
         <p>导言

我们将为您介绍使用现代JavaScript中的Phaser3HTML5游戏框架进行游戏开发的10个章节。<br><br>

我们要做的游戏是一个像嘟嘟跳跃一样的无限跳跃。<br><br>
<br>
其目标是通过跳到离开屏幕底部时消失的平台上，达到尽可能高的高度。<br>

摔倒就是死刑。 实际上是死刑。 你总能重生。<br><br>

为什么是Web而不是Unity？<br><br>


Phaser3是一个非常棒的游戏框架，对于初学者来说，这个框架足够简单，但是它的强大足以制作几乎任何你能想到的2D游戏。<br><br>

web和现代JavaScript是初学者理想的平台和语言。<br><br>

团结不是。 我试着教初学者团结。 这个软件就像飞机仪表盘一样令人望而生畏。 您可能会认为集成开发环境只会起作用，但它并不起作用。<br><br>

在这本书中，你所需要的只是Visual Studio代码，Chrome web浏览器和一个Internet连接。<br><br>




为什么是现代JavaScript？<br><br>


我们称之为“现代”的JavaScript的语法和样式很快就会只是JavaScript。<br><br>

JavaScript也更容易学习，而且也更少一些怪癖，这些怪癖使得JavaScript被那些使用真正编程语言的开发人员所憎恨--在他们看来--。<br><br>

现代JavaScript非常真实。<br><br>



Phaser 3中使用Modern JavaScript©2020 Ourcade的无限跳线<br><br>

不久以前，使用现代JavaScript的唯一方法涉及配置复杂的开发工具。<br><br>

这对初学者来说是不可行的。 初学者的墓地里挤满了被工装压垮的人。<br><br>

本书中不会设置复杂的工具或开发环境。<br><br>



如何使用这本书<br><br>


这本书的目的是让你从头到尾读下去。<br><br>

这不是一本你可以轻易跳来跳去的参考书。<br><br>

每一章都建立在前一章的基础上，并且随着您的进展，复杂程度也会逐渐提高。
<br><br>
这不是一本教你完整的现代JavaScript的书。<br><br>

我们希望您从Codecademy，Udemy或类似的课程中了解基本的JavaScript。<br><br>
<br>
任何我们认为可能会令人困惑的代码或游戏开发概念都会被解释。

我们的目标是让您感到舒适的实验和修改游戏添加您自己的变化。<br><br>
</p>
      
      </v-container>
    </v-content>

   
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        {
          icon: 'mdi-book-open-page-variant',
          'icon-alt': 'mdi-chevron-down',
          text: '导言',
          model: false,
          children: [
            { text: '为什么是Web而不是Unity？' },
            { text: '为什么使用现代JavaScript' },
            { text: '如何使用这本书' },
            { text: '示例源码' }
          ]
        },
        { icon: 'mdi-speedometer', text: '入门',model: false ,
          children: [
            { text: '创建新文件夹' },
            { text: '开发服务器' },
            { text: '创建index.html' },
            { text: '创建入口点' },
            { text: '让我们去直播吧' },
            { text: '现代JavaScript' },
            { text: '使用模块' },
            { text: 'VS代码IntelliSense' },
            { text: '准备好，一号9号选手' },
          ]},
              { icon: 'mdi-cogs', text: '设置游戏',model: false ,
          children: [
            { text: '创建相位器游戏' },
            { text: '创建游戏场景' },
            { text: '绕道入班' },
            { text: '开始游戏场景' },
            { text: '预加载背景' },
            { text: '创造背景' },
          ]},
           { icon: 'mdi-scooter', text: '创建平台',model: false ,
          children: [
            { text: '添加拱廊物理' },
            { text: '添加物理支持平台' },
            { text: '添加多个平台' },
          ]},
          { icon: 'mdi-ski-water', text: '创建播放器',model: false ,
          children: [
            { text: '添加碰撞' },
            { text: '使用类属性' },
            { text: '我们跳吧' },
             { text: '我们跳吧' },
              { text: '迂回进入速度' },
               { text: '跟着那只兔子' },

          ]},
           { icon: 'mdi-vector-circle-variant', text: '滚动平台',model: false ,
          children: [
            { text: '再利用和再循环' },
            { text: '保持背景滚动' }

          ]},
             { icon: 'mdi-ski-cross-country', text: '左右移动',model: false ,
          children: [
            { text: '处理移动逻辑' },
            { text: '使用相机死区' },
             { text: '水平环绕' }
          ]},
                 { icon: 'mdi-spade', text: '收集胡萝卜',model: false ,
          children: [
            { text: '在游戏中加入胡萝卜' },
            { text: '创建一组物理驱动的胡萝卜' },
             { text: '清理绕道' },
                { text: '把胡萝卜放在平台上' },
            { text: '让我们收集一些胡萝卜' },
             { text: '再利用胡萝卜' },
          ]},
              { icon: 'mdi-marker', text: '记分',model: false ,
          children: [
            { text: '更新收集的胡萝卜案文' },
          ]},
                  { icon: 'mdi-play-speed', text: '处理游戏超过',model: false ,
          children: [
            { text: 'Scene52上的游戏' },
             { text: '添加再次播放' },
              { text: '初始化场景属性' }
          ]},
                  { icon: 'mdi-sunglasses', text: '简单的动画与跳转纹理',model: false ,
          children: [
            { text: '切换回Stand' },
             { text: '还有一件事…' }
          ]},


      ],
      
    }),
  }
</script>

