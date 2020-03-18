<template>
    <div>
        <table class="yv-table" :class="{bordered,striped}">
            <thead>
            <tr>
                <td v-if="source[0] && source[0].selection">
                    <input type="checkbox" v-if="selectAll" @click="allSelect">
                </td>
                <td v-for="(item ,index) in columns" :key="index">
                    {{item.text}}
                </td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in source" :key="index">
                <td v-if="item.selection">
                    <y-checkbox :checked="itemIsSelected(index)"
                                @click="onInputClick($event,item,index)"
                    >
                    </y-checkbox>
                </td>
                <td v-for="(column,ind) in columns" :key="ind">
                    {{item[column.key]}}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import YCheckbox from "./checkbox";

    export default {
        name: "v-table",
        components: {
            YCheckbox
        },
        props: {
            source: {
                type: Array, required: true
            },
            columns: {
                type: Array, required: true
            },
            bordered: Boolean,
            selectAll: Boolean,
            striped: {
                type: Boolean, default: false
            },
            selected: Array
        },
        mounted() {
            if ((this.source[0].selection) && !this.selected || this.selectAll) {
                throw new Error("设置了checkbox，就必须要为组件设计selected属性");
            }
        },
        computed: {},
        methods: {
            itemIsSelected(index) {
                return Boolean(
                    this.selected.filter(
                        item => item.trIndex === index
                    )[0]
                );
            },
            allSelect() {

            },
            cancelSelected(copy, index) {
                let index1;
                copy.map(
                    (val, ind) => val.trIndex === index && (
                        index1 = ind
                    )
                );
                copy.splice(index1, 1);
            },
            onInputClick(checked, item, index) {
                const copy = JSON.parse(JSON.stringify(this.selected));
                const itemCopy = JSON.parse(JSON.stringify(item));
                itemCopy.trIndex = index;
                checked ? this.cancelSelected(copy, index) : copy.push(itemCopy);
                this.$emit("update:selected", copy);
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../common";
    @import "../animate";

    .yv-table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        display: table;
        margin: 0;
        transition: all 1s;
        $background-color: #FAFAFA;

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