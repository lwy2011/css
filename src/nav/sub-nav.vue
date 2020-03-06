<template>
    <div class="yv-sub-nav" :class="{active}" @click="onclick">
        <slot></slot>
        <div class="yv-sub-nav-popover" v-if="visible">
            <slot name="popover"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "y-sub-nav",
        props: {
            name: {
                type: String, required: true
            }
        },
        data() {
            return {
                selected: undefined
            };
        },
        computed: {
            visible() {
                return this.selected && this.selected.indexOf(this.name) >= 0;
            },
            active() {
                return this.selected && this.selected.indexOf(this.name) >= 0;
            }
        },
        mounted() {
            this.$on("add:selected", val => {
                console.log(2);
                this.$emit("update:selected", val);
            });
        },
        updated() {

        },
        methods: {
            onclick() {
                console.log(1);
                this.$on("add:selected", this.name);
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../common";

    .yv-sub-nav {
        padding: .5em 1em;
        position: relative;

        &.active {
            background: $border-color;
        }

        &-popover {
            position: absolute;
            top: 100%;
            white-space: nowrap;
        }
    }
</style>