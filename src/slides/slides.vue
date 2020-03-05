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
            selected: {
                type: Number,
                required: true,
            },
            autoplay: Boolean,
        },
        data() {
            return {
                length: undefined
            };
        },
        mounted() {
            this.updateSelected();
            this.length = this.$children.length;
            this.autoplay && this.autoplayFn();
        },
        updated() {
            // console.log(this.selected,'up');
            this.updateSelected();
        },
        methods: {
            updateSelected() {
                this.$children.forEach(
                    vm => {
                        vm.selected = this.selected || 0;
                    }
                );
            },
            autoplayFn() {
                const run = () => {
                    setTimeout(
                        () => {
                            const {length, selected} = this;
                            const nextSelected = selected === length - 1 ? 0 : selected + 1;
                            // console.log(nextSelected,'next',length);
                            this.$emit("update:selected", nextSelected);
                            run();
                        }, 3000
                    );
                };
                run();
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