<template>
    <div class="yv-tabs">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'tabs-v',
        props:{
            selected:{
                type:String,
                required:true
            },
            direction:{
                type:String,
                validator(val){
                    return 'X' === val || 'Y' === val
                },
                default:'X'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .yv-tabs{

    }
</style>