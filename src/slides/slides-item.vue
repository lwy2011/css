<template>
    <div class="yv-slides-item" v-if="visible">
        <slot></slot>
    </div>
</template>


<script>
    export default {
        name:'slides-item-v',
        props:{
            index:Number
        },
        data(){
            return {
                selected:null
            }
        },
        computed:{
            visible(){
                console.log(this.selected,this.index);
                return this.selected === this.index
            },
        }
    }
</script>

<style lang="scss" scoped>
    .yv-slides-item{

    }
</style>