<template>
    <div class="yv-collapse-item">
        <div class="title" @click="select">
            <slot></slot>
        </div>
        <div v-if="active" class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>


<script>
    export default {
        name: "collapse-item-v",
        inject: ["eventBus"],
        props: {
            name: {
                type: String, required: true
            },
        },
        data() {
            return {
                active: false,
                single: true
            };
        },
        mounted() {
            this.eventBus.$on("update:selected", (vm, single) => {
                vm ?
                    (
                        vm === this ?
                            this.active = true :
                            this.active = false
                    ) :
                    this.single = single;
            });
        },
        methods: {
            select() {
                this.single ?
                    this.eventBus.$emit("update:selected", this) :
                    this.active = !this.active;
            }
        }
    };
</script>


<style lang="scss" scoped>
    @import "../common";

    .yv-collapse-item {
        border: 1px solid $border-color;
        margin: -1px;

        &:first-child {
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
        }

        &:last-child {
            border-bottom-left-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
        }

        > .title {
            padding: $small-padding $middle-padding;
        }

        > .content {
            border-top: 1px solid $border-color;
        }
    }
</style>