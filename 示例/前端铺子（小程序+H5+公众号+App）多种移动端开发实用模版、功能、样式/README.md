<p align="center">
    <img width="200" src="https://cdn.zhoukaiwen.com/logo.png">
</p>

<p align="center">
	<a href="https://gitee.com/kevin_chou/qdpz/stargazers" target="_blank">
		<img src="https://svg.hamm.cn/gitee.svg?type=star&user=kevin_chou&project=qdpz"/>
	</a>
	<a href="https://gitee.com/kevin_chou/qdpz/members" target="_blank">
		<img src="https://svg.hamm.cn/gitee.svg?type=fork&user=kevin_chou&project=qdpz"/>
	</a>
	<img src="https://svg.hamm.cn/badge.svg?key=Platform&value=微信小程序"/>
</p>

<h1 align="center">《前端铺子》· 开源，易上手~ </h1>

<div align="center">



<p>基于uni-app、colorUi、uView，支持小程序、H5、Android和IOS</p>

```
🕙 项目基本保持每日更新，右上随手点个 🌟 Star 关注，这样才有持续下去的动力，谢谢～
```

</div>

</br></br>
### 扫码体验
<img src="https://cdn.zhoukaiwen.com/qdpz_ewm.png" width="100%" />

### 文档地址
[点击查看详细说明文档，一定要仔细看哦～](http://qdpz.zhoukaiwen.com/)

### 项目说明

1.  项目基于Vue-uniApp，使用colorUi与uview框架，部分Demo参考uniApp插件市场等，感谢各位作者～
2.  项目包含功能 (部分)：
> * 自定义视频插件
> * 自定义TabBar与顶部
> * 引导页
> * 瀑布流
> * 排行榜
> * 聊天室
> * 电子签名
> * 视频播放
> * 证件识别
> * 便捷查询
> * 文档预览
> * 在线答题
> * 主题切换
> * 渐变动画
> * 加载动画
> * 签到页面
> * 会员中心
> * 授权登录
> * 图片编辑器
> * 摄影师资料
> * 自定义键盘
> * 行政区域图
> * 海报生成器
> * 自定义相机
> * 照片加水印
> * 海报设计工具
> * 地图轨迹回放
> * 数据封装请求
> * 图表（ucharts）
> * 小程序分享等等...
> 
3.  组件模版是为了大家做需求时方便查阅参考，万一哪天公司的产品给你提出来了～
4.  其他功能还在补充中，部分接口已删除，如果有其他需求也可以留言给我～
5.  开源的目的就是为了方便同行的小伙伴，还请各位多支持～ 
6.  本人自知技术还处于底层，还是有很多需要学习的地方！


### 部分截图
<img src="https://zhoukaiwen.com/img/Design/app/FotoJet11.jpg" width="100%" />
<img src="https://zhoukaiwen.com/img/Design/app/FotoJet1.jpg" width="100%" />
<img src="https://cdn.zhoukaiwen.com/FotoJet2.png" width="100%" />
<img src="https://cdn.zhoukaiwen.com/FotoJet3.png" width="100%" />
<img src="https://cdn.zhoukaiwen.com/FotoJet4.png" width="100%" />
<img src="https://zhoukaiwen.com/img/Design/app/FotoJet6.jpg" width="100%" />
<img src="https://zhoukaiwen.com/img/Design/app/FotoJet7.jpg" width="100%" />
<img src="https://cdn.zhoukaiwen.com/FotoJet5.png" width="100%" />
<img src="https://zhoukaiwen.com/img/Design/app/FotoJet9.jpg" width="100%" />
<img src="https://zhoukaiwen.com/img/Design/app/FotoJet8.jpg" width="100%" />
<img src="https://zhoukaiwen.com/img/Design/app/FotoJet12.jpg" width="100%" />
<img src="https://zhoukaiwen.com/img/Design/app/FotoJet13.jpg" width="100%" />
<img src="https://cdn.zhoukaiwen.com/FotoJet13.jpg" width="100%" />


### 目录说明
```                
├─colorui        		// colorui插件依赖
├─common              	// 项目相关公共js方法
│	├─amap-wx.js		// 高德地图依赖js
│	├─classify.data.js	// 模拟数据
│	├─geocode-utils.js	// 腾讯地图方法封装
│	├─projectData.js	// 项目模拟数据
│	├─qqmap-wx-jssdk.js	// 腾讯地图依赖js
│	├─request.js		// 数据请求封装
│	└─uiImg.js			// 模拟数据
│
├─components          	// 项目中使用到的功能封装
│
├─os_project      		// 客户项目入口
│
├─pages      			// 页面入口文件夹
│	├─index				// 主页4个TabBar页面
│	├─me				// 个人中心内页面
│	├─news				// 新闻页
│	├─project			// 项目展示页
│	├─design			// 设计模板 · 瀑布流
│	├─timeline			// 时间轴
│	└─video				// 视频播放页
│
└─video					// 付费模版入口
│	├─customCamera		// 自定义相机/图片编辑器
│	├─posterList		// 海报设计列表
│	└─posterImg			// 海报设计详情页
│
├─static            	// 静态资源
├─tn_components       	// 组件模板页面入口
	├─drag_demo				// 悬浮球
	├─chat					// 聊天室
	├─login					// 登录页合集
	├─anloading.vue			// 自定义加载框
	└─bgcolor.vue			// 背景色
	└─bggrad.vue			// 背景渐变
	└─charts.vue			// 图表展示
	└─clock.vue				// 每日签到
	└─company.vue			// 自定义相机
	└─course.vue			// 课班信息
	└─discern.vue			// 证件识别
	└─details.vue			// 通用详情页
	└─district.vue			// 行政区域图
	└─guide.vue				// 引导页
	└─imageEditor.vue		// 图片编辑器
	└─keyboard.vue			// 自定义键盘
	└─mapLocus.vue			// 地图轨迹
	└─medal.vue				// 会员中心
	└─mimicry.vue			// 新拟态
	└─openDocument.vue		// 文档预览
	└─pano.vue				// webview高德地图
	└─poster.vue			// 海报生成器
	└─request.vue			// 模拟数据请求
	└─takePicture.vue		// 摄影师资料
	└─salary.vue			// 排行榜
	└─search.vue			// 便捷查询
	└─sign.vue				// 手写签名
	└─timeline.vue			// 时间轴
	└─timetables.vue		// 课程表
├─uview-ui				// uview-ui插件依赖
├─App.vue				// vue项目入口文件
├─LICENSE				// 许可证
├─main.js				// 公共js
├─manifest.json			// uniapp项目配置文件
├─pages.json			// 页面路由配置页
├─README.md				// 说明文档
└─uni.scss				// uniapp内置的常用样式变量

```

### 安装教程

1.  下载安装：「HBuildX」、「微信开发者工具」
2.  扫码登陆微信开发者工具
3.  将项目拖进【HBuildX】- 运行 - 微信小程序 - 完成


### 作者信息

1.  作者：周凯文 (Kevin)
2.  邮箱：280224091@qq.com
3.  微信：280224091


### 其他说明
> *  查看最新项目，请使用微信搜索小程序：“7he丶Kevin”
> *  如果有不错的页面功能、设计，大家都可以参与项目开发
> *  前端铺子 首页 [qdpz.zhoukaiwen.com](https://qdpz.zhoukaiwen.com)

### 关于后台
> *  目前使用 `「若依」` 制作的后台，感谢作者开源！
> * 已完成板块：文章资讯、开源项目管理等，并且在持续制作中... 请关注项目。
<img src="https://zhoukaiwen.com/img/qdpz/b1.png" width="100%" />
<img src="https://zhoukaiwen.com/img/qdpz/r3.png" width="100%" />


### 「前端铺子」交流群
<p>一群人数已500人满，大家可扫码加我拉群，请备注：gitee</p>
<p>已加入大佬：naive-ui-admin啊俊、图鸟-可我会像、TopicQ作者等等前后端全栈大佬</p>
<p>
<img src="https://zhoukaiwen.com/img/WechatIMG1320.jpeg" width="300px" />
<img src="https://cdn.zhoukaiwen.com/xhd_wx.jpg" width="300px" />
</p>



### 赞助作者
> *  打赏就duck不必啦～ 就点点🌟 Star 🌟 关注更新，支持下作者就可以了

### 有项目、设计、其他方面需求合作，可以联系微信：
> *  280224091（请备注：合作/需求/设计/等）