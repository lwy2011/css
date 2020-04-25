<template>
    <div style="margin:1em;">
        <div style="width: 500px;height:500px;border:1px solid;padding:1em;marginBottom: 2em;">
            <y-scroll>
                <ul>
                    <div v-for="n in 50" :key="n" style="border:1px solid blue;margin:1em;">{{n}}</div>
                </ul>
            </y-scroll>
        </div>
        <div style="width: 500px;height:500px;border:1px solid;padding:1em;">
            <y-scroll>
                <y-button>test</y-button>
            </y-scroll>
        </div>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>

    import YScroll from "../../../src/scroll/scroll";
    import YButton from '../../../src/button/button'
    export default {
        components: {
            YScroll,YButton
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

