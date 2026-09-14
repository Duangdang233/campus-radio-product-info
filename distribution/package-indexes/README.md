# campus-radio-school-widget 外部分发状态

本文件记录 `campus-radio-school-widget` 在 npm 之外的公开分发与第三方索引状态，并明确区分“镜像分发”和“独立索引”。

## Canonical package

- npm package: `campus-radio-school-widget`
- 当前正式版本：`1.0.1`
- npm：https://www.npmjs.com/package/campus-radio-school-widget
- Package URL (PURL): `pkg:npm/campus-radio-school-widget@1.0.1`
- 源码：https://github.com/Duangdang233/campus-radio-product-info/tree/main/npm/campus-radio-school-widget

npm 是该工具包的正式发布源。版本判断应以 npm registry 为准。

## npm 自动镜像 / CDN 分发

公开 npm 包可以通过 npm 生态 CDN 分发。以下地址用于直接取得当前 `1.0.1` 的 `index.js`：

- jsDelivr: https://cdn.jsdelivr.net/npm/campus-radio-school-widget@1.0.1/index.js
- UNPKG: https://unpkg.com/campus-radio-school-widget@1.0.1/index.js

这些节点属于 npm 包的镜像/分发基础设施，不是第三方推荐、评分或独立产品背书。

## 独立第三方索引

### Socket

- 页面：https://socket.dev/npm/package/campus-radio-school-widget
- 观测日期：2026-09-15
- 当前观测状态：已建立独立 npm 包索引，但页面仍显示 `1.0.0`
- README 状态：仍可见早期 `1.0.0` “发布候选包”文案

因此目前只能确认：

`npm → Socket` 的第三方索引关系已经存在。

不能声称 Socket 已完成 `1.0.1` 同步。Socket 页面属于第三方索引，其更新节奏不由校园点歌台控制。

## 与 API 分发的区别

以下目录是 Public API 的另一条分发路径，不属于 npm package index：

- Apifox：发布材料已准备，尚未公开发布
- APIs.guru：提交材料已准备，尚未被目录接收
- Postman Public API Network：Collection 已准备，尚未公开发布

只有取得对应第三方永久公开页面后，才把它们记录为已经建立的外部实体节点。

## 状态原则

1. npm 当前版本与源码事实优先；
2. CDN 镜像只表示可分发，不表示第三方背书；
3. 第三方索引必须实际观测到公开页面才能记录为“已索引”；
4. 第三方页面落后于 npm 时明确标注 stale，不用旧信息反向修改官方事实；
5. Prepared / submitted / published / indexed 四种状态不得混用。
