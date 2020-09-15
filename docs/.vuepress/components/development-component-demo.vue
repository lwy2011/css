<template>
    <div style="margin:1em;">
        <p>
            动态组件在我看来，最大的好处就是把vue的template的可编程能力扩大化了！
            有了点react的JSX的随心所欲的感了！因为动态组件实现了组件的变量化，一旦变量化，
            可附加逻辑性就大大增加了！
        </p>
        <p>
            写vue的最恶心的一点就是template的一些不可避免的枚举式写出所有的拥有同种
            逻辑的一系列template代码！让我想起了我写的级联选择器了，那里我是用动态组件简化的。
        </p>
        <p>
            可编程性，可配置性，归于设计层面了。
        </p>
        <ul>
            <li v-for="(val,key) in database" :key="key">
                <component :is="key[0].toUpperCase()+key.slice(1)" :data="val"></component>
            </li>
        </ul>
        <h5>User 组件的代码</h5>
        <pre>
            <code>{{userCode}}</code>
        </pre>
        <h5>Book 组件的代码</h5>
        <pre>
            <code>{{bookCode}}</code>
        </pre>
        <h5>Music 组件的代码</h5>
        <pre>
            <code>{{musicCode}}</code>
        </pre>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>

    import getCode from "../../helper-code";
    import User from './development-component-demo1'
    import Books from './development-component-demo2'
    import Music from './development-component-demo3'
    export default {
        components: {
            User,Music,Books
        },
        data() {
            return {
                content: "",
                database:{
                    user:{name:'xxx',age:18},
                    books:[
                        {
                            name:'js',price:'22'
                        }
                    ],
                    music:[
                        {name:'需要',singer:'liu'}
                    ]
                },
                userCode:'',
                bookCode:'',
                musicCode:''
            };
        },
        mounted() {
            this.content = getCode("development-component-demo.vue").default;
            this.userCode = getCode("development-component-demo1.vue").default;
            this.bookCode = getCode("development-component-demo2.vue").default;
            this.musicCode = getCode("development-component-demo3.vue").default;

        },
        methods: {

        }
    };
</script>

<style>

</style>

