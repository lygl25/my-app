# 将胡萝卜放在平台上

我们可以有漂浮的胡萝卜，但是猪很可能会在胡萝卜之前长出翅膀并盘旋。 让我们将胡萝卜放在平台之上，而不是漂浮在上面，以便为它们提供住宿的地方。
首先，让我们在平台和胡萝卜之间添加一个对撞机，例如：

```javascript
1 create()
2 {
3 // previous code...
4
5 // remove this test carrot
6 // this.carrots.get(240, 320, 'carrot')
7
8 // add this collider
9 this.physics.add.collider(this.platforms, this.carrots)
10 }
```

接下来，让我们添加一个addCarrotAbove（sprite）方法，该方法会将Carrot置于给定的上方
雪碧。
出于上一章中提到的可重用代码的原因，我们使用了通用Sprite。
horizontalWrap（sprite）。
将其放在游戏场景的底部：

```javascript
1 export default class Game extends Phaser.Scene
2 {
3 /**
4 * @param {Phaser.GameObjects.Sprite} sprite
5 */
6 addCarrotAbove(sprite)
7 {
8 const y = sprite.y - sprite.displayHeight
9
10 /** @type {Phaser.Physics.Arcade.Sprite} */
11 const carrot = this.carrots.get(sprite.x, y, 'carrot')
12
13 this.add.existing(carrot)
14
15 // update the physics body size
16 carrot.body.setSize(carrot.width, carrot.height)
17
18 return carrot
19 }
20 }
```

这段代码应该是我们以前做过的事情的结合，应该很熟悉。
胡萝卜实例以其displayHeight为指导定位在给定的精灵上方。
更准确的公式是减去sprite.displayHeight的一半和胡萝卜的一半
来自sprite.y的displayHeight。
我们使用的简单得多的公式适用于该游戏。 如果尝试使用其他资产，则可能必须切换到更准确的版本。
第一段代码是第16行，我们将物理主体的大小调整为胡萝卜的宽度和高度。
在有无此行的情况下对其进行测试，以查看区别。 最后，当我们重用平台时，可以调用此方法：

```javascript
1 update(t, dt)
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
12
13 // create a carrot above the platform being reused
14 this.addCarrotAbove(platform)
15 }
16 })
17
18 // other code...
19 }
```

将平台移至屏幕顶部后，将调用this.addCarrotAbove（）。
试试看！ 跳了几根之后，应该会看到胡萝卜出现在平台顶部。
但是你仍然无法收集他们……