<template>
    <input type="checkbox" :checked="checked"
           @click="onClick"
           :indeterminate="indeterminate"
    >
</template>

<script>
    export default {
        name: "v-checkbox",
        props: {
            checked: Boolean,
            indeterminate: Boolean,
        },
        methods: {
            onClick() {
                this.$emit("click", this.checked);
            }
        },
        watch: {
            indeterminate: function () {
                this.$el.indeterminate = this.indeterminate ? true : false;
            }
        }
    };
</script>

<style scoped>

</style>