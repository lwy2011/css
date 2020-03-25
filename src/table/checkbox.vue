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
            onClick(e) {
                this.$emit("click", this.checked);
            }
        },
        watch: {
            indeterminate: function () {
                this.$el.indeterminate = this.indeterminate ? true : false;
            },
            // checked:function () {
            //     console.log(this.checked,'ll',this.$el.checked);
            //     this.$el.checked = this.checked
            // }
        },
        // mounted() {
        //     this.$el.addEventListener(
        //         "click", (e) => {
        //             e.preventDefault();
        //         }
        //     );
        // }
    };
</script>

<style scoped>

</style>