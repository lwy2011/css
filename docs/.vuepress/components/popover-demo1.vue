<template>
    <div>
        <div class="box">
            <h4>mouseenter popover</h4>
            <y-popover type="mouseenter">
                <template #content="{close}">
                    <y-svg icon="setting"></y-svg>
                    设置
                    <div>
                        testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
                        testtesttesttesttesttesttesttesttesttesttesttesttesttesttest
                        testtesttesttesttesttesttesttesttesttest
                    </div>
                    <y-button @click="close">关闭</y-button>
                </template>
                <y-button>弹出top</y-button>
            </y-popover>
            <y-popover position="bottom" type="mouseenter">
                <template #content>
                    <y-svg icon="setting"></y-svg>
                    设置
                    <div>
                        testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
                        testtesttesttesttesttesttesttesttesttesttesttesttesttesttest
                        testtesttesttesttesttesttesttesttesttest
                    </div>
                </template>
                <y-button>弹出bottom</y-button>
            </y-popover>
            <y-popover position="left" type="mouseenter">
                <template #content>
                    <y-svg icon="setting"></y-svg>
                    设置
                    <div>
                        testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
                        testtesttesttesttesttesttesttesttesttesttesttesttesttesttest
                        testtesttesttesttesttesttesttesttesttest
                    </div>
                </template>
                <y-button>弹出left</y-button>
            </y-popover>
            <y-popover position="right" type="mouseenter">
                <template #content>
                    <y-svg icon="setting"></y-svg>
                    设置
                    <div>
                        testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
                        testtesttesttesttesttesttesttesttesttesttesttesttesttesttest
                        testtesttesttesttesttesttesttesttesttest
                    </div>
                </template>
                <y-button>弹出right</y-button>
            </y-popover>
        </div>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import Popover from "../../../src/popvoer/popover";
    import Button from '../../../src/button/button.vue'
    import Icon from '../../../src/svg/svg.vue'

    export default {
        components: {
            "y-popover": Popover,
            "y-button":Button,
            'y-svg':Icon
        },
        data() {
            return {
                content: `
                <y-icon icon="setting"></y-icon>
                `,
            };
        },
        methods:{
            popoverClick(e, popover) {
                console.log(e, popover);
            }
        }
    };
</script>

<style lang="scss" scoped>
    .box {
        margin: 3em auto;box-sizing: border-box;
    }
</style>