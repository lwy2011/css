<template>
    <div class="yv-cascader">
        <div class="trigger" @click="visible=!visible">
            <slot></slot>
        </div>
        <div class="items" v-if="visible">
            <cascaderItems :data="data"></cascaderItems>
        </div>
    </div>
</template>

<script>
    import cascaderItems from "./cascader-item.vue";
    export default {
        components: {
            cascaderItems
        },
        props: {
            selected: Array,
            data:Array
        },
        data(){
            return {
                visible:false
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../common";
    .yv-cascader {
        position:relative;

        >.trigger{

        }
        >.items{
            border:1px solid $border-color;
            max-width: 9em;
        }
    }
</style>