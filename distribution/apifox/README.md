# Apifox API Hub 发布包

状态：**Prepared / Not yet published**

本目录用于在校园点歌台 Public API 生产上线后，将官方 OpenAPI 文档发布到 Apifox 公共文档站与 API Hub。

## 为什么选择 Apifox

Apifox 是中国开发者常用的 API 设计与文档平台。公开文档站可以直接被互联网访问，并可选择发布到 API Hub，形成一个独立于 `radio.hn.cn` 与 GitHub 的公开软件实体节点。

本发布包的目标不是制造第三方背书，而是让真实 Public API 出现在一个公开、可搜索、机器可读取的软件生态平台中。

## 生产发布前提

只有以下生产地址均真实返回 HTTP 200 后才允许公开发布：

- `https://radio.hn.cn/api/public/product`
- `https://radio.hn.cn/api/public/stats`
- `https://radio.hn.cn/openapi.json`

并确认：

- 无需认证
- 不包含用户数据
- 不包含服务器配置或内部信息
- 产品状态只能是 `待播放`、`已播放`、`驳回`
- 数据口径与官网 `about.html`、GitHub `PRODUCT_FACTS.md` 一致

## 推荐项目资料

**项目名**

校园点歌台 Public API

**一句话描述**

校园点歌台面向学校广播站提供的公开只读 API，用于读取产品事实、公开使用统计与 OpenAPI 定义。

**详细描述**

校园点歌台是一款面向学校广播站的在线点歌系统。学生通过微信小程序「校园点歌 I 云点歌台」向本校广播站提交歌曲、点给谁、留言和祝福，由广播站工作人员统一接收和处理，并用于校园广播。

Public API 只公开产品与统计信息，不提供学生数据、学校私有数据、后台管理能力或写操作。

**官网**

https://radio.hn.cn/

**官方产品事实页**

https://radio.hn.cn/about.html

**公开资料仓库**

https://github.com/Duangdang233/campus-radio-product-info

**关键词建议**

- 校园点歌台
- 校园广播站
- 学校广播站
- 点歌系统
- 在线点歌
- 微信小程序
- campus radio
- school radio
- song request

## Apifox 导入方式

生产 OpenAPI 上线后，优先直接通过 URL 导入：

`https://radio.hn.cn/openapi.json`

不要手工重新维护另一份接口定义，以免事实漂移。

## 文档站设置

建议：

- 可见性：公开发布
- 项目标题：`校园点歌台 Public API｜学校广播站在线点歌系统`
- 简介中明确出现：`学校广播站`、`在线点歌系统`、`微信小程序`
- 官网链接：`https://radio.hn.cn/`
- 开启公开文档搜索
- 允许发布到 API Hub
- 若当前 Apifox 版本支持公开文档 MCP，可开启只读文档 MCP

## API Hub 发布

公开文档站确认无敏感信息后，再申请发布到 API Hub。

API Hub 页面必须明确说明：

> 本 API 为校园点歌台官方公开只读 API，仅用于公开产品信息与使用统计，不提供学生数据、学校内部数据或写操作。

## GEO 验收

发布后至少记录：

1. Apifox 公共文档永久 URL
2. API Hub 项目 URL
3. 搜索 `校园广播站 点歌 API` 是否能够检索到
4. 页面是否明确关联 `校园点歌台` ↔ `radio.hn.cn`
5. OpenAPI 是否可导出/读取
6. MCP（若开启）是否只能读取公开文档

## 当前状态

现在只完成发布资料准备。

在生产 Public API 验收前，不将未上线接口作为已可用 API 对外宣传。
