# 添加启用物理的平台

现在我们启用了Arcade Physics，我们可以创建一个启用了物理学的平台。 取代creat-
通过以下方式创建平台图像：

```
 // 替代这些
 // this.add.image(240, 320, 'platform')
 // .setScale(0.5)

 // 用这些
 this.physics.add.image(240, 320, 'platform')
 .setScale(0.5)
```

更改游戏场景后，您应该会看到一个平台从屏幕上掉下来。
我们实际上希望平台保持静止状态。 这被称为静态物理物体。 使用this.physics.add.staticImage（）是一个选项，但是，我们还需要一堆平台。 因此，让我们使用this.physics.add.staticGroup（）来解决这两个问题！