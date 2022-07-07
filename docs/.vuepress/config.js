const {defaultTheme} = require("vuepress");

module.exports = {
    title: "酷PHP",
    lang: "zh-CN",
    theme: defaultTheme({
        locales: {
            "/": {
                navbar: [
                    {
                        text: "知识体系",
                        link: "/knowledge"
                    },
                    {
                        text: '资源',
                        children: [
                            {
                                text: 'slate 中文文档',
                                link: 'https://slate.kuphp.co',
                            },
                        ],
                    },
                ],
                sidebar: {
                    "/knowledge": [
                        {
                            text: "互联网",
                            children: [
                                "/knowledge/internet/README.md",
                                "/knowledge/internet/internet-work/README.md",
                                "/knowledge/internet/http/README.md",
                                "/knowledge/internet/browser-work/README.md",
                                "/knowledge/internet/dns/README.md",
                                "/knowledge/internet/domain_name/README.md",
                                "/knowledge/internet/hosting/README.md",
                            ]
                        },
                        {
                            text: "操作系统",
                            children: [
                                "/knowledge/os/README.md"
                            ]
                        },
                        {
                            text: "编程语言",
                            children: [
                                "/knowledge/language/php/README.md",
                                "/knowledge/language/golang/README.md",
                                "/knowledge/language/javascript/README.md",
                            ]
                        },
                        {
                            text: '版本控制',
                            children: [
                                '/knowledge/version_control/git/README.md'
                            ]
                        },
                        {
                            text: "关系型数据库",
                            children: [
                                "/knowledge/relational_databases/mysql/README.md"
                            ]
                        },
                        {
                            text: "Redis",
                            children: [
                                "/knowledge/caching/server_side/redis/README.md"
                            ]
                        },
                        {
                            text: "搜索引擎",
                            children: [
                                "/knowledge/search_engine/elasticsearch/README.md"
                            ]
                        },
                        {
                            text: "Docker",
                            children: [
                                "/knowledge/containerization/docker/README.md"
                            ]
                        },
                        {
                            text: "GraphQL",
                            children: [
                                '/knowledge/graphql/README.md'
                            ]
                        },
                        {
                            text: "图数据库",
                            children: [
                                '/knowledge/graph_database/README.md'
                            ]
                        },
                        {
                            text: "Web 服务器",
                            children: [
                                '/knowledge/web_server/nginx/README.md'
                            ]
                        },
                        {
                            text: "大规模构建",
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
