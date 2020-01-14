<template>
    <div class="yv-tabs-bar"
         @click="xxx"
         :class="{active}"
    >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs-bar-v",
        inject: ["eventBus"],
        props: {
            name: String,
            active: Boolean,
            disabled: Boolean,
        },
        created() {
            // console.log(this.eventBus,222);
            this.eventBus.$on("update:selected", (val) => {
                console.log(val);
            });
        },
        methods: {
            xxx() {
                this.eventBus.$emit("update:selected", this.name);
            }
        }
    };
</script>

<style lang="scss" scoped>
    .yv-tabs-bar {
        &.active {
            color: red;
            cursor: pointer;
        }

        &[disabled] {
            cursor: not-allowed;
        }
    }
</style>