<template>
    <div style="margin:1em;">
        <y-cascader>
            test
        </y-cascader>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import Cascader from "../../../src/cascader/cascader.vue";

    export default {
        components: {
            "y-cascader": Cascader,
        },
        data() {
            return {
                content: `
                        <y-cascader></y-cascader>
                `,
            };
        }
    };
</script>

