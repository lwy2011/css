<template>
    <div class="yv-slides">
        <div class="yv-slides-window"
             @mouseenter="onmouseenter"
             @mouseleave="onmouseleave"
             @touchstart="ontouchstart"
             @touchend="ontouchend"
        >
            <div class="yv-slides-wrapper">
                <slot></slot>
            </div>
        </div>
        <transition name="fade">
            <div class="yv-slides-dots" v-if="length">
                <span v-for="ind in length"
                      :class="active(ind)"
                      @click="toSelect(ind)"
                >
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
                length: undefined,
                timer: undefined,
                touchstart: undefined
            };
        },
        mounted() {
            this.length = this.$children.filter(
                vm => vm.$options.name === "slides-item-v"
            ).length;
            const {reverse, selected} = this;
            this.updateSelected({reverse, selected});
            setTimeout(
                () => {
                    this.updateSelected({init: false});  //初始化第一张图片不需要动画的。
                    this.autoplay && this.autoplayFn(true);
                }, 0
            );
        },
        updated() {
            // console.log(this.selected, "up");
            this.updateSelected({selected: this.selected});
        },
        methods: {
            updateSelected(obj) {
                this.$children.forEach(
                    vm => {
                        Object.keys(obj).map(
                            key => {
                                vm[key] = obj[key];
                            }
                        );
                    }
                );
            },
            getNextSelected(reverse1) {
                const {length, selected, reverse} = this;
                const reverseVal = reverse1 !== undefined ? reverse1 : reverse;
                if (reverseVal) {
                    return selected === 0 ? length - 1 : selected - 1;
                }
                return selected === length - 1 ? 0 : selected + 1;
            },
            autoplayFn(reverseNoNeedUpdate) {
                const {timer} = this;
                const run = () => {
                    this.timer = setTimeout(
                        () => {
                            (!timer && !reverseNoNeedUpdate) &&
                            this.updateSelected({reverse: this.reverse});
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
            stop() {
                this.timer && clearTimeout(this.timer);
                this.timer = undefined;
            },
            nextUpdate(reverse, selected) {
                // console.log(reverse, "2");
                this.updateSelected({reverse});
                this.$emit("update:selected", selected);
            },
            toSelect(ind) {
                this.stop();
                const {selected} = this;
                if (ind - 1 === selected) return;
                const reverse = ind - 1 < selected;
                // console.log(reverse, "re");
                this.nextUpdate(reverse, ind - 1);
            },
            onmouseenter() {
                this.stop();
            },
            onmouseleave() {
                this.autoplayFn();
            },
            ontouchstart(e) {
                this.stop();
                const {clientX, clientY} = e.touches[0];
                this.touchstart = {clientX, clientY};
                // console.log(e.touches[0]);
            },
            ontouchend(e) {
                const {clientX, clientY} = e.changedTouches[0];
                const test = Math.abs(
                    (this.touchstart.clientY - clientY) / (this.touchstart.clientX - clientX)
                ) < 0.58;
                if (test) {
                    const reverse = clientX - this.touchstart.clientX > 0;  //向左，等同于false
                    // console.log(reverse, "1");
                    this.nextUpdate(reverse, this.getNextSelected(reverse));
                }
                this.onmouseleave();
            }
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
        position: relative;
        width: 100%;height: 100%;

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
            justify-content: center;
            align-items: center;

            & > span {
                margin: 0 8px;
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

                    &:hover {
                        cursor: default;
                    }
                }
            }
        }
    }
</style>