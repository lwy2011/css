<template>
    <div>
        <div style="margin:3em;border:1px solid;">
            <y-slides :selected.sync="selected" :autoplay="true">
                <y-slides-item
                        v-for="(src,index) in source"
                        :index="index">
                    <img :src="src" alt="img">
                </y-slides-item>
            </y-slides>
        </div>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import Slides from "../../../src/slides/slides.vue";
    import SlidesItem from "../../../src/slides/slides-item.vue";


    export default {
        components: {
            "y-slides": Slides,
            "y-slides-item": SlidesItem
        },
        data() {
            return {
                content: `
                <y-icon icon="setting"></y-icon>
                `,
                source: [
                    `
                    http://t8.baidu.com/it/u=1484500186,1503043093&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1583918585&t=ebdaf31fba2df73cef8c1fb8b207fe45
                    `,
                    `
                    http://t8.baidu.com/it/u=2247852322,986532796&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1583918585&t=ea8eab244fb9501fe905d3b2ad8f049e
                    `,
                    `
                    http://t7.baidu.com/it/u=3204887199,3790688592&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1583918585&t=54653f0f6e5e7b0864e5334bfa05fdbf
                    `
                ],
                selected: 1
            };
        },
        mounted() {

        }
    };
</script>
<style lang="scss" scoped>

</style>
