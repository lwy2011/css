<template>
    <div style="margin:1em;">
        <y-table :columns="columns"
                 :source="source" bordered
                 :selected.sync="selected"
                 select-all
        >
        </y-table>
        <div>
            <p>选择结果</p>
            <y-table
                    v-if="selected.length"
                    :columns="columns"
                    :source="source.filter(val=>selected.indexOf(val.trIndex)>=0)"
            >
            </y-table>
        </div>
        <pre>
            <code>{{content}}</code>
            <input type="checkbox" :checked="checked" @change="select" >
            <input type="text" :value="text" @input="input">
        </pre>
    </div>
</template>

<script>

    import YTable from "../../../src/table/table";

    export default {
        components: {
            YTable
        },
        data() {
            return {
                content: `
                <y-icon icon="setting"></y-icon>
                `,
                checked:false,
                text:'',
                columns: [
                    {
                        text: "姓名",
                        key: "name",
                    },
                    {
                        text: "年龄",
                        key: "age",
                    },
                    {
                        text: "住址",
                        key: "address",
                    },
                ],
                source: [
                    {
                        name: "胡彦斌",
                        age: 32,
                        address: "西湖区湖底公园1号",
                        selection: true,
                        trIndex: 0
                    },
                    {
                        name: "John Brown",
                        age: 32,
                        address: "New York No. 1 Lake Park",
                        selection: true,
                        trIndex: 1
                    },
                    {
                        name: "Jim Green",
                        age: 42,
                        address: "London No. 1 Lake Park",
                        selection: true,
                        trIndex: 2
                    },
                    {
                        name: "Joe Black",
                        age: 32,
                        address: "Sidney No. 1 Lake Park",
                        selection: true,
                        trIndex:3
                    },
                ],
                selected: [],
            };
        },
        methods:{
            select(e){
                console.log(e.target.checked,111);
            },
            input(e){
                console.log(e.target.value,0);
                // this.text = e.target.value
            }
        },
        updated() {
            console.log(this.selected,this.checked);
        }
    };
</script>

