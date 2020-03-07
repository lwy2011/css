<template>
    <div style="margin:1em;">
        <y-nav :selected.sync="selected">
            <component v-for="item in navs" :name="item.name" :key="item.name"
                       v-bind:is="item.sub ? 'y-sub-nav':'y-nav-item'">
                {{item.name}}
                <template slot="popover">
                    <component v-for="item1 in item.sub" :name="item1.name" :key="item1.name"
                               v-bind:is="item1.sub ? 'y-sub-nav':'y-nav-item'">
                        {{item1.name}}
                        <template slot="popover">
                            <component v-for="item2 in item1.sub" :name="item2.name" :key="item2.name"
                                       v-bind:is="item2.sub ? 'y-sub-nav':'y-nav-item'">
                                {{item2.name}}
                                <template slot="popover">
                                    <component v-for="item3 in item2.sub" :name="item3.name" :key="item3.name"
                                               v-bind:is="item3.sub ? 'y-sub-nav':'y-nav-item'">
                                        {{item3.name}}
                                    </component>
                                </template>
                            </component>
                        </template>
                    </component>
                </template>
            </component>
        </y-nav>
        <p style="margin-bottom: 15em;"></p>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import YNav from "../../../src/nav/nav.vue";
    import YNavItem from "../../../src/nav/nav-item.vue";
    import YSubNav from "../../../src/nav/sub-nav.vue";

    export default {
        components: {
            YNav, YNavItem, YSubNav
        },
        data() {
            return {
                content: `
                <y-icon icon="setting"></y-icon>
                <y-icon icon="loading" :loading="true"></y-icon>
                <y-icon icon="warn"></y-icon>
                <y-icon icon="left"></y-icon>
                `,
                selected: ["河北省"],
                navs: [
                    {
                        name: "天津市",
                    },
                    {
                        name: "河北省",
                        sub: [
                            {
                                name: "保定市"
                            },
                            {
                                name: "石家庄市"
                            },
                            {
                                name: "沧州市"
                            }
                        ]
                    },
                    {
                        name: "山西省",
                        sub: [
                            {
                                name: "太原市",
                                sub: [
                                    {
                                        name: "t1"
                                    },
                                    {
                                        name: "t2"
                                    },
                                    {
                                        name: "t3"
                                    }
                                ]
                            },
                            {
                                name: "大同市",
                                sub: [
                                    {
                                        name: "d1",
                                        sub: [
                                            {
                                                name: "t1"
                                            },
                                            {
                                                name: "t2"
                                            },
                                            {
                                                name: "t3"
                                            }
                                        ]
                                    },
                                    {
                                        name: "d2",
                                        sub: [
                                            {
                                                name: "t1"
                                            },
                                            {
                                                name: "t2"
                                            },
                                            {
                                                name: "t3"
                                            }
                                        ]
                                    },
                                    {
                                        name: "d3"
                                    }
                                ]
                            },
                            {
                                name: "晋城市"
                            }
                        ]

                    },
                    {
                        name: "广东省",
                        sub: [
                            {
                                name: "深圳市"
                            },
                            {
                                name: "广州市"
                            },
                            {
                                name: "珠海市"
                            }
                        ]
                    },
                    {name: "北京市"}
                ]

            };
        }
    };
</script>

