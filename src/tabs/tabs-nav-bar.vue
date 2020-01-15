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
        data(){
            return{
                active:{
                    type:Boolean,
                    default:false
                }
            }
        },
        props: {
            name: String,
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
        margin:0 1em;
        flex-shrink: 0;
        &.active {
            color: red;
            cursor: pointer;
        }

        &[disabled] {
            cursor: not-allowed;
        }
    }
</style>