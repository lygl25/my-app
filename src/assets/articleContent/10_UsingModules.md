# 使用模块

模块是另一个术语。 您可以将它们视为JavaScript文件。
我们将使用如下语法从模块导入各种绑定（或导出）：

```javascript
import { banana } from './fruits.js'
```

该代码导入是从名为fruits.js的模块导入（或导出）banana绑定。
结果如下所示：

```javascript
const banana = {
 color: 'yellow',
 ripe: true
 }

 export {
 banana
 }
```

看到我们用export关键字导出了banana。 这就是为什么我们可以较早地导入它的原因
例。我们想使用Phaser进行此操作，但没有导出Phaser的文件。 记住我们
使用

```
<script>
```

标签从Internet加载Phaser的发行版。

分发版本只是意味着Phaser源代码是通过重新创建工具运行的
一个小型的单一软件包，可在现代和旧版浏览器中运行。
那么我们如何解决这个问题呢？ 游戏开发以及一般的软件工程
关于解决问题。
首先，在src文件夹中创建一个lib文件夹。 然后在lib中创建一个名为phaser.js的新文件。
codein phaser.js将仅从phaser.js文件中导出window.Phaser。

```javascript
export default window.Phaser
```

我们可以在main.js文件中导入Phaser,用以下内容替换main.js中的内容：

```javascript
import Phaser from './lib/phaser.js'

 console.dir(Phaser)
```

保存所有文件，Live Server应检测到您进行了更改并自动重新加载。 如果不是，那么您可能必须停止并重新启动LiveServer或手动重新加载浏览器。
您应该看到一个对象已登录到浏览器控制台。 通过单击检查进行检查，它将展开以显示属于Phaser的各种属性。