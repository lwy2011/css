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
        a{
            text-decoration: none;
            font-weight:inherit;
            color: inherit;
            margin:-.5em -1em;
            padding:.5em 1em;
            &:hover{
                text-decoration: none;
            }
            &:only-child{
                display: block;
            }
        }

        &.active {
            background: $light-blue;
            color: #000;
        }

        &.vertical.active {
            color: $blue;
            background: $light-blue;
            width: 100%;
            &:after {
                display: none;
            }
        }
    }
</style>