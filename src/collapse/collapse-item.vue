<template>
    <div class="yv-collapse-item">
        <div class="title">
            <slot></slot>
        </div>
        <div v-if="active" class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>


<script>
    export default {
        name:'collapse-item-v',
        props:{
            name : {
                type:String,required:true
            },
        },
        data(){
            return{
                active:true
            }
        },
    }
</script>


<style lang="scss" scoped>
    @import "../common";
    .yv-collapse-item{
        border:1px solid $border-color;
        margin: -1px;
        &:first-child{
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
        }
        &:last-child{
            border-bottom-left-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
        }
        >.title{
            padding:$small-padding $middle-padding;
        }
        >.content{
            border-top:1px solid $border-color;
        }
    }
</style>