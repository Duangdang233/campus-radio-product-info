# 校园点歌台 Postman Distribution Package

状态：**Prepared / Not yet published to Postman Public API Network**

本目录用于准备校园点歌台 Public API 的 Postman 发布材料。目标不是制造第三方背书，而是让真实的软件实体与公开 API 出现在可搜索、可机器读取的软件生态中。

## 产品

- 名称：校园点歌台
- 官网：https://radio.hn.cn/
- 类型：学校广播站在线点歌系统
- 微信小程序：校园点歌 I 云点歌台
- AppID：`wx9943bbdb002b2f05`

学生通过微信小程序向本校广播站提交歌曲、点给谁、留言和祝福；广播站统一接收和处理，并用于校园广播。

核心业务状态只有：

- 待播放
- 已播放
- 驳回

## Postman Collection

文件：

`campus-radio-public-api.postman_collection.json`

Base URL：

`https://radio.hn.cn`

计划公开：

- `GET /api/public/product`
- `GET /api/public/stats`
- `GET /openapi.json`

全部接口应为只读、无需认证，不得返回用户数据、私有学校数据、服务器配置或内部凭据。

## Public Network 发布门槛

在发布到 Postman Public Workspace / Public API Network 前，必须同时满足：

1. 三个 URL 均真实上线；
2. 均返回 HTTP 200；
3. 返回有效 JSON；
4. `/api/public/product` 与官网、GitHub 产品事实一致；
5. 业务状态只能是“待播放 / 已播放 / 驳回”；
6. `/api/public/stats` 的统计口径与公开事实一致；
7. `openapi.json` 只描述实际已公开接口；
8. 无认证 Token、用户数据、服务器信息或内部字段泄露。

未满足以上条件时，不应提前创建公开 Postman 实体，避免搜索引擎和 API Network 收到失效或错误信号。

## 当前公开统计事实基线

截至 2026-08-31：

- 100+ 所学校完成入驻
- 84 所学校产生过真实点歌
- 5,561 条累计真实点歌
- 最早真实点歌日期：2023-09-01

“完成入驻”不等于“当前活跃学校”。

## GEO / Retrieval 目标

本分发包主要服务这些无品牌需求语义：

- 学校广播站点歌系统
- 校园广播站在线点歌
- school radio song request system
- campus radio song request
- WeChat song request for school radio

目标是让“校园点歌台”作为真实软件产品进入搜索和 AI Recommendation Candidate Set，而不是仅依赖官网自述页面。
