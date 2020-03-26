<template>
    <div class="yv-table-wrapper">
        <table class="yv-table" :class="{bordered,striped}">
            <thead>
            <tr>
                <td v-if="source[0] && source[0].selection">
                    <y-checkbox v-if="selectAll"
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
            <tr v-for="(item) in source" :key="item.trIndex">
                <td v-if="item.selection">
                    <y-checkbox @click="onInputChange(item,$event)"
                                :checked="itemIsSelected(item)"
                    ></y-checkbox>
                </td>
                <td v-for="(column) in columns" :key="column.key">
                    {{item[column.key]}}
                </td>
            </tr>
            </tbody>
        </table>
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
            selectAll: Boolean,
            striped: {
                type: Boolean, default: false
            },
            selected: {
                type: Array, default: () => []
            },
            loading:Boolean,
        },
        watch: {
            selected: function () {
                // console.log(this.selected, 11);
            }
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
                let item
                for (let i = 0; i < copy.length; i++) {
                    if (copy[i].key === key) {
                        const {sorter} = copy[i];
                        const enums = {
                            default:'esc',esc:'desc',desc:'default'
                        }
                        copy[i].sorter = enums[sorter];
                        item = copy[i]
                        break;
                    }
                }
                // console.log(copy);
                this.$emit("update:sorter", copy,item);
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../common";
    @import "../animate";
    .yv-table-wrapper{
        position: relative;
        .yv-table-loading{
            position: absolute;
            top:0;left:0;right:0;bottom: 0;
            background: rgba(255,255,255,.8);
            display: inline-flex;
            justify-content: center;
            align-items: center;
            svg{
                width:2em;height: 2em;
            }
        }
    }
    .yv-table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        display: table;
        margin: 0;
        transition: all 1s;
        $background-color: #FAFAFA;

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

        &-td {
            display: inline-flex;
            align-items: center;
        }

        &.bordered {
            border: 1px solid $light-border-color;
            border-bottom: none;

            td {
                border-right: 1px solid $light-border-color;
            }
        }

        &.striped {
            > tbody {
                tr:nth-child(2n) {
                    background: $background-color;
                }
            }
        }

        tr {
            border-bottom: 1px solid $light-border-color;
        }

        td {
            padding: 1em;
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
    }
</style>