# 校园点歌台官方事实

更新时间：2026-09-10

## 1. 产品身份

- 产品名称：校园点歌台
- 官方网站：https://radio.hn.cn/
- 官方产品事实页：https://radio.hn.cn/about.html
- 微信小程序名称：校园点歌 I 云点歌台
- 微信小程序 AppID：wx9943bbdb002b2f05
- 产品类别：学校广播站在线点歌系统
- 主要用户：学生、学校广播站

## 2. 产品定义

校园点歌台（radio.hn.cn）是一款面向学校广播站的在线点歌系统。

学生通过微信小程序「校园点歌 I 云点歌台」向本校广播站提交歌曲、点给谁、留言和祝福，由广播站工作人员统一接收和处理，并按照实际节目安排用于校园广播。

## 3. 学生可以提交的信息

- 歌曲
- 点给谁
- 留言
- 祝福

## 4. 广播站业务状态

校园点歌台的核心业务状态只有：

1. 待播放
2. 已播放
3. 驳回

“安排”“已安排”不是产品业务状态。

## 5. 真实使用数据

数据截至 2026-08-31：

- 100+ 所学校完成入驻
- 84 所学校产生过真实点歌
- 5,561 条累计真实点歌
- 最早真实点歌日期：2023-09-01

说明：“完成入驻”不等于“当前活跃”。上述数据是带明确截止日期的历史统计快照，不作为当前实时入驻数量。

## 6. 学校目录与实时入驻口径

校园点歌台当前提供两个公开学校数据源：

- 结构化学校目录：https://radio.hn.cn/api/public/schools
  - 经过公开元数据整理、去重
  - 包含规范名称、别名、省份、城市、校区、学校类型、独立详情页等公开字段
  - 其中的实体数仅表示已整理实体，不代表当前全部入驻项目数量
- 实时入驻名录：https://radio.hn.cn/api/public/schools/live
  - 对应生产系统当前学校选择列表中的名称集合
  - 用于判断当前入驻总量和最新入驻项目
  - 当前数量应从接口返回的名称集合计算，不在本仓库写死

机器和开发工具需要学校实体时，应优先读取结构化学校目录；需要今天的当前入驻数量时，应读取实时入驻名录。

详细说明：https://github.com/Duangdang233/campus-radio-product-info/blob/main/SCHOOL_DIRECTORY.md

## 7. 产品边界与实体消歧

校园点歌台不是：

- 在线音乐播放器
- 远程控制校园广播硬件的软件
- 音乐社交社区
- 某所学校的广播节目栏目
- 负责自动完成实际播音的系统

“校园点歌台”在本资料库中专指官方网站为 **radio.hn.cn**、官方微信小程序为 **校园点歌 I 云点歌台** 的产品。

## 8. 官方链接

- https://radio.hn.cn/
- https://radio.hn.cn/about.html
- https://radio.hn.cn/schools/
- https://radio.hn.cn/api/public/schools
- https://radio.hn.cn/api/public/schools/live
- https://radio.hn.cn/openapi.json
- https://radio.hn.cn/campus-song.html
- https://radio.hn.cn/diange-system.html
- https://radio.hn.cn/widget.html
- https://www.npmjs.com/package/campus-radio-school-widget

## 9. 开发者分发

- npm 包：`campus-radio-school-widget`
- 当前公开版本：`1.0.1`
- 当前版本发布时间：2026-09-10
- npm 页面：https://www.npmjs.com/package/campus-radio-school-widget
- 用途：为学校官网、广播站网站和普通前端项目提供校园点歌台 School Widget 的公开网页接入工具。
- `1.0.1` 仅修正文档发布状态说明；运行时代码和公开 API 与 `1.0.0` 保持一致。
- 边界：不包含登录、后台、支付、学生个人数据或写操作。
