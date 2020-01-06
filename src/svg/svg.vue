<template>
    <svg class="yv-icon" :class="loading?'loading':''">
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

<style lang="scss">
    .yv-icon{
        width:1em;height:1em;
    }
</style>