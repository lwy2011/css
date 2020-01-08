<template>
    <svg class="yv-icon" :loading="loading">
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    .yv-icon{
        width:1em;height:1em;
        cursor: pointer;
        &[loading]{
            animation: 2s loading linear infinite;
            cursor: not-allowed;
        }
    }
</style>