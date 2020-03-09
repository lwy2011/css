<template>
    <div class="yv-sub-nav">
        <span @click="onclick" :class="{active}" class="yv-sub-nav-trigger">
            <slot></slot>
            <y-icon :icon="icon"></y-icon>
        </span>
        <div class="yv-sub-nav-popover" v-show="visible">
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
                selected: undefined, visible: false, active: false
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
            icon(){
                return this.$parent.$options.name === 'y-nav'? 'down' : 'right'
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
            }
        },
        methods: {
            onclick() {
                this.visible = !this.visible;
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
            vertical-align: top; //有疑问的，，，
            &:hover {
                color: $blue;
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
            min-width: 5em;

            .yv-sub-nav {
                .yv-sub-nav-popover {
                    left: calc(100% + 4px);top: 0;
                }
                &-trigger.active {
                    &:after {
                        display: none;
                    }
                    color: #000;
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