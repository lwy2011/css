<template>
    <div class="yv-nav" :class="{vertical}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "y-nav",
        provide() {
            return {
                root: this
            };
        },
        props: {
            selected: String,
            vertical: {
                type: Boolean, default: false
            },
            hoverTimerDelay: {
                type: Number,
                validate(val) {
                    return val > 0;
                }
            },
        },
        data() {
            return {
                items: [],
            };
        },
        mounted() {
            // console.log(this.items);
            this.updateSelected(this.items);
            this.items.map(
                vm => vm.$on(
                    "add:selected", val => {
                        // console.log(2);
                        this.$emit("update:selected", val);
                    }
                )
            );
        },
        watch: {
            selected: function () {
                this.updateSelected(this.items);
            }
        },
        methods: {
            updateSelected(vms) {
                vms.map(
                    vm => {
                        vm.selected = this.selected;
                    }
                );
            },
            getItems(vm) {
                this.items.push(vm);
            },
        }
    };
</script>

<style lang="scss" scoped>
    @import "../common";

    .yv-nav {
        border-bottom: 1px solid lighten($border-color, 20%);
        display: flex;

        &.vertical {
            display: inline-flex;
            flex-direction: column;
            border: 1px solid lighten($border-color, 20%);
        }

        & > &-item.active {
            &:after {
                content: '';
                display: block;
                width: 100%;
                position: absolute;
                border-bottom: 1px solid $blue;
                left: 0;
                bottom: 0;
            }

            color: $blue;
        }
    }
</style>