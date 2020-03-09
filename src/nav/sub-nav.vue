<template>
    <div class="yv-sub-nav">
        <span @click="onclick" :class="{active}" class="yv-sub-nav-trigger">
            <slot></slot>
            <y-icon :icon="icon" :class="iconClass"
                    class="yv-sub-nav-trigger-icon"></y-icon>
        </span>
        <div class="yv-sub-nav-popover" v-show="visible" :class="{vertical}">
            <slot name="popover"></slot>
        </div>
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
            }
        },
        data() {
            return {
                selected: undefined, visible: false, active: false,
                iconClass: "",vertical:undefined
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
                !this.visible && (this.iconClass = "");
            },
            vertical:function (val) {
                this.$emit('update:vertical',val)
            }
        },
        methods: {
            onclick() {
                const {visible} = this;
                this.iconClass = visible ? "" : "open";
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
                vm.$on('update:vertical',val=>this.vertical = val)
            }
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

            &:hover {
                color: $blue;

                .yv-sub-nav-trigger-icon {
                    fill: $blue;
                }
            }

            position: relative;

            &.active {
                &:after {
                    content: '';
                    display: block;
                    position: absolute;
                    width: 100%;bottom: 0;left: 0;
                    border-bottom: 1px solid $blue;
                }

                color: $blue;

                .yv-sub-nav-trigger-icon {
                    fill: $blue;
                }
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
            &.vertical{
                position: relative;
                border-radius: 0;
                box-shadow: none;
                left:0;top:0;
                padding-left:1em;
            }

            .yv-sub-nav-trigger-icon {
                fill: $border-color;
            }

            .yv-sub-nav {
                .yv-sub-nav-popover {
                    left: calc(100% + 4px);top: 0;
                    &.vertical{
                        left:0;
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

                    justify-content: space-between;
                }
            }

            .yv-nav-item.active {
                background: lighten($blue, 30%);
                color: #000;

                &:after {
                    border: none;
                }
            }
        }
    }

</style>