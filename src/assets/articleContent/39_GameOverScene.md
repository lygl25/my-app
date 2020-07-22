# 处理游戏结束

该游戏的游戏结束条件是玩家跌倒可以落地的最后一个平台并继续永久跌入深渊。
我们的工作是检测何时发生这种情况。
关键是弄清楚哪个平台是最底层的平台，然后检查*player*是否已通过。
你会怎么做？
您将采取什么步骤来确定平台组中的哪个平台实际上是最后一个平台？
您定义来解决这一问题的步骤和过程称为算法。
多年来，计算机科学家和工程师已经开发或发现了许多东西，其中包括一个可以解决这个确切的问题！
我们将使用选择算法来查找y值最高的平台，以确定最底层的平台。
让我们向游戏场景添加一个findBottomMostPlatform（）方法：

```javascript
1 export default class Game extends Phaser.Scene
2 {
3 // previous code...
4
5 findBottomMostPlatform()
6 {
7 const platforms = this.platforms.getChildren()
8 let bottomPlatform = platforms[0]
9
10 for (let i = 1; i < platforms.length; ++i)
11 {
12 const platform = platforms[i]
13
14 // discard any platforms that are above current
15 if (platform.y < bottomPlatform.y)
16 {
17 continue
18 }
19
20 bottomPlatform = platform
21 }
22
23 return bottomPlatform
24 }
25 }
```

我们首先使用this.platforms.getChildren（）将所有平台作为一个数组获取。
然后，选择Array中的第一个作为当前最底部的平台。
接下来，对数组进行循环，并比较当前底部bottomform中的每个平台。 如果一个
平台的y位置大于底部平台，然后我们将其设置为新底部平台
。
一旦遍历整个数组，最后一个存储在底部平台上的平台就是底部
大多数平台返回。
现在要使用返回的值，请将其添加到update（）的底部

```javascript
1 update()
2 {
3 // previous code...
4
5 const bottomPlatform = this.findBottomMostPlatform()
6 if (this.player.y > bottomPlatform.y + 200)
7 {
8 console.log('game over')
9 }
10 }
```

首先，我们通过调用this.findBottomMostPlatform（）获得最底层的平台，并将其存储在bottomPlatform中。
然后，在将“游戏结束”登录到浏览器控制台之前，请检查播放器是否超过bottomPlatform 200像素。
试试看，看看消息是否出现在控制台中。 接下来，我们将创建一个Game Over Scene。

## 游戏结束场景

仅将单词“游戏结束”记录到浏览器控制台中是不够的。 播放器看不到！ 您多久查看一次浏览器控制台？
首先，在场景文件夹中创建一个新的GameOver.js文件。

```javascript
1 import Phaser from '../lib/phaser.js'
2
3 export default class GameOver extends Phaser.Scene
4 {
5 constructor()
6 {
7 super('game-over')
8 }
9
10 create()
11 {
12
13 }
14 }
```

所有这些看起来都类似于我们创建游戏场景时所做的工作。
请记住，每个场景都需要一个唯一的键。 我们在第7行对super（）的调用中提供了这一点。
接下来，让我们在create（）方法中添加一条简单的“ Game Over”消息：

```javascript
1 create()
2 {
3 const width = this.scale.width
4 const height = this.scale.height
5
6 this.add.text(width * 0.5, height * 0.5, 'Game Over', {
7 fontSize: 48
8 })
9 .setOrigin(0.5)
10 }
```

我们正在使用ScaleManager来获取游戏的宽度和高度，而不是硬编码数字。
然后，像以前一样创建一个简单的Text对象，并将原点设置为0.5，以使其在垂直和水平方向上居中。
在使用此场景之前，我们需要将其添加到游戏配置中。 转到main.js并更新配置的scene属性，如下所示：

```javascript
1 // other imports...
2
3 // import the GameOver Scene
4 import GameOver from './scenes/GameOver.js'
5
6 export default new Phaser.Game({
7 type: Phaser.AUTO,
8 width: 480,
9 height: 640,
10
11 // previously...
12 // scene: Game,
13
14 // now it should be this
15 scene: [Game, GameOver],
16
17 // physics...
18 })
```

我们要做的第一件事就是导入新的GameOver场景，就像我们对Game Scene所做的那样。
然后，我们将场景属性从仅采用Game类更改为采用Game Array并
GameOver类。
现在，当满足游戏结束条件时，我们可以使用GameOver场景。 在游戏场景中，将console.log（'game over'）行更改为：

```javascript
1 update()
2 {
3 // previous code...
4
5 const bottomPlatform = this.findBottomMostPlatform()
6 if (this.player.y > bottomPlatform.y + 200)
7 {
8 // remove this...
9 // console.log('game over')
10
11 // add this...
12 this.scene.start('game-over')
13 }
14 }
```

将更改保存到所有文件，然后尝试一下。 您应该一次发送到GameOver场景
您跌倒了最底层的平台！

