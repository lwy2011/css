<template>
    <div class="yv-cascader">
        <div class="trigger" @click="visible=!visible">
            <slot></slot>
        </div>
        <div class="items" v-if="visible" >
            <cascaderItems
                    :selected="selected"
                    @update:selected="select"
                    :data="data" :size="size">
            </cascaderItems>
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
            size:Object,
        },
        data(){
            return {
                visible:false
            }
        },
        methods:{
            select($event){
                this.$emit('update:selected',$event)
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../common";
    .yv-cascader {
        position:relative;
        >.items{
            position:absolute;
            @extend %box-shadow;
            left:0;
            top:100%;
        }
    }
</style>