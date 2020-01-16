<template>
    <div class="yv-popover" @click="onClick">
        <span ref="trigger">
            <slot></slot>
        </span>
        <div class="content-wrapper" v-if="visible" ref="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>

    import {scrollY, scrollX} from "../helper";

    export default {
        name: "popover-v",
        data() {
            return {
                visible: false,
            };
        },

        methods: {
            onClick(e) {
                if (this.$refs.trigger.contains(e.target)
                    || this.$refs.trigger === e.target
                ) {
                    this.trigger();
                } else {

                }
            },
            trigger() {
                // e.stopPropagation();
                if (this.visible) {
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
                    left: left + scrollX() + "px",
                    top: top + scrollY() - height + "px"
                };
                for (let key in obj) {
                    content.style[key] = obj[key];
                }
                document.body.appendChild(content);
            },
            close(e) {
                const {content} = this.$refs;  //对于两个popover，一个要消失，一个要出现的情况
                if (
                    e && (
                        this.$el.contains(e.target) ||
                        (content && content.contains(e.target)) ||
                        (content && content === e.target) ||
                        this.$el === e.target
                    )
                ) return;
                console.log("closeDocument");
                this.visible = false;
                document.removeEventListener(
                    "click", this.close
                );
            },
            show() {
                this.initStyle(this.$refs.content);
                // const close = (e) => {
                //     if (
                //         e && (
                //             this.$el.contains(e.target) ||
                //             this.$refs.content.contains(e.target) ||
                //             this.$refs.content === e.target ||
                //             this.$el === e.target
                //         )
                //     ) return;
                //     console.log("closeDocument");
                //     this.visible = false;
                //     document.removeEventListener(
                //         "click", close
                //     );
                // };
                // this.close = close;   //暂存要删除的数据！
                document.addEventListener(
                    "click", this.close
                );
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../common";

    .yv-popover {
        display: inline-flex;
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