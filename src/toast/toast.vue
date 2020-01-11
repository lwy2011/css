<template>
    <div class="yv-toast">

    </div>
</template>

<script>
    import Vue from "vue";

    Vue.prototype.$toast = () => {
        console.log(2);
    };
    const vm = new Vue();
    vm.$toast();
    export default {
        name: "toast-v",
        props: {
            message: String
        }
    };
</script>

<style lang="scss" scoped>
    .yv-toast {

    }
</style>

