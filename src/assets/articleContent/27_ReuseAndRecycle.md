# 滚动平台

无限跳投游戏的关键部分在于，随着玩家跳得越来越高，平台会不断出现。
我们可以在播放器向上移动时创建新平台，但也可以重用在屏幕外滚动的平台。
基本上，我们将平台放在底部，并随着玩家跳得越来越高将它们移到顶部。
如果玩家跌倒了最后一个可见平台，这也会增加游戏超载情况。
要添加无限平台的烟雾和镜像，我们必须首先创建平台类属性，就像在上一章中对player所做的那样。
我们需要这样做，以便在update（）中检查每个平台并在不再可见时移动它们。

```javascript
1 export default class Game extends Phaser.Scene
2 {
3 /** @type {Phaser.Physics.Arcade.StaticGroup} */
4 platforms
5
6 // 玩家属性...
7
8 create()
9 {
10 // 背景...
11
12 // 更改为使用类属性而不是局部变量
13 this.platforms = this.physics.add.staticGroup()
14
15 // 然后从组中创建5个平台
16 for (let i = 0; i < 5; ++i)
17 {
18 const x = Phaser.Math.Between(80, 400)
19 const y = 150 * i
20
21 // 在这里也使用this.platforms
22 /** @type {Phaser.Physics.Arcade.Sprite} */
23 const platform = this.platforms.create(x, y, 'platform')
24 platform.scale = 0.5
25
26 /** @type {Phaser.Physics.Arcade.StaticBody} */
27 const body = platform.body
28 body.updateFromGameObject()
29 }
30
31 //其他代码...
32
33 // 并在这里更改它
34 this.physics.add.collider(this.platforms, this.player)
35
36 //其他代码...
37 }
```

回想一下，我们通过将它们添加到类中来创建类属性，如第4行所示。
在其上方，我们使用JSDoc定义类型，以帮助VS Code为我们提供适当的代码完成。 然后在create（）中，将对本地平台变量的所有引用更改为class属性
this.platforms。
保存所做的更改，并确保游戏仍能按预期运行。 如果没有，请确保这一点。 平台被用来代替任何地方的平台。

## 重用和回收

现在，我们可以添加将平台从屏幕底部移到顶部的逻辑。
在具有庞大或无限滚动列表的移动应用程序中使用相同的概念。 我们将为该游戏实施一个非常基本的版本。

```javascript
1 update()
2 {
3 this.platforms.children.iterate(child => {
4 /** @type {Phaser.Physics.Arcade.Sprite} */
5 const platform = child
6
7 const scrollY = this.cameras.main.scrollY
8 if (platform.y >= scrollY + 700)
9 {
10 platform.y = scrollY - Phaser.Math.Between(50, 100)
11 platform.body.updateFromGameObject()
12 }
13 })
14
15 // 先前的代码...
16 }
```

上面的代码遍历this.platforms组中的每个平台。 迭代意味着遍历每个对象并对它们执行一些操作。
我们正在执行的操作是检查每个平台的y值是否大于或等于相机滚动的垂直距离加上固定的700像素。
如果是这样，我们将平台移动到摄像机顶部上方50到100像素之间的某个随机量。
然后，我们刷新平台的物理主体以匹配对平台所做的更改，即y的更改。
保存这些更改，您会看到平台随着兔子跳得更高而继续出现。 您还应该看到我们也很快跳过了背景。
那不是我们想要的...