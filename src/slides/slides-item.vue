<template>
    <transition name="slide">
        <div class="yv-slides-item" v-show="visible" :class="{reverse,init}">
            <slot></slot>
        </div>
    </transition>
</template>


<script>
    export default {
        name: "slides-item-v",
        props: {
            index: {
                type:Number,
                required:true
            }
        },
        data() {
            return {
                selected: undefined,
                reverse:false,
                init:true
            }
        },

        computed: {
            visible() {
                // console.log(this.reverse,3);
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
    .slide-enter.reverse{
        transform: translateX(-100%);
    }

    .slide-leave-to.reverse{
        transform: translateX(100%);
    }
    .slide-enter.reverse.init{
        transform: translateX(0);
    }
    .slide-enter.init{
        transform: translateX(0);
    }
    .slide-enter-active.init{
        transition: all 0s;
    }

    .yv-slides-item {
        width:100%;height:100%;
    }
</style>