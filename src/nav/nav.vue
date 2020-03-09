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
            selected: {
                type: Array,
                default: () => []
            },
            multiple: {
                type:Boolean,default:false
            },
            vertical:{
                type:Boolean,default:false
            }
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
                        this.$emit("update:selected", this.getNewSelectedData(val));
                    }
                )
            );
        },
        watch: {
            selected: function () {
                this.updateSelected(this.items);
            }
        },
        updated() {
        },
        computed: {},
        methods: {
            updateSelected(vms) {
                vms.map(
                    vm => {
                        vm.selected = this.selected;
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

        }
    };
</script>

<style lang="scss" scoped>
    @import "../common";

    .yv-nav {
        border-bottom: 1px solid lighten($border-color, 20%);
        display: flex;
        &.vertical{
            display: inline-flex;
            flex-direction: column;
            border:1px solid lighten($border-color, 20%);
        }
    }
</style>