# 收集胡萝卜

每个好的游戏都需要收集一些东西。 兔子喜欢胡萝卜。 因此，让我们的兔子吃些胡萝卜。
这次，我们将为胡萝卜创建一个单独的类，并将其导入到Game Scene中。
首先，在src下创建一个名为game的新文件夹。 它应该与场景处于同一级别，并且
库,然后在游戏文件夹中创建一个名为Carrot.js的新文件。 Carrot类的代码将如下所示：

```javascript
1 import Phaser from '../lib/phaser.js'
2
3 export default class Carrot extends Phaser.GameObjects.Sprite
4 {
5 /**
6 * @param {Phaser.Scene} scene
7 * @param {number} x
8 * @param {number} y
9 * @param {string} texture
10 */
11 constructor(scene, x, y, texture)
12 {
13 super(scene, x, y, texture)
14
15 this.setScale(0.5)
16 }
17 }
```

首先，我们将从../lib/phaser.js导入Phaser，因为我们将从Phaser进行扩展。 GameObjects.Sprite。
Carrot类声明位于第3行，它是默认导出。
这是现代的JavaScript功能，这意味着我们以后可以像这样导入Carrot：

```javascript
1 import Carrot from './Carrot.js`
```

类主体只是一个构造器，它接受场景引用，然后接受x和y位置。

然后，最后一个参数纹理是加载的图像使用的键。
super（）所在的行将调用父类的构造函数：Phaser.GameObjects.Sprite。 我们必须这样做，以便执行Sprite类中的初始化代码。
我们没有使用x，y或纹理值做任何工作，但是必须有人来创建一个
雪碧。 没有什么是魔术！
从事这项工作的人是Sprite类，并使用给定的参数调用super（）使其能够完成工作。
最后，将比例设置为0.5，因为我们知道所有资产的大小都是我们想要的两倍。 在游戏场景中，我们先前创建平台和玩家后称为setScale。
使用类的一个好处是我们可以隐藏这些类型的内部配置详细信息-有些人会认为这是负面的。 我们中间的禅宗更了解两者。
但不管怎么说…



## 在游戏中添加胡萝卜

现在我们有了Carrot类，让我们加载胡萝卜.png图像并创建一些胡萝卜！ 首先，在preload（）中：

```javascript
1 preload()
2 {
3 // load other images..
4
5 this.load.image('carrot', 'assets/carrot.png')
6
7 // cursor keys...
8 }
```

您现在应该已经很了解这里发生了什么。 接下来，我们需要导入Carrot类。

```javascript
1 import Phaser from '../lib/phaser.js'
2
3 // import the Carrot class here
4 import Carrot from '../game/Carrot.js'
5
6 export default class Game extends Phaser.Scene
7 {
8 // class body...
9 }
```

添加第4行将使我们能够创建新的Carrot类实例。 因此，让我们在create（）中进行操作：

```javascript
1 create()
2 {
3 // previous code...
4
5 // create a carrot
6 const carrot = new Carrot(this, 240, 320, 'carrot')
7 this.add.existing(carrot)
8 }
```

这将在游戏中间显示一个胡萝卜。 这只是*Sprite*的声音与之互动。
这是一个很难收集胡萝卜的问题，而我们却想收集很多
他们。
嗯...
什么样的系统已经让我们做这些事情了？
猜一下。
你猜到了吗？
是街机物理和群组！