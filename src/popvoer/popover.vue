<template>
    <div class="yv-popover">
        <span ref="trigger" @click.stop="trigger">
            <slot></slot>
        </span>
        <div class="content-wrapper" v-if="visible" ref="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>

    import {scrollTop} from "../helper";

    export default {
        name: "popover-v",
        data() {
            return {
                visible: false,
                close: Function
            };
        },

        methods: {
            trigger() {
                const {visible} = this;
                if (visible) {
                    console.log("closeClick");
                    this.close();
                } else {
                    this.visible = true;
                    this.$nextTick(
                        () => {
                            this.show();
                        }
                    );
                }
            },
            initStyle(content) {
                const {left, top, width, height} =
                    this.$refs.trigger.getBoundingClientRect();
                const obj = {
                    left: left + "px",
                    top: top + scrollTop() - height + "px"
                };
                for (let key in obj) {
                    content.style[key] = obj[key];
                }
                document.body.appendChild(content);
            },
            show() {
                const {content} = this.$refs;
                console.log(this.visible, content);
                this.initStyle(content);
                const close = () => {
                    console.log("closeDocument", close);
                    this.visible = false;
                    document.removeEventListener(
                        "click", close
                    );
                };
                this.close = close;
                document.addEventListener(
                    "click", close
                );
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../common";

    .yv-popover {
        display: flex;
    }

    .content-wrapper {
        position: absolute;
        box-shadow: 0 1px 3px $box-shadow-color;
        padding: $small-padding;
        border-radius: $border-radius;
        z-index: 10;
        background: #eee;
    }
</style>