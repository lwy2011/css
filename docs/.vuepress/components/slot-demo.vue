<template>
    <div style="margin:1em;">
        <h4>基本用法</h4>
        <Slot1></Slot1>
        <Slot1>
            <button @click="n+=1">
                外部组件标签包裹了一个button，替换了默认值！点击n={{n}}
            </button>
        </Slot1>
        <p>
            slot在做组件设计时经常会用到，尤其是一套组件，父子组件之间的逻辑必须要用嵌套的形式时。
        </p>
        <p>
            <code>.$slots</code> 可以在slot所在的组件内，拿到插槽的内容，并进行数据操作！比如我让button的字体颜色为红色！
            操作点击事件的回调函数！让n自增!
        </p>
        <p>
            很奇怪：子组件内可以操作父组件的一些数据逻辑！子组件的DOM结构又是父组件的一些DOM元素的父容器！
        </p>
        <p>
            很适合一些特殊的嵌套的组件套件！
        </p>
        <h5>
            子组件的代码
        </h5>
        <pre>
            <code>{{slot1}}</code>
        </pre>
        <h4>
            slot scoped
        </h4>
        <p>
            嵌套的组件想要互相传值，用props?
            假如一套组件，爷爷组件的template里，导入了两个兄弟组件，兄弟组件DOM嵌套，
            但是props却是有些需要传递的！
            而当前的props，是当前的爷爷的！怎么办？
        </p>
        <Slot3>
            <template v-slot="slotProps">
                <Slot2 :set="slotProps.data.set" :title="slotProps.data.title">
                </Slot2>
            </template>
        </Slot3>
        <p>
            slot 内设置slot的属性和值，slot提供了数据传递的基础！
            外部通过template指向了slot对象了，然后可以拿到存储的值了！
        </p>
        <p>
            在template里把子组件的属性方法向template内的其他组件或者当前组件暴露，就用作用域插槽！
            其实跟上面的.$slots api原理是差不多的！这个更优雅的！
        </p>
        \(^o^)/~
        <h5>
            有slot的组件代码
        </h5>
        <pre>
            <code>{{slot3}}</code>
        </pre>
        <h5>
            无slot的组件代码
        </h5>
        <pre>
            <code>{{slot2}}</code>
        </pre>
        <h4>
            具名插槽
        </h4>
        <p>
            多个slot，各有各的用处！需要些标识来区别！只有一个的时候，就是默认的default!
        </p>
        <Slot4>
            <template>
                default
            </template>
            <template v-slot:header>
                header
            </template>
            <template v-slot:main>
                main
            </template>
            <template v-slot:footer>
                footer
            </template>

        </Slot4>
        <p>
            具名插槽也使得.$slots的值变了，符合逻辑！还有动态插槽名就不多说了！
        </p>
        <h5>
            具名slot 代码！
        </h5>
        <pre>
            <code>{{slot4}}</code>
        </pre>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>

    import getCode from "../../helper-code";
    import Slot1 from "./slot-demo1";
    import Slot2 from "./slot-demo2";
    import Slot3 from "./slot-demo3";
    import Slot4 from "./slot-demo4";

    export default {
        components: {
            Slot1, Slot2, Slot3, Slot4
        },
        data() {
            return {
                content: "",
                n: 0,
                slot1: "",
                slot2: "",
                slot3: "",
                slot4: ""
            };
        },
        mounted() {
            this.content = getCode("slot-demo.vue").default;
            this.slot1 = getCode("slot-demo1.vue").default;
            this.slot2 = getCode("slot-demo2.vue").default;
            this.slot3 = getCode("slot-demo3.vue").default;
            this.slot4 = getCode("slot-demo4.vue").default;

        },
        methods: {}
    };
</script>

<style>

</style>

