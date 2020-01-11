<template>
    <div class="yv-layout" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "layout-v",
        data() {
            return {
                classes: []
            };
        },
        mounted() {
            this.$children.map(
                vm => {
                    // console.log(vm.$options);
                    if (vm.$options.name === "aside-v") {
                        this.classes.indexOf("has-aside") < 0 &&
                           this.classes.push('has-aside')
                    }
                }
            );
            // console.log(this.$children);
        }
    };
</script>

<style lang="scss" scoped>
    .yv-layout {
        display: flex;
        flex-direction: column;
        &.has-aside{
            flex-direction: row;
        }
        >.yv-layout{
            flex-grow: 1;
        }
    }
</style>