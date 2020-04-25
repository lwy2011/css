<template>
    <div class="yv-scroll" @wheel.prevent="onWheel">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "v-scroll",
        props:{

        },
        data(){
            return {
                position:0,lock:false
            }
        },
        mounted() {
            if (!this.wrapper) throw new Error('scroll组件必须要包裹一个child！')
            const {style}  =  this.wrapper.elm
            style.position = 'relative'
            style.transition = 'transform .6s'
        },
        computed:{
            wrapper(){
                return this.$slots.default[0]
            },

        },
        watch:{
            position:function x() {
                this.wrapper.elm.style.transform = `translateY(${this.position}px)`
                console.log(this.position,999);
            }
        },
        methods:{
            onWheel(e){
                if (this.lock) return;
                setTimeout(()=> this.lock = false)
                this.lock = true
                this.position -= e.deltaY*2
            }
        }
    };
</script>

<style scoped>
.yv-scroll{
    overflow: hidden;
    width: 100%;height: 100%;
    position: relative;
}
</style>