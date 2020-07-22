# 让我们收集一些胡萝卜

现在我们的胡萝卜在平台上，我们终于可以添加逻辑来收集它们。 我们将使用重叠而不是对撞机来收集胡萝卜。
将此添加到create（）的末尾：

```javascript
1 create()
2 {
3 // previous code...
4
5 this.physics.add.collider(this.platforms, this.carrots)
6
7 // 以这种方式格式化以使其更易于阅读
8 this.physics.add.overlap(
9 this.player,
10 this.carrots,
11 this.handleCollectCarrot, // called on overlap
12 undefined,
13 this
14 )
15 }
```

看到我们添加了与this.physics.add.overlap（）的重叠。
我们将每个传入的参数放在不同的行上，以实现更好的书籍格式。 您可以将其放在计算机的一行上。
我们正在测试胡萝卜组和玩家之间是否存在重叠。
然后，当发生重叠时，将调用handleCollectCarrot方法。
undefined参数用于我们不需要的流程回调，最后，*this* 作为上下文传递，这是我们确实需要的并且很重要。
在此处提供正确的上下文对于确保当Phaser调用handleCollectCarrot方法。
如果那对您没有意义，那就不用担心！ 通过将现代JavaScript与Phaser结合使用，您几乎总是希望始终将其作为上下文传递。
所以就那样做。 您稍后可以了解有关JavaScript范围和上下文的更多信息。
现在，将handleCollectCarrot方法添加到游戏场景的底部：

```javascript
1 export default class Game extends Phaser.Scene
2 {
3 // previous code...
4
5 /**
6 * @param {Phaser.Physics.Arcade.Sprite} player
7 * @param {Carrot} carrot
8 */
9 handleCollectCarrot(player, carrot)
10 {
11 //隐藏显示
12 this.carrots.killAndHide(carrot)
13
14 // disable from physics world
15 this.physics.world.disableBody(carrot.body)
16 }
17 }
```

在这种方法中，我们得到了玩家重叠的胡萝卜。
该代码通过调用组的killAndHide（）方法并传递胡萝卜实例来取消激活并隐藏胡萝卜。
接下来的重要步骤是使世界的物理学机构失去能力。
保存您的更改，然后尝试一下。 一旦碰到胡萝卜，胡萝卜就会消失。

但这时上面的胡萝卜不会再出现了 ！ 游戏开发是一个难题，不是吗？