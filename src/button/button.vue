<template>
    <button class="yv-button" :class="`${iconposition?'icon-'+iconposition:''}`">
        <y-svg v-if="icon" :icon="icon"></y-svg>
        <span class="content">
            <slot></slot>
        </span>
    </button>
</template>

<script>
    export default {
        props:{
            icon:String,
            iconposition:String
        }
    };

</script>

<style lang="scss">
    .yv-button {
        font-size: var(--font-size);
        border: 1px solid var(--border-color);
        border-radius: var(--button-radius);
        padding: 4px 1em;



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
        transition: all .5s linear;
        >.yr-icon{
            order:1;
        }
        >.content{
            order:2;
        }
        &.icon-right{
            >.yv-icon{
                order:2;
            }
            >.content{
                order:1;
            }
        }

    }
</style>