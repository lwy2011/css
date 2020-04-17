<template>
    <div class="yv-sticky" ref="wrapper">
        <div class="yv-sticky-dom" :class="{topFixed}" ref="dom">
            <slot></slot>
        </div>
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
                topFixed: false, leftFixed: false,
                initTop: undefined, initLeft: undefined
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
                if (this.lock) return;
                this.lock = true;
                this.computY();
                this.lock = false;
            },
            computY() {
                const {wrapper,dom} = this.$refs;
                const {top, left} = wrapper.getBoundingClientRect();
                if (top <= this.top) {
                    console.log("fix");
                    this.topFixed = true;
                    dom.style.top = this.top + "px";
                } else {
                    console.log("fixno");
                    this.topFixed = false;
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    .yv-sticky {
        &-dom.topFixed {
            position: fixed;
            z-index: 100;
        }
    }
</style>