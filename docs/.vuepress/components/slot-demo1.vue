<template>
    <div style="margin:1em;">
        <slot>
            默认值！外部组件标签不包裹内容的时候显示！
        </slot>
    </div>
</template>

<script>

    export default {
        components: {},
        data() {
            return {
                title:'vue study!'
            };
        },
        mounted() {
            console.log(this.$slots);
            const node = this.$slots.default && this.$slots.default[0]
            if(node){
                node.elm.style.color = "red"
                const timer = setInterval(
                    ()=> node.data.on.click(),1000
                )
                setTimeout(
                    ()=>clearInterval(timer),10000
                )
            }
        },
        methods: {

        }
    };
</script>

<style>

</style>

