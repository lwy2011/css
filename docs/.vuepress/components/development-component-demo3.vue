<template>
    <div style="margin:1em;">
        <p>music</p>
       <ul>
           <li v-for="item in data" :key="item.name">
               name:{{item.name}},singer:{{item.singer}}
           </li>
       </ul>
    </div>
</template>

<script>
    export default {
        props: {
            data:Array
        },
    };
</script>

<style>

</style>

