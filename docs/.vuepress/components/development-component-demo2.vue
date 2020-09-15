<template>
    <div style="margin:1em;">
        <p>book</p>
       <ul>
           <li v-for="item in data" :key="item.name">
               name:{{item.name}},price:{{item.price}}
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

