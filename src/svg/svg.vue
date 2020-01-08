<template>
    <svg class="yv-icon" :loading="loading" >
        <use :xlink:href="`#i-${icon}`"></use>
    </svg>
</template>

<script >
    export default {
        props:{
            icon:String,
            loading:{
                type:Boolean,
                default:false
            },
            warn:Boolean
        }
    }
</script>

<style lang="scss" scoped>
    @import "../common";
    .yv-icon{
        width:1em;height:1em;
        &[loading]{
            animation: 2s loading linear infinite;
            cursor: not-allowed;
        }
        &.warn{
            fill:$warn-color;
        }
    }
</style>