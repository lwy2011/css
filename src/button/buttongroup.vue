<template>
    <div class="yv-btngroup">
        <slot>

        </slot>
    </div>
</template>


<script>
    export default {
        mounted() {
            // console.log(this.$children,this.$el);
            for (let child of this.$el.children) {
                // console.log(child);
                const name = child.nodeName.toLowerCase();
                // console.log(name);
                if (name.toLowerCase() !== "button") {
                    console.warn(`y-btn-group组件的子元素只能是y-button组件，而不是${name}`);
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../common";
    .yv-btngroup {
        display: inline-flex;
        vertical-align: middle;

        > .yv-button {
            border-radius: 0;

            &:first-child {
                border-bottom-left-radius: $border-radius;
                border-top-left-radius: $border-radius;
            }

            &:last-child {
                border-bottom-right-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }

            &:not(first-child) {
                margin-left: -1px;
            }

            &:hover {
                z-index: 10;
            }
        }
    }

</style>