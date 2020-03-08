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
                color: $blue;
            }
        }

        &-popover {
            position: absolute;
            top:calc(100% + 4px);
            white-space: nowrap;
            box-shadow: 0 0 3px $box-shadow-color;
            border-radius: $border-radius;
            background: white;
            color: $border-color;
            min-width:5em;
            > .yv-sub-nav {
                .yv-sub-nav-popover{
                    left:calc(100% + 4px);top:0;
                }
            }
            .yv-nav-item.active{
                background: lighten($blue,30%);
                color:#000;
                &:after{
                    border: none;
                }
            }
        }
    }

</style>