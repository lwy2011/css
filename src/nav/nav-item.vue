<template>
    <div class="yv-nav-item" :class="{active}" @click="onclick">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name :'y-nav-item',
        props:{
            name:{
                type:String,required:true
            }
        },
        data() {
            return {
                selected: undefined
            };
        },
        computed:{
            active(){
                return this.selected && this.selected.indexOf(this.name)>=0
            }
        },
        updated() {

        },
        mounted(){

        },
        methods:{
            onclick() {
                this.$emit("add:selected", this.name);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../common";
.yv-nav-item{
    padding:.5em 1em;
    &.active{
        background: $border-color;
    }
}
</style>