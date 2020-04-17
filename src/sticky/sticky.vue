<template>
    <div class="yv-sticky" ref="wrapper" :class="{topFixed}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "v-sticky",
        props: {
            top: {
                type: Number, default: 0
            },
            left: {
                type: Number, default: 0
            },
            right: {
                type: Number, default: 0
            },
            bottom: {
                type: Number, default: 0
            },
        },
        data() {
            return {
                topFixed: false, leftFixed: false
            };
        },
        mounted() {
            window.addEventListener(
                "scroll", this.fixed
            );
        },
        beforeDestroy() {
            window.removeEventListener(
                "scroll", this.fixed
            );
        },
        methods: {
            fixed() {
                const {wrapper} = this.$refs;
                const {top, left} = wrapper.getBoundingClientRect();
                this.topFixed = top - 10 < 0 ? true : false;
                wrapper.style.top = this.top +'px';
            }
        }
    };
</script>

<style scoped lang="scss">
    .yv-sticky {
        &.topFixed {
            position: fixed;
            z-index: 100;
        }
    }
</style>