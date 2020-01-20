<template>
    <div style="margin:1em;">
        <y-button>normal</y-button>
        <y-button icon="left">last</y-button>
        <y-button icon="right" iconposition="right">last</y-button>
        <y-button icon="download"
                  @click="loading=!loading"
                  :loading="loading"
        >下载</y-button>
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

