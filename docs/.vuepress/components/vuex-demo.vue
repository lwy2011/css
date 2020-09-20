<template>
    <div style="margin:1em;">
        <h4>
            状态管理
        </h4>
        <p>
            我认为状态就是数据的抽象。管理数据就是增删改查！
        </p>
        <p>
            对数据的操作setter，是基于函数的。
        </p>
        <h4>props传函数</h4>
        <p>
            回到父子通讯知识，父传子一个回调函数，子调用它，得以通讯！
            问题：耦合了，依赖父元素的方法属性，react那里一直都是如此。
            这样每个子组件想要通讯都要支持这个属性！
        </p>
        <h4>自定义事件通讯触发函数执行</h4>
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
        <h4>
            数据的读取getter
        </h4>
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

        <p>
            相比于redux，vuex更加简单，功能明确。dispatch-> commit，
            reducer-> mutations，当初我用redux的时候，就觉得types的字典
            有些多余了，当然从设计层面说，更加严谨规范。不过，vuex确实比redux
            更简单，思路清晰。
        </p>

        <p>
            但是现在还是原本的问题，数据的getter，还是要一个一个地导入，只不过
            不怕隔着多少层了。
        </p>
        <h4>
            优化组件对store的导入和commit步骤
        </h4>
        <p>
            mapGetters，优化读取数据时的书写代码，更优雅！
            依旧作为组件的computed属性，参数是数组，数组的值是store的属性名。
            想改名，就不能用数组，要用对象了，具体看文档去！
        </p>
        <p>
            mapMutations，也是优化commit的书写代码的。
        </p>
        <p>
            <strong>
                注意：不再引入store，但是store必须要在顶层组件引入！
            </strong>
        </p>
        <p>这是示例和代码</p>
        <Setter1></Setter1>
        <p>
            当然还有更多的操作，
            比如重定义导入过来的mutations的变量名为新方法名。
        </p>

        <pre>
            <code>{{setter2Code}}</code>
        </pre>

        <p>
            <strong>
                mutations里面的方法必须是同步函数！devtool对mutations的观察
                都是同步的，mutations的异步state操作，devtool不会等待的，记录的
                state的状态是去掉异步操作的结果。
            </strong>
        </p>
        <h4>
            actions 为异步而来！
        </h4>
        <Setter2></Setter2>
        <p>
            可以先看下此组件的代码，同时回到上面看下store的代码，
            看下actions，mutations的异步方法的逻辑。
        </p>
        <p>
            actions其实是异步执行commit的逻辑。而mutations里如果
            还有异步的逻辑，那就抽离出来，放到actions里。
        </p>
        <pre>
            <code>{{setter3Code}}</code>
        </pre>

        <h3>
            总结
        </h3>
        <h4>
            store总共读取，写入两种功能api提供给我们，响应式更新是框架提供的。
        </h4>
        <p>
            读取(注意，全都放在computed里面)：
        </p>
        <pre>
            <code>
                store.state.xxx   //需要实时引入store
                //不需要实时引入store,但是需要引入mapState
                mapState(['xx','yy'])
                mapState({zz:'xx'})

                //还有一种getters，它很像axios里的拦截器！
                //getters跟actions，真的像拦截器，做一些预处理的逻辑！
                //等同于对象、class里的getter的使用场景和设计意图。具体使用，看文档去。
            </code>
        </pre>
        <p>
            数据操作（放在methods里）：
        </p>
        <pre>
            <code>
                //store 里：
                //关键逻辑1是：commit行为是否是异步的！
                //是，就把commit行为放到actions里！
                //不是，就直接写mutations的逻辑！
                //方法可接受第二个参数，进行复杂的逻辑操作！
                //对应的，commit的时候，要传这个参数！

                //关键逻辑二，组件如何触发commit:
                //需要actions里触发的，就转化为如何触发actions了。
                //actions函数的第一个参数是this.$store值！

                store.commit(  //需要引入store
                    'xxx',
                    {xx:yy}   //可有可无，跟mutations那里对应！
                )
                mapMutations(['ddd','xxx'])  //无需store,需要mapMutations
                mapMutations({'yyy':'ddd'})  //换属性名称

                store.actions.ddd   //基本调用
                mapActions(['xxx'])  //对应了actions里的同名函数
            </code>
        </pre>
        <p>
            map是一个系列，明白其实质，就是不需要引入store，同时
            把store的mutations或者mutations的预处理函数actions里的函数，关联
            到当前的组件的methods的属性上！
        </p>
        <p>
            核心就是，读取，以对象的属性来读取！写入更新，commit与同步或异步的
            来决定actions,mutations。
        </p>
        <p>
            更多细节：getter；传第二个值；默认第一个参数为store!
        </p>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>

    import getCode from "../../helper-code";
    import store from "./vuex.demo.store";
    import Setter from "./vuex-demo.store";
    import Setter1 from "./vuex-demo.store1";
    import Setter2 from "./vuex-demo.store2";

    export default {
        components: {Setter, Setter1, Setter2},
        store,   //顶层导入，后代只需要导入mapGetters,mapMutations即可
        data() {
            return {
                content: "",
                storeCode: "",
                setter1Code: "",
                setter2Code: "",
                setter3Code: ""
            };
        },
        mounted() {
            this.content = getCode("vuex-demo.vue").default;
            this.storeCode = getCode("vuex.demo.store.js").default;
            this.setter1Code = getCode("vuex-demo.store.vue").default;
            this.setter2Code = getCode("vuex-demo.store1.vue").default;
            this.setter3Code = getCode("vuex-demo.store2.vue").default;

        },
        computed: {
            x() {   //这里需要注意！
                return store.state.n;
            }
        }
    };
</script>

<style>

</style>

