export const nav = [
  // 1. 面试准备（新增，放在最前面）
  {
    text: "面试准备",
    link: "/iv/",
    items: [
      { text: "🎯 面试流程与时间线", link: "/iv/process/" },
      { text: "📝 简历编写技巧（STAR法则）", link: "/iv/resume/" },
      { text: "💬 行为面试（BQ）题库与回答模板", link: "/iv/behavioral/" },
      { text: "🧮 智力题与逻辑题 20 道", link: "/iv/puzzles/" },
      { text: "💰 HR面与薪资谈判技巧", link: "/iv/hr/" },
      { text: "🏢 大厂面经与岗位匹配", link: "/iv/experience/" },
      { text: "📊 面试复盘与 Offer 选择", link: "/iv/review/" },
    ],
  },
  // 2. 计算机基础（面试占比15%）
  {
    text: "计算机基础",
    link: "/cs/",
    items: [
      { text: "🌐 计算机网络（TCP/IP/HTTP/HTTPS）", link: "/cs/network/" },
      { text: "🖥️ 操作系统（进程线程/内存管理/IO模型）", link: "/cs/os/" },
      { text: "🔒 网络安全（HTTPS/认证授权/加密算法）", link: "/cs/security/" },
      { text: "🧮 数据结构与算法（数组/链表/树/哈希/排序）", link: "/cs/algorithm/" },
    ],
  },
  // 3. Java 核心（面试占比35%）
  {
    text: "Java 核心",
    link: "/ja/",
    items: [
      { text: "🧱 Java 基础（面向对象/异常/反射/泛型）", link: "/ja/basic/" },
      { text: "📦 集合框架（ArrayList/LinkedList/HashMap/ConcurrentHashMap）", link: "/ja/collection/" },
      { text: "⚡ 并发编程（synchronized/volatile/AQS/线程池/JMM）", link: "/ja/concurrent/" },
      { text: "⚙️ JVM（内存模型/GC/类加载/调优）", link: "/ja/jvm/" },
      { text: "🌊 I/O 与网络（BIO/NIO/AIO/Netty/零拷贝）", link: "/ja/io/" },
      { text: "✨ Java 8~21 新特性（Lambda/Stream/虚拟线程）", link: "/ja/new-features/" },
    ],
  },
  {
    text: "数据库",
    link: "/db/",
    items: [
      { text: "🐬 MySQL（索引/事务/锁/SQL优化/主从复制）", link: "/db/mysql/" },
      { text: "🔴 Redis（数据结构/持久化/缓存三兄弟/分布式锁）", link: "/db/redis/" },
      { text: "🍃 MongoDB（文档模型/聚合框架/分片集群/复制集）", link: "/db/mongodb/" },
      { text: "📊 其他数据库（PostgreSQL/达梦/GaussDB/TiDB 场景选型）", link: "/db/others/" },
    ],
  },
  // 5. 框架与中间件（面试占比15%）
  {
    text: "框架与中间件",
    link: "/fw/",
    items: [
      { text: "🍃 Spring（IOC/AOP/事务/循环依赖）", link: "/fw/spring/" },
      { text: "🥾 Spring Boot（自动配置/Starter/Actuator）", link: "/fw/springboot/" },
      { text: "🗃️ MyBatis（原理/缓存/动态SQL）", link: "/fw/mybatis/" },
      { text: "☁️ Spring Cloud（服务发现/配置中心/网关）", link: "/fw/springcloud/" },
      { text: "📨 消息队列（Kafka/RocketMQ 选型/可靠性/顺序消息）", link: "/fw/mq/" },
      { text: "🔌 RPC 与注册中心（Dubbo/gRPC/ZooKeeper/Nacos）", link: "/fw/rpc/" },
      { text: "🔍 搜索引擎（Elasticsearch 原理/倒排索引/集群）", link: "/fw/search/" },
      { text: "🧩 其他中间件（XXL-JOB/ShardingSphere/Apollo）", link: "/fw/other/" },
    ],
  },
  {
    text: "分布式架构",
    link: "/di/",
    items: [
      { text: "📐 分布式理论（CAP/BASE/一致性模型）", link: "/di/theory/" },
      { text: "💰 分布式事务（2PC/TCC/Saga/Seata）", link: "/di/transaction/" },
      { text: "🔒 分布式锁（Redis/ZK/DB 三种方案对比）", link: "/di/lock/" },
      { text: "🏆 三高架构（高性能/高并发/高可用设计）", link: "/di/high-availability/" },
    ],
  },
  // 7. 设计模式与系统设计（面试占比5%）
  {
    text: "设计模式与系统设计",
    link: "/ds/",
    items: [
      { text: "🎭 设计模式（工厂/单例/代理/策略/模板）", link: "/ds/patterns/" },
      { text: "📐 架构模式（MVC/DDD/CQRS/事件驱动）", link: "/ds/architectural/" },
      { text: "🚀 系统设计（秒杀/短链/IM/支付系统）", link: "/ds/system-design/" },
    ],
  },
  // 8. 高频面试题（独立章节，收纳所有题目）
  {
    text: "高频面试题",
    link: "/qa/",
    items: [
      { text: "📚 Java 基础 40 题", link: "/qa/java-basic/" },
      { text: "📦 集合框架 30 题", link: "/qa/collection/" },
      { text: "⚡️ 并发编程 35 题", link: "/qa/concurrent/" },
      { text: "⚙️ JVM 30 题", link: "/qa/jvm/" },
      { text: "🐬 MySQL 30 题", link: "/qa/mysql/" },
      { text: "🔴 Redis 25 题", link: "/qa/redis/" },
      { text: "🍃 Spring 25 题", link: "/qa/spring/" },
      { text: "🌐 分布式架构 30 题", link: "/qa/distributed/" },
      { text: "🏗️ 系统设计 20 题", link: "/qa/system-design/" },
      { text: "📝 综合与场景题 30 题", link: "/qa/scenario/" },
    ],
  },
  // 9. 项目实战
  {
    text: "项目实战",
    link: "/pj/",
    items: [
      { text: "🛒 电商核心（秒杀/库存/支付/退款）", link: "/pj/ecommerce/" },
      { text: "📰 内容与社交（Feed/点赞/排行榜）", link: "/pj/content/" },
      { text: "💬 即时通讯（IM/在线状态/推送）", link: "/pj/im/" },
      { text: "🛠️ 工具系统（短链/CDN/文件存储）", link: "/pj/tools/" },
      { text: "🛡️ 风控与稳定性（规则引擎/限流/混沌）", link: "/pj/risk/" },
    ],
  },
]
