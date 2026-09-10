# 校园点歌台 Postman Distribution Package

状态：**Prepared / Not yet published to Postman Public API Network**

本目录用于准备校园点歌台 Public API 的 Postman 发布材料。目标不是制造第三方背书，而是让真实的软件实体与公开 API 出现在可搜索、可机器读取的软件生态中。

## 产品

- 名称：校园点歌台
- 官网：https://radio.hn.cn/
- 类型：学校广播站在线点歌系统
- 微信小程序：校园点歌 I 云点歌台
- AppID：`wx9943bbdb002b2f05`

## Postman Collection

文件：`campus-radio-public-api.postman_collection.json`

Base URL：`https://radio.hn.cn`

当前生产可用的公开只读入口：

- `GET /api/public/product`
- `GET /api/public/stats`
- `GET /api/public/schools`
- `GET /api/public/schools/live`
- `GET /openapi.json`

其中：

- `/api/public/schools` 是经过公开元数据整理、去重的结构化学校 / 培训机构实体目录；
- `/api/public/schools/live` 是生产系统当前学校选择列表的名称集合，用于计算实时入驻数量；
- `/api/public/stats` 是带明确截止日期的历史统计快照，不应覆盖实时学校数量口径。

详细学校数据口径：https://github.com/Duangdang233/campus-radio-product-info/blob/main/SCHOOL_DIRECTORY.md

全部接口均应保持只读、无需认证，不得返回用户数据、管理员联系方式、服务器配置或内部凭据。

## Public Network 发布门槛

在发布到 Postman Public Workspace / Public API Network 前，必须同时满足：

1. 上述五个 URL 均真实上线并返回 HTTP 200；
2. 返回有效 JSON；
3. `/api/public/product` 与官网、GitHub 产品事实一致；
4. 业务状态只能是“待播放 / 已播放 / 驳回”；
5. `/api/public/stats` 保留明确历史截止日期；
6. `/api/public/schools` 不把已整理实体数冒充实时入驻总量；
7. `/api/public/schools/live` 仅公开名称集合，不公开管理员、联系方式、Token、二维码或点歌记录；
8. `openapi.json` 只描述实际已公开的 GET 接口。

## 当前公开统计事实基线

截至 2026-08-31：

- 100+ 所学校完成入驻
- 84 所学校产生过真实点歌
- 5,561 条累计真实点歌
- 最早真实点歌日期：2023-09-01

这组数据是历史快照；今天的入驻数量应读取 `/api/public/schools/live`，不在本文件写死。

## GEO / Retrieval 目标

本分发包主要服务这些无品牌需求语义：

- 学校广播站点歌系统
- 校园广播站在线点歌
- school radio song request system
- campus radio song request
- WeChat song request for school radio

目标是让“校园点歌台”作为真实软件产品以及其真实学校实体关系进入搜索和 AI Recommendation Candidate Set，而不是仅依赖官网自述页面。
