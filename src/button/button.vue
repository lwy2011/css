<template>
    <button class="yv-button"
            :loading="loading"
            :class="iconposition?'icon-'+iconposition:''"
            @click="!loading && $emit('click')"
    >
        <Icon v-if="icon"
               :icon="loading?'loading':icon"
               :loading="loading"
        ></Icon>
        <span class="content" v-if="!icononly" >
            <slot></slot>
        </span>
    </button>
</template>

<script>

    import Icon from "../svg/svg";

    export default {
        name:'button-v',
        props:{
            icon:String,
            iconposition:{
                type:String,
                validator(val){
                    return Boolean(val === 'left' || val === 'right')
                }
            },
            loading:{
                type:Boolean,
                default:false
            },
            icononly:Boolean
        },
        components:{
            Icon
        }
    };

</script>

<style lang="scss" scoped>
    @import "../common";
    .yv-button {
        font-size: $font-size;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        padding: $small-padding .5em;



        &:hover {
            background-color: $border-color;
        }

        &:focus {
            outline: none;
        }
        &:active {
            background-color: white;
        }
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        transition: all .1s linear;
        >.yv-icon{
            order:1;
        }
        >.content{
            order:2;
        }
        .yv-icon + .content{
            margin-left: $small-padding;
        }
        &.icon-right{
            >.yv-icon{
                order:2;margin-left: $small-padding;
            }
            >.content{
                order:1;margin-left: 0;
            }
        }
        &[loading]{
            cursor: not-allowed;color:$warn-color;
        }

    }
</style>