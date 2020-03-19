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
                    <y-checkbox @click="onInputChange(item,$event)"
                           :checked="itemIsSelected(index)"
                    ></y-checkbox>
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
                type: Array, required: true,
                validator(arr){
                    return !arr.find(obj=>obj.selection && obj.trIndex !== 0 && (!obj.trIndex))
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
        mounted() {

        },
        computed: {},
        methods: {
            itemIsSelected(index) {
                // console.log(2, this.selected.find(item=>item.trIndex === index));
                return Boolean(this.selected.find(item=>item.trIndex === index));
            },
            allSelect() {

            },
            cancelItem(copy,item){
                let ind
                copy.map(
                    (obj,index)=>{
                        !ind&&(obj.trIndex === item.trIndex)&&(ind = index)
                    }
                )
                copy.splice(ind,1)
            },
            onInputChange(item,checked) {
                const copy = JSON.parse(JSON.stringify(this.selected));
                // console.log( 1, checked,this.selected.indexOf(item),item);
                checked ? this.cancelItem(copy,item) : copy.push(item);
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