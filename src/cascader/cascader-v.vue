<template>
    <div class="yv-cascader" ref="cascader" v-outside-click="close">
        <div class="trigger"  @click="trigger">
            <slot></slot>
            {{result || "&nbsp;"}}
        </div>
        <div class="items" v-if="visible">
            <cascaderItems
                    :ajax="ajax"
                    :selected="selected"
                    @update:selected="select"
                    :data="data" :size="size">
            </cascaderItems>
        </div>
    </div>
</template>

<script>
    import cascaderItems from "./cascader-item.vue";
    import outsideClick from './cascader.outside.click.js'
    export default {
        components: {
            cascaderItems
        },
        directives:{
            outsideClick
        },
        props: {
            selected: Array,
            data: Array,
            size: Object,
            ajax: Function
        },
        data() {
            return {
                visible: false
            };
        },
        methods: {
            select($event) {
                this.$emit("update:selected", $event);
            },
            // documentClick(e) {
            //     const {target} = e;
            //     const {cascader} = this.$refs;
            //      // console.log(target,cascader);
            //     if (target === cascader ||
            //         cascader.contains(target)) return;
            //     this.close();
            // },
            trigger() {
                this.visible =  !this.visible
            },
            close() {
                this.visible = false;
                // console.log("close");
            },
            // open() {
            //     this.visible = true;
            //     this.$nextTick(
            //         () => {
            //             // console.log("open");
            //             document.addEventListener(
            //                 "click", this.documentClick
            //             );
            //         }
            //     );
            // }
        },
        computed: {
            result() {
                return this.selected.reduce(
                    (a, b, ind) => a + (
                        b ? (ind === 0 ? "" : "-") + b.name : ""
                    ), ""
                );
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "../common";

    .yv-cascader {
        position: relative;
        display: inline-block;

        > .trigger {
            height: $input-height;
            font-size: $font-size;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            min-width: 9em;
            padding: 0 $small-padding;
            display: inline-flex;
            align-items: center;
            cursor: pointer;
        }

        > .items {
            position: absolute;
            @extend %box-shadow;
            left: 0;
            top: calc(100% + 4px);
        }
    }
</style>