<template>
    <div class="yv-cascader-items">
        <ul class="current" :style="height">
            <li v-for="item in data" @click="selected=item">
                {{item.name+item.postfix}}
            </li>
        </ul>
        <div class="next" v-if="next">
            <cascader-items-v
                    :height="height"
                    :data="next"
            ></cascader-items-v>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cascader-items-v",
        props: {
            data: Array,
            height:String
        },
        data() {
            return {
                selected: null
            };
        },
        computed: {
            next() {
                return this.selected && this.selected.children ?
                    this.selected.children : null;
            }
        }
    };
</script>


<style lang="scss" scoped>
    @import "../common";

    .yv-cascader-items {
        position: relative;
        >.current{
            height: 15em;
            overflow-y: scroll;
            >li{
                list-style: none;
                padding: $small-padding;
                border-bottom:1px solid $border-color;
                &:last-child{
                    border-bottom: none;
                }
            }
        }
        >.next{
            position:absolute;left:100%;
            width:100%;top:-1px;
            border: 1px solid $border-color;
        }
    }
</style>