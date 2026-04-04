/**
 * 日志列表 mock（按时间降序）。无 title：仅可选配图 + 正文 content。
 * @typedef {Object} LogItem
 * @property {number} id
 * @property {string} type — 右上角丝带分类
 * @property {string} [img] — 可选配图
 * @property {string} time — 发布时间，展示在时间线节点旁
 * @property {string} content — 正文
 */

/** @type {LogItem[]} */
export const mockLogList = [
  {
    id: 9001,
    type: "云原生",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    time: "2025年12月18日 23:56",
    content:
      "在博客中增加「日志」Tab，使用与首页一致的卡片与丝带样式，时间线串联每一条记录，后续可对接真实接口。",
  },
  {
    id: 9002,
    type: "架构设计",
    time: "2025年12月10日 18:20",
    content:
      "和网关同事对齐了默认超时、重试与熔断的默认值；对异步链路补充了埋点，方便后续按接口维度看 P99。",
  },
  {
    id: 9003,
    type: "RocketMQ",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    time: "2025年11月28日 09:12",
    content:
      "从 Producer 到 Broker、再到 Consumer 的线程池与消费位点核对了一遍，确认了偶发延迟来自批量拉取窗口偏大，已调小并观察。",
  },
  {
    id: 9004,
    type: "个人分享",
    time: "2025年11月01日 21:40",
    content:
      "读了两篇关于可观测性边界的文章；试用了一款轻量 Markdown 剪藏插件，准备接到知识库里。",
  },
]

/**
 * 本地分页，模拟接口 { code, data }，便于后端未就绪时无限滚动联调。
 * @param {number} offset
 * @param {number} limit
 */
export function mockLogPage(offset, limit) {
  const data = mockLogList.slice(offset, offset + limit)
  return { code: 0, data }
}
