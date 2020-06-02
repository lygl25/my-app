# 绕道类

类是一种面向对象的编程概念，用于组织相关的数据和逻辑，然后可以从中创建实例。
假设您有一个Rabbit类，其中包含诸如能量之类的数据。 使用Rabbit类，您可以创建能量= 100的youngRabbit和能量= 50的oldRabbit等实例。
youngRabbit和oldRabbit的组成和结构相同，但统计信息不同。
回到我们的游戏场景，Game.js中的代码应如下所示：

```javascript
import Phaser from '../lib/phaser.js'

export default class Game extends Phaser.Scene
	{
       constructor()
 		{
 			super('game')
		}

 		preload()
            {
                }

 		create()
            {
                }
 }
```

每个场景都必须定义一个唯一的键。 我们通过调用super（'game'）在构造函数上执行此操作。

preload（）和create（）方法是Phaser在适当的时候调用的钩子。

调用preload（）允许我们在启动场景之前指定要加载的图像，音频或其他资产。

一旦场景的所有资源都已加载，就会调用create（）。 create（）中只能使用已加载的资产。 尝试使用尚未加载的资产将导致错误。

