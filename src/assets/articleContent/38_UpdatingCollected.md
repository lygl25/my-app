# 跟踪分数

我们有一个可以收集胡萝卜的兔子，但我们需要知道已经收集了多少胡萝卜。
跳得越高，收集的胡萝卜就越多。 收集的胡萝卜数是我们如何确定得分的！
首先，我们需要创建一个类属性来保存收集的胡萝卜数：

```javascript
1 export default class Game extends Phaser.Scene
2 {
3 carrotsCollected = 0
4
5 // previous code...
6 }
```

这是我们创建的最简单的类属性！ 这只是一个数字，因此我们不需要任何JSDoc注释。
接下来，在*handleCollectCarrot（）*方法中，我们需要增加胡萝卜胡萝卜：

```javascript
1 /**
2 * @param {Phaser.Physics.Arcade.Sprite} player
3 * @param {Carrot} carrot
4 */
5 handleCollectCarrot(player, carrot)
6 {
7 this.carrots.killAndHide(carrot)
8
9 this.physics.world.disableBody(carrot.body)
10
11 // increment by 1
12 this.carrotsCollected++
13 }
```

我们使用++速记来增加1，但您也可以这样做：

```javascript
1 this.carrotsCollected = this.carrotsCollected + 1
```

接下来，我们需要显示数字。 Phaser可让我们轻松制作文本，因此请在create（）中添加一个：

```javascript
1 create()
2 {
3 // previous code...
4
5 const style = { color: '#000', fontSize: 24 }
6 this.add.text(240, 10, 'Carrots: 0', style)
7 .setScrollFactor(0)
8 .setOrigin(0.5, 0)
9 }
```

我们使用this.add.text添加一个Text对象，并将其放置在x轴的中间和y轴的中间10处。
初始文本设置为'Carrots：0'，然后给出一个TextStyle对象，该对象将颜色设置为黑色，大小设置为24像素。
我们之前使用过setScrollFactor（）来阻止背景随着相机滚动。 我们在此处以相同的方式使用它来禁用滚动。
然后，我们使用setOrigin（0.5，0）保持文本居中。 这也称为锚点或枢轴点。
尝试这些更改。 您应该在屏幕顶部看到文本。

## 更新收集的胡萝卜上的文本

文字在那里，但您会注意到当我们收集胡萝卜时它没有改变。
可以通过创建一个类属性来存储Text实例，然后在
我们增加胡萝卜收集后的handleCollectCarrot。 到目前为止，创建新的类属性应该是第二天性了！

```javascript
1 export default class Game extends Phaser.Scene
2 {
3 // other properties...
4
5 /** @type {Phaser.GameObjects.Text} */
6 carrotsCollectedText
7
8 create()
9 {
10 // previous code...
11
12 const style = { color: '#000', fontSize: 24 }
13 this.carrotsCollectedText = this.add.text(240, 10, 'Carrots: 0'
, style)
14 .setScrollFactor(0)
15 .setOrigin(0.5, 0)
16 }
17
18 // other code...
19
20 /**
21 * @param {Phaser.Physics.Arcade.Sprite} player
22 * @param {Carrot} carrot
23 */
24 handleCollectCarrot(player, carrot)
25 {
26 this.carrots.killAndHide(carrot)
27
28 this.physics.world.disableBody(carrot.body)
29
30 // increment by 1
31 this.carrotsCollected++
32
33 // create new text value and set it
34 const value = `Carrots: ${this.carrotsCollected}`
35 this.carrotsCollectedText.text = value
36 }
37 }
```

在顶部创建胡萝卜胡萝卜文本属性，然后将创建的文本分配给该属性
create（）中的实例。
通过引用现有的Text实例，我们可以在handleCollectCarrot（）中更改显示文本。
第34行使用JavaScript的字符串插值语法，通过在“ Carrots：”旁边插入this.carrotsCollected的值来创建新的文本值。
然后，我们将此新值设置到this.carrotsCollectedText.text中以更新显示的内容

文本。
保存更改并尝试一下！ 现在，您应该确切知道随着跳得越来越高，您收集了多少胡萝卜！

![image-20200606105133306](http://jikeyt.com/img/Phaser3Book/image-20200606105133306.png)

我们的游戏即将完成！
接下来，当玩家跌倒最底层平台时，我们需要应对他们的失败。