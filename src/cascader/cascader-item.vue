<template>
    <div class="vy-cascader-item">
        {{data.name+data.postfix}}
        <cascader-item-v
                v-if="data.children && data.children.length"
                v-for="child in data.children"
                :data="child"
        ></cascader-item-v>
    </div>
</template>

<script>
    export default {
        name:'cascader-item-v',
        props:{
            data:Object
        }
    }
</script>


<style lang="scss" scoped>

</style>