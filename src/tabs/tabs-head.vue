<template>
    <div class="yv-tabs-head">
        <slot></slot>
        <div class="other-wrapper">
            <slot name="others"></slot>
        </div>
        <div class="line" ref="line"></div>
    </div>
</template>

<script>
    export default {
        name: "tabs-head-v",
        inject: ["eventBus"],
        created() {
            this.eventBus.$on("update:selected", (val, tab, init) => {
                // console.log(val,tab,init);
                if (!tab) return;
                const {line} = this.$refs;
                const {left, width,} = tab.getBoundingClientRect();
                const left1 = this.$el.getBoundingClientRect().left;
                line.style.width = width + "px";
                if (init) {
                    line.style.left = left - left1 + "px";
                } else {
                    const left2 = line.getBoundingClientRect().left;
                    line.style.transform = `translateX((${left - left2}px)`;
                    line.style.left = `${left - left1}px`;
                    // console.log(line, left - left2);
                    line.style.transition = "all 300ms linear";
                }
            });
        },

    };
</script>

<style lang="scss" scoped>
    @import '../common';

    .yv-tabs-head {
        display: flex;
        border-bottom: 1px solid $border-color;
        align-items: center;
        position: relative;

        > .other-wrapper {
            margin-left: auto; //经验之谈，可以让元素自动最右边
        }

        > .line {
            position: absolute;
            bottom: -1px;
            width: 4em;
            height: 2px;
            background: $blue;
        }
    }
</style>