<template>
    <div style="margin:1em;">
        <h4>class</h4>
        <p>
            vue跟react不一样，比较人性化，省事。比如class，vue中对标签的class属性，深加工，
            组件外部设置的class，可以自动跟组件内的父容器的class合并。而且，vue的class支持数组，
            和对象的形式做值，很简洁丝滑。
            更不要提组件里的style标签的scoped作用了，class结合容器的自定义属性，
            避免了css的class命名冲突这一难题。
        </p>
        <p :class="{red,blue,big,small}">test class by object-test</p>
        <p>
            对象作为值的模式，对象的key会成为className，同时key也是data的属性。
            value的布尔值作为判断是否添加key的依据。
        </p>
        <p :class="arrayStyle">
            test class by array-test
        </p>
        <p>
            用数组做值的模式，数组中的值可以是字符串，也就是className的值，可以是undefined。
            undefined的情况，vue自动过滤掉了！再次赞美vue，react是直接把undefined字符串作为className了。
            vue自动合并这些class，react就不，全要自己实现。
        </p>
        <p>
            经验之谈，多用computed实现数组或者对象形式的值，美观，而且逻辑清晰！
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
    HTML：
    <div style="margin:1em;">
        <h4>class</h4>
        <p>
            vue跟react不一样，比较人性化，省事。比如class，vue中对标签的class属性，深加工，
            组件外部设置的class，可以自动跟组件内的父容器的class合并。而且，vue的class支持数组，
            和对象的形式做值，很简洁丝滑。
            更不要提组件里的style标签的scoped作用了，class结合容器的自定义属性，
            避免了css的class命名冲突这一难题。
        </p>
        <p :class="{red,blue,big,small}">test class by object-test</p>
        <p>
            对象作为值的模式，对象的key会成为className，同时key也是data的属性。
            value的布尔值作为判断是否添加key的依据。
        </p>
        <p :class="arrayStyle">
            test class by array-test
        </p>
        <p>
            用数组做值的模式，数组中的值可以是字符串，也就是className的值，可以是undefined。
            undefined的情况，vue自动过滤掉了！再次赞美vue，react是直接把undefined字符串作为className了。
            vue自动合并这些class，react就不，全要自己实现。
        </p>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
    JS：
     data() {
            return {

                red: true, blue: false, big: true, small: false,
            };
        },
    computed: {
        arrayStyle() {
            return [
                this.red && "red",
                this.big && "big",
                this.blue && "blue",
                this.small && "small"
            ];
        }
    }
               `,

                red: true, blue: false, big: true, small: false,
            };
        },
        computed: {
            arrayStyle() {
                return [
                    this.red && "red",
                    this.big && "big",
                    this.blue && "blue",
                    this.small && "small"
                ];
            }
        }
    };
</script>

<style>
    .red {
        color: red;
    }

    .blue {
        color: black;
    }

    .big {
        font-size: 25px;
    }

    .small {
        font-size: 12px;
    }
</style>
