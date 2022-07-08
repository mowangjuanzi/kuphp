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
        locales: {
            "/": {
                navbar: [
                    {
                        text: "知识体系",
                        link: "/knowledge"
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
                            link: "/knowledge/language/php/README.md",
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
                            text: "缓存",
                            link: "/knowledge/caching/README.md",
                            children: [
                                {
                                    text: "服务器端",
                                    link: "/knowledge/caching/server_side/README.md",
                                    children: [
                                        "/knowledge/caching/server_side/redis/README.md"
                                    ]
                                },
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
                            text: "容器化与虚拟化",
                            children: [
                                "/knowledge/containerization/docker/README.md"
                            ]
                        },
                        {
                            text: "GraphQL",
                            link: "/knowledge/graphql/README.md",
                            children: [

                            ]
                        },
                        {
                            text: "图数据库",
                            link: "/knowledge/graph_database/README.md",
                            children: [

                            ]
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
                                "/knowledge/scalability/migration_strategies/README.md",
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
