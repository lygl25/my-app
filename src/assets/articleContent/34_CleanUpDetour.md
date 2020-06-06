# 清理弯路

在继续之前，我们将进行一次非常小的清理。
我们的Carrot类是从Phaser.GameObjects.Sprite扩展的，但是由于我们在物理组中使用它，因此我们知道它确实是Phaser.Physics.Arcade.Sprite。
如果不进行此更改，代码中的任何内容都不会中断。 这只是整洁和准确的问题。

Carrot类声明应如下所示：

```
1 export default class Carrot extends Phaser.Physics.Arcade.Sprite
2 {
3 // class body...
4 }
```

