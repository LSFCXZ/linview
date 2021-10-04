# 快速开始
1. #### 安装组件库

 ```shell
   npm i linvie
 ```

2. #### 引用组件库

```js
//引入全部
import 'linview/lib/lview/index.css';
import lview from 'linview';
Vue.use(lview)

//按需引入
import 'linview/lib/lview/card.css'
import Card from 'linview/lib/card';
Vue.use(Card)
```

> TIP：暂时不支持CDN，暂时不支持import{demo} from 'linview' 引入

