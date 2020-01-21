<template>
    <div class="yv-cascader">
        <div class="trigger" @click="visible=!visible">
            <slot></slot>
        </div>
        <div class="items" v-if="visible" :style="widthStyle">
            <cascaderItems :data="data" :height="heightStyle"></cascaderItems>
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
            data:Array,
            widthStyle:String,
            heightStyle:String
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
            position:absolute;
            z-index:10;
            width: 9em;
        }
    }
</style>