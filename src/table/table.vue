<template>
    <div class="yv-table-box" :class="{bordered}">
        <div class="yv-table-wrapper"
             :class="{scrollY,scrollX}"
             v-if="scrollY || scrollX"
        >
            <table class="yv-table"
                   :class="{bordered,striped}">
                <thead ref="thead">
                <tr>
                    <td v-if="source[0] && source[0].selection" class="yv-table-checkbox">
                        <y-checkbox
                                @click="allSelect"
                                :checked="allIsSelected"
                                :indeterminate="indeterminate"
                        >
                        </y-checkbox>
                    </td>
                    <td v-for="(item) in columns" :key="item.text">
                        <div class="yv-table-td">
                            {{item.text}}
                            <span class="yv-table-sorter"
                                  v-if="item.sorter"
                                  @click="sorterClick(item.key)"
                            >
                            <y-icon icon="esc" :class="{active:item.sorter === 'esc'}"></y-icon>
                            <y-icon icon="desc" :class="{active:item.sorter === 'desc'}"></y-icon>
                        </span>
                        </div>
                    </td>
                </tr>
                </thead>
                <tbody>
                <template v-for="(item) in source">
                    <tr :key="item.trIndex">
                        <td v-if="item.selection" class="yv-table-checkbox">
                            <y-checkbox @click="onInputChange(item,$event)"
                                        :checked="itemIsSelected(item)"
                            ></y-checkbox>
                        </td>
                        <td v-for="(column,index) in columns" :key="column.key">
                            <div class="yv-table-supplement">
                                <template v-if="column.slot">
                                    <slot :item="item" :name="column.key"></slot>
                                </template>
                                <template v-else>
                                    {{item[column.key]}}
                                </template>
                                <y-icon @click="supplementClick(item.trIndex)"
                                        :class="{active:supplementVisible(item.trIndex)}"
                                        v-if="index === 0 && item.supplement" icon="down"></y-icon>

                            </div>
                        </td>
                    </tr>
                    <tr :key="item.trIndex+'1'"
                        class="yv-table-supplement-content"
                        v-if="supplementVisible(item.trIndex)">
                        <td style="border-right: none"></td>
                        <td :colspan="columns.length ">
                            {{item.supplement}}
                        </td>
                    </tr>
                </template>
                </tbody>
            </table>
        </div>
        <div class="yv-table-wrapper box">
            <div class="yv-table-wrapper" ref="wrapper">
                <table class="yv-table"
                       :class="{bordered,striped}">
                    <thead ref="thead">
                    <tr>
                        <td v-if="source[0] && source[0].selection" class="yv-table-checkbox">
                            <y-checkbox
                                    @click="allSelect"
                                    :checked="allIsSelected"
                                    :indeterminate="indeterminate"
                            >
                            </y-checkbox>
                        </td>
                        <td v-for="(item) in columns" :key="item.text">
                            <div class="yv-table-td">
                                {{item.text}}
                                <span class="yv-table-sorter"
                                      v-if="item.sorter"
                                      @click="sorterClick(item.key)"
                                >
                            <y-icon icon="esc" :class="{active:item.sorter === 'esc'}"></y-icon>
                            <y-icon icon="desc" :class="{active:item.sorter === 'desc'}"></y-icon>
                        </span>
                            </div>
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    <template v-for="(item) in source">
                        <tr :key="item.trIndex">
                            <td v-if="item.selection" class="yv-table-checkbox">
                                <y-checkbox @click="onInputChange(item,$event)"
                                            :checked="itemIsSelected(item)"
                                ></y-checkbox>
                            </td>
                            <td v-for="(column,index) in columns" :key="column.key">
                                <div class="yv-table-supplement">
                                    <template v-if="column.slot">
                                        <slot :item="item" :name="column.key"></slot>
                                    </template>
                                    <template v-else>
                                        {{item[column.key]}}
                                    </template>
                                    <y-icon @click="supplementClick(item.trIndex)"
                                            :class="{active:supplementVisible(item.trIndex)}"
                                            v-if="index === 0 && item.supplement" icon="down"></y-icon>

                                </div>
                            </td>
                        </tr>
                        <tr :key="item.trIndex+'1'"
                            class="yv-table-supplement-content"
                            v-if="supplementVisible(item.trIndex)">
                            <td style="border-right: none"></td>
                            <td :colspan="columns.length ">
                                {{item.supplement}}
                            </td>
                        </tr>
                    </template>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="yv-table-loading" v-if="loading">
            <y-icon icon="loading" loading></y-icon>
        </div>
    </div>
</template>

