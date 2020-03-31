<template>
    <div class="yv-toast"
         :class="position && `position-${position}`"
    >
        <div class="wrapper"
             :class="position && `position-${position}`"
        >
            <slot></slot>
            <div v-if="html" v-html="html"></div>
            <div v-if="closeBtn" class="toast-close" @click="closeBtnClick">
                <div class="line">
                    <div class="border"></div>
<!--                  mask  增加可点击的面积用的-->
                    <div class="mask"></div>
                </div>
                {{closeBtn}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "toast-v",
        props: {
            html: String,
            position: {
                type: String,
                default: "center",
                validator(val) {
                    return ["top", "bottom", "center"].indexOf(val) >= 0;
                }
            },
            autoClose: {
                type: Number,
                validator(val) {
                    return val >= 0;
                },
                default: 4
            },
            closeBtn: {
                type: String,
                default: "ok"
            },
            closeCallback: Function
        },
        mounted() {
            this.initAutoClose();
        },
        methods: {
            close() {
                this.$el.remove();
                this.$emit("willClose");
                this.$destroy();
            },
            closeBtnClick() {
                const {closeCallback} = this;
                this.close();
                closeCallback && closeCallback();
            },
            initAutoClose() {
                this.autoClose &&
                setTimeout(
                    () => this.close(), this.autoClose * 1000
                );
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../common";
    @import "../animate";
    $big-padding: 2*$toast-padding;
    .yv-toast {
        position: fixed;
        z-index: 30;
        color: white;
        opacity: .8;
        left:50%;
        &.position- {
            &center {
                top: 50%;
                transform: translate(-50%, -50%);
            }

            &top {
                top: 0;
                transform: translateX(-50%);
            }

            &bottom {
                bottom: 0;
                transform: translateX(-50%);
            }
        }
        > .wrapper {
            padding: $toast-padding $big-padding;
            max-width: $toast-width;
            border-radius: $border-radius;
            display: flex;align-items: center;
            overflow-x: hidden;
            background: $toast-bg;
            box-shadow: 0 1px 3px $box-shadow-color;
            &.position- {
                &center {
                    animation: 1s fade-in-center linear;
                }

                &top {
                    animation: 1s fade-in-top linear;
                    border-top-right-radius: 0;
                    border-top-left-radius: 0;
                }

                &bottom {
                    animation: 1s fade-in-bottom linear;
                    border-bottom-right-radius: 0;
                    border-bottom-left-radius: 0;
                }
            }


            > .toast-close {
                cursor: pointer;
                padding-left: $big-padding;
                margin-left: $big-padding;
                flex-shrink: 0;

                > .line {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    width: 100%;

                    > .border {
                        width: 1px;
                        background: #fff;
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: calc(-.5px - #{$big-padding});
                        opacity: .8;
                    }

                    > .mask {
                        position: absolute;
                        top: 0;
                        bottom: 0;width: 100%;
                        cursor: pointer;
                        z-index: 3;
                    }
                }
            }

        }
    }

</style>

