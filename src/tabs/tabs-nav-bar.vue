<template>
    <div class="yv-tabs-bar"
         @click="onClick"
         :class="activeStatus"
         :disabled="disabled"
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
                active: false,
                initState: true
            };
        },
        computed: {
            activeStatus() {
                return {
                    active: this.active,
                    disabled: this.disabled
                };
            }
        },
        props: {
            name: String,
            disabled: Boolean,
        },
        created() {
            // console.log(this.eventBus,222);
            this.eventBus.$on("update:selected", (val) => {
                const res = val === this.name;
                // console.log(val,res,this.initState);
                this.initUnderLine(res);
                this.active = res;
            });
        },
        methods: {
            onClick() {
                if (!this.active && !this.disabled) {
                    this.eventBus.$emit("update:selected", this.name, this.$el);
                    this.$emit("click", this);
                }
            },
            initUnderLine(res) {
                if (this.initState && res) {
                    this.initState = false;
                    // console.log(val,12);
                    this.eventBus.$emit("update:selected", this.name, this.$el, "init");
                }
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
        display: flex;
        padding: $middle-padding;

        &.active {
            color: $blue;
        }

        &.disabled {
            cursor: not-allowed;
            color: $border-color;
        }
    }
</style>