<script>
    import "../../docs/helper-icon";
    import YCheckbox from "./checkbox";
    import YIcon from "../svg/svg";

    export default {
        name: "v-table",
        components: {
            YCheckbox, YIcon
        },
        props: {
            source: {
                type: Array, required: true,
                validator(arr) {
                    return !arr.find(obj => obj.selection && obj.trIndex !== 0 && (!obj.trIndex));
                }
            },
            columns: {
                type: Array, required: true,
                validator(arr) {
                    const sorts = arr.filter(obj => "sorter" in obj);
                    return sorts.length > 0 ? !(
                        sorts.find(
                            obj => obj.sorter !== "default" &&
                                obj.sorter !== "desc" && obj.sorter !== "esc"
                        )
                    ) : true;
                }
            },
            bordered: Boolean,
            striped: {
                type: Boolean, default: false
            },
            selected: {
                type: Array, default: () => []
            },
            loading: Boolean,
        },
        data() {
            return {
                scrollY: false, scrollX: false, extends: [],
            };
        },
        mounted() {
            this.testScrollY();
            this.testScrollX();
            this.$nextTick(
                () => {
                    const copy = this.$el.querySelector(".scrollY");
                    const copy1 = this.$el.querySelector(".scrollX");
                    const {thead, wrapper} = this.$refs;
                    if (copy) {
                        this.scrollYInit(wrapper);
                    }
                    if (copy1) {
                        this.scrollXInit(thead, copy1);
                    }
                }
            );
        },
        beforeDestroy() {
            this.$refs.wrapper.removeEventListener(
                "scroll", this.scrollXTheadFix
            );
            window.removeEventListener("resize",
                this.scrollYResizeFix
            );
            window.removeEventListener(
                "resize", this.scrollXFix
            );
        },
        computed: {
            allIsSelected() {
                if (this.selected.length !== this.source.length) return false;
                const arr1 = [...this.selected].sort((a, b) => a - b);
                const arr2 = this.source.map(
                    obj => obj.trIndex
                ).sort((a, b) => a - b);
                let test = true;
                for (let i = 0; i < arr1.length; i++) {
                    if (arr1[i] !== arr2[i]) {
                        test = false;
                        break;
                    }
                }
                return test;
            },
            indeterminate() {
                return this.selected.length > 0 && (!this.allIsSelected);
            }
        },
        methods: {
            testScrollY() {
                (this.$el.getBoundingClientRect().height <
                    this.$el.querySelector(".yv-table")
                        .getBoundingClientRect().height) && (
                    this.scrollY = true
                );
            },
            testScrollX() {
                (this.$el.getBoundingClientRect().width <
                    this.$el.querySelector(".yv-table")
                        .getBoundingClientRect().width) && (
                    this.scrollX = true
                );
            },
            scrollYResizeFix() {
                //固定表头的初始化dom操作：
                const copy = this.$el.querySelector(".scrollY");
                const {thead, wrapper} = this.$refs;
                const {height} = thead.getBoundingClientRect();
                //拷贝的表格的容器：
                copy.style.height = height + "px";
                //原表的容器：
                wrapper.parentElement.style.height = `calc(100% - ${height}px)`;
                wrapper.parentElement.style.marginTop = height + "px";
                // 原表遮蔽自己的表头：
                wrapper.style.bottom = height + "px";
                wrapper.style.position = "relative";
            },
            scrollXTheadFix(e) {
                const {scrollLeft} = e.target;
                if (scrollLeft === 0) return;
                //横向scroll的时候，固定表头也要动：
                const copy = this.$el.querySelector(".scrollY");
                //直接操作属性，无动画，跟手：
                copy.scrollLeft = scrollLeft;
                //js设置css，有动画连贯！舍弃！：
                // copy.querySelector('table').style.left =
                //     -scrollLeft +'px'
            },
            scrollYInit(wrapper) {
                //初始化两个table的位置：
                this.scrollYResizeFix();
                //横向scroll的时候，固定表头也要动：
                wrapper.parentElement
                    .addEventListener("scroll", this.scrollXTheadFix);
                window.addEventListener(
                    "resize", this.scrollYResizeFix
                );
            },
            scrollXHelper(tds) {
                let width = 0; //计算thead的因为resize的变化而变化的宽度。
                if (this.source[0].selection) {
                    width += tds[0].getBoundingClientRect().width;
                }
                this.columns.map((item, ind) => {
                        if (item.fixed) {
                            const index = this.source[0].selection ? ind + 1 : ind;
                            width += tds[index].getBoundingClientRect().width;
                        }
                    }
                );
                return width;
            },
            scrollXInit(thead, copy1) {
                const tds = thead.querySelectorAll("td");
                this.scrollXFix = () => {
                    const width = this.scrollXHelper(tds);
                    copy1.style.width = width + "px";
                };
                this.scrollXFix();
                window.addEventListener(
                    "resize", this.scrollXFix
                );
            },
            supplementVisible(trIndex) {
                return this.extends.indexOf(trIndex) >= 0;
            },
            supplementClick(trIndex) {
                const ind = this.extends.indexOf(trIndex);
                ind >= 0 ? this.extends.splice(ind, 1) :
                    this.extends.push(trIndex);
            },
            itemIsSelected(item) {
                return this.selected.indexOf(item.trIndex) >= 0;
            },
            allSelect() {
                this.$emit(
                    "update:selected",
                    this.allIsSelected ? [] :
                        this.source.map(val => val.trIndex)
                );
            },
            onInputChange(item, checked) {
                const copy = JSON.parse(JSON.stringify(this.selected));
                // console.log(1, checked, item);
                checked ? copy.splice(copy.indexOf(item.trIndex), 1) : copy.push(item.trIndex);
                this.$emit("update:selected", copy);
            },
            sorterClick(key) {
                const copy = JSON.parse(JSON.stringify(this.columns));
                let item;
                for (let i = 0; i < copy.length; i++) {
                    if (copy[i].key === key) {
                        const {sorter} = copy[i];
                        const enums = {
                            default: "esc", esc: "desc", desc: "default"
                        };
                        copy[i].sorter = enums[sorter];
                        item = copy[i];
                        break;
                    }
                }
                // console.log(copy);
                this.$emit("update:sorter", copy, item);
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../common";
    @import "../animate";

    .yv-table-box {
        height: 100%;
        position: relative;

        &.bordered {
            border: 1px solid $light-border-color;
        }

        .yv-table-loading {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, .8);
            display: inline-flex;
            justify-content: center;
            align-items: center;
            z-index: 3;

            svg {
                width: 2em;
                height: 2em;
            }
        }
    }

    .yv-table-wrapper {
        height: 100%;

        &.scrollY {
            position: absolute;
            top: 1px;
            overflow: hidden;
            z-index: 2;
            width: 100%;
            border-bottom: 1px solid $light-border-color;

            tbody {
                opacity: 0;
            }

            &::-webkit-scrollbar {
                width: 0px;
                height: 0;
            }

            /*隐藏滚动条，当IE下溢出，仍然可以滚动 IE 10+*/
            -ms-overflow-style: none;
            /*火狐下隐藏滚动条*/
            overflow: -moz-scrollbars-none;
        }

        &.scrollX {
            position: absolute;
            left: 0;
            overflow: hidden;
            z-index: 2;
            background: $background-color;
            box-shadow: 2px 0 6px 3px $border-color;

            .yv-table {
                tr:hover {
                    background: $background-color;
                }
            }
        }

        &.box {
            overflow: scroll;
        }
    }

    .yv-table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        display: table;
        margin: 0;
        transition: all 1s;
        position: relative;

        &-sorter {
            display: inline-flex;
            flex-direction: column;
            cursor: pointer;
            margin-left: .5em;

            svg {
                fill: $light-border-color;
                width: 12px;
                position: relative;

                &:first-child {
                    bottom: -3px;
                }

                &:last-child {
                    top: -3px;
                }

                &.active {
                    fill: $blue;
                }
            }
        }

        & &-supplement {
            display: flex;
            justify-content: space-between;
            align-items: center;

            &-content {
                &:hover {
                    background: none;
                }

                & td:last-child {
                    background: $background-color;
                }
            }

            svg {
                cursor: pointer;
                width: 10px;
                transition: all .5s;

                &:hover {
                    fill: darken($blue, 30%);
                }

                &.active {
                    transform: rotate(180deg);
                }
            }
        }

        tr {
            border-bottom: 1px solid $light-border-color;
        }

        td {
            padding: 1em;
            text-align: left;
        }

        thead {
            background: $background-color;
        }

        tbody {
            tr {
                &:hover {
                    background: $light-border-color;
                    opacity: .7;
                }
            }
        }

        & &-checkbox {
            text-align: center;
        }

        &-td {
            display: inline-flex;
            align-items: center;
        }

        &.bordered {
            thead {
                border-bottom: 1px solid $light-border-color;
            }

            td {
                border-right: 1px solid $light-border-color;

                &:last-child {
                    border-right: none;
                }
            }

            tbody {
                tr:last-child {
                    border-bottom: none;
                }
            }
        }

        &.striped {
            > tbody {
                tr:nth-child(2n) {
                    background: $background-color;
                }
            }
        }
    }
</style>