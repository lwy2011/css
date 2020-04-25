<template>
    <div class="yv-scroll" @wheel.prevent="onWheel">
        <transition name="top">
            <div v-if="isTop" class="yv-scroll-isTop"></div>
        </transition>
        <div ref="wrapper" class="yv-scroll-wrapper">
            <slot></slot>
        </div>
        <transition name="bottom">
            <div v-if="isBottom" class="yv-scroll-isBottom"></div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "v-scroll",
        props: {},
        data() {
            return {
                position: 0, lock: false, isTop: false, isBottom: false
            };
        },
        mounted() {
            if (!this.children) throw new Error("scroll组件必须要包裹一个child！");
        },
        computed: {
            children() {
                return this.$slots.default[0];
            },

        },
        watch: {
            position: function x() {
                this.$refs.wrapper.style.transform = `translateY(${this.position}px)`;
                console.log(this.position, 999);
            },
            isTop: function y() {
                console.log(this.isTop, this.position, "333333");
            }
        },
        methods: {
            onWheel(e) {
                if (this.lock) return;
                this.lock = true;
                const {height} = this.$el.getBoundingClientRect(),
                    height1 = this.$refs.wrapper.getBoundingClientRect().height;
                const v = this.position - (e.deltaY * 5 > 40 ? 40 : e.deltaY * 10);
                console.log(this.position, "ppp", v);
                if (v > 0) {
                    this.position = 0;
                    clearTimeout(this.isTop);
                    this.isTop = setTimeout(() => this.isTop = false, 600);
                } else if (v < height - height1) {
                    this.position = height - height1;
                    clearTimeout(this.isBottom);
                    this.isBottom = setTimeout(() => this.isBottom = false, 600);
                } else {
                    this.position = v;
                }
                setTimeout(() => this.lock = false, 100);
            }
        }
    };
</script>

<style scoped lang="scss">
    .top-enter-active {
        animation: is-top 800ms linear;
    }

    .top-leave-active {
        animation: is-top 800ms linear  reverse;
    }

    @keyframes is-top {
        0% {
            width: 800%;
            border-radius: 10%;
            top: -6em;
            left: 50%;
        }
        50% {
            width: 500%;border-radius: 50%;bottom:-4.5em;
            left:0%;
        }
        100% {
            width: 200%;
            border-radius: 80%;
            top: -3em;
            left: -80%;
        }
    }

    @keyframes is-bottom {
        0% {
            width: 800%;
            border-radius: 10%;
            bottom: -6em;
            left:0;
        }
        50% {
            width: 400%;
            border-radius: 40%;
            bottom: -4.5em;
            left:-50%;
        }
        100% {
            width: 200%;
            border-radius: 80%;
            bottom: -3em;
            left:-90%;
        }
    }

    .bottom-enter-active {
        animation: is-bottom 800ms linear;
    }

    .bottom-leave-active {
        animation: is-bottom 800ms linear reverse;
    }

    .yv-scroll {
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: relative;

        &-wrapper {
            position: relative;
            transition: translate 100ms;
        }

        &-isTop {
            position: absolute;
            width: 200%;
            height: 6em;
            top: -3em;
            border-radius: 50%;
            background: rgba(0, 0, 0, .5);left:-80%;
        }

        &-isBottom {
            position: absolute;
            width: 200%;
            height: 6em;
            bottom: -3em;
            border-radius: 50%;
            background: rgba(0, 0, 0, .5);
            left:-90%;
        }
    }
</style>