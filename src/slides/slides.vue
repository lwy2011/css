<template>
    <div class="yv-slides">
        <div class="yv-slides-window">
            <div class="yv-slides-wrapper">
                <slot></slot>
            </div>
        </div>
    </div>
</template>


<script>

    export default {
        name: "slides-v",
        props: {
            selected: Number
        },
        mounted() {
            this.updateSelected();
        },
        updated(){
            console.log(this.selected,'up');
            this.updateSelected()
        },
        methods: {
            updateSelected() {
                this.$children.forEach(
                    vm => {
                        vm.selected = this.selected || 0;
                    }
                );
            }
        }
    };
</script>

<style lang="scss" scoped>
    .yv-slides {
        display: inline-block;

        &-window {
            overflow: hidden;
        }

        &-wrapper {
            position: relative;
        }
    }
</style>