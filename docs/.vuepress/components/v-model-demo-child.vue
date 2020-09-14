<template>
    <label>
        <input type="text" :value="text"
               @input="$emit('change1',$event.target.value)">
    </label>
</template>

<script>
    export default {
        model:{
            event:'change1',  //对应inputEvent触发时，$emit的事件！
            prop:'text'    //绑定的属性，由父组件传进来的哪个属性！
        },
        props:{
            text:String
        },
    };
</script>

<style>

</style>

