<template>
    <li>
        <span>
            {{data.message}}
        </span>
        <button @click="onDelete(index)">
            delete
        </button>
    </li>
</template>

<script>
    import event from "./event";

    export default {
        props: {
            data: {
                type: Object, required: true
            },
            index: {
                type: Number, required: true
            }
        },
        methods: {
            onDelete(index) {
                event.$emit("onDelete", index);
                this.$emit("onDelete", index);
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>