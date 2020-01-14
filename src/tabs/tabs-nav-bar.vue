<template>
    <div class="yv-tabs-bar"
         @click="$emit('selected',name)"
         :name="name"
         :class="{active}"
         :disabled="disabled"
    >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'tabs-bar-v',
        props:{
            name:String,
            active:Boolean,
            disabled:Boolean,
            methods:{
                click:function(){
                    console.log(this.name);
                    this.$emit('selected',this.name)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .yv-tabs-bar{
        &.active{
            color:red;
            cursor: pointer;
        }
        &[disabled]{
            cursor: not-allowed;
        }
    }
</style>