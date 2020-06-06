# 创建播放器

我们的玩家角色是一个兔子，它将自动跳到它所登陆的任何平台上。 要创建它，我们需要首先在preload（）中加载bunny-stand.png图像

```javascript
1 preload()
2 {
3 // we added these earlier...
4 this.load.image('background', 'assets/bg_layer1.png')
5 this.load.image('platform', 'assets/ground_grass.png')
6
7 // add this new line
8 this.load.image('bunny-stand', 'assets/bunny1_stand.png')
9 }
```

现在，此图像加载代码应该已经很熟悉了！
因此，这似乎……很愚蠢，但请尝试告诉自己第8行发生了什么。
您无需大声说出来。 那只会让你看起来疯狂！ 只需用头脑中的声音向自己解释。
与自己交谈完后，创建一个物理精灵来表示玩家，如下所示：

```javascript
1 create()
2 {
3 // previous platform code...
4
5 // create a bunny sprite
6 this.physics.add.sprite(240, 320, 'bunny-stand')
7 .setScale(0.5)
8 }
```

保存您的更改，一个兔子应该出现在游戏中。 它会通过所有平台并从屏幕上掉出来，就像它不在乎一样。

## 添加碰撞

Arcade Physics并不假设一切都应该相互碰撞。


我们必须通过创建一个像这样的对撞机来告诉它什么东西应该相互碰撞：

```javascript
1 create()
2 {
3 // previous platform code...
4
5 // create a bunny sprite
6 const player = this.physics.add.sprite(240, 320, 'bunny-stand')
7 .setScale(0.5)
8
9 this.physics.add.collider(platforms, player)
10 }
```

注意，我们创建了一个播放器变量来保存兔子。
然后，在较早创建的平台和新的player变量之间添加一个对撞机。
游戏现在应该显示兔子降落在平台上。
众神有可能不对你微笑，而是随机创建了所有平台
从中心。 刷新一下，直到有一个平台可以放下兔子。

![image-20200602113114222](http://jikeyt.com/img/Phaser3Book/image-20200602113114222.png)