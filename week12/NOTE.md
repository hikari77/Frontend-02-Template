学习笔记

### week12 组件化


+ 前端最大的两个需要解决的问题是组件化和架构模式
    - 组件化解决方案 - React，Vue
    - 主流模式- MVVM，MVC

+ 本周是以借助react jsx parser来解析JXS语法然后构建自己的方法-createElement()来构建DOM，而非虚拟DOM

+ 普通对象与组件的对比， 组件多了很多描述自身的一些东西比如 attributes, config, state, event, lifecysle, children
+ 组件是为了完成某种任务而且需要有可复用性，
    - 为了满足UI的树状描述（类似dom结构）children 很重要
    - state 只可以从终端用户的输入来改变
    - event 是由组件传达给使用者的

总结： 本来开始了解react是怎么解决组件化问题的，期待后面介绍vue是什么方式解决的。