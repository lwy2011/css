<template>
    <div>
        <table class="yv-table" :class="{bordered,striped}">
            <thead>
                <tr>
                    <td v-if="source[0].selection">
                        <input type="checkbox" v-if="selectAll">
                    </td>
                    <td v-for="(item ,index) in columns" :key="index">
                        {{item.text}}
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in source" :key="index">
                    <td v-if="item.selection">
                        <input type="checkbox">
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
    export default {
        name: "v-table",
        props:{
            source:{
                type:Array,required:true
            },
            columns:{
                type:Array,required:true
            },
            bordered:Boolean,
            selectAll:Boolean,
            striped:{
                type:Boolean,default:false
            }
        },
    };
</script>

<style scoped lang="scss">
    @import "../common";
    @import "../animate";
.yv-table{
    width:100%;
    border-collapse: collapse;
    border-spacing: 0;
    display: table;
    margin:0;
    transition: all 1s;
    $background-color:#FAFAFA;
    &.bordered{
        border:1px solid $light-border-color;
        border-bottom: none;
        td{
            border-right:1px solid $light-border-color;
        }
    }
    &.striped{
        > tbody{
            tr:nth-child(2n){
                background:$background-color ;
            }
        }
    }
    tr{
        border-bottom: 1px solid $light-border-color;
    }
    td{
        padding:1em;
    }
    thead{
        background: $background-color;
    }

    tbody{
        tr{
            &:hover{
                background: $light-border-color;
                opacity: .7;
            }
        }
    }
}
</style>