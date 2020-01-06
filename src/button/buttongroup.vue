<template>
    <div class="yv-btngroup">
        <slot>

        </slot>
    </div>
</template>


<script >
    export default {

    }
</script>

<style lang="scss">
    $radius :var(--button-radius);
    .yv-btngroup{
        display: inline-flex;
        vertical-align: middle;
        >.yv-button{
            border-radius: 0;
            &:first-child{
                border-bottom-left-radius:$radius;
                border-top-left-radius:$radius;
            }
            &:last-child{
                border-bottom-right-radius: $radius;
                border-top-right-radius: $radius;
            }
            &:not(first-child){
                margin-left:-1px;
            }
            &:hover{
                z-index: 10;
            }
        }
    }

</style>