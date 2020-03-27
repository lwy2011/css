<template>
    <div>
        <div style="margin:1em;width:20vw">
            <y-table :columns="columns"
                     :source="source" bordered
                     :selected.sync="selected"
                     select-all
                     :sorter.sync="columns"
                     @update:sorter="sorterUpdate"
                     :loading="loading"
            >
            </y-table>
        </div>
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
                columns: [
                    {
                        text: "姓名",
                        key: "name",
                        fixed:true,
                    },
                    {
                        text: "年龄",
                        key: "age",
                        sorter: "esc"  //'desc' 'default'
                    },
                    {
                        text: "住址",
                        key: "address",
                    },
                    {
                        text: "年龄1",
                        key: "age1",
                        sorter: "esc"  //'desc' 'default'
                    },
                    {
                        text: "住址1",
                        key: "address1",
                    },
                ],
                source: [
                    {
                        name: "胡彦斌",
                        age: 32,
                        address: "西湖区湖底公园1号",
                        age1: 32,
                        address1: "西湖区湖底公园1号",
                        selection: true,
                        trIndex: 0
                    },
                    {
                        name: "John Brown",
                        age: 23,
                        address: "New York No. 1 Lake Park",
                        age1: 32,
                        address1: "西湖区湖底公园1号",
                        selection: true,
                        trIndex: 1
                    },
                    {
                        name: "Jim Green",
                        age: 42,
                        address: "London No. 1 Lake Park",
                        age1: 32,
                        address1: "西湖区湖底公园1号",
                        selection: true,
                        trIndex: 2
                    },
                    {
                        name: "Joe Black",
                        age: 3,
                        address: "Sidney No. 1 Lake Park",
                        selection: true,
                        age1: 32,
                        address1: "西湖区湖底公园1号",
                        trIndex: 3
                    },
                    {
                        name: "胡彦斌",
                        age: 32,
                        address: "西湖区湖底公园1号",
                        age1: 32,
                        address1: "西湖区湖底公园1号",
                        selection: true,
                        trIndex: 4
                    },
                ],
                selected: [],
                defaultSource: null,
                loading:false,
            };
        },
        mounted() {
            this.defaultSource = JSON.parse(JSON.stringify(this.source));
        },
        methods: {
            sorterUpdate(columns, item) {
                console.log(item, 55);
                this.loading = true
                setTimeout(
                    () => {
                        const {key, sorter} = item;
                        this.source = sorter === "default" ? this.defaultSource : (
                            this.source.sort(
                                (a, b) =>
                                    sorter === "esc" ?
                                        a[key] - b[key] : b[key] - a[key]
                            )
                        );
                        this.loading = false
                    }, 1000
                );
            }
        },
        updated() {
            console.log(this.selected, this.checked);
        }
    };
</script>

