<template>
    <div style="margin:1em;">
        <h4>v-for</h4>
        <p>
            循环要点，in   运算符，key必须有，不能是index,random。也可以放template上！
        </p>
        <ul>
            <li v-for="(item,index) in lists" :key="item.id">
                {{index }}{{item.text}}
            </li>
        </ul>
        <p>
            数组遍历，(item，index) 是 遍历的子项。与遍历对象不一样的。
        </p>
        <ul>
            <li v-for="(val,key,index) in obj" :key="key">
                {{val}}-{{key}}--{{index}}
            </li>
        </ul>
        <p>
            对象遍历的时候，遍历子项是(val,key,index)。
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
                content: `
                `,
                lists:[
                    {id:1,text:'a'},
                    {id:2,text:'b'},
                    {id:3,text:'c'},
                    {id:4,text:'d'},
                ],
                obj:{
                    name:'lii',
                    age:3,
                    gender:'girl'
                }
            };
        },
        computed: {

        }
    };
</script>

<style>

</style>
