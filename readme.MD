### 一个自适应小工具

输入两个宽高： 内容宽高和容器宽高， 自动计算内容宽高等比适应容器宽高的结果

比如：  
输入 {width:1,height:1} + {width:3,height:5}  
输出 {width:3,height:3,left:0,top:1,scale:3}

type 支持 in out width height

默认为 in， 适应结果会在容器内部

如果为 out， 则
输入 {width:1,height:1} + {width:3,height:5} + 'out'  
输出 {width:5,height:5,left:-1,top:0,scale:5}

type 输入 width 为按`宽度`缩放， 与大小无关

type 输入 height 为按`高度`缩放， 与大小无关
