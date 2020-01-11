<template>
    <div class="yv-toast" v-html="html">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "toast-v",
        props: {
            html: String
        }
    };
</script>

<style lang="scss" scoped>
    @import "../common";

    .yv-toast {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        background: $toast-bg;
        color: white;
        padding: 1em;
        border-radius: $border-radius;
        opacity: .8;
        display: flex;align-items: center;
        box-shadow: 0 1px 3px $box-shadow-color;
    }
</style>

