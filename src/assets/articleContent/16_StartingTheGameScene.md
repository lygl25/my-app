# 开始游戏场景

我们创建了一个基本的Game Scene类，但是Phaser对此一无所知！
打开main.js文件，并将场景属性添加到传递给Phaser.Game的配置对象中
像这样：

```javascript
 import Phaser from './lib/phaser.js'

 import Game from './scenes/Game.js'

 export default new Phaser.Game({
         type: Phaser.AUTO,
         width: 480,
         height: 640,
         scene: Game
 })
```

我们新创建的Game Scene在第3行中导入。然后在第9行中使用它指定应该启动的Scene Phaser。
保存更改，重新加载后浏览器中将看不到可见的更改。 它仍然应该是黑屏。
接下来我们将改变它！