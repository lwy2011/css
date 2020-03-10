<template>
    <div class="yv-sub-nav">
        <span @click="onclick"
              :class="{active,vertical,disabled}"
              class="yv-sub-nav-trigger"
              @mouseenter="onmouseenterTrigger"
              @mouseleave="onmouseleaveTrigger"
        >
            <slot></slot>
            <y-icon :icon="icon" :class="iconClass"
                    class="yv-sub-nav-trigger-icon"></y-icon>
        </span>
        <transition
                @enter="enter"
                @leave="leave"
        >
            <div class="yv-sub-nav-popover"
                 v-show="visible"
                 :class="{vertical}"
                 @mouseenter="onmouseenterPopover"
                 @mouseleave="onmouseleavePopover"
            >
                <slot name="popover"></slot>
            </div>
        </transition>
    </div>
</template>

<script>
    import YIcon from "../svg/svg.vue";

    export default {
        name: "y-sub-nav",
        components: {YIcon},
        props: {
            name: {
                type: String, required: true
            },
            disabled: Boolean
        },
        data() {
            return {
                selected: undefined,
                visible: false,
                active: false,
                iconClass: "",
                vertical: undefined,
                hoverTimerDelay: undefined,
                timer: undefined,
            };
        },
        computed: {
            items() {
                return this.$children.filter(
                    item => item.$options.name === "y-nav-item"
                );
            },
            subs() {
                return this.$children.filter(
                    item => item.$options.name === "y-sub-nav"
                );
            },
            icon() {
                if (this.vertical) return "down";
                return this.$parent.$options.name === "y-nav" ? "down" : "right";
            }
        },
        mounted() {
            this.initChildren();
        },
        updated() {

        },
        watch: {
            active: function () {
                this.$emit(this.active ? "active" : "unactive");
                this.visible = this.active;//这里分两种情况，一种是单个顶级分支内的两个提交，一个是active,unactive，这会使得visible，先关闭，再打开。
            },
            visible: function () {
                // !this.visible && (this.iconClass = "");
                this.iconClass = this.visible ? "open" : "";
            },
            vertical: function (val) {
                this.$emit("update:vertical", val);
            },
            hoverTimerDelay: function () {
                this.$emit("hoverTimerDelay", this.hoverTimerDelay);
            }
        },
        methods: {
            onmouseenterTrigger() {
                if (this.hoverTimerDelay && !this.disabled) {
                    this.visible = true;
                    this.timer && clearTimeout(this.timer);
                    this.timer = undefined;
                }
            },
            onmouseleaveTrigger() {
                if (this.hoverTimerDelay && !this.disabled) {
                    this.timer = setTimeout(
                        () => {
                            this.visible = false;
                            this.timer = undefined;
                        }, this.hoverTimerDelay
                    );
                }
            },
            onmouseenterPopover() {
                if (this.hoverTimerDelay && !this.disabled) {
                    this.timer && clearTimeout(this.timer);
                    this.timer = undefined;
                }
            },
            onmouseleavePopover() {
                this.onmouseleaveTrigger();
            },
            onclick() {
                if (this.disabled) return this.visible = false;
                const {visible, timer} = this;
                if (visible && timer) {
                    clearTimeout(this.timer);
                    this.timer = undefined;
                }
                this.visible = !visible;
            },
            initChildren() {
                this.items.map(
                    item => this.initChild(item)
                );
                this.subs.map(
                    sub => this.initChild(sub)
                );
            },
            testItemActive() {
                return Boolean(
                    this.items.find(
                        item => item.active
                    ) ||
                    this.subs.find(
                        sub => sub.active
                    )
                );
            },
            initChild(vm) {
                vm.$on("active", () => this.active = true);
                vm.$on("unactive", () => {
                    this.active = this.testItemActive();
                });
                vm.$on("update:vertical", val => this.vertical = val);
                vm.$on("hoverTimerDelay", val => this.hoverTimerDelay = val);
            },

            enter(el, done) {
                if (this.vertical) {
                    const {height} = el.getBoundingClientRect();
                    // console.log(height);
                    el.animate([
                        {height: 0},
                        {height: height + "px"}
                    ], 500);
                } else {
                    el.animate([
                        {opacity: 0}, {opacity: 1}
                    ], 500);
                }
                done();
            },
            leave(el, done) {
                if (this.vertical) {
                    const {height} = el.getBoundingClientRect();
                    // console.log(height);
                    el.animate([
                        {height: height + "px"}, {height: 0}
                    ], 500);
                } else {
                    el.animate([
                        {opacity: 1}, {opacity: 0}
                    ], 500);
                }
                setTimeout(
                    () => {done();}, 470
                );
            },
        }
    };
</script>

<style lang="scss" scoped>
    @import "../common";

    .yv-sub-nav {
        position: relative;
        cursor: pointer;

        &-trigger {
            display: inline-flex;
            padding: .5em 1em;
            /*vertical-align: top; //有疑问的，，，*/
            align-items: center;
            user-select: none;
            position: relative;

            &:not(.disabled):hover {
                color: $blue;

                .yv-sub-nav-trigger-icon {
                    fill: $blue;
                }
            }

            &.disabled {
                @extend %disabled;
            }

            &.active:not(.vertical) {
                &:after {
                    content: '';
                    display: block;
                    position: absolute;
                    width: 100%;bottom: 0;left: 0;
                    border-bottom: 1px solid $blue;
                }
            }

            &.active:not(.disabled) {
                color: $blue;

                .yv-sub-nav-trigger-icon {
                    fill: $blue;
                }
            }

            &.active.vertical {
                color: $blue;
            }

            &-icon {
                width: 12px;height: 12px; margin-left: 8px;
                transition: 250ms;

                &.open {
                    transform: rotate(180deg);
                }
            }
        }

        &-popover {
            position: absolute;
            top: calc(100% + 4px);
            white-space: nowrap;
            box-shadow: 0 0 3px $box-shadow-color;
            border-radius: $border-radius;
            background: white;
            color: $border-color;
            min-width: 6em;
            font-size: $small-font-size;

            &.vertical {
                position: relative;
                border-radius: 0;
                box-shadow: none;
                left: 0;top: 0;
                padding-left: 1em;
                overflow: hidden;
            }


            .yv-sub-nav-trigger-icon {
                fill: $border-color;
            }

            .yv-sub-nav {
                .yv-sub-nav-popover {
                    left: calc(100% + 4px);top: 0;

                    &.vertical {
                        left: 0;
                    }
                }

                &-trigger {
                    width: 100%;

                    &.active {
                        &:after {
                            display: none;
                        }

                        .yv-sub-nav-trigger-icon {
                            fill: #000;
                        }

                        color: #000;
                    }

                    &.active.vertical {
                        .yv-sub-nav-trigger-icon {
                            fill: $blue;
                        }

                        color: $blue;
                    }

                    justify-content: space-between;
                }
            }
        }
    }

</style>