<template>
    <div style="margin:1em;">
        <y-pager :total="100" :current.sync="current">
        </y-pager>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import "../../helper-icon";
    import YPager from "../../../src/pager/pager";

    export default {
        components: {
            YPager,
        },
        data() {
            return {
                content: `
                <y-icon icon="setting"></y-icon>
                <y-icon icon="loading" loading="true"></y-icon>
                <y-icon icon="warn"></y-icon>
                <y-icon icon="left"></y-icon>
                `,
                current: 1,
            };
        }
    };
</script>

