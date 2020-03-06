<template>
    <div class="yv-nav">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "y-nav",
        props: {
            selected: {
                type: Array,
                default: () => []
            },
            multiple: Boolean
        },
        mounted() {
            // console.log(this.items);
            this.updateSelected(this.items);
            this.$on("update:selected", val => {
                let res;
                if (this.multiple) {
                    const copy = JSON.parse(JSON.stringify(this.selected));
                    res = copy.push(val);
                }
                {
                    res = [val];
                }
                console.log(res,'res');
                this.$emit("update:selected", res);
            });
        },
        updated() {
            // this.updateSelected(this.items);
        },
        computed: {
            items() {
                return this.$children.filter(
                    vm => vm.$options.name === "y-nav-item" ||
                        vm.$options.name === "y-sub-nav"
                );
            }
        },
        methods: {
            updateSelected(vms) {
                vms.map(
                    vm => {
                        vm.selected = this.selected;
                        const next = vm.$children.filter(
                            obj => obj.$options.name === "y-nav-item" ||
                                obj.$options.name === "y-sub-nav"
                        );
                        next.length && this.updateSelected(next);
                    }
                );
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../common";

    .yv-nav {
        border: 1px solid $border-color;
        display: flex;
    }
</style>