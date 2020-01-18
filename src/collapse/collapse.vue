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
                eventBus: new Vue()
            };
        },
        provide() {
            return {
                eventBus: this.eventBus
            };
        },
        props: {
            single: {
                type: Boolean,
                default: true
            }
        },
        mounted() {
            this.eventBus.$emit("update:selected",null,this.single);
        },
        watch:{
            single:function () {
                this.eventBus.$emit("update:selected",null,this.single);
            }
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