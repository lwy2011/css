<template>
    <div style="margin:1em;">
        <ul ref="lists">
            <li v-for="item in lists" :key="item">
                {{item}}
            </li>
        </ul>

        <button @click="addLists">add lists</button>
        <p>
            组件的更新是异步的，对数据的更改是同步的，更改完了，vue的监听，diff，然后重新渲染，都是异步的。
            同时，一个块内多次更改数据，会合并所有的数据更改的总结果，只会触发一次渲染。
        </p>
        <p>
            多用于更新视图后对DOM的操作，结合$ref一起用。我用的最多的地方是写单元测试，，，
        </p>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>

    import getCode from "../../helper-code";

    export default {
        components: {},
        data() {
            return {
                content: "",
                lists: [
                    1, 2, 3,
                ],
                length:3,
            };
        },
        mounted() {
            this.content = getCode("nextTick-demo.vue").default;
        },
        methods: {
            addLists() {
                const {length} = this.lists;
                this.lists.push(length + 1);
                this.lists.push(length + 2);
                this.lists.push(length + 3);
                const ul = this.$refs.lists
                alert('修改lists数据代码后面，立即查询lists.length ='+ ul.childNodes.length)
                this.$nextTick(
                    ()=>{
                        alert('在$nextTick里查询lists.length ='+ ul.childNodes.length)
                    }
                )
            }
        }
    };
</script>

<style>

</style>

