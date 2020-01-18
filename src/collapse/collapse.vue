<template>
    <div class="yv-collapse">
        <slot></slot>
    </div>
</template>


<script>
    export default {
        name:'collapse-v'
    }
</script>


<style lang="scss" scoped>
    @import "../common";
.yv-collapse{
    border:1px solid $border-color;
    border-radius: $border-radius;
}
</style>