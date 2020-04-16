<template>
    <div class="yv-upload">
        <div @click="onUpload" class="yv-upload-trigger">
            <slot></slot>
        </div>
        <ul v-if="files.length" class="yv-upload-lists">
            <li v-for="(img,ind ) in files"
                class="yv-upload-lists-list"
                :key="img.name+ind">
                <div class="yv-upload-lists-list-img">
                    <template v-if="img.status === 1">
                        <y-icon icon="loading" loading></y-icon>
                    </template>
                    <template v-else-if="img.status === 200 &&
                    img.type.indexOf('image')===0">
                        <img :src="img.url" alt="img">
                    </template>
                    <template v-else>
                        <y-icon icon="image"></y-icon>
                    </template>
                </div>
                <p class="yv-upload-lists-list-name"
                    :class="{success:img.status === 200,fail:img.status>=400}"
                >
                    {{img.name}}</p>
                <y-icon icon="delete" class="yv-upload-lists-list-delete"
                        @click="onDeleteFile(ind)"></y-icon>
            </li>
        </ul>
    </div>
</template>

<script>
    import YIcon from "../svg/svg";

    export default {
        components: {
            YIcon
        },
        name: "v-upload.vue",
        props: {
            action: {
                type: String, required: true
            },
            name: {
                type: String, required: true
            },
            ajaxCallback: {
                type: Function, required: true
            },
            files: {
                type: Array, required: true
            },
            deleteWarn:{
                type:Function,default:n=>`您确定要删除第${n+1}张图片吗？`
            },
            maxSize:Number,
            minSize:Number,
        },
        data() {
            return {
                file: null, id: 1,
            };
        },
        methods: {
            createInput() {
                const input = document.createElement("input");
                input.type = "file";
                return input;
            },
            ajax(data, ajaxCallback, id) {
                const xml = new XMLHttpRequest();
                xml.open("post", this.action);
                xml.onload = e => {
                    const {url, status, errorMessage} = ajaxCallback(e.target);
                    const copy = [...this.files];
                    const img = copy.find(v => v.id === id);
                    img.url = url;
                    img.status = status;
                    img.errorMessage = errorMessage;
                    this.$emit("update:files", copy);
                    this.id += 1;
                };
                xml.send(data);
            },
            beforeAjax(files,maxSize,minSize,id,file){
                if (maxSize>0 && (file.size> maxSize * 1000*1000)){
                    throw new Error('maxSize error!')
                }
                if (minSize>0 && (file.size< minSize * 1000*1000)){
                    throw new Error('minSize error!')
                }
                const copy = [...files];
                copy.push({status: 1, id,name:file.name,type:file.type});
                this.$emit("update:files", copy);
            },
            onInputChange(e) {
                const formData = new FormData();
                const file = e.target.files[0], {files, id,maxSize,minSize} = this;
                try {
                    this.beforeAjax(files,maxSize,minSize,id,file);
                    formData.append(this.name, file, file.name);
                    this.ajax(formData, this.ajaxCallback, id);
                }catch (e) {
                    this.$emit('error',e.message)
                }
            },
            onUpload() {
                const input = this.createInput();
                input.addEventListener(
                    "change", this.onInputChange
                );
                input.click();
            },
            onDeleteFile(ind) {
                if (window.confirm(this.deleteWarn(ind))) {
                    const copy = [...this.files];
                    copy.splice(ind, 1);
                    // console.log(copy);
                    this.$emit("update:files", copy);
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../common";
    $img-height:32px;
.yv-upload{
    &-trigger{
        display: inline-flex;
    }
    &-lists{
        list-style: none;
        margin-top:8px;
        &-list{
            height:32px;
            border: 1px solid $border-color;
            margin-bottom: 8px;
            display: flex;
            align-items:center;
            &-img{
                height:100%;margin-right: 1em;
                width: $img-height;
                >img{
                    height:100%;
                }
                >svg{
                    height:100%;width:$img-height;
                    fill:$border-color;
                }
            }
            &-name{
                &.success{
                    color:$blue;
                }
                &.fail{
                    color:$warn-color;
                }
            }
            &-delete{
                margin-left: auto;
                margin-right: .5em;
                fill:$border-color;
                cursor: pointer;
                &:hover{
                    fill:$warn-color;
                }
            }
        }
    }
}
</style>