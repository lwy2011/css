<template>
    <div class="yv-upload">
        <div @click="onUpload" class="yv-upload-trigger">
            <slot></slot>
        </div>
        <ul v-if="files.length">
            <li v-for="(img,ind ) in files" :key="img.file.name+ind">
                <img :src="img.url" alt="img">
                <p>{{img.file.name}}
                    <y-icon icon="delete"
                            @click="onDeleteFile(ind)"></y-icon>
                </p>
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
                return input;
            },
            ajax(data, ajaxCallback, id) {
                const xml = new XMLHttpRequest();
                xml.open("post", this.action);
                xml.onload = e => {
                    const url = ajaxCallback(e.target);
                    const copy = [...this.files];
                    const img = copy.find(v => v.id === id);
                    img.url = url;
                    img.status = 2;
                    this.$emit("update:files", copy);
                    this.id += 1;
                };
                xml.send(data);
            },
            onInputChange(e) {
                const formData = new FormData();
                const file = e.target.files[0], {files, id} = this;
                const copy = [...files];
                copy.push({file, status: 1, id});
                this.$emit("update:files", copy);
                formData.append(this.name, file, file.name);
                this.ajax(formData, this.ajaxCallback, id);
            },
            onUpload() {
                const input = this.createInput();
                input.addEventListener(
                    "change", this.onInputChange
                );
                input.click();
            },
            onDeleteFile(ind) {
                const copy = [...this.files]
                copy.splice(ind, 1);
                // console.log(copy);
                this.$emit("update:files", copy);
            }
        }
    };
</script>

<style scoped lang="scss">

</style>