<template>
    <div style="margin:1em;">
        <h4>event</h4>
        <p>
            vue事件是原生事件，并且绑定在了符合逻辑的标签上，区别于react的绑定在了#document上了！
            vue事件的好处，方便，不用原生那么麻烦，同时卸载就销毁。代码直观。
        </p>
        <div>
            <p>
                {{n}}
            </p>
            <button @click="add1">
                +1
            </button>
            <button @click="X(2,$event)">
                *2
            </button>
        </div>
        <p>
            值可以是表达式，可以是函数名，可以是函数传参！$event代表了事件参数，
            最末的参数。
        </p>
        <h4>修饰词</h4>
        <p>
            很实用！不多解释，多看看就行！
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
                n:1,
                content:`

                `,
            };
        },
       methods:{
            add1(e){
                console.log(e);
                alert(`e.constructor=${e.__proto__.constructor};
                e.target=${e.target};e.currentTarget=${e.currentTarget}`)
                this.n +=1
            },
            X(num,e){
                console.log(e);
                this.n *= num
            }
       }
    };
</script>

<style>

</style>

