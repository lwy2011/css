<template>
    <div style="margin:1em;">
        <y-scroll>
            scroll
        </y-scroll>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>

    import YScroll from "../../../src/scroll/scroll";

    export default {
        components: {
            YScroll
        },
        data() {
            return {
                content: `
                <y-icon icon="setting"></y-icon>
                <y-icon icon="loading" loading="true"></y-icon>
                <y-icon icon="warn"></y-icon>
                <y-icon icon="left"></y-icon>
                `,
                loading:false
            };
        }
    };
</script>

