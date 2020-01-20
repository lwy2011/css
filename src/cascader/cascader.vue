<template>
    <div class="yv-cascader">
        <div class="trigger">
            <slot></slot>
        </div>
        <cascaderItem v-for="item in data"
                      :data="item"
        ></cascaderItem>
    </div>
</template>

<script>
    import cascaderItem from "./cascader-item.vue";
    export default {
        components: {
            cascaderItem
        },
        props: {
            selected: Array,
            data:Array
        }
    };
</script>

<style lang="scss" scoped>
    .yv-cascader {

    }
</style>