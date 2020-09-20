<template>
    <button @click="onClick">x++</button>
</template>

<script>
    import store from "./vuex.demo.store";

    export default {
        methods:{
            onClick(){
                store.commit('increment')  //setter的核心逻辑！
            }
        }
    };
</script>

<style>

</style>

