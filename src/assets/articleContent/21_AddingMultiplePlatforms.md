# 添加多个平台

我们为基于物理学的平台创建StaticGroup的方法如下：

```javascript
create()
2 {
3 // 删除这些
4 // this.physics.add.image(240, 320, 'platform')
5 // .setScale(0.5)
6
7 // 创建组
8 const platforms = this.physics.add.staticGroup()
9
10 // 然后从组中创建5个平台
11 for (let i = 0; i < 5; ++i)
12 {
13 const x = Phaser.Math.Between(80, 400)
14 const y = 150 * i
15
16 /** @type {Phaser.Physics.Arcade.Sprite} */
17 const platform = platforms.create(x, y, 'platform')
18 platform.scale = 0.5
19
20 /** @type {Phaser.Physics.Arcade.StaticBody} */
21 const body = platform.body
22 body.updateFromGameObject()
23 }
24 }
```

首先，我们创建一个StaticGroup并将其分配给平台。
然后，我们使用for循环在80和400之间的一个随机x位置和y处创建5个平台
相距150像素的位置。
注意，像以前一样将其缩放为0.5。
/ **和* /之间的符号是JSDoc注释。 现在不用担心它们。 只要知道他们是帮助VS Code给了我们正确的代码完成。
最后一件事是对updateFromGameObject（）的调用。 这将根据我们对GameObject所做的任何更改（例如位置和比例）来刷新物理主体。
游戏应如下所示：

![image-20200602111532408](http://www.jikeyt.com/img/Phaser3Book/image-20200602111532408.png)

平台的确切位置会有所不同，因为我们使用的是随机x值。 您可以刷新浏览器以查看平台位置每次更改的情况。

我们拥有适当大小的平台，可以保留。
我们接下来需要的是某些东西或某人可以跳上它们！