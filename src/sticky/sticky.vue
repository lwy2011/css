<template>
    <div class="yv-sticky" ref="wrapper">
        <div class="yv-sticky-dom"
             :class="{topFixed}"
             :style="{width}"
             ref="dom">
            <slot></slot>
        </div>
        <div class="yv-sticky-dom-copy" :class="{topFixed}">
            <div class="yv-sticky-dom-copy-mask"></div>
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
            responsiveWidth:String
        },
        data() {
            return {
                width: undefined, topFixed: false,
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
                const {wrapper, dom} = this.$refs;
                const {top} = wrapper.getBoundingClientRect();
                if (top <= this.top) {
                    console.log("fix");
                    const {width} = dom.getBoundingClientRect();
                    this.topFixed = true;
                    dom.style.top = this.top + "px";
                    this.width = this.responsiveWidth || width + "px";
                } else {
                    console.log("fixno");
                    this.topFixed = false;
                    this.width = undefined;
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    .yv-sticky {
        &-dom {
            &.topFixed {
                position: fixed;
                z-index: 100;
            }

            &-copy {
                opacity: 0;
                z-index: -10;
                position: relative;
                display: none;
                &.topFixed{
                    display: block;
                }
                &-mask {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>