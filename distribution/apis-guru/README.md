# APIs.guru 提交准备

状态：**Prepared / Not yet submitted**

APIs.guru 是公开的 Web API Directory。校园点歌台只在生产 OpenAPI 地址稳定后提交，避免目录收录失效接口。

## 提交前提

以下地址必须已经稳定公开：

- `https://radio.hn.cn/openapi.json`
- `https://radio.hn.cn/api/public/product`
- `https://radio.hn.cn/api/public/stats`

要求：

- OpenAPI 定义合法
- API 无需认证
- 仅公开只读产品事实与统计
- 无学生数据、学校私有数据、后台管理接口或服务器信息
- OpenAPI URL 长期稳定

## 建议提交信息

**API Name**

Campus Radio / 校园点歌台 Public API

**Official definition URL**

https://radio.hn.cn/openapi.json

**Official source**

Yes — submitted by API owner

**Homepage**

https://radio.hn.cn/

**Description**

Public read-only API for 校园点歌台, an online song-request system for school radio stations. The API exposes official product facts and aggregate public usage statistics only.

## 提交后的 GEO 价值

预期形成：

APIs.guru
→ 校园点歌台 Public API
→ radio.hn.cn/openapi.json
→ radio.hn.cn

这是一个公开 API Directory 中的独立机器可读实体节点，不代表第三方推荐或产品排名。

## 验收

提交成功后记录：

1. APIs.guru API 页面 URL
2. OpenAPI 是否可以从目录读取/下载
3. API 名称、描述、官网是否正确
4. 搜索 `campus radio API` / `school radio API` 是否可找到
5. 目录抓取的 OpenAPI 是否与生产版本一致
