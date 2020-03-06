<template>
    <div>
        <div class="box" >
            <y-slides :selected.sync="selected" :autoplay="true">
                <y-slides-item
                        v-for="(src,index) in source"
                        :index="index">
                    <img :src="src" alt="img" style="width:100%;height:100%;">
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
                   https://th.bing.com/th/id/OIP.AmHPnrxrSCgG1N_Xl0lRnAHaHa?w=178&h=178&c=7&o=5&dpr=2&pid=1.7
                    `,

                    `
                   https://th.bing.com/th/id/OIP.znkzbGVKl3UYqpTqc9Qe0QHaHa?w=178&h=178&c=7&o=5&dpr=2&pid=1.7
                    `,
                    `
                   https://th.bing.com/th/id/OIP.VauuRrjXonQ9zAeBTQEmkwHaHa?w=178&h=178&c=7&o=5&dpr=2&pid=1.7
                    `
                ],
                selected: 1
            };
        }
    };
</script>

<style lang="scss" scoped>
    .box{
        margin:3em auto;box-sizing: border-box;
    }
</style>