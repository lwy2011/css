<template>
    <div style="margin:1em;">
        <y-nav :selected.sync="selected" :hover-timer-delay="1000">
            <component v-for="item in navs"
                       :name="item.name"
                       :key="item.name"
                       v-bind:is="item.sub ? 'y-sub-nav':'y-nav-item'"
                       :disabled="disabled(item.name)"
            >
                {{item.name}}
                <template v-slot:popover>
                    <component v-for="item1 in item.sub"
                               :name="item1.name"
                               :key="item1.name"
                               v-bind:is="item1.sub ? 'y-sub-nav':'y-nav-item'"
                               :disabled="disabled(item1.name)"
                    >
                        {{item1.name}}
                        <template v-slot:popover>
                            <component v-for="item2 in item1.sub"
                                       :name="item2.name"
                                       :key="item2.name"
                                       v-bind:is="item2.sub ? 'y-sub-nav':'y-nav-item'"
                                       :disabled="disabled(item2.name)"
                            >
                                {{item2.name}}
                                <template v-slot:popover>
                                    <component v-for="item3 in item2.sub"
                                               :name="item3.name"
                                               :key="item3.name"
                                               v-bind:is="item3.sub ? 'y-sub-nav':'y-nav-item'"
                                               :disabled="disabled(item3.name)"
                                    >
                                        {{item3.name}}
                                    </component>
                                </template>
                            </component>
                        </template>
                    </component>
                </template>
            </component>
            <y-nav-item name="百度">
                <a href="http://baidu.com" target="_blank">百度</a>
            </y-nav-item>
        </y-nav>
        <p style="margin-bottom: 15em;">
            test 测试一下，下面的元素会是如何，会不会被遮挡，或者dom结构撑不起来，空间塌陷等等，，，
        </p>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import helper from "../../helper-icon.js";
    import YNav from "../../../src/nav/nav.vue";
    import YNavItem from "../../../src/nav/nav-item.vue";
    import YSubNav from "../../../src/nav/sub-nav.vue";
    import getCode from "../../helper-code";

    export default {
        components: {
            YNav, YNavItem, YSubNav
        },
        methods: {
            disabled(val) {
                // console.log(val,val.length < 3);
                return val.length < 2;
            }
        },
        data() {
            return {
                content: `

                `,
                selected: "天津市",
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
                                        name: "3"
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
                                                name: "d11"
                                            },
                                            {
                                                name: "2"
                                            },
                                            {
                                                name: "d31"
                                            }
                                        ]
                                    },
                                    {
                                        name: "c2",
                                        sub: [
                                            {
                                                name: "c21"
                                            },
                                            {
                                                name: "c22"
                                            },
                                            {
                                                name: "c23"
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
        },
        mounted() {
            this.content= getCode('nav-demo.vue').default
        }
    };
</script>

