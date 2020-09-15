<template>
    <div style="margin:1em;">
        <p>
            user:{{data.name}},{{data.age}}
        </p>
    </div>
</template>

<script>

    export default {

        props: {
            data:Object,
        },
        methods: {}
    };
</script>

<style>

</style>

