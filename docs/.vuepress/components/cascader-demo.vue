<template>
    <div>
        <div style="margin:1em;paddingBottom:20em;z-index: 10;">
            <y-cascader :data="data"
                       :size="size"
            >
                <y-button>选择地址</y-button>
            </y-cascader>
            <h4>test</h4>
        </div>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import Cascader from "../../../src/cascader/cascader.vue";
    import Button from "../../../src/button/button.vue";
    import data from "./cascader.js";
    import '../../helper-icon.js'

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
                size:{
                    width:'9em',
                    height:'15em'
                }
            };
        }
    };
</script>

