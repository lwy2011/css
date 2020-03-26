<template>
    <div style="margin:1em;">
        <y-table :columns="columns"
                 :source="source" bordered
                 :selected.sync="selected"
                 select-all
                 :sorter.sync="columns"
                 @update:sorter="sorterUpdate"
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
                        age: 23,
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
                        age: 3,
                        address: "Sidney No. 1 Lake Park",
                        selection: true,
                        trIndex: 3
                    },
                ],
                selected: [],
                defaultSource: null
            };
        },
        mounted() {
            this.defaultSource = JSON.parse(JSON.stringify(this.source));
        },
        methods: {
            sorterUpdate(columns, item) {
                console.log(item, 55);
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
                    }, 1000
                );
            }
        },
        updated() {
            console.log(this.selected, this.checked);
        }
    };
</script>

