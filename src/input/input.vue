<template>
    <div class="yv-wrapper" >
        <input type="text"
               :value="value"
               :readonly="readonly"
               :disabled="disabled">
    </div>
</template>

<script>
    export default {
        props:{
            value:String,
            disabled:{
                type:Boolean,
                default:false
            },
            readonly:{
                type:Boolean,
                default:false
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../common.scss";
    .yv-wrapper {
        display: inline-flex;
        font-size: $font-size;
        >input{
            height: $input-height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 $middle-padding;
            outline: none;
            cursor: pointer;
            &:hover{
                border-color: $border-hover-color;
            }
            &:focus{
                box-shadow: 0 1px 2px  $box-shadow-color;
            }
            &.error{

            }
            &.success{

            }
            &[disabled],&[readonly]{
                cursor: not-allowed;
                background: #eee;
                border-color: #bbb;
                color:#bbb;
            }
        }

    }
</style>