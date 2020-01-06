<template>
    <svg class="yv-icon">
        <use :xlink:href="`#i-${icon}`"></use>
    </svg>
</template>

<script >
    export default {
        props:['icon']
    }
</script>

<style lang="scss">
    .yv-icon{
        width:1em;height:1em;
    }
</style>