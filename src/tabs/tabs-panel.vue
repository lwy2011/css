<template>
    <div class="yv-tabs-panel" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs-panel-v",
        inject: ["eventBus"],
        data() {
            return {
                active: {
                    type: Boolean,
                    default: false
                }
            };
        },
        props: {
            name: {
                type: String, required: true
            }
        },
        created() {
            this.eventBus.$on("update:selected", (val) => {
                // console.log(val)
                this.active = this.name === val;
            });
        }
    };
</script>

<style lang="scss" scoped>
    .yv-tabs-panel {

    }
</style>