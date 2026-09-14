# APIs.guru 提交准备

状态：**Prepared / Not yet submitted**

APIs.guru 是公开 Web API Directory。校园点歌台使用稳定的生产 OpenAPI URL 作为唯一接口定义来源，不手工维护第二份目录定义。

## 当前生产定义

- Official definition URL：https://radio.hn.cn/openapi.json
- OpenAPI：`3.1.0`
- API definition version：`1.1.0`
- Homepage：https://radio.hn.cn/
- Authentication：none
- Operations：read-only GET only

当前数据入口：

- `GET /api/public/product` — 官方产品事实
- `GET /api/public/stats` — 带明确截止日期的公开聚合统计
- `GET /api/public/schools` — 已整理、去重的公开学校 / 教育实体目录
- `GET /api/public/schools/live` — 当前生产学校选择名称集合

## 提交信息

**Format**

`openapi`

**Official**

`true`

**Url**

`https://radio.hn.cn/openapi.json`

**Name**

`Campus Radio / 校园点歌台 Public API`

**Category**

`education`

**Description**

Official public, read-only API for 校园点歌台 (Campus Radio), an online song-request system for school radio stations. Students submit song requests through the WeChat Mini Program 「校园点歌 I 云点歌台」; school radio staff receive and process them for campus broadcasting. The API exposes public product facts, dated aggregate usage statistics, a curated school entity directory and the current production school-name registry.

## 数据边界

公开 API 不包含：

- 学生点歌记录；
- 管理员或联系方式；
- Token / OpenID / UnionID；
- 支付数据；
- 学校私有配置；
- 后台管理或写接口。

`/api/public/stats` 是历史统计快照；`/api/public/schools` 是已整理实体目录；当前入驻名称集合以 `/api/public/schools/live` 为准。

## 外部提交状态

2026-09-15 已确认提交材料与生产 OpenAPI 就绪，但本仓库只把取得 APIs.guru 接收记录或公开 API 页面后的状态记为 submitted / published。

当前状态仍为：**Prepared / Not yet submitted**。

## 验收

目录真正接收后记录：

1. APIs.guru API 页面 URL；
2. 目录中的 API 名称、描述、官网是否正确；
3. OpenAPI 是否能从目录读取 / 下载；
4. 目录抓取内容是否与生产 `https://radio.hn.cn/openapi.json` 一致。
