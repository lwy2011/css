<template>
    <div class="yv-nav">
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
            selected: {
                type: Array,
                default: () => []
            },
            multiple: Boolean
        },
        data() {
            return {
                items: [],
            };
        },
        mounted() {
            console.log(this.items);
            this.updateSelected(this.items);
            this.items.map(
                vm => vm.$on(
                    "add:selected", val => {
                        console.log(2);
                        this.$emit("update:selected", this.getNewSelectedData(val));
                    }
                )
            );
        },
        updated() {
            this.updateSelected(this.items);
        },
        computed: {},
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
            },
            getNewSelectedData(newVal) {
                let res;
                if (this.multiple) {
                    const copy = JSON.parse(JSON.stringify(this.selected));
                    res = copy.push(newVal);
                }
                {
                    res = [newVal];
                }
                return res;
            },
            getItems(vm) {
                this.items.push(vm);
            },
            getSubs(vm) {
                this.subs.push(vm);
            },
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