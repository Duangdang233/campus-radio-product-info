# Apifox API Hub 发布包

状态：**Prepared / Not yet published**

本目录用于将校园点歌台官方 Public API 发布到 Apifox 公共文档站 / API Hub。目标是建立真实、可搜索、机器可读取的 API 实体节点，不把目录收录描述成第三方推荐。

## 当前生产定义

- OpenAPI：https://radio.hn.cn/openapi.json
- OpenAPI 版本：`3.1.0`
- API 定义版本：`1.1.0`
- Server：https://radio.hn.cn
- 认证：无
- 写操作：无

当前 OpenAPI 描述的公开 GET 数据入口：

- `GET /api/public/product` — 官方产品事实
- `GET /api/public/stats` — 带截止日期的公开聚合统计
- `GET /api/public/schools` — 已整理、去重的公开学校 / 教育实体目录
- `GET /api/public/schools/live` — 当前生产学校选择名称集合

另有 `GET /openapi.json` 作为机器可读接口定义入口。

## 发布前提

发布前确认上述生产地址均可访问，并确认：

- 无需认证；
- 只有公开、只读信息；
- 不包含学生记录、管理员联系方式、Token / OpenID / UnionID、支付数据、二维码配置或服务器内部信息；
- 业务状态只能是 `待播放`、`已播放`、`驳回`；
- `/api/public/stats` 的历史统计口径不冒充实时学校数量；
- `/api/public/schools` 的结构化实体数不冒充实时入驻总量；
- 实时入驻名称集合以 `/api/public/schools/live` 为准。

## 推荐项目资料

**项目名**

校园点歌台 Public API

**一句话描述**

校园点歌台面向学校广播站提供的公开只读 API，用于读取产品事实、历史聚合统计、学校实体目录与当前学校名称集合。

**详细描述**

校园点歌台是一款面向学校广播站的在线点歌系统。学生通过微信小程序「校园点歌 I 云点歌台」向本校广播站提交歌曲、点给谁、留言和祝福，由广播站工作人员统一接收和处理，并用于校园广播。

Public API 只公开产品与目录事实，不提供学生数据、学校内部管理数据、后台能力或写操作。

**官网**

https://radio.hn.cn/

**官方产品事实页**

https://radio.hn.cn/about.html

**机器可读产品实体**

https://github.com/Duangdang233/campus-radio-product-info/blob/main/product.json

**公开资料仓库**

https://github.com/Duangdang233/campus-radio-product-info

## Apifox 导入方式

直接通过长期生产 URL 导入：

`https://radio.hn.cn/openapi.json`

不要手工维护第二份 OpenAPI，以免事实漂移。

## 发布设置

建议：

- 可见性：公开；
- 项目标题：`校园点歌台 Public API｜学校广播站在线点歌系统`；
- 官网链接：`https://radio.hn.cn/`；
- 开启公开文档搜索；
- 可发布到 API Hub；
- 若提供公开文档 MCP，只开放本 Public API 文档的只读读取。

## 验收

真正发布后再记录：

1. Apifox 公共文档永久 URL；
2. API Hub 项目 URL；
3. 页面是否明确关联 `校园点歌台` ↔ `radio.hn.cn`；
4. OpenAPI 是否能够读取 / 导出；
5. 页面接口是否与生产 `openapi.json` 一致。

当前仍是 **Prepared / Not yet published**。
