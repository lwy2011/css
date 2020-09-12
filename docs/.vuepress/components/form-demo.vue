<template>
    <div style="margin:1em;">
        <h3>form</h3>
        <h4>v-model 双向绑定！</h4>
        <p>
            你可以用 v-model 指令在表单 input、textarea 及 select 元素上创建双向数据绑定。
        </p>
        <p>
            v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：
            text 和 textarea 元素使用 value 属性和 input 事件；
            checkbox 和 radio 使用 checked 属性和 change 事件；
            select 字段将 value 作为 prop 并将 change 作为事件。
        </p>
        <input type="text" v-model="str1">
        <p>{{str1}}</p>
        <p>
            还有其他的多种表单元素在vue上的应用，大同小异。注意的是多选情况，数据绑定的值是数组类型。
        </p>
        <h4>v-model的修饰符，相当实用！</h4>
        <p>
            lazy，number，trim!
        </p>
        <h4>尝试模拟双向绑定！</h4>
        <p>{{str2}}</p>
        <input type="text" @input="onChange" :value="str2">
        <p>
            关联了input事件，value绑定到了str2属性上！
            v-model的好处是省事，坏处是事件回调函数不能自定义，
            回调函数里，可以拿到event，可以做很多事，不只是更新一个值！
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
        data() {
            return {
                str1:'test',
                str2:'模拟v-model',
                content: `
html:
    <div style="margin:1em;">
        <h3>form</h3>
        <h4>v-model 双向绑定！</h4>
        <p>
            你可以用 v-model 指令在表单 input、textarea 及 select 元素上创建双向数据绑定。
        </p>
        <p>
            v-model 在内部为不同的输入元素使用不同的属性并抛出不同的事件：
            text 和 textarea 元素使用 value 属性和 input 事件；
            checkbox 和 radio 使用 checked 属性和 change 事件；
            select 字段将 value 作为 prop 并将 change 作为事件。
        </p>
        <input type="text" v-model="str1">
        <p>{{str1}}</p>
        <p>
            还有其他的多种表单元素在vue上的应用，大同小异。注意的是多选情况，数据绑定的值是数组类型。
        </p>
        <h4>v-model的修饰符，相当实用！</h4>
        <p>
            lazy，number，trim!
        </p>
        <h4>尝试模拟双向绑定！</h4>
        <p>{{str2}}</p>
        <input type="text" @input="onChange" :value="str2">
        <p>
            关联了input事件，value绑定到了str2属性上！
            v-model的好处是省事，坏处是事件回调函数不能自定义，
            回调函数里，可以拿到event，可以做很多事，不只是更新一个值！
        </p>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
 js :
        data() {
            return {
                str1:'test',
                str2:'模拟v-model',

            };
        },
        methods: {
            onChange(e){
                this.str2 = e.target.value
            }
        }
                `,
            };
        },
        methods: {
            onChange(e){
                this.str2 = e.target.value
            }
        }
    };
</script>

<style>

</style>

