<template>
    <div>
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
                    {{item.text}}
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
                type: Array, required: true,
                validator(arr) {
                    return !arr.find(obj => obj.selection && obj.trIndex !== 0 && (!obj.trIndex));
                }
            },
            columns: {
                type: Array, required: true
            },
            bordered: Boolean,
            selectAll: Boolean,
            striped: {
                type: Boolean, default: false
            },
            selected: {
                type: Array, default: () => []
            }
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
                    obj=>obj.trIndex
                ).sort((a, b) => a - b);
                let test = true;
                for (let i = 0; i < arr1.length; i++) {
                    if (arr1[i] !== arr2[i]) {
                        test = false;
                        break;
                    }
                }
                return test
            },
            indeterminate(){
                return this.selected.length>0&&(!this.allIsSelected)
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