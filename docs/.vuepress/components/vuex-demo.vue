<template>
    <div style="margin:1em;">

        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>

    import getCode from "../../helper-code";

    export default {
        components: {},
        data() {
            return {
                content: "",

            };
        },
        mounted() {
            this.content = getCode("vuex-demo.vue").default;
        },
        methods: {

        }
    };
</script>

<style>

</style>

