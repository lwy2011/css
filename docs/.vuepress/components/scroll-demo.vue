<template>
    <div style="margin:1em;">
        <div style="height:450px;display:inline-flex;border:1px solid red;marginBottom: 2em;">
            <y-scroll>
                <div style="border:1px solid;width: 500px;">
                    <div v-for="n in 35" :key="n" style="border:1px solid blue;margin:1em 0;">{{n}}</div>
                </div>
            </y-scroll>
        </div>

        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>

    import YScroll from "../../../src/scroll/scroll";
    export default {
        components: {
            YScroll,
        },
        data() {
            return {
                content: `
                <y-icon icon="setting"></y-icon>
                <y-icon icon="loading" loading="true"></y-icon>
                <y-icon icon="warn"></y-icon>
                <y-icon icon="left"></y-icon>
                `,
                loading: false
            };
        }
    };
</script>

