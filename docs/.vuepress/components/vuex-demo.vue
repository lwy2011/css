<template>
    <div style="margin:1em;">
        <h4>
            状态管理
        </h4>
        <p>
            我认为状态就是数据的抽象。管理数据就是增删改查！
        </p>
        <p>
            对数据的操作，是基于函数的。
        </p>
        <h5>props传函数</h5>
        <p>
            回到父子通讯知识，父传子一个回调函数，子调用它，得以通讯！
            问题：耦合了，依赖父元素的方法属性，react那里一直都是如此。
            这样每个子组件想要通讯都要支持这个属性！
        </p>
        <h5>自定义事件通讯触发函数执行</h5>
        <p>
            解耦：Vue的实例每个都自动支持了$on，$emit两个事件收发机制的方法！
            父子通讯不再以父组件那里为中心了。父子组件都是中心！
            比react的属性传方法，Vue子组件也有话语权定制通讯的标准，父组件很容易
            配合。
        </p>
        <p>
            随着层级加深，传值用单纯的父子之间事件通讯，也是要层层收发传到
            上层的，也是很麻烦！所以出现了独立的事件收发系统，它独立于各个组件，又被各个组件
            依赖。所有的组件都可以接收它发送的事件，也可以对它发送事件。
        </p>
        <p>
            深层子组件可以对事件系统发送事件，事件系统在上层组件接收到之后，
            上层组件可以操作了。
        </p>
        <p>
            独立的事件中心，做收发事件，进行通讯，进而可以跨层级，做些数据处理的逻辑。
        </p>
        <p>
            对数据的跨层级操作解决了，但是数据的跨层级获取呢？假如深层嵌套5层的孩子组件
            需要顶层的数据，，，一层层传递？
        </p>
        <p>
            既然有独立的事件收发体系，支撑对顶层数据的操作，那
            如果有顶层的数据存储体系，支撑对各个层级的组件的数据获取，那不就好了？
        </p>
        <h4>
            vuex store
        </h4>
        <p>
            由上面的推导，理想的store 要有存储数据的功能，
            要提供setter,getter方法！
            然后必须要有vue的自动更新的功能！
            Vuex开秀了。
        </p>

        <p>
            下面看一下store示例代码：
        </p>
        <pre>
            <code>{{storeCode}}</code>
        </pre>
        <p>获取store的state.n的值：{{x}}</p>
        <p>
            获取方式跟传统的js的对象属性获取写法一样。
            获取方式看最下面的源代码展示。
        </p>
        <p>
            注意：
            <strong>组件依赖store.state.xxx的值是放到组件的
                computed属性里了!</strong>
        </p>
        <p>
           获取是 当前需求组件跟store之间的联系，它们完全互相独立！
        </p>
        <p>
            接下来，
            如何操作？还是事件机制？
            是否会自动更新？
        </p>
        <p>
            下面是一个操作组件及其代码：
        </p>
        <Setter></Setter>
        <pre>
            <code>{{setter1Code}}</code>
        </pre>
        <p>
            由此看出，commit 和 mutations是操作数据的核心思路！而且vue做过对vuex的
            优化，可以自动实现数据的响应式更新进而视图更新！到此，对状态管理的几个基本问题
            算是解决了！
        </p>

        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>

    import getCode from "../../helper-code";
    import store from "./vuex.demo.store";
    import Setter from './vuex-demo.store'
    export default {
        components: {Setter},
        data() {
            return {
                content: "",
                storeCode: "",
                setter1Code:''
            };
        },
        mounted() {
            this.content = getCode("vuex-demo.vue").default;
            this.storeCode = getCode("vuex.demo.store.js").default;
            this.setter1Code = getCode("vuex-demo.store.vue").default;

        },
        computed:{
            x(){   //这里需要注意！
                return store.state.n
            }
        }
    };
</script>

<style>

</style>

