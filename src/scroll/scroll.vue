<template>
    <div class="yv-scroll" @wheel="onWheel" @mouseenter="onMouseenter" @mouseleave="onMouseleave">
        <transition name="top">
            <div v-if="isTop" class="yv-scroll-isTop"></div>
        </transition>
        <div ref="wrapper" class="yv-scroll-wrapper">
            <slot></slot>
        </div>
        <div class="yv-scroll-barBox"
             @dragstart="onDragstart"
             @dragend="onDragend"
             v-show="barVisible">
            <div class="yv-scroll-bar" ref="bar" draggable="true">
                <div class="yv-scroll-bar-child"></div>
            </div>
        </div>
        <transition name="bottom">
            <div v-if="isBottom" class="yv-scroll-isBottom">
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "v-scroll",
        props: {},
        data() {
            return {
                position: 0, isTop: false, isBottom: false, isScroll: false, barVisible: false
            };
        },
        mounted() {
            if (!this.$slots.default[0]) throw new Error("scroll组件必须要包裹一个child！");
        },
        computed: {


        },
        watch: {
            position: function x() {
                this.$refs.wrapper.style.transform = `translateY(${this.position}px)`;
                this.$refs.bar.style.transform =
                    `translateY(${-this.position * this.viewHeight / this.wrapperHeight}px)`;
            }
        },
        methods: {
            initStyle() {
                const {height} = this.$el.getBoundingClientRect(),
                    height1 = this.$refs.wrapper.getBoundingClientRect().height;
                this.barHeight(height1, height);
                this.test = height - height1;
                this.wrapperHeight = height1;
                this.viewHeight = height;
            },
            onWheel(e) {
                if (this.isScroll) return e.preventDefault();
                this.isScroll = setTimeout(() => this.isScroll = false, 100);

                const v = this.position - (e.deltaY * 10 > 100 ? 100 : e.deltaY * 10);
                if (v > 0) {
                    this.position = 0;
                    clearTimeout(this.isTop);
                    this.isTop = setTimeout(() => this.isTop = false, 600);
                } else if (v < this.test) {
                    this.position = this.test;
                    clearTimeout(this.isBottom);
                    this.isBottom = setTimeout(() => this.isBottom = false, 600);
                } else {
                    this.position = v;
                    e.preventDefault();
                }
            },
            onMouseenter() {
                this.barVisible = true;
                this.$nextTick(() => this.initStyle());
            },
            onMouseleave() {
                this.barVisible = false;
            },
            barHeight(wrapperHeight, viewHeight) {
                this.$refs.bar.style.height = viewHeight * viewHeight / wrapperHeight + "px";
            },
            onDragstart(e){
                console.log(e,'s');
                setTimeout(()=>e.target.style.opacity = 0)
                this.startDrap = {
                    x:e.screenX,y:e.screenY
                }
            },
            onDragend(e){
                console.log(e,'e');
                setTimeout(()=>e.target.style.opacity = 1,0)

                const {top,left} = e.target.style
                console.log(99,parseInt(top||0) ,'ttt',left);
                e.target.style.top = parseInt(top||0) + e.screenY - this.startDrap.y +'px'
                 e.target.style.left = parseInt(left||0) + e.screenX - this.startDrap.x +'px'
                console.log( e );

            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../common";

    $height: 4em;
    $min-height: -$height/2;

    .top-enter-active {
        animation: is-top 800ms linear;
    }

    .top-leave-active {
        animation: is-top 800ms linear reverse;
    }

    @keyframes is-top {
        0% {
            width: 800%;
            border-radius: 10%;
            top: -$height;
            left: 0;
        }
        50% {
            width: 500%;
            border-radius: 50%;
            bottom: -3em;
            left: -50%;
        }
        100% {
            width: 200%;
            border-radius: 80%;
            top: $min-height;
            left: -80%;
        }
    }

    @keyframes is-bottom {
        0% {
            width: 800%;
            border-radius: 10%;
            bottom: -$height;
            left: 0;
        }
        50% {
            width: 400%;
            border-radius: 40%;
            bottom: -3em;
            left: -50%;
        }
        100% {
            width: 200%;
            border-radius: 80%;
            bottom: $min-height;
            left: -90%;
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
        height: 100%;
        position: relative;

        &-wrapper {
            position: relative;
            transition: translate 100ms;
        }

        &-barBox {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            width: 9px;
            border-left: 1px solid $border-color;
            background: $light-border-color;
            opacity: .6;

            &:before {
                content: '';
                display: block;
                height: 3px;
            }
        }

        &-bar {
            position: absolute;
            width: 8px;
            height: 5em;cursor: pointer;
            &-child{
                margin-bottom: 5px; background: rgba(0, 0, 0, .5);
                border-radius: $border-radius;
                width: 100%;height: calc(100% - 5px);
            }
        }

        &-isTop {
            position: absolute;
            width: 200%;
            height: $height;
            top: $min-height;
            border-radius: 50%;
            background: rgba(0, 0, 0, .5);
            left: -80%;
        }

        &-isBottom {
            position: absolute;
            width: 200%;
            height: $height;
            bottom: $min-height;
            border-radius: 50%;
            background: rgba(0, 0, 0, .5);
            left: -90%;
        }
    }
</style>