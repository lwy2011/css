<template>
    <div>
        <div style="margin:1em;paddingBottom:20em;z-index: 10;">
            <h4>用自定义指令，实现了点击空白处，收掉popover!</h4>
            <p>
                好处是不需要每个组件的实例都频繁地添加和解绑事件了。坏处是
                自定义指令生成了一个监听器，没法取消了。
            </p>
            <y-cascader :data="data"
                        :size="size"
                        @update:selected="selected = $event"
                        :selected="selected"
                        :async="false"
            >
            </y-cascader>
            <h4>test</h4>
        </div>
        <div style="margin:1em;paddingBottom:20em;z-index: 10;">
            <y-cascader :data="data"
                        :size="size"
                        @update:selected="selected = $event"
                        :selected="selected"
                        :async="false"
            >
            </y-cascader>
            <h4>test</h4>
        </div>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import Cascader from "../../../src/cascader/cascader-v.vue";
    import Button from "../../../src/button/button.vue";
    import data from "./cascader.db.js";
    import "../../helper-icon.js";


    // console.log(data);
    export default {
        components: {
            "y-cascader": Cascader,
            "y-button": Button,
        },
        data() {
            return {
                content: `
                        <y-cascader></y-cascader>
                `,
                data,
                selected: [],
                size: {
                    width: "9em",
                    height: "15em"
                }
            };
        }
    };
</script>

