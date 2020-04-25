<template>
    <div style="margin:1em;">
        <div style="width: 500px;height:250px;border:1px solid red;marginBottom: 2em;">
            <y-scroll>
                <div style="border:1px solid">
                    <div v-for="n in 35" :key="n" style="border:1px solid blue;margin:1em;">{{n}}</div>
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

