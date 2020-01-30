<template>
    <div class="yv-cascader-items">
        <ul class="current" :style="setSize">
            <li v-for="item in data"
                @click="select(item)"
            >
                {{item.name}}
                <Icon v-if="item.children" icon="right">
                </Icon>
            </li>
        </ul>
        <div class="next" v-if="next">
            <cascader-items-v
                    :level="level+1"
                    :size="size"
                    :data="next"
                    :selected="selected"
                    @update:selected="onUpdateSelected"
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
            },
            level: {
                type: Number,
                default: 0
            },
            selected: Array
        },
        computed: {
            next() {
                const val = this.selected[this.level];
                return val && val.children ?
                    val.children : null;
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
        methods: {
            select(item) {
                const copy = [...this.selected];
                this.level >= copy.length ?
                    copy[this.level] = item :
                    copy.splice(this.level, copy.length - this.level, item);
                // console.log(copy);
                this.$emit("update:selected",copy);
            },
            onUpdateSelected(newSelect){
                this.$emit("update:selected",newSelect);
            }
        }
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