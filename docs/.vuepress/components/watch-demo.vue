<template>
    <div style="margin:1em;">
        <h3>监听属性</h3>
        <p>
            官方背书————
            虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。
            这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。
            当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
        </p>
        <p>
            官方的示例，说明了计算属性的目的其实就是监听原本属性，依靠它出一个结果，要的是那个计算结果。
            而watch不光可以做到如此，更可以修改其他属性。而且我在计算属性那里也说过了它的应用场景了。
            watch的真正适用场景是，监听一个属性，修改其他的属性！而计算属性实质是监听一个属性，
            得到这个属性的附属属性。
        </p>
        <h4>
            深浅监听
        </h4>
        <p>
            浅监听，就是监听的属性的值就是一层，不适用于多层嵌套的属性值。
            说真的，我做开发，基本都是浅监听，数据处理都是深拷贝！以前还有大佬说性能不好，，，
            后来想了想，貌似前端遇到的大量数据的场景还木有了。
        </p>
        <button @click="count=Math.random()>0.5">
             test
        </button>
        <p>
            count 浅 :{{count}}
        </p>
        <p>
            name 深 : {{person.name}}
        </p>
        <p>
            注意，watch的深浅监听的写法不同。同时关键函数的两个默认参数，oldVal,newVal！
            而且测试表明，深监听的情况下，函数的参数oldVal就是newVal，无法获取oldVal!
        </p>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>


    export default {
        components: {
        },
        methods: {
        },
        data() {
            return {
                count:true,

                person:{
                    name:''
                },
                content: `
                html:
                    <div style="margin:1em;">
                        <h3>监听属性</h3>
                        <p>
                            官方背书————
                            虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。
                            这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。
                            当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
                        </p>
                        <p>
                            官方的示例，说明了计算属性的目的其实就是监听原本属性，依靠它出一个结果，要的是那个计算结果。
                            而watch不光可以做到如此，更可以修改其他属性。而且我在计算属性那里也说过了它的应用场景了。
                            watch的真正适用场景是，监听一个属性，修改其他的属性！而计算属性实质是监听一个属性，
                            得到这个属性的附属属性。
                        </p>
                        <h4>
                            深浅监听
                        </h4>
                        <p>
                            浅监听，就是监听的属性的值就是一层，不适用于多层嵌套的属性值。
                            说真的，我做开发，基本都是浅监听，数据处理都是深拷贝！以前还有大佬说性能不好，，，
                            后来想了想，貌似前端遇到的大量数据的场景还木有了。
                        </p>
                        <button @click="count=Math.random()>0.5">
                             test
                        </button>
                        <p>
                            count 浅 :{{count}}
                        </p>
                        <p>
                            name 深 : {{person.name}}
                        </p>
                        <p>
                            注意，watch的深浅监听的写法不同。同时关键函数的两个默认参数，oldVal,newVal！
                            而且测试表明，深监听的情况下，函数的参数oldVal就是newVal，无法获取oldVal!
                        </p>
                        <pre>
                            <code>{{content}}</code>
                        </pre>
                    </div>
                js:
                  data() {
                        return {
                            count:true,

                            person:{
                                name:''
                            },

                        };
                    },
                   watch:{
                        count:function (oldVal,newVal) {
                            alert(\`'count,浅','oldVal',\${oldVal},'newVal',\${newVal}\`)
                            this.person.name = newVal ? '大':'小'
                        },
                        person:{
                            deep:true,
                            handler(oldVal,newVal){
                                alert(\`'person,深','oldVal',\${oldVal.name},'newVal',\${newVal.name}\`)
                            }
                        }
                   }
                `,
            };
        },
       watch:{
            count:function (oldVal,newVal) {
                alert(`'count,浅','oldVal',${oldVal},'newVal',${newVal}`)
                this.person.name = newVal ? '大':'小'
            },
            person:{
                deep:true,
                handler(oldVal,newVal){
                    alert(`'person,深','oldVal',${oldVal.name},'newVal',${newVal.name}`)
                }
            }
       }
    };
</script>


