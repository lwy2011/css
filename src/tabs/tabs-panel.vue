<template>
    <div class="yv-tabs-panel">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'tabs-panel-v',
        inject:['eventBus'],
        props:{

        },
        created() {
            this.eventBus.$on('update:selected',(val)=>{
                console.log(val)
            })
        }
    }
</script>

<style lang="scss" scoped>
    .yv-tabs-panel{

    }
</style>