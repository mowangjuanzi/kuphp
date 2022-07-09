const {defaultTheme} = require("vuepress");

module.exports = {
    title: "酷PHP",
    lang: "zh-CN",
    head: [
        [
            "link",
            {
                rel: "icon",
                href: "/logo.png"
            }
        ]
    ],
    theme: defaultTheme({
        logo: "/logo.png",
        repo: "mowangjuanzi/kuphp",
        locales: {
            "/": {
                navbar: [
                    {
                        text: "知识体系",
                        link: "/knowledge",
                    },
                    {
                        text: "资源",
                        children: [
                            {
                                text: "slate 中文文档",
                                link: "https://slate.kuphp.co",
                            },
                        ],
                    },
                ],
                sidebar: {
                    "/knowledge": [
                        {
                            text: "互联网",
                            link: "/knowledge/internet/README.md",
                            children: [
                                "/knowledge/internet/internet-work/README.md",
                                "/knowledge/internet/http/README.md",
                                "/knowledge/internet/browser-work/README.md",
                                "/knowledge/internet/dns/README.md",
                                "/knowledge/internet/domain_name/README.md",
                                "/knowledge/internet/hosting/README.md",
                            ]
                        },
                        {
                            text: "基础前端",
                            link: "/knowledge/frontend/README.md",
                            children: [
                                "/knowledge/frontend/html.md",
                                "/knowledge/frontend/css.md",
                                "/knowledge/frontend/javascript.md",
                            ]
                        },
                        {
                            text: "操作系统",
                            link: "/knowledge/os/README.md",
                            children: [
                                "/knowledge/os/terminal.md",
                                "/knowledge/os/principle.md",
                                "/knowledge/os/process.md",
                                "/knowledge/os/threads.md",
                                "/knowledge/os/commands.md",
                                "/knowledge/os/memory.md",
                                "/knowledge/os/communication.md",
                                "/knowledge/os/io.md",
                                "/knowledge/os/posix.md",
                                "/knowledge/os/networking.md",
                            ]
                        },
                        {
                            text: "编程语言",
                            link: "/knowledge/language/README.md",
                            children: [
                                "/knowledge/language/golang/README.md",
                                "/knowledge/language/php/README.md",
                                "/knowledge/language/javascript/README.md",
                            ]
                        },
                        {
                            text: "版本控制",
                            link: "/knowledge/version_control/README.md",
                            children: [
                                "/knowledge/version_control/git/README.md",
                            ]
                        },
                        {
                            text: "资源托管服务",
                            link: "/knowledge/repo_hosting/README.md",
                            children: [
                                "/knowledge/repo_hosting/github.md",
                            ]
                        },
                        {
                            text: "关系型数据库",
                            link: "/knowledge/relational_databases/README.md",
                            children: [
                                "/knowledge/relational_databases/mysql/README.md"
                            ]
                        },
                        {
                            text: "数据库更多知识",
                            link: "/knowledge/db_more/README.md",
                            children: [
                                "/knowledge/db_more/orm.md",
                                "/knowledge/db_more/acid.md",
                                "/knowledge/db_more/transaction.md",
                                "/knowledge/db_more/n_plus_1.md",
                                "/knowledge/db_more/replication.md",
                                "/knowledge/db_more/sharding.md",
                                "/knowledge/db_more/cap.md",
                            ]
                        },
                        {
                            text: "NoSQL",
                            link: "/knowledge/nosql/README.md",
                            children: [
                                "/knowledge/nosql/document.md",
                                "/knowledge/nosql/column.md",
                                "/knowledge/nosql/time_series.md",
                                "/knowledge/nosql/realtime.md",
                            ]
                        },
                        {
                            text: "API",
                            link: "/knowledge/api/README.md",
                            children: [
                                "/knowledge/api/authentication.md",
                                "/knowledge/api/rest.md",
                                "/knowledge/api/json.md",
                                "/knowledge/api/grpc.md",
                            ]
                        },
                        {
                            text: "缓存",
                            link: "/knowledge/caching/README.md",
                            children: [
                                {
                                    text: "服务器端",
                                    link: "/knowledge/caching/server/README.md",
                                    children: [
                                        "/knowledge/caching/server/redis/README.md"
                                    ]
                                },
                                "/knowledge/caching/client.md",
                                "/knowledge/caching/cdn.md",
                            ]
                        },
                        {
                            text: "Web 安全",
                            link: "/knowledge/security/README.md",
                            children: [
                                {
                                    text: "散列算法",
                                    collapsible: true,
                                    children: [
                                        "/knowledge/security/hashing/md5.md",
                                        "/knowledge/security/hashing/sha.md",
                                        "/knowledge/security/hashing/crypt.md",
                                    ]
                                },
                                "/knowledge/security/http/https.md",
                                "/knowledge/security/http/csp.md",
                                "/knowledge/security/http/cors.md",
                                "/knowledge/security/http/ssl.md",
                                "/knowledge/security/http/owasp.md",
                            ]
                        },
                        {
                            text: "测试",
                            link: "/knowledge/testing/README.md",
                            children: [
                                "/knowledge/testing/integration.md",
                                "/knowledge/testing/unit.md",
                                "/knowledge/testing/functional.md",
                            ]
                        },
                        {
                            text: "CI/CD",
                            link: "/knowledge/continue/README.md",
                            children: [

                            ]
                        },
                        {
                            text: "设计和开发原则",
                            link: "/knowledge/principles/README.md",
                            children: [
                                "/knowledge/principles/solid.md",
                                "/knowledge/principles/kiss.md",
                                "/knowledge/principles/yagni.md",
                                "/knowledge/principles/dry.md",
                            ]
                        },
                        {
                            text: "架构模式",
                            link: "/knowledge/architectural/README.md",
                            children: [
                                "/knowledge/architectural/monolithic.md",
                                "/knowledge/architectural/microservices.md",
                                "/knowledge/architectural/soa.md",
                                "/knowledge/architectural/serverless.md",
                            ]
                        },
                        {
                            text: "搜索引擎",
                            link: "/knowledge/search_engine/README.md",
                            children: [
                                "/knowledge/search_engine/elasticsearch/README.md"
                            ]
                        },
                        {
                            text: "消息代理",
                            link: "/knowledge/message/README.md",
                            children: [
                                "/knowledge/message/rabbitmq.md",
                            ]
                        },
                        {
                            text: "容器化与虚拟化",
                            children: [
                                "/knowledge/containerization/docker/README.md"
                            ]
                        },
                        {
                            text: "GraphQL",
                            link: "/knowledge/graphql/README.md",
                            children: [
                                "/knowledge/graphql/apollo.md"
                            ]
                        },
                        {
                            text: "图数据库",
                            link: "/knowledge/graph/README.md",
                            children: [
                                "/knowledge/graph/neo4j.md"
                            ]
                        },
                        {
                            text: "WebSocket",
                            link: "/knowledge/websocket/README.md",
                        },
                        {
                            text: "Web 服务器",
                            link: "/knowledge/web_server/README.md",
                            children: [
                                "/knowledge/web_server/nginx/README.md"
                            ]
                        },
                        {
                            text: "大规模构建",
                            link: "/knowledge/scalability/README.md",
                            children: [
                                {
                                    text: "迁移策略",
                                    link: "/knowledge/scalability/migration/README.md",
                                    children: [
                                        "/knowledge/scalability/migration/degradation.md",
                                        "/knowledge/scalability/migration/throttling.md",
                                        "/knowledge/scalability/migration/backpressure.md",
                                        "/knowledge/scalability/migration/loadshifting.md",
                                        "/knowledge/scalability/migration/circuit.md",
                                    ]
                                },
                                "/knowledge/scalability/understand_diff/README.md",
                                "/knowledge/scalability/horizontal_vs_vertical_scaling/README.md",
                                "/knowledge/scalability/observability/README.md",
                            ]
                        }
                    ]
                }
            }
        }
    })
}
