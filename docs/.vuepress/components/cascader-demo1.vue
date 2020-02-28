<template>
    <div>
        <div style="margin:1em;paddingBottom:20em;z-index: 10;">
            <y-cascader
                    :data="data"
                    :size="size"
                    @update:selected="selected=$event"
                    :selected="selected"
                    :ajax="ajax"
            >
            </y-cascader>
            <h4>test</h4>
        </div>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import Cascader from "../../../src/cascader/cascader.vue";
    import Button from "../../../src/button/button.vue";
    import {arr} from "./cascader.js";
    import "../../helper-icon.js";

    const ajax = (parent_id = 0) =>
        new Promise((resolve) => {
            setTimeout(
                () => {
                    const res = arr.filter(
                        obj => obj.father === parent_id
                    );
                    res.map(
                        obj => {
                            obj.children = arr.find(
                                val => val.father === obj.id
                            );
                            // console.log(obj.children);
                        }
                    );
                    resolve(res);
                }, 1000
            );
        });

    // console.log(data);
    export default {
        components: {
            "y-cascader": Cascader,
            "y-button": Button,
        },
        data() {
            return {
                content: `
                        <y-cascader></y-cascader>
                `,
                data: null,
                selected: [],
                size: {
                    width: "9em",
                    height: "15em"
                }
            };
        },
        created() {
            ajax().then(
                res => {
                    this.data = res;
                    // console.log(res);
                }
            );
        },
        methods: {
            ajax,
        }
    };
</script>

