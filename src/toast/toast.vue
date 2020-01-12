<template>
    <div class="yv-toast"
         :class="position && `position-${position}`">
        <slot></slot>
        <div v-if="html" v-html="html"></div>
        <div v-if="closeBtn" class="toast-close" @click="closeBtnClick">
            <div class="line">
                <div class="border"></div>
                <div class="mask"></div>
            </div>
            {{closeBtn}}
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

    $big-padding: 2*$toast-padding;
    .yv-toast {
        position: fixed;
        z-index: 10;
        background: $toast-bg;
        color: white;
        padding: $toast-padding $big-padding;
        max-width: $toast-width;
        border-radius: $border-radius;
        opacity: .8;
        display: flex;align-items: center;
        box-shadow: 0 1px 3px $box-shadow-color;
        overflow-x: hidden;

        &.position- {
            &center {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            &top {
                top: 1em;
                left: 50%;
                transform: translateX(-50%);
            }

            &bottom {
                bottom: 1em;
                left: 50%;
                transform: translateX(-50%);
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
</style>

