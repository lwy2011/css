<template>
    <div class="yv-upload">
        <y-button @click="upload">upload</y-button>
        <ul v-if="files.length">
            <li v-for="(img,ind ) in files" :key="files.name+ind">
                <img :src="img.url" alt="img">
                <p>{{img.file.name}}
                    <y-icon icon="delete"
                            @click="onDeleteFile(ind)"></y-icon>
                </p>
            </li>
        </ul>
        <slot></slot>
    </div>
</template>

<script>
    import YButton from "../button/button";
    import YIcon from "../svg/svg";

    export default {
        components: {
            YButton, YIcon
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
                file: null, src: null
            };
        },
        methods: {
            createInput() {
                const input = document.createElement("input");
                input.type = "file";
                return input;
            },
            ajax(data, ajaxCallback) {
                const xml = new XMLHttpRequest();
                xml.open("post", this.action);
                xml.onload = e => {
                    const url = ajaxCallback(e.target);
                    this.$emit("upload", {url, file: this.file});
                };
                xml.send(data);
            },
            onInputChange(e) {
                const formData = new FormData();
                this.file = e.target.files[0];
                formData.append(this.name, e.target.files[0], e.target.files[0].name);
                this.ajax(formData, this.ajaxCallback);
            },
            upload() {
                const input = this.createInput();
                input.addEventListener(
                    "change", this.onInputChange
                );
                input.click();
            },
            onDeleteFile(ind) {
                const copy = JSON.parse(JSON.stringify(this.files))
                copy.splice(ind, 1);
                console.log(copy);
                this.$emit("update:files", copy);
            }
        }
    };
</script>

<style scoped lang="scss">

</style>