<template>
    <div style="margin:1em;">
        <y-icon icon="setting"></y-icon>
        <y-icon icon="loading" loading></y-icon>
        <y-icon icon="warn"></y-icon>
        <y-icon icon="left"></y-icon>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import helper from '../../helper-icon.js'
    import Icon from "../../../src/svg/svg.vue";

    export default {
        components: {
            "y-icon": Icon
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

