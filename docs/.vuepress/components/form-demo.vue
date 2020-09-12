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
        <h4>记得在做table组件的时候，checkbox那个搞得我很难受！！现在再回顾一下！</h4>
        <input type="checkbox" value="liu"  @change="onCheckboxChange">
        <span>liu</span>
        <p>checked:{{checked}}</p>
        <p>
            这次我是用了原生的事件思路做的。顺势而为！可能是上次的印象挺深的，，，
            onchange事件，发生后，依靠元素的checked值，判断当前视图，从用户角度看，没问题。
            得到用户看到的是否选上了。
        </p>
        <p>
            上次钻牛角尖，对双向绑定比较模棱两可，认为用户点击了CheckBox，然后触发change事件，元素的checked跟数据绑定。
            我操作checked，进而操作视图。忽略了原生事件的因果关系！现在想来，是先checked变了，才会发生change事件。这就是顺势，之前我想
            的是大大的控制欲，逆势，逆了原生事件。
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
                checked:null,
            };
        },
        computed:{
            value(){
                return this.checked ? 'yes':'no'
            }
        },
        methods: {
            onChange(e){
                this.str2 = e.target.value
            },
            onCheckboxChange(e){
                const {value,checked} = e.target

                console.log(value,checked);
                this.checked = checked ? value : null
            }
        }
    };
</script>

<style>

</style>

