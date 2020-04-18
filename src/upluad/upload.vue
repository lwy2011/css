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
            deleteWarn: {
                type: Function, default: n => `您确定要删除第${n + 1}张图片吗？`
            },
            maxSize: Number,
            minSize: Number,
            multiple: {
                type: Boolean, default: true
            },
            accept: {
                type: String, default: "image/*"
            }
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
                input.multiple = this.multiple;
                input.accept = this.accept;
                return input;
            },
            ajaxResponse(e,id){
                const {url, status, errorMessage} = this.ajaxCallback(e.target);
                const copy = [...this.files];
                const img = copy.find(v => v.id === id);
                img.url = url;
                img.status = status;
                img.errorMessage = errorMessage;
                this.$emit("update:files", copy);
            },
            ajax(data, id) {
                const xml = new XMLHttpRequest();
                xml.open("post", this.action);
                xml.onload = e => {
                    this.ajaxResponse(e,id)
                };
                xml.onerror = e =>{
                    this.ajaxResponse(e,id)
                }
                xml.send(data);
            },
            beforeAjax(copy, file) {
                const {id, maxSize, minSize} = this, {name, type, size} = file;
                if (maxSize > 0 && (file.size > maxSize * 1000 * 1000)) {
                    throw new Error(`max-size-warn-error! fileName:${name},size:${size}`);
                }
                if (minSize > 0 && (file.size < minSize * 1000 * 1000)) {
                    throw new Error(`min-size-warn-error! fileName:${name},size:${size}`);
                }
                copy.push({status: 1, id, name, type});
                this.id += 1;
                return id;
            },
            onInputChange(e) {
                const fileLists = e.target.files, {files} = this;
                const copy = [...files];
                for (let i = 0; i < fileLists.length; i++) {
                    try {
                        const id = this.beforeAjax(copy, fileLists[i]);
                        const formData = new FormData();
                        formData.append(this.name, fileLists[i]);
                        this.ajax(formData, id);
                    } catch (e) {
                        this.$emit("error", e.message);
                    }
                }
                copy.length && this.$emit("update:files", copy);
            },
            onUpload() {
                const input = this.createInput();
                input.addEventListener(
                    "change", this.onInputChange
                );
                input.click();
                this.input = input; //为了单元测试
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

    $img-height: 32px;
    .yv-upload {
        &-trigger {
            display: inline-flex;
        }

        &-lists {
            list-style: none;
            margin-top: 8px;

            &-list {
                height: 32px;
                border: 1px solid $border-color;
                margin-bottom: 8px;
                display: flex;
                align-items: center;

                &-img {
                    height: 100%;
                    margin-right: 1em;
                    width: $img-height;

                    > img {
                        height: 100%;
                    }

                    > svg {
                        height: 100%;
                        width: $img-height;
                        fill: $border-color;
                    }
                }

                &-name {
                    &.success {
                        color: $blue;
                    }

                    &.fail {
                        color: $warn-color;
                    }
                }

                &-delete {
                    margin-left: auto;
                    margin-right: .5em;
                    fill: $border-color;
                    cursor: pointer;

                    &:hover {
                        fill: $warn-color;
                    }
                }
            }
        }
    }
</style>