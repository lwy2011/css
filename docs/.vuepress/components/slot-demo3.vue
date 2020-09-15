<template>
    <div style="margin:1em;">
        <p>slot组件的title={{title}}</p>
        <slot :data="{title,set(val){title = val}}">
            {{title}}
        </slot>
    </div>
</template>

<script>

    export default {
        components: {},
        data() {
            return {
                title:'vue study!'
            };
        },
    };
</script>

<style>

</style>

