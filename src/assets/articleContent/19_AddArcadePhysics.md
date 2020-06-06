# 创建平台

无限跳投游戏的目标是通过跳出平台，在空中停留尽可能长的时间。
因此，让我们添加一些平台！
首先，我们需要像在背景中一样在preload（）中预加载平台图像。

```javascript
preload()
 {
 this.load.image('background', 'assets/bg_layer1.png')

 // 加载平台图片文件
 this.load.image('platform', 'assets/ground_grass.png')
 }
```

此代码现在看起来应该很熟悉。 给this.load.image（）的第一个值是key，第二个值是从开发服务器提供服务时映像的路径。该路径不是相对于当前文件的。
运行开发服务器时，通过在浏览器中转到localhost：5500 / assets / ground_grass.png可以看到实际的情况。
Live Server扩展将占用您的项目文件夹并提供整个服务。 加载平台映像后，我们可以在create（）中创建它。

```javascript
create()
 {
 this.add.image(240, 320, 'background')

 // 加入平台图片到场景中间
 this.add.image(240, 320, 'platform')
 }
```

您的游戏现在应如下所示：

![image-20200602103316513](http://jikeyt.com/img/Phaser3Book/image-20200602103316513.png)

这里有几个问题。 首先，平台巨大！ 其次，这只是一幅没有物理学的图像。
我们可以通过更改比例来解决第一个问题：

```javascript
this.add.image(240, 320, 'platform')
 .setScale(0.5)
```

平台大小现在看起来更加合适。 接下来，让我们添加一些物理属性！

## 添加街机物理

Phaser有一些物理选择。 我们将使用Arcade Physics使事情变得简单。 我们需要做的第一件事就是在游戏的配置中启用Arcade Physics。
让我们这样更新main.js：

```javascript
export default new Phaser.Game({
     type: Phaser.AUTO,
     width: 480,
     height: 640,
     scene: Game,
     physics: {
         default: 'arcade',
             arcade: {
             gravity: {
             y: 200
        	 },
    	 debug: true
    	 }
     }
 })
```

要注意的关键是新的物理属性。 我们还启用了debug调试以查看冲突框。