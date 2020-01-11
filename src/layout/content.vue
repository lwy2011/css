<template>
    <div class="yv-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "content-v"
    };
</script>

<style lang="scss" scoped>
    .yv-content {
        flex-grow: 1;
    }
</style>