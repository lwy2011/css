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
            initSelected: Number
        },
        data() {
            return {
                selected: 0
            };
        },
        beforeMount(){
            this.initSelected >= 0 && (this.selected = this.initSelected);
        },
        mounted() {
            this.updateSelected(this.initSelected || this.selected);
            // setTimeout(
            //     () => {
            //         this.selected = this.selected =0  ? this.selected++:
            //             this.initSelected++
            //         ;
            //     }, 2000
            // );
        },
        updated() {

        },
        methods: {
            updateSelected(selected) {
                this.$children.forEach(
                    vm => {
                        vm.selected = selected || this.selected;
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

        }
    }
</style>