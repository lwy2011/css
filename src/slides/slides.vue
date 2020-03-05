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
            autoplay: {
                type: Boolean,
                default: true
            },
            reverse: {
                type: Boolean,
                default: false
            }
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
            console.log(this.selected,'up');
            this.updateSelected();
        },
        methods: {
            updateSelected() {
                this.$children.forEach(
                    vm => {
                        vm.selected = this.selected || 0;
                        vm.reverse = this.reverse
                    }
                );
            },
            getNextSelected() {
                const {length, selected, reverse} = this;
                if (reverse) {
                    return selected === 0 ? length -1 : selected - 1;
                }
                return selected === length - 1 ? 0 : selected + 1;
            },
            autoplayFn() {
                const run = () => {
                    setTimeout(
                        () => {
                            this.$emit("update:selected", this.getNextSelected());
                            run();
                        }, 3000
                    );
                };
                run();
            },

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