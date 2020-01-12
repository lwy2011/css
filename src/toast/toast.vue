<template>
    <div class="yv-toast"
         :class="position && `position-${position}`">
        <slot></slot>
        <div v-if="html" v-html="html"></div>
        <div v-if="closeBtn" class="toast-close" @click="closeBtnClick">
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
            console.log(this.closeBtn);
            this.autoClose &&
            setTimeout(
                () => this.close(), this.autoClose * 1000
            );
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
        padding: $toast-padding 2*$toast-padding;
        max-width: $toast-width;
        border-radius: $border-radius;
        opacity: .8;
        display: flex;align-items: center;
        box-shadow: 0 1px 3px $box-shadow-color;

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
            position: relative;
            cursor: pointer;
            display: flex;
            padding-left: 2*$toast-padding;
            margin-left: 2*$toast-padding;
            &:before {
                top: -$toast-padding;
                bottom: -$toast-padding;
                left: -.5px;
                width: 1px;
                content: '';
                position: absolute;
                background: #fff;
            }
        }
    }
</style>

