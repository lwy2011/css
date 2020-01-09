<template>
    <div class="yv-row" :style="getStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            gutter: [Number, String]
        },
        mounted() {
            // console.log(this.$children);
            //父元素想传值给子组件，在mounted事件，同时，想设置的值设置在子组件的data属性内。
            this.gutter &&
            this.$children.forEach(
                vm => vm.gutter = this.gutter
            );
        },
        computed: {
            getStyle() {
                return {
                    marginLeft: `-${this.gutter / 2}px`,
                    marginRight: `-${this.gutter / 2}px`
                };
            }
        }
    };
</script>


<style lang="scss" scoped>
    .yv-row {
        display: flex;
    }
</style>