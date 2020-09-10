<template>
    <div style="margin:1em;">
        <h4>v-if</h4>
        <p>
            值会布尔化，然后决定是否挂载或销毁Vue元素。
        </p>
        <p>
            可以放在template标签上，这里对v-if和v-for同时用这个问题有方案的。
        </p>
        <p>
            家族：
            v-if 起始,v-else-if 中间 ,v-else 终结。
        </p>
        <h4>key</h4>
        <p>
            因为diff算法的同级比较不跨级比的原则，优化同级的算力，全靠key。
            原则 ：同级的元素，同标签的都应该加上key!
        </p>
        <h4>v-show</h4>
        <p>
            css的display的设置，操作元素的显示隐藏！区别于v-if的挂载卸载！
            注意：v-show不支持template标签！！
        </p>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>


    export default {
        components: {
        },
        data() {
            return {
                content: `
                `,
            };
        },
        computed: {

        }
    };
</script>

<style>

</style>
