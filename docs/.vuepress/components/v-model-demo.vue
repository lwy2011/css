<template>
    <div style="margin:1em;">
        <h4>v-model 自定义！</h4>
        <Child v-model="value"></Child>
        <p>value = {{value}}</p>
        <h4>
            child组件code
        </h4>
        <pre>
            <code>{{childCode}}</code>
        </pre>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>

    import Child from './v-model-demo-child'
    import getCode from "../../helper-code";
    export default {
        components: {Child},
        data() {
            return {
                content: '',
                value:'test',
                childCode:''
            };
        },
        mounted() {
            this.childCode = getCode('v-model-demo-child.vue').default
            this.content = getCode('v-model-demo.vue').default
        }
    };
</script>

<style>

</style>

