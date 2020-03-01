<template>
    <div class="yv-cascader-items">
        <ul class="current" :style="setSize">
            <li v-for="item in data"
                @click="select(item)"
                :class="active(item)"
            >
                {{item.name}}
                <Icon v-if="item.children"
                      :icon="iconName(item)"
                      :loading="loadingItem && item.name === loadingItem.name">
                </Icon>
            </li>
        </ul>
        <div class="next" v-if="next">
            <cascader-items-v
                    :ajax="ajax"
                    :level="level+1"
                    :size="size"
                    :data="next"
                    :selected="selected"
                    @update:selected="onUpdateSelected"
                    :loading-item="loadingItem"
                    @update:loading-item="onUpdateLoadingItem"
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
            selected: Array,
            ajax: Function,
            loadingItem: Object || undefined
        },
        computed: {
            next() {
                const val = this.selected[this.level];
                return val && val.children
                    && val.children.length &&
                    val.children;
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
            iconName(item) {
                return this.loadingItem &&
                this.loadingItem.name === item.name ? "loading" : "right";
            },
            async select(item) {
                const {selected, level, ajax} = this;
                // console.log(item,11);
                if (selected.length - 1 >= 0
                    && item.id === selected[selected.length - 1].id) return;

                const val = await this.selectPrepare(ajax, item);
                this.unAsyncSelect(level, selected, val);
            },
            async selectPrepare(ajax, item) {
                if (ajax && item.children) {

                    this.$emit("update:loading-item", item);

                    return await ajax(item.id).then(
                        res => {
                            const copy = JSON.parse(JSON.stringify(item));
                            copy.children = res;
                            return copy;
                        }
                    );
                }
                return item;
            },
            unAsyncSelect(level, selected, item) {
                const copy = JSON.parse(JSON.stringify(selected));
                copy[level] = item;
                copy.splice(level + 1);
                // console.log(copy);
                this.$emit("update:selected", copy);
            },
            onUpdateSelected(newSelect) {
                this.$emit("update:selected", newSelect);
            },
            onUpdateLoadingItem(item) {
                this.$emit("update:loading-item", item);
            },
            active(item) {
                const {level, selected} = this;
                const self = selected[level];
                return self && self.name === item.name ? "active" : "";
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
                user-select: none;

                > .yv-icon {
                    transform: scale(.5);
                }

                &:hover {
                    background: $blue;
                }

                &.active {
                    background: $blue;
                }
            }
        }

        > .next {
            border-left: 1px solid lighten($border-color, 30%);
        }
    }
</style>