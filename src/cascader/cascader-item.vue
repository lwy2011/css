<template>
    <div class="yv-cascader-items">
        <ul class="current" :style="setSize">
            <li v-for="item in data" @click="selected=item">
                {{item.name+item.postfix}}
                <Icon v-if="item.children" icon="right">
                </Icon>
            </li>
        </ul>
        <div class="next" v-if="next">
            <cascader-items-v
                    :size="size"
                    :data="next"
            ></cascader-items-v>
        </div>
    </div>
</template>

<script>
    import Icon from "../svg/svg.vue";

    export default {
        components: {Icon},
        name: "cascader-items-v",
        props: {
            data: Array,
            size: {
                type: Object
            }
        },
        data() {
            return {
                selected: null
            };
        },
        computed: {
            next() {
                return this.selected && this.selected.children ?
                    this.selected.children : null;
            },
            setSize() {
                if (this.size) {
                    const {width, height} = this.size;
                    const str1 = width ? `width:${width};` : "";
                    const str2 = height ? `height:${height}` : "";
                    return str1 + str2;
                }
                return "";
            }
        },
    };
</script>


<style lang="scss" scoped>
    @import "../common";

    .yv-cascader-items {
        background: #fff;
        display: flex;

        > .current {
            height: 10em;
            width: 6em;
            overflow-y: scroll;

            > li {
                list-style: none;
                padding: $small-padding;
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
                > .yv-icon {
                    transform: scale(.5);
                }

                &:hover {
                    background: $blue;
                }

                &.active {
                    background: lighten($blue, 60%);
                }
            }
        }

        > .next {
            border-left: 1px solid lighten($border-color, 30%);
        }
    }
</style>