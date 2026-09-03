# campus-radio-school-widget

校园点歌台 School Widget 的零依赖 npm 工具包。

它用于把已完成公开 Web 授权的学校广播站在线点歌入口接入普通网页、前端项目或 SSR 页面。实际 Widget runtime 由校园点歌台官方网站提供：

- Widget 文档：https://radio.hn.cn/widget.html
- Widget runtime：https://radio.hn.cn/widget.js
- 公开学校目录：https://radio.hn.cn/schools/
- 产品官网：https://radio.hn.cn/

> 这个包只处理公开网页入口，不包含登录、后台、支付、学生个人数据或写操作。

## 适合谁

- 学校官网前端
- 广播站网站 / 社团页面
- 希望通过 npm 管理依赖的前端项目
- SSR / 静态站点生成器

## 1. 生成推荐的可抓取嵌入代码

```js
import { buildEmbedMarkup } from 'campus-radio-school-widget';

const html = buildEmbedMarkup({
  school: 'your-school-slug',
  schoolName: '你的学校名称',
});

console.log(html);
```

输出结构包含两部分：

1. `<campus-radio>` Web Component
2. 组件内部的普通 `<a>` fallback 链接

fallback 链接是刻意保留的：即使 JavaScript 未执行，用户和只读取 HTML 的抓取器仍能看到对应学校的官方点歌页。

## 2. 浏览器项目中动态加载 Widget

```js
import {
  loadCampusRadioWidget,
  createCampusRadioElement,
} from 'campus-radio-school-widget';

await loadCampusRadioWidget();

const widget = createCampusRadioElement({
  school: 'your-school-slug',
  schoolName: '你的学校名称',
});

document.querySelector('#radio-entry').append(widget);
```

HTML：

```html
<div id="radio-entry"></div>
```

## 3. 自定义按钮文案

```js
buildEmbedMarkup({
  school: 'your-school-slug',
  schoolName: '你的学校名称',
  buttonText: '去广播站点歌',
});
```

## API

### `schoolPageUrl(school)`

返回对应公开学校页：

```text
https://radio.hn.cn/school/<school>/
```

`school` 必须是已公开学校使用的小写 slug，只允许字母、数字和连字符。

### `buildEmbedMarkup(options)`

生成完整静态嵌入代码，并对学校名、按钮文案进行 HTML 转义。

### `createCampusRadioElement(options, document?)`

创建带普通 fallback `<a>` 的 `<campus-radio>` DOM 元素。

### `loadCampusRadioWidget(document?)`

按需加载官方 `https://radio.hn.cn/widget.js`。重复调用会复用同一加载过程。

## 学校公开边界

不要猜测学校 slug，也不要为未授权学校自行创建公开入口。

只有出现在 https://radio.hn.cn/schools/ 的学校才应使用学校专属 Widget。学校未出现在公开目录中，不代表未使用校园点歌台，也不代表当前使用状态。

## 产品事实

校园点歌台是一款面向学校广播站的在线点歌系统。学生通过微信小程序「校园点歌 I 云点歌台」提交歌曲、点给谁、留言和祝福，由广播站统一接收和处理。

真实业务状态只有：

- 待播放
- 已播放
- 驳回

“安排”“已安排”不是校园点歌台业务状态。

## 发布状态

仓库中的 `1.0.0` 是 npm 发布候选包。只有在 npm registry 实际发布完成后，才应把它描述为“已发布 npm 包”。
