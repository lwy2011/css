<template>
    <div style="margin:1em;">
        <y-upload
                :action="action"
                :name="name"
                :ajax-callback="ajaxCallback"
                :files.sync="files"
                :max-size="3"
                @error="onFail"
        >
            <y-button icon="upload">upload</y-button>
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
                    console.log(res);
                    const success = Math.random() > 0.5
                    const {url,code} = JSON.parse(res.response)
                    return {
                        url,
                        status:success?200:500,   //res.status
                        errorMessage: success?'ok':'图片太大'          //code
                    };
                },
                files:[]
            };
        },
        methods: {
            onFail(val){
                alert(val)
            }
        },
        watch:{
            files:function(){
                console.log(this.files,0);
            }
        }
    };
</script>

