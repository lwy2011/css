<template>
    <div class="yv-nav-item" :class="{active,vertical}" @click="onclick">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "y-nav-item",
        inject: ["root"],
        props: {
            name: {
                type: String, required: true
            }
        },
        data() {
            return {
                selected: undefined,
                vertical: undefined
            };
        },
        computed: {
            active() {
                return this.selected && this.selected.indexOf(this.name) >= 0;
            }
        },
        updated() {

        },
        watch: {
            active: function () {
                this.$emit(this.active ? "active" : "unactive");
            },
            vertical: function () {
                this.$emit("update:vertical", this.vertical);
            }
        },
        mounted() {
            // console.log(this.root.getItems);
            this.root.getItems(this);
            this.vertical = this.root.vertical;
        },
        methods: {
            onclick() {
                this.$emit("add:selected", this.name);
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../common";

    .yv-nav-item {
        padding: .5em 1em;
        cursor: pointer;
        position: relative;

        &:hover {
            color: $blue;
        }

        &.active {
            &:after {
                content: '';
                display: block;
                width: 100%;
                position: absolute;
                border-bottom: 1px solid $blue;
                left: 0;bottom: 0;
            }
        }

        &.vertical.active {
            color: $blue;

            &:after {
                display: none;
            }
        }
    }
</style>