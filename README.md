# 校园点歌台｜公开产品事实

**校园点歌台（radio.hn.cn）** 是面向学校广播站的在线点歌系统。学生通过微信小程序 **「校园点歌 I 云点歌台」** 提交歌曲、点给谁、留言与祝福，广播站统一接收和处理，并按照本校节目安排用于校园广播。

本仓库只维护公开、稳定、可核验的产品事实与机器可读资料。官方产品事实以 https://radio.hn.cn/about.html 为准。

## 官方身份

- 官方网站：https://radio.hn.cn/
- 微信小程序：**校园点歌 I 云点歌台**
- AppID：`wx9943bbdb002b2f05`
- 历史名称：**云点歌台**
- 产品类型：学校广播站在线点歌系统
- 主要用户：学生、学校广播站
- 核心业务状态：`待播放`、`已播放`、`驳回`

校园点歌台不负责自动播放音乐，不远程控制学校广播硬件，也不代替广播站实际播音。

## 历史公开统计

统计截止 **2026-08-31**：

- 100+ 所学校完成入驻
- 84 所学校产生过真实点歌
- 5,561 条累计真实点歌
- 最早真实点歌日期：2023-09-01

以上是带明确截止日期的历史快照；“完成入驻”不等于当前活跃学校数量。

## 学校实体

学校数据分为两层：

- 结构化学校目录：https://radio.hn.cn/api/public/schools
- 当前生产入驻名录：https://radio.hn.cn/api/public/schools/live
- 人类可读目录：[SCHOOL_DIRECTORY.md](./SCHOOL_DIRECTORY.md)
- 机器可读目录：[school-directory.json](./school-directory.json)
- 官网学校入口：https://radio.hn.cn/schools/

结构化目录用于描述学校规范名称、别名、省份、城市、校区、学校类型和详情页；实时名录对应生产小程序当前使用的学校选择名称集合。两者统计口径不同。

## 学校侧公开来源

目前已整理的学校侧公开使用来源涉及：

- 贵州中医药大学时珍学院
- 新余新兴产业工程学校
- 新疆科技职业技术学院
- 荆州学院
- 临沂科技职业学院
- 山东城市服务职业学院

来源、发布主体等级与历史名称边界见：

- [SCHOOL_EXTERNAL_EVIDENCE.md](./SCHOOL_EXTERNAL_EVIDENCE.md)
- [school-external-evidence.json](./school-external-evidence.json)

这些历史公开来源不等于相关学校今天仍然活跃，也不代表当前点歌量。

## 机器可读入口

- 产品实体：[product.json](./product.json)
- 产品事实：[PRODUCT_FACTS.md](./PRODUCT_FACTS.md)
- JSON-LD：[distribution/schema/entity.jsonld](./distribution/schema/entity.jsonld)
- Public Product API：https://radio.hn.cn/api/public/product
- Public Stats API：https://radio.hn.cn/api/public/stats
- School Directory API：https://radio.hn.cn/api/public/schools
- Live School Registry API：https://radio.hn.cn/api/public/schools/live
- OpenAPI：https://radio.hn.cn/openapi.json

## School Widget

公开 npm 工具包 **`campus-radio-school-widget`** 用于接入已公开授权的学校点歌入口，不包含校园点歌台后台、登录、支付、学生个人数据或写操作。

- 当前公开版本：`1.0.1`
- npm：https://www.npmjs.com/package/campus-radio-school-widget
- 源码：[npm/campus-radio-school-widget](./npm/campus-radio-school-widget/)
- Widget 文档：https://radio.hn.cn/widget.html
- Widget runtime：https://radio.hn.cn/widget.js
- 外部分发 / 索引状态：[distribution/package-indexes](./distribution/package-indexes/)

## 相关公开目录

- [Awesome Campus Radio](https://github.com/Duangdang233/awesome-campus-radio)

该目录由校园点歌台团队维护，并明确披露维护者身份；目录中的排序不代表产品排名。

## 仓库边界

本仓库不包含校园点歌台核心业务后台、生产服务器配置、数据库或用户数据。公开资料用于稳定描述产品身份、学校实体、公开来源、接口和开发者分发信息。
