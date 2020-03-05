<template>
    <div class="yv-slides">
        <div class="yv-slides-window">
            <div class="yv-slides-wrapper">
                <slot></slot>
            </div>
        </div>
        <transition name="fade">
            <div class="yv-slides-dots" v-if="length">
                <span v-for="ind in length" :class="active(ind)">
                    {{ind}}
                </span>
            </div>
        </transition>
    </div>
</template>


<script>

    export default {
        name: "slides-v",
        props: {
            selected: {
                type: Number,
                required: true,
            },
            autoplay: {
                type: Boolean,
                default: true
            },
            reverse: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                length: undefined
            };
        },
        mounted() {
            this.updateSelected();
            this.length = this.$children.length;
            this.autoplay && this.autoplayFn();
        },
        updated() {
            // console.log(this.selected, "up");
            this.updateSelected();
        },
        methods: {
            updateSelected() {
                this.$children.forEach(
                    vm => {
                        vm.selected = this.selected || 0;
                        vm.reverse = this.reverse;
                    }
                );
            },
            getNextSelected() {
                const {length, selected, reverse} = this;
                if (reverse) {
                    return selected === 0 ? length - 1 : selected - 1;
                }
                return selected === length - 1 ? 0 : selected + 1;
            },
            autoplayFn() {
                const run = () => {
                    setTimeout(
                        () => {
                            this.$emit("update:selected", this.getNextSelected());
                            run();
                        }, 3000
                    );
                };
                run();
            },
            active(ind) {
                return ind - 1 === this.selected ? "active" : "";
            },
        }
    };
</script>

<style lang="scss" scoped>
    @import "../common";

    .fade-in-active, .fade-leave-active {
        transition: all 1s;
    }

    .fade-in {
        opacity: 0;
    }

    .yv-slides {
        box-sizing: border-box;
        position: relative;

        &-window {
            overflow: hidden;
        }

        &-wrapper {
            position: relative;
        }

        &-dots {
            position: absolute;
            width: 100%;
            bottom: 0;
            height: 3em;
            display: flex;
            justify-content: space-around;
            align-items: center;

            & > span {
                cursor: pointer;
                display: flex;
                width: 1.5em;height: 1.5em;
                background: #000000;
                color: white;
                opacity: .6;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                z-index: 1;

                &:hover {
                    color: #000;
                    background: white;
                }

                &.active {
                    color: $warn-color;
                }
            }
        }
    }
</style>