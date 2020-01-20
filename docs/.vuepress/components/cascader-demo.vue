<template>
    <div style="margin:1em;">
        <y-cascader sourse="sourse">
            <y-button>选择地址</y-button>
            <y-cascader-item v-for="item in data"
                             :data="item"
            ></y-cascader-item>
        </y-cascader>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import Cascader from "../../../src/cascader/cascader.vue";
    import CascaderItem from "../../../src/cascader/cascader-item.vue";
    import Button from '../../../src/button/button.vue'
    import data from './cascader.js'

    // console.log(data);
    export default {
        components: {
            "y-cascader": Cascader,
            "y-button":Button,
            "y-cascader-item":CascaderItem
        },
        data() {
            return {
                content: `
                        <y-cascader></y-cascader>
                `,
                data
            };
        }
    };
</script>

