<template>
    <div style="margin:1em;">
       <p>
           test keep-alive
       </p>
    </div>
</template>

<script>

    export default {
        mounted() {
            this.$emit('onMounted')
        },
        beforeDestroy() {
            this.$emit('onDestroy')
        }
    };
</script>

<style>

</style>

