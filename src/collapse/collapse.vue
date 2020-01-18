<template>
    <div class="yv-collapse">
        <slot></slot>
    </div>
</template>


<script>
    import Vue from "vue";

    export default {
        name: "collapse-v",
        data() {
            return {
                eventBus:new Vue()
            };
        },
        provide(){
            return{
                eventBus:this.eventBus
            }
        },
        mounted(){
            // this.$on('update:selected',)
        }
    };
</script>


<style lang="scss" scoped>
    @import "../common";

    .yv-collapse {
        border: 1px solid $border-color;
        border-radius: $border-radius;
    }
</style>