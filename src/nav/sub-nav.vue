<template>
    <div class="yv-sub-nav">
        <span @click="onclick">
            <slot></slot>
        </span>
        <div class="yv-sub-nav-popover" v-show="visible">
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
                selected: undefined, visible: false
            };
        },
        computed: {
            // active() {
            //     return this.selected && this.selected.indexOf(this.name) >= 0;
            // }
        },
        mounted() {

        },
        updated() {

        },
        methods: {
            onclick() {
                this.visible = !this.visible;
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../common";

    .yv-sub-nav {
        position: relative;
        cursor: pointer;
        &.active {
            background: $border-color;
        }

        > span {
            display: block;
            padding: .5em 1em;
            vertical-align: top;  //有疑问的，，，
            &:hover{
                background: $blue;
            }
        }

        &-popover {
            position: absolute;
            top: 100%;
            white-space: nowrap;
            border: 1px solid $border-color;
            > .yv-sub-nav {
                .yv-sub-nav-popover{
                    left:100%;top:-1px;
                }
            }
        }
    }

</style>