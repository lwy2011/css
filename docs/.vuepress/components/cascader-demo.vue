<template>
    <div style="margin:1em;">
        <y-cascader :data="data">
            <y-button>选择地址</y-button>
        </y-cascader>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import Cascader from "../../../src/cascader/cascader.vue";
    import Button from '../../../src/button/button.vue'
    import data from './cascader.js'

    // console.log(data);
    export default {
        components: {
            "y-cascader": Cascader,
            "y-button":Button,
        },
        data() {
            return {
                content: `
                        <y-cascader></y-cascader>
                `,
                data,
                selected:[]
            };
        }
    };
</script>

