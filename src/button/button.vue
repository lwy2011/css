<template>
    <button class="yv-button"
            :class="`${iconposition?'icon-'+iconposition:''}`"
            @click="$emit('click')"
    >
        <Icon v-if="icon"
               :icon="loading?'loading':icon"
               :loading="loading"
        ></Icon>
        <span class="content" v-if="!icononly">
            <slot></slot>
        </span>
    </button>
</template>

<script>

    import Icon from "../svg/svg";

    export default {
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

<style lang="scss">
    .yv-button {
        $padding:4px;
        font-size: var(--font-size);
        border: 1px solid var(--border-color);
        border-radius: var(--button-radius);
        padding: $padding .5em;



        &:hover {
            background-color: var(--border-color);
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
            margin-left: $padding;
        }
        &.icon-right{
            >.yv-icon{
                order:2;margin-left: $padding;
            }
            >.content{
                order:1;margin-left: 0;
            }
        }

    }
</style>