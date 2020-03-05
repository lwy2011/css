<template>
    <transition name="slide">
        <div class="yv-slides-item" v-show="visible">
            <slot></slot>
        </div>
    </transition>
</template>


<script>
    export default {
        name: "slides-item-v",
        props: {
            index: Number
        },
        data() {
            return {
                selected: undefined
            };
        },
        computed: {
            visible() {
                // console.log(this.selected, this.index);
                return this.selected === this.index;
            },
        }
    };
</script>

<style lang="scss" scoped>
    .slide-enter-active, .slide-leave-active {
        transition: all 1s;
    }
    .slide-leave-active {
        position: absolute;left: 0;top:0;
    }
    .slide-enter {
        transform: translateX(100%);
    }

    .slide-leave-to {
        transform: translateX(-100%);
    }
    .yv-slides-item {

    }
</style>