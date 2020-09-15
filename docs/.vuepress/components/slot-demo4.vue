<template>
    <div style="margin:1em;">
        <slot >
        </slot>
        <div>
            <slot name="header">

            </slot>
        </div>
        <div>
            <slot name="main">

            </slot>
        </div>
        <div>
            <slot name="footer">

            </slot>
        </div>
    </div>
</template>

<script>

    export default {
        components: {},
        mounted() {
            console.log(this.$slots)
        }
    };
</script>

<style>

</style>

