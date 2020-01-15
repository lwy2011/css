<template>
    <div class="yv-tabs-head">
        <slot></slot>
        <div class="other-wrapper">
            <slot name="others"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tabs-head-v"
    };
</script>

<style lang="scss" scoped>
    @import '../common';

    .yv-tabs-head {
        display: flex;
        border-bottom: 1px solid $border-color;
        align-items: center;
        > .other-wrapper {
            margin-left: auto; //经验之谈，可以让元素自动最右边
        }
    }
</style>