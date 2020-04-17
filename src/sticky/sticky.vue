<template>
    <div class="yv-sticky" ref="wrapper" :class="{topFixed}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "v-sticky",
        props: {
            top: {
                type: Number, default: 0
            },
            left: {
                type: Number, default: 0
            },
            right: {
                type: Number, default: 0
            },
            bottom: {
                type: Number, default: 0
            },
        },
        data() {
            return {
                topFixed: false, leftFixed: false,
                initTop: undefined, initLeft: undefined
            };
        },
        mounted() {
            const {wrapper} = this.$refs;
            const {top, left} = wrapper.getBoundingClientRect();
            this.initTop = top;
            this.initLeft = left;
            window.addEventListener(
                "scroll", this.fixed
            );
        },
        beforeDestroy() {
            window.removeEventListener(
                "scroll", this.fixed
            );
        },
        methods: {
            fixed() {
                if (this.lock) return;
                this.lock = true;
                this.computY()
                this.lock = false;
            },
            computY(){
                const {wrapper} = this.$refs;
                const {top, left} = wrapper.getBoundingClientRect();
                console.log();
                if (window.scrollY+this.top > window.scrollY + top ){
                    this.topFixed = true
                    wrapper.style.top = this.top + "px";
                }else{
                    this.topFixed = false
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    .yv-sticky {
        &.topFixed {
            position: fixed;
            z-index: 100;
        }
    }
</style>