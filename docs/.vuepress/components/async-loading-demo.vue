<template>
    <div style="margin:1em;">
        <p>
            异步加载组件！一般都是
            <code>import Component from '../***/***'</code>
            加载组件的，这种形式是同步加载！
        </p>
        <p>
            当一个组件，很大，加载很耗时，而且页面一开始不需要一定要展示或者依赖它，
            设置个开关，后续开关触发了，才会展示或者依赖它时，就没必要同步加载这个大组件了！
        </p>
        <p>
            异步加载，关键是
            <code>import()</code>
            函数！
        </p>
        <p>
            下面按钮管理了异步加载组件的时机。
            点击的时候，可以关注浏览器的network，看一下js文件的加载
        </p>

        <button @click="visible = !visible">
            click to load component
        </button>
        <Nav v-if="visible"></Nav>
        <p>
            关键逻辑：
            组件设置开关，控制后续的加载时机！
            然后组件的依赖导入，用import语句组成的函数形式！
        </p>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>

    import getCode from "../../helper-code";

    export default {
        components: {
            Nav:()=>import('./nav-demo')
        },
        data() {
            return {
                content: "",
                visible:false
            };
        },
        mounted() {
            this.content = getCode("async-loading-demo.vue").default;
        },
        methods: {

        }
    };
</script>

<style>

</style>

