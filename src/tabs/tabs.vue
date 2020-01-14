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
        created() {
            console.log(4, this);
            console.log(this.eventBus, 3);
        }
    };
</script>

<style lang="scss" scoped>
    .yv-tabs {

    }
</style>