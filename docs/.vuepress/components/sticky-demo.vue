<template>
    <div style="margin:1em;">
        <div style="height:400px;border:1px solid;margin:1em"></div>
        <y-sticky>
            <p style="border: 1px solid">sticky test</p>
        </y-sticky>
        <div style="height:800px;border:1px solid;margin:1em"></div>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import YSticky from '../../../src/sticky/sticky'

    export default {
        components: {
            YSticky
        },
        data() {
            return {
                content: `
                <y-icon icon="setting"></y-icon>
                <y-icon icon="loading" :loading="true"></y-icon>
                <y-icon icon="warn"></y-icon>
                <y-icon icon="left"></y-icon>
                `
            };
        }
    };
</script>

