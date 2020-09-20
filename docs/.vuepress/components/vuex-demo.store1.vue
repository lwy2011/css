<template>
    <button @click="increment">{{n}}++</button>
</template>

<script>
    import {mapState, mapMutations} from "vuex";
    //少了导入store，但是多了mapState，mapMutations或者更多
    // store要导入到顶层的组件中！其他的孩子组件都不需要导入了。

    export default {
        methods: {
            // onClick(){
            //     //store.commit('increment')  //setter的核心逻辑！
            // }
            ...mapMutations(["increment"])  //只是看起来更高大上了！
        },
        computed: {
            ...mapState(["n"])  //只是更优雅了，但是不容易读懂
        }
    };
</script>

<style>

</style>

