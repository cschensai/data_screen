This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### 数据大屏调研文档

#### 背景

> 数据大屏一般是在大屏幕上展示数据的变化，界面有以下特点
>
> - 体现未来科技感
> - 图表多样化
> - 地图多样化且动效感较强
> - 定制化点多

#### 技术选型

| 技术栈      | 对比       | 原因                                                         |
| ----------- | ---------- | ------------------------------------------------------------ |
| React       | /          | 单页面应用<br />组件懒加载<br />虚拟DOM对比，减少页面渲染性能消耗<br />符合现有团队技术体系 |
| ECharts     | Bizcharts  | 图表单一，适合后台报表系统开发                               |
|             | HighCharts | 国外开源项目，国内落地项目较少，文档英文版                   |
|             | D3.js      | 更细粒度的操作API，上手难度较大                              |
|             |            | ECharts<br />百度开源<br />落地项目、issue参考范围广<br />社区活跃度大，持续提供一些开源的图表<br />Api颗粒度较细，适合定制化图表<br />和现有技术栈无缝衔接 |
| Less        | Css        | 预编译语言<br />API提高开发效率<br />适合现有项目打包机制    |
| flexible.js |            | 界面自适应处理                                               |

### 开发总结

#### 物料

- flexible.js+rem

  - 实现各种屏幕兼容
  - vsCode插件px to rem
    - 开发中自动计算出rem
  - vsCode设置cssRem为合适大小，eg: 1920/24=80, rootFontSize即可设置为80px

- data-view-react

  - 数据大屏react版组件

- iconfont字体图标库

- 依赖包

  - echarts
  - echarts-gl
  - @jiaminghi/data-view-react

- 地图组件

  - 中国地图

    ```javascript
    // 引入地图必须要引入下面两个文件
    import* 'echarts/map/js/china';
    import* 'echarts/map/json/china.json';
    ```

  - 地球

    ```javascript
    // 必须要引入下面文件
    import 'echarts-gl';
    import 'echarts/map/js/world';
    import 'echarts/map/json/world.json';
    ```

- 参考文档

  - 基础API：https://echarts.apache.org/zh/option.html#title
  - 基础实例：https://echarts.apache.org/examples/zh/index.html
  - 社区实例：https://gallery.echartsjs.com/explore.html#sort=rank~timeframe=all~author=all

#### start（五部曲）

- init方法实例化echarts对象，绑定对应DOM容器节点

  ```javascript
  const myChart = echarts.init(document.querySelector('#id'));
  ```

- 初始化option配置项

  ```javascript
  const option = {
    xxx: 'xxx'
  }
  ```

- setOption添加配置项

  ```javascript
  myChart.setOption(option);
  ```

- 暴露当前实例，供外层使用

  ```javascript
  return myChart;
  ```

- 适应屏幕缩放

  ```javascript
  // 屏幕缩放对chart图表进行自适应处理，调用实例的resize方法
  window.onresize = () => {
    myChart.resize();
  }
  ```

#### 优化

##### 资源优化

- 图片oss存储

##### 组件优化

- 依赖React.lazyApi,组件懒加载

##### 代码优化

- 循环加key
- 公共less处理
- data-view-react组件按需加载
- 定时器实例销毁

#### 注意事项

- 图片资源较多

  - 解决方案：oss或者cdn存储

- 特殊字体处理

  ```less
  // 数字字体
  @font-face {
    // 定义字体名称
    font-family: electronicFont;
    // 字体资源
    src: url('../../assets/font/DS-DIGIT.TTF');
  }
  ```

- 3D地球的引入

  - 素材来源
    - echarts-gl github
      - https://github.com/ecomfe/echarts-gl/tree/master/test/asset

- 
``` js
  // 目前只能使用相对路径，不能使用oss在线地址
	globe: {
					baseTexture: '../../xxx',
					heightTexture: '../../xxx',
```

