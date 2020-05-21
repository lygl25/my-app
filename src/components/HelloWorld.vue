<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" align="center">
        <p class="subheading font-weight-regular">
          本站镜像了Phaser3官方的示例程序、API文档实现在国内的快速访问，
          <br />
方便国内Phaser爱好者快速查阅官方资料，并支持您提供HTML5小游戏在本站展示.
        </p>
        <v-img :src="require('../assets/logo.png')" class="my-3" contain height="545" width="635" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Phaser3 国内镜像站</h1>

        <p class="subheading font-weight-regular">
          Phaser是一个快速，免费且有趣的开源HTML5游戏框架，可在台式机和移动Web浏览器上提供WebGL和Canvas渲染,
          <br />可以使用第三方工具将游戏编译为iOS，Android和本机应用程序。您可以使用JavaScript或TypeScript进行开发。
          <a
            href="http://phaser.io/"
            target="_blank"
          >官方网站</a>
        </p>
      </v-col>

      <v-col class="mb-5" cols="12"></v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">Phaser3官方资料(英文原版镜像)</h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >{{ link.text }}</a>
        </v-row>
      </v-col>
      <v-col align="center" class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">小游戏展示</h2>
        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks2"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >{{ link.text }}</a>
        </v-row>
      </v-col>
      <v-col align="center" class="mb-5" cols="12">
        <p class="subheading font-weight-regular">提交HTML5小游戏或Phaser技术交流请用微信扫描下方二维码(备注：极客游途)</p>
        <v-img :src="require('../assets/wx.png')" class="my-3" contain height="200" width="200" />
           <h2 class="headline font-weight-bold mb-3">成为支持者</h2>
        <p class="subheading font-weight-regular">
          这些资金使极客游途网得以改善，并且在改善时，每个人都将从中受益。
          <br />您的支持有助于确保持续不断的更新，修复，新功能以及对未来的计划。
        </p>
        <p>
          支付宝捐赠：
          
        </p>
        <v-img :src="require('../assets/aipay.png')" class="my-3" contain height="200" width="200" />
         <p class="subheading font-weight-regular"> （手机打开支付宝扫描二位码支付） </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    importantLinks: [
      {
        text: "Phaser3实例",
        href:
          "https://www.jikeyt.com/page/phaser/phaser3-examples/public/index.html"
      },
      {
        text: "Phaser3 API文档",
        href: "https://www.jikeyt.com/page/phaser/phaser3-docs/docs/index.html"
      }
    ],
    importantLinks2: [
      {
        text: "俄罗斯方块",
        href: "https://www.jikeyt.com/page/game/vue-tetris/index.html"
      },
      {
        text: "Phaser3入门实例",
        href: "https://www.jikeyt.com/page/game/phaser3_test/index.html"
      }
    ]
  })
};
</script>
