# 设置游戏

我们将在“兔子跳跃”游戏中使用Kenney的Jumper Pack资产。 以下是资产的预览。

![](http://www.jikeyt.com/img/Phaser3Book/image-20200601171434660.png)



您可以免费下载和使用它们。 肯尼（Kenney）拥有大量的公共领域艺术品资源，可帮助您制作原型。
转到http://kenney.nl，然后在导航中单击Assets，然后搜索“ Jumper Pack”。 下载并解压缩文件。
本书仅会使用一些资产来构建基本的无限跳线。 但是，您可以使用其余资产来添加更多功能！

这是我们将要使用的5种资产：

```
Jumper Pack
2 o-- PNG
3 o-- Background
4 -- bg_layer_1.png
5 o-- Environment
6 -- ground_grass.png
7 o-- Items
8 -- carrot.png
9 o-- Player
10 -- bunny1_stand.png
11 -- bunny1_jump.png
```

将这5张图片复制到资产文件夹下的项目中。 该文件夹应与src文件夹位于同一级别的项目基础上。



## 创建一个Phaser游戏

接下来，我们将在main.js文件中创建一个Phaser.Game实例。
Phaser.Game带有一个配置对象，该对象定义了诸如游戏的宽度和高度之类的设置。
您还可以在这里看到许多其他选项。 大多数具有默认值，可能会很好。
导入Phaser之后，将其添加到main.js中

```javascript
export default new Phaser.Game({
         type: Phaser.AUTO,
         width: 480,
         height: 640
 })
```

您会看到我们将游戏的宽度和高度设置为480x640。 type属性设置为Phaser.AUTO，这意味着Phaser将根据浏览器和设备决定使用Canvas或WebGL模式。
Canvas和WebGL是Phaser在浏览器中渲染游戏的两种不同方式。
保存更改，重新加载浏览器后，您应该会看到一个黑色矩形。 控制台还将收到来自Phaser的消息，指出版本，渲染模式和其他信息。
下一步是创建一个场景。