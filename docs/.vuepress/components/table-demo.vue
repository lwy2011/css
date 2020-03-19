<template>
    <div style="margin:1em;">
        <y-table :columns="columns" :source="source" striped >
        </y-table>
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
                    },
                    {
                        name: "John Brown",
                        age: 32,
                        address: "New York No. 1 Lake Park",
                    },
                    {
                        name: "Jim Green",
                        age: 42,
                        address: "London No. 1 Lake Park",
                    },
                    {
                        name: "Joe Black",
                        age: 32,
                        address: "Sidney No. 1 Lake Park",
                    },
                ]
            };
        }
    };
</script>

