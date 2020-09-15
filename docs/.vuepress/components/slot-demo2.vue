<template>
    <div style="margin:1em;">
        <p>无slot的组件</p>
        <input type="text" :value="title" @input="e=>{set(e.target.value)}">
        <p>{{title}}</p>
    </div>
</template>

<script>

    export default {
        components: {},
        props:{
            title:String,set:Function
        },
    };
</script>

<style>

</style>

