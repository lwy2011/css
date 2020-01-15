<template>
    <div class="yv-tabs-bar"
         @click="xxx"
         :class="activeStatus"
    >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs-bar-v",
        inject: ["eventBus"],
        data() {
            return {
                active: {
                    type: Boolean,
                    default: false
                }
            };
        },
        computed: {
            activeStatus() {
                return this.active&&'active';
            }
        },
        props: {
            name: String,
            disabled: Boolean,
        },
        created() {
            // console.log(this.eventBus,222);
            this.eventBus.$on("update:selected", (val) => {
                // console.log(val);
                this.active = val === this.name;
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
    @import "../common";
    .yv-tabs-bar {
        margin: 0 1em;
        flex-shrink: 0;
        cursor: pointer;
        &.active {
            color: $warn-color;
        }

        &[disabled] {
            cursor: not-allowed;
        }
    }
</style>