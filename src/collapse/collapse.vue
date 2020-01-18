<template>
    <div class="yv-collapse">
        <slot></slot>
    </div>
</template>


<script>
    import Vue from "vue";

    export default {
        name: "collapse-v",
        data() {
            return {
                eventBus: new Vue()
            };
        },
        provide() {
            return {
                eventBus: this.eventBus
            };
        },
        props: {
            single: {
                type: Boolean,
                default: true
            },
            selected: Array
        },
        watch:{
            selected:function () {
                this.eventBus.$emit("update:selected", this.selected);
            }
        },
        mounted() {
            // console.log(this.selected);
            this.eventBus.$emit("update:selected", this.selected);
            this.eventBus.$on("update:removeselected", (name) => {
                    this.remove(name);
                    // console.log("remove");
            });
            this.eventBus.$on("update:addselected", (name) => {
                this.add(name);
                // console.log("add");
            });
        },
        methods: {
            add(name) {
                this.single ?
                    this.$emit("update:selected", [name]) :
                    this.$emit("update:selected", [name].concat(this.selected));
            },
            remove(name) {
                const copy = [].concat(this.selected);
                copy.splice(copy.indexOf(name), 1);
                this.$emit("update:selected", copy);
            }
        }
    };
</script>


<style lang="scss" scoped>
    @import "../common";

    .yv-collapse {
        border: 1px solid $border-color;
        border-radius: $border-radius;
    }
</style>