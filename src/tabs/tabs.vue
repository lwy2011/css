<template>
    <div class="yv-tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from "vue";

    export default {
        name: "tabs-v",
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                validator(val) {
                    return "X" === val || "Y" === val;
                },
                default: "X"
            }
        },
        data() {
            return {
                eventBus: new Vue()
            };
        },
        provide() {
            return {eventBus: this.eventBus};
        },
        mounted() {
            const errMsg = "Tabs组件的子组件必须要有，必须是tabs-head和tabs-body";
            if (this.$children.length === 0) {
                throw new Error(errMsg);
            }
            let body, head;
            this.$children.map(
                child => {
                    // console.log(child);
                    const name = child.$options.name;
                    if (["tabs-body-v", "tabs-head-v"].indexOf(name) < 0) {
                        throw new Error(errMsg);
                    }
                    name === "tabs-body-v" && (body = true);
                    name === "tabs-head-v" && (head = true);
                }
            );
            if (!(head && body)) {
                throw new Error(errMsg);
            }
            // console.log(this.eventBus, 3);
            this.eventBus.$emit("update:selected", this.selected);
        }
    };
</script>

<style lang="scss" scoped>
    .yv-tabs {

    }
</style>