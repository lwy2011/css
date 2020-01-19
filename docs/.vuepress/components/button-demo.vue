<template>
    <div>
        <y-button>normal</y-button>
        <y-button icon="left">last</y-button>
        <y-button icon="left" iconPosition="right">last</y-button>
        <y-button icon="download" @click="loading=!loading" :loading="loading"></y-button>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import Button from "../../../src/button/button.vue";

    export default {
        components: {
            "y-button": Button,
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

