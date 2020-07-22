# 重用胡萝卜

通过创建一个胡萝卜组并调用*killAndHide（）*，我们基本上就可以重用胡萝卜了。
当我们调用*get（）*时，*Phaser*组将自动回收任何不活动的成员
*addCarrotAbove（）*。
它不会自动反应或使其可见，因此我们必须在*addCarrotAbove（*）中进行操作
：

```javascript
1 /**
2 * @param {Phaser.GameObjects.Sprite} sprite
3 */
4 addCarrotAbove(sprite)
5 {
6 const y = sprite.y - sprite.displayHeight
7
8 /** @type {Phaser.Physics.Arcade.Sprite} */
9 const carrot = this.carrots.get(sprite.x, y, 'carrot')
10
11 //设置为可见
12 carrot.setActive(true)
13 carrot.setVisible(true)
14
15 this.add.existing(carrot)
16
17 carrot.body.setSize(carrot.width, carrot.height)
18
19 //确保身体在物理世界中启用
20 this.physics.world.enable(carrot)
21
22 return carrot
23 }
```

第12和13行是我们确保胡萝卜活跃且可见的位置。 然后在第20行，我们确保在物理世界中启用了该身体。 立即尝试，一切都会按预期进行！

![image-20200606102451260](http://jikeyt.com/img/Phaser3Book/image-20200606102451260.png)

不过，有一个问题……没有人跟踪我们收集了多少胡萝卜！ 接下来解决这个问题。

实际上还有另一个问题！ 但是我们会留给您解决。
玩家未收集到的所有胡萝卜最终都会从屏幕上滚动下来，然后随着平台的回收而永远掉下去。
这可能会导致很多孤立的胡萝卜。 奇怪的是，您永远不会注意到这是一个问题。 但这是意想不到的行为，以后可能会再次咬我们。
好消息：您实际上知道如何解决此问题！ 只需应用我们对重用平台所做的工作即可。