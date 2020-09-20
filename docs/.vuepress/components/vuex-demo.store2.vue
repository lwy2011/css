<template>
    <div>
        <button @click="increment">actions 里的异步方法{{n}}++</button>
        <button @click="increment1">
            直接在mutations里的异步 {{n}}+3,可打开devtool观察！
        </button>
    </div>
</template>

<script>
    import {mapState, mapActions,mapMutations} from "vuex";
    //少了导入store，但是多了mapState，mapMutations或者更多
    // store要导入到顶层的组件中！其他的孩子组件都不需要导入了。

    export default {
        methods: {
            // onClick(){
            //     //store.commit('increment')  //setter的核心逻辑！
            // }
            ...mapMutations(["incrementAsync"]) , //只是看起来更高大上了！
            ...mapActions(["increment"]),
            increment1(){
                this.incrementAsync({amount:3})
            }
        },
        computed: {
            ...mapState(["n"])  //只是更优雅了，但是不容易读懂
        }
    };
</script>

<style>

</style>

