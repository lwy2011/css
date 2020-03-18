<template>
    <input type="checkbox" :checked="checked" @click="onClick">
</template>

<script>
    export default {
        name: "v-checkbox",
        props: {
            checked: Boolean,
        },
        methods: {
            onClick() {
                this.$emit("click", this.checked);
            }
        }
    };
</script>

<style scoped>

</style>