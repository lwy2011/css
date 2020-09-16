<template>
    <div style="margin:1em;">
        <p>
            组件被频繁地显示隐藏时，会频繁地被挂载卸载，性能差！
            以前讲用
            <code>v-show</code>在css层面处理！
            现在在vue框架层面，专门对此情况的组件进行了优化！
        </p>
        <p>Test 组件的代码：</p>
        <pre>
            <code>{{testCode}}</code>
        </pre>
        <button @click="visible = !visible">trigger Test component visible</button>
        <p>
            Test 的生命周期情况：{{message}}
        </p>
        <Test v-if="visible"
              @onMounted="message = 'mounted'"
              @onDestroy="message='destroyed'"
        ></Test>
        <p>
            不断地挂载卸载！试试keep-alive:
        </p>
        <p>
            keep-alive 包裹下的Test 的生命周期情况：{{message1}}
        </p>
        <keep-alive>
            <Test v-if="visible"
                  @onMounted="message1 = 'mounted'"
                  @onDestroy="message1='destroyed'"
            ></Test>
        </keep-alive>
        <p>
            一直都是挂载的，我查看了DOM树，其实是没有DOM的！从Vue层面进行了优化，
            不是css层面！推荐使用，性能优化！注意跟v-if搭配使用！
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
            Test:()=>import('./keep-alive-demo1')
        },
        data() {
            return {
                content: "",
                visible:false,
                testCode:'',
                message:'未开始test!请点击！',
                message1:''
            };
        },
        mounted() {
            this.content = getCode("keep-alive-demo.vue").default;
            this.testCode = getCode("keep-alive-demo1.vue").default;
        },
        methods: {

        }
    };
</script>

<style>

</style>

