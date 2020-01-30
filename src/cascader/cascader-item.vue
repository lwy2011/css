<template>
    <div class="yv-cascader-items">
        <ul class="current" :style="height">
            <li v-for="item in data" @click="selected=item">
                {{item.name+item.postfix}}
                <Icon v-if="item.children" icon="right">
                </Icon>
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
    import Icon from '../svg/svg.vue'
    export default {
        components:{Icon},
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
        background: #fff;

        >.current{
            height: 15em;
            padding: $small-padding 0;
            overflow-y: scroll;
            >li{
                list-style: none;
                padding: $small-padding;
                &:last-child{
                    border-bottom: none;
                }
                display: flex;
                justify-content: space-between;
                align-items: center;
                >.yv-icon{
                    transform: scale(.5);
                }
                &:hover{
                    background: $blue;
                }
                &.active{
                    background: lighten($blue,60%);
                }
            }
        }
        >.next{
            position:absolute;left:100%;
            border-left:1px solid lighten($border-color,70%);
            width:100%;top:0;
            @extend %box-shadow;
        }
    }
</style>