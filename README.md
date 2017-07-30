# ch-wx

> 长虹微信端页面

## 目录结构

    ├── build                      // 构建相关
    ├── config                     // 配置相关
    ├── node_modules               // node模块包
    ├── dist                       // 打包文件(npm run build自动生成)
    ├── src                        // 源代码
    │   ├── assets                 // 主题 字体等静态资源
    │   ├── components             // 全局公用组件
    │   ├── http                   // 所有请求
    │   ├── mock                   // js模拟数据
    │   ├── pages                  // 页面
    │   ├── router                 // 路由
    │   ├── store                  // 全局store管理
    │   ├── template               // 页面模板
    │   ├── styles                 // 全局样式
    │   ├── utils                  // 全局公用方法
    │   ├── App.vue                // 入口页面
    │   └── main.js                // 入口 加载组件 初始化等
    ├── static                     // 第三方不打包资源
    ├── mock                       // json模拟数据
    ├── .babelrc                   // babel-loader 配置
    ├── .editorconfig              // 编辑器配置项
    ├── .eslintignore              // eslint 忽略项
    ├── .eslintrc.js               // eslint 配置项
    ├── .gitignore                 // git 忽略项
    ├── .postcssrc.js              // postcss配置项
    ├── favicon.ico                // favicon图标
    └── package.json               // package.json

## Build Setup

``` bash
# install dependencies
npm install(or cnpm install)

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 前端规范

### 静态资源路径规范

* 需要webpack参与压缩或转为编码的图片保存在 /src/assets 目录中
* 第三方资源如jQuery/Bootstrap/字体图标保存在 /static 目录中

### 代码命名规范

在 HTML 模版中，请使用 kebab-case 形式：

```javascript
<!-- 在HTML模版中始终使用 kebab-case -->
<kebab-cased-component></kebab-cased-component>
<camel-cased-component></camel-cased-component>
<pascal-cased-component></pascal-cased-component>
```

在script中，请使用 camelCase 形式：

```javascript
components: {
  'kebab-cased-component': { /* ... */ }, // x 不推荐
  camelCasedComponent: { /* ... */ }, // √ 推荐
  PascalCasedComponent: { /* ... */ } // x 不推荐
}
```

在导入组件/页面时，请使用PascalCase形式：

```javascript
import { Group, Popup, XInput, XButton } from 'vux'
import PopA from '@/components/PopA' // √ 推荐
```

在编辑组件/页面的name字段时，请使用camelCase形式：

```javascript
export default {
  name: 'app', // √ 推荐
  data () {
    return {
      transitionName: ''
    }
  },
  components: {
    isrHeader
  },
  computed: {
    ...mapState({
      isWechat: state => state.wechatAppraisal.isWechat
    })
  }
}
```

### 文件命名规范
components（组件）与pages（页面）文件命名请使用PascalCase形式：

    ├── pages                      // 页面目录
        ├── PageIndex.vue          // 页面A
        ├── PageDetails.vue        // 页面B

    ├── components                 // 组件目录
        ├── PopA.vue               // 组件A
        ├── PopB.vue               // 组件B

### 图片命名规范

图片以图片内容所表达含义的英文命名，命名用小写英文字母、数字、下划线组合，其中不得包含汉字、空格、特殊字符：

    ├── assets                     // 页面目录
        ├── user_account.png       // 页面A
        ├── user_password.png      // 页面B


### 代码书写规范

vue 方法放置顺序:

* name
* components
* props
* data
* created
* mounted
* activited
* update
* beforeRouteUpdate
* methods
* filter
* computed
* watch

method 自定义方法命名:

* 动宾短语（good：jumpPage、openCarInfoDialog）（bad：go、nextPage、show、open、login）
* ajax 方法以 get、post 开头，以 data 结尾（good：getListData、postFormData）（bad：takeData、confirmData、getList、postForm）
* 事件方法以 on 开头（onTypeChange、onUsernameInput）
* init、refresh 单词除外
* 尽量使用常用单词开头（set、get、open、close、jump）
* 驼峰命名（good: getListData）（bad: get_list_data、getlistData）

data props 方法注意点:

* 使用 data 里的变量时请先在 data 里面初始化
* props 指定类型，也就是 type
* props 改变父组件数据 基础类型用 $emit ，复杂类型直接改
* ajax 请求数据用上 isLoading、isError 变量
* 不命名多余数据，现在是详情页、你的数据是 ajax 请求的，那就直接声明一个对象叫 d，而不是每个字段都声明
* 表单数据请包裹一层 form

生命周期方法注意点：

* 不在 mounted、created 之类的方法写逻辑，取 ajax 数据，
* 在 created 里面监听 Bus 事件
