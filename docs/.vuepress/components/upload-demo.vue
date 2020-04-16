<template>
    <div style="margin:1em;">
        <y-upload
                :action="action"
                :name="name"
                :ajax-callback="ajaxCallback"
                @upload="upload"
                :files.sync="files"
        >
            <y-button>upload</y-button>
        </y-upload>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>
<script>
    import YUpload from "../../../src/upluad/upload";
    import YButton from '../../../src/button/button'
    import '../../helper-icon'
    export default {
        components: {
            YUpload,YButton
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
                action: "http://127.0.0.1:3000/image/upload",
                name: "avatar",
                ajaxCallback: res => {
                    return JSON.parse(res.response).url;
                },
                files:[]
            };
        },
        methods: {
            upload(data) {
                console.log(data);
                this.files.push(data)
                console.log(this.files);
            }
        }
    };
</script>

