<template>
    <div style="margin:1em;">
        <p>
            多个组件可以看成是多个数据对象，每个数据对象都有自己的属性方法。
            如同class一样，会有继承，泛型等等行为。每个组件也是一个个的class。
            它们可能会有些相同逻辑的属性方法。
        </p>
        <p>
            在vue中用mixin，真的很像原型，原型链。公共拥有的属性方法！用于多个组件
            相同的逻辑，抽离出来。
        </p>
        <p>mixin就是js对象！代码：</p>
        <pre>
            <code>
                {{mixinCode}}
            </code>
        </pre>
        <p>
            mixin提供的book属性：{{book}}
        </p>
        <p>
            mixin和组件都有的属性，这违背了mixin的初衷，这里只是test合并！
            name:{{name}}
        </p>
        <button @click="sayName">click 执行 mixin提供的方法！</button>
        <p>
            合并，从vue实例的属性层面进行值的合并,新增，替换。冲突以组件属性值优先！
        </p>
        <p>
            查看共有的mounted函数，进行的合并，看控制台结果，其实是都执行了。
        </p>
        <p>
            mixins属性的设置是个数组值，所以可以添加多个mixin！自动合并到vue对象的属性上！
        </p>
        <p>
            我在项目中，遇到公用的数据和逻辑时，都是抽象出一个类，然后让其他的类去继承它。
            在组件层面说不上继承，但是在数据层面，mixin就是继承的设计！
        </p>
        <p>
            在React中用context，比mixin多了响应式，更显得独立自主。其实context更像是
            属性，方法都是私有的class。而mixin是完全开放的class，单纯地提供数据的。
            在项目中，我倾向于公共的方法如ajax的封装，局部配置，公共的变量等都可以用mixin。
        </p>
        <p>
            不好的地方：代码可读性差，变量来源不明！
            命名冲突问题！
            一个组件可以包含多个mixin，一个mixin可以提供给多个组件，建议只读性的数据功能。
            多对多，逻辑复杂！一个地方改了，其他地方可能会报错。
        </p>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>

    import getCode from "../../helper-code";
    import MyMixin from './mixin-demo1.js'

    export default {
        mixins:[MyMixin],  //可以放多个！
        data() {
            return {
                content: "",age:18,six:'男',name:'流',
                mixinCode:''
            };
        },
        mounted() {
            this.content = getCode("mixin-demo.vue").default;
            this.mixinCode = getCode("mixin-demo1.js").default;

            console.log('组件mounted')
        },
        methods: {
            
        }
    };
</script>

<style>

</style>

