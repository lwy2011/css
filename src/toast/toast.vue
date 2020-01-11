<template>
    <div class="yv-toast">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "toast-v",
        props: {
            message: String
        }
    };
</script>

<style lang="scss" scoped>
    @import "../common";
    .yv-toast {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 10;
        background: $toast-bg;
        color: white;
        padding: 1em;
        border-radius: $border-radius;
        opacity: .9;
    }
</style>

