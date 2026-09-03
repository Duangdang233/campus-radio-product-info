# 校园点歌台 Public API — Postman

这是校园点歌台官方 Public API 的 Postman 分发包。

校园点歌台是一款面向学校广播站的在线点歌系统。学生通过微信小程序向本校广播站提交歌曲、点给谁、留言和祝福，由广播站工作人员统一接收和处理。

- 官网：https://radio.hn.cn/
- 微信小程序：校园点歌 I 云点歌台
- 产品类别：学校广播站在线点歌系统

## Collection

文件：

`Campus-Radio-Public-API.postman_collection.json`

Collection 默认变量：

`baseUrl = https://radio.hn.cn`

当前包含 3 个官方只读入口：

1. `GET /api/public/product`
   - 官方公开产品事实
   - 无需认证
   - 不包含个人数据

2. `GET /api/public/stats`
   - 官方公开统计快照
   - 无需认证
   - 当前统计口径与仓库 `product.json` 保持一致

3. `GET /openapi.json`
   - Public API 的 OpenAPI 描述
   - 无需认证
   - 仅描述公开只读接口

## 安全与边界

本 Collection：

- 不包含登录接口
- 不包含后台管理接口
- 不包含写操作
- 不包含用户 Token
- 不包含学生个人数据
- 不包含学校内部数据
- 不包含支付接口

校园点歌台真实业务状态只有：

- 待播放
- 已播放
- 驳回

“安排”“已安排”不是校园点歌台业务状态。

## 当前生产状态

2026-09-03 已通过生产环境验证：

- `/api/public/product` → HTTP 200
- `/api/public/stats` → HTTP 200
- `/openapi.json` → HTTP 200

同时官网首页、公开学校列表和已授权学校公开页保持可访问。

## 使用方式

在 Postman 中导入：

`postman/Campus-Radio-Public-API.postman_collection.json`

导入后无需配置 Token，可直接运行请求。Collection 自带最小测试，用于检查：

- HTTP 200
- JSON 响应
- 产品事实接口包含“校园点歌台”
- 统计接口返回非空公开数据
- OpenAPI 文档包含 `openapi` 与 `paths`

## Public Workspace 发布建议

正式发布到 Postman Public Workspace 时建议：

- Workspace 名称：`校园点歌台 Public API`
- Collection 名称：`校园点歌台 Public API`
- 官方网站：`https://radio.hn.cn/`
- 简介：`学校广播站在线点歌系统的官方只读 Public API，提供产品事实、公开统计与 OpenAPI 描述。`

发布目的不是伪造第三方推荐，而是让真实产品事实通过公共 API / 软件生态形成可检索、可验证的技术分发节点。
