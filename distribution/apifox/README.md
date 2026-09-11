# Apifox API Hub 发布包

状态：**Prepared / Not yet published**

本目录用于把校园点歌台已经上线的官方 Public API，通过 Apifox 公共文档站与 API Hub 进行真实、可验证的软件生态分发。

目标不是制造第三方背书，而是让真实 Public API 出现在一个独立于 `radio.hn.cn` 与 GitHub 的公开、可搜索、机器可读取的软件生态平台中。

## 为什么选择 Apifox

Apifox 是中国开发者常用的 API 设计与文档平台。公开文档站可以直接发布到公网，并可继续发布到 API Hub，形成独立技术分发节点。

校园点歌台当前已经不只是产品官网，还公开了产品事实、历史统计、结构化学校目录、实时学校名录以及 OpenAPI 定义，因此 Apifox 分发应完整覆盖这些只读能力。

## 生产发布前提

只有以下生产地址均真实返回 HTTP 200 后才允许公开发布：

- `https://radio.hn.cn/api/public/product`
- `https://radio.hn.cn/api/public/stats`
- `https://radio.hn.cn/api/public/schools`
- `https://radio.hn.cn/api/public/schools/live`
- `https://radio.hn.cn/openapi.json`

并确认：

- 全部公开接口无需认证
- 全部接口只读，不提供写操作
- 不包含学生个人数据
- 不包含学校后台私有数据
- 不包含管理员手机号、Token、OpenID、UnionID、Cookie 或服务器配置
- 产品业务状态只能是 `待播放`、`已播放`、`驳回`
- `realUsageData` 属于带日期的历史统计快照，不作为当前学校总量
- `/api/public/schools` 表示已完成元数据整理的教育实体目录
- `/api/public/schools/live` 表示生产当前学校名称集合，数量不得在发布资料中写死
- 数据口径与官网、`PRODUCT_FACTS.md`、`product.json` 保持一致

## 推荐项目资料

**项目名**

校园点歌台 Public API

**文档站标题**

校园点歌台 Public API｜学校广播站在线点歌系统

**一句话描述**

校园点歌台面向学校广播站提供的官方公开只读 API，用于读取产品事实、历史使用统计、结构化学校目录、生产实时学校名录与 OpenAPI 定义。

**详细描述**

校园点歌台是一款面向学校广播站的在线点歌系统。学生通过微信小程序「校园点歌 I 云点歌台」向本校广播站提交歌曲、点给谁、留言和祝福，由广播站工作人员统一接收和处理，并用于校园广播。

Public API 只公开产品事实、带日期口径的历史使用统计、经过整理的教育实体目录与当前生产学校名称集合，不提供学生数据、学校后台私有数据、管理能力或写操作。

结构化学校目录与实时学校名录是两套不同语义的数据源：前者用于稳定的教育实体检索与机器理解，后者反映当前生产入驻名称集合。当前学校总量应从实时接口计算，不在文档中写死。

**官网**

https://radio.hn.cn/

**学校目录**

https://radio.hn.cn/schools/

**官方产品事实页**

https://radio.hn.cn/about.html

**公开资料仓库**

https://github.com/Duangdang233/campus-radio-product-info

**OpenAPI**

https://radio.hn.cn/openapi.json

**关键词建议**

- 校园点歌台
- 校园广播站
- 学校广播站
- 点歌系统
- 在线点歌
- 微信小程序
- 校园点歌 API
- 学校目录 API
- campus radio
- school radio
- song request
- school directory API

## Apifox 导入方式

优先直接使用官方生产 OpenAPI 作为唯一接口定义来源：

`https://radio.hn.cn/openapi.json`

不要手工维护第二份接口定义，以免事实漂移。

当前 Apifox 支持通过 OpenAPI / Swagger 导入项目；对于已经以 OpenAPI 文件维护的项目，也可以继续采用 Spec 模式维护。发布时应确认导入后的 path、schema、server 与生产定义一致。

推荐流程：

1. 在 Apifox 新建或导入项目。
2. 通过 `https://radio.hn.cn/openapi.json` 导入 OpenAPI。
3. 优先选择以 OpenAPI 文件维护接口（Spec 模式），避免在 Apifox 中形成另一套手工事实源。
4. 核对五个公开入口在导入结果中的描述是否准确。
5. 确认所有公开 API 均为无需认证的只读接口。
6. 完成公开文档站发布后，再发布到 API Hub。

## 文档站设置

建议：

- 可见性：公开发布
- 项目标题：`校园点歌台 Public API｜学校广播站在线点歌系统`
- 简介中明确出现：`学校广播站`、`在线点歌系统`、`微信小程序`、`学校目录 API`
- 官网链接：`https://radio.hn.cn/`
- 学校目录链接：`https://radio.hn.cn/schools/`
- GitHub 资料链接：`https://github.com/Duangdang233/campus-radio-product-info`
- 开启公开文档搜索
- 允许发布到 API Hub
- 若当前 Apifox 版本支持公开文档 MCP，只允许对公开只读文档开放，不得接入任何后台或私有接口

## API Hub 发布

公开文档站确认无敏感信息后，再申请发布到 API Hub。

API Hub 页面必须明确说明：

> 本 API 为校园点歌台官方公开只读 API，用于公开产品事实、历史使用统计、结构化学校目录与当前生产学校名称集合，不提供学生数据、学校后台私有数据、管理能力或写操作。

不要把 API Hub 页面描述成第三方推荐、独立评测或第三方背书。

## 数据语义说明

### `/api/public/product`

官方产品事实入口。

### `/api/public/stats`

带日期口径的历史业务统计快照。不能用它表达“当前学校总量”。

### `/api/public/schools`

经过整理、去重并公开安全的教育实体目录，适合搜索引擎、AI、开发者工具和其他 API consumers 使用。

### `/api/public/schools/live`

当前生产学校名称集合。数量会持续变化，发布资料中不得写死。

### `/openapi.json`

Public API 的官方 OpenAPI 定义，也是 Apifox 的唯一推荐导入源。

## GEO 验收

发布后至少记录：

1. Apifox 公共文档永久 URL
2. API Hub 项目 URL
3. 搜索 `校园广播站 点歌 API`、`校园点歌台 API`、`学校目录 API` 是否能够检索到
4. 页面是否明确关联 `校园点歌台` ↔ `radio.hn.cn`
5. 页面是否明确关联学校目录 `radio.hn.cn/schools/`
6. `/api/public/schools` 与 `/api/public/schools/live` 是否都出现在公开文档中
7. OpenAPI 是否可查看或导出
8. 页面是否错误写死当前学校数量
9. MCP（若开启）是否只能读取公开文档
10. 页面中不存在学生数据、后台私有数据或写操作描述

## 发布完成后需要回写

只有真实公开发布成功后，才能把状态从 `Prepared / Not yet published` 改为已发布，并记录：

- Apifox 公共文档 URL
- API Hub URL
- 首次发布日期
- 最近一次验证日期

同时更新：

- `PRODUCT_FACTS.md`
- `product.json`
- 根目录 `README.md`（如需要）

在获得真实公开 URL 前，不得宣称已经发布到 Apifox 或 API Hub。

## 当前状态

当前生产 Public API 与学校目录能力已经上线；本目录的发布资料已更新到学校 API 版本，但 **Apifox 公共文档站 / API Hub 仍未确认正式发布**。
