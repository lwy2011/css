module.exports = {
    title: "vue 学习 css 的UI组件库",
    description: "入门vue，精通css！",
    themeConfig: {
        sidebar:'auto',
        sidebar: [
            {
                title:'组件',
                children:[
                    '/components/icon',
                    '/components/button',
                    '/components/input',
                    '/components/popover',
                    '/components/toast',
                    '/components/cascader',
                    '/components/slides',
                    '/components/nav',
                    '/components/validator',
                    '/components/pager',
                    '/components/table',
                    '/components/upload',
                    '/components/sticky',
                    '/components/datepicker',
                    '/components/scroll',
                    '/components/router',
                ]
            },
            {
                title:'基础知识',
                children:[
                    '/components/direct',
                    '/components/interpolation',
                    '/components/computed',
                    '/components/watch',
                    '/components/class-style',
                    '/components/conditional-rendering',
                    '/components/lists-rendering',
                    '/components/event'
                ]
            }
        ]
    }
};