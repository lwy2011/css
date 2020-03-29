<template>
    <div style="margin:1em;">
        <y-upload

        ></y-upload>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    // import "../../helper-icon";
    import YUpload from "../../../src/upluad/upload";

    export default {
        components: {
            YUpload,
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

