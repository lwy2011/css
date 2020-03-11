<template>
    <div class="yv-nav-item" :class="{active,vertical,disabled}" @click="onclick">
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
            },
            disabled: {
                type: Boolean,
            },
        },
        data() {
            return {
                selected: undefined,
                vertical: undefined,
                hoverTimerDelay: undefined,
            };
        },
        computed: {
            active() {
                return this.selected === this.name;
            }
        },
        watch: {
            active: function () {
                this.$emit(this.active ? "active" : "unactive");
            },
            vertical: function () {
                this.$emit("update:vertical", this.vertical);
            },
            hoverTimerDelay: function () {
                this.$emit("hoverTimerDelay", this.hoverTimerDelay);
            },
        },
        mounted() {
            // console.log(this.root.getItems);
            this.root.getItems(this);
            this.vertical = this.root.vertical;
            this.root.hoverTimerDelay && (this.hoverTimerDelay = this.root.hoverTimerDelay);
        },
        methods: {
            onclick() {
                !this.disabled &&
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
        user-select: none;

        &:not(.disabled):hover {
            color: $blue;
        }

        a {
            text-decoration: none;
            font-weight: inherit;
            color: inherit;

            &:hover {
                text-decoration: none;
            }

            &:only-child {
                display: block;
                margin: -.5em -1em;
                padding: .5em 1em;
            }
        }

        &.active {
            background: $light-blue;
            color: #000;
        }

        &.vertical.active {
            color: $blue;
            background: $light-blue;

            &:after {
                display: none;
            }
        }

        &.disabled {
            @extend %disabled;
        }
    }
</style>