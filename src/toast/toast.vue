<template>
    <div class="yv-toast" v-html="html"
         :class="position && `position-${position}`">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "toast-v",
        props: {
            html: String,
            position: {
                type: String,
                validator(val) {
                    return ["top", "bottom", "center"].indexOf(val) >= 0;
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../common";

    .yv-toast {
        position: fixed;
        z-index: 10;
        background: $toast-bg;
        color: white;
        padding: 1em;
        border-radius: $border-radius;
        opacity: .8;
        display: flex;align-items: center;
        box-shadow: 0 1px 3px $box-shadow-color;
        &.position-{
            &center{
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
            &top{
                top:1em;
                left: 50%;
                transform: translateX(-50%);
            }
            &bottom{
                bottom:1em;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
</style>

