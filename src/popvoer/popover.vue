<template>
    <div class="yv-popover" @click="onClick">
        <span ref="trigger">
            <slot></slot>
        </span>
        <div class="content-wrapper"
             v-if="visible"
             ref="content"
             :class="`position-${position}`"
             @mouseenter="hoverToPop"
             @mouseleave="stopHoverPop"
        >
            <slot name="content" :close="closeFn" :i="2"></slot>
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
                hovering: null
            };
        },
        props: {
            position: {
                type: String,
                default: "top",
                validator(val) {
                    return ["top", "left", "right", "bottom"].indexOf(val) >= 0;
                }
            },
            type: {
                type: String,
                default: "click",
                validator(val) {
                    return ["click", "mouseenter"].indexOf(val) >= 0;
                }
            },
            beforeClose: Function
        },
        watch: {
            visible: function x() {
                !this.visible && this.beforeClose && this.beforeClose();
            }
        },
        mounted() {
            if (this.type === "mouseenter") {
                this.$el.addEventListener(
                    "mouseenter", this.hoverShow
                );
                this.$el.addEventListener(
                    "mouseleave", this.hoverClose
                );
            }
        },
        beforeDestroy() {
            this.hovering && clearTimeout(this.hovering);
            this.$el.removeEventListener(
                "mouseenter", this.hoverShow
            );
            this.$el.removeEventListener(
                "onmouseleave", this.hoverClose
            );
        },
        methods: {
            closeFn() {
                if (this.type === "click") {
                    this.close();
                } else {
                    this.visible = false;
                }
            },
            onClick(e) {
                if (
                    this.type === "click" &&
                    (this.$refs.trigger.contains(e.target)
                        || this.$refs.trigger === e.target
                    )
                ) {
                    this.trigger();
                }
                this.$emit("click", e, this);
            },
            hoverShow() {
                // console.log("hover");
                this.visible = true;
                this.$nextTick(
                    () => {
                        this.initStyle(this.$refs.content);
                    }
                );
            },
            hoverClose() {
                // console.log("hoverClose");
                this.hovering = setTimeout(
                    () => {
                        this.visible = false;
                    }, 1000
                );
            },
            hoverToPop() {
                this.type === "mouseenter" &&
                clearTimeout(this.hovering);
                this.hovering = null;
            },
            stopHoverPop() {
                this.type === "mouseenter" &&
                (this.visible = false);
            },

            trigger() {
                if (this.visible) {
                    // console.log("closeClick");
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
                document.body.appendChild(content);  //这里先加入dom中，避免下面计算它的宽高计算不出来。
                const {left, top, width, height} =
                    this.$refs.trigger.getBoundingClientRect();
                const height1 = content.getBoundingClientRect().height;
                const fix = {
                    top: 0,
                    left: 0
                };
                switch (this.position) {
                    case "top":
                        break;
                    case "bottom":
                        fix.top = height;
                        break;
                    case "left":
                        fix.top = (height - height1) / 2;
                        break;
                    case "right":
                        fix.top = (height - height1) / 2;
                        fix.left = width;
                }
                const obj = {
                    left: left + scrollX() + fix.left + "px",
                    top: top + scrollY() + fix.top + "px"
                };
                // console.log(fix.top,obj.top,height,height1,content);
                for (let key in obj) {
                    content.style[key] = obj[key];
                }
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
                // console.log("closeDocument");
                this.visible = false;
                document.removeEventListener(
                    "click", this.close
                );
            },
            show() {
                this.initStyle(this.$refs.content);
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
        min-width: 2em;
        padding: $small-padding $middle-padding;
        border-radius: $border-radius;
        z-index: 10;
        filter: drop-shadow(0 2px 2px $box-shadow-color);
        background: #fff;
        max-width: 24em;
        word-break: break-all; //中文推荐
        border: 1px solid $light-border-color;
        white-space: pre-line;

        &::before, &::after {
            content: '';
            display: block;
            border: $popover-margin solid transparent;
            position: absolute;
        }

        &.position-top {
            margin-top: -$popover-margin;
            transform: translateY(-100%);

            &::before, &::after {
                border-top: $popover-margin solid $light-border-color;
                top: 100%;
                border-bottom: none;
            }

            &::before {
                top: calc(100% - 1px);
                border-top: $popover-margin solid #fff;
                z-index: 1;
            }
        }

        &.position-bottom {
            transform: translateY(#{$popover-margin});

            &::before, &::after {
                border-bottom: $popover-margin solid $light-border-color;
                bottom: 100%;
                border-top: none;
            }

            &::before {
                bottom: calc(100% - 1px);
                border-bottom: $popover-margin solid #fff;
                z-index: 1;
            }
        }

        &.position-left {
            transform: translateX(-100%);
            margin-left: -$popover-margin;

            &::before, &::after {
                border-left: $popover-margin solid $light-border-color;
                left: 100%;
                top: 50%;
                transform: translateY(-50%);
                border-right: none;
            }

            &::before {
                left: calc(100% - 1px);
                border-left: $popover-margin solid #fff;
                z-index: 1;
            }
        }

        &.position-right {
            margin-left: $popover-margin;

            &::before, &::after {
                border-right: $popover-margin solid $light-border-color;
                right: 100%;
                top: 50%;
                transform: translateY(-50%);
                border-left: none;
            }

            &::before {
                right: calc(100% - 1px);
                border-right: $popover-margin solid #fff;
                z-index: 1;
            }
        }

    }
</style>