<template>
    <div style="margin:1em;">
        <h4>插值放入的数据类型</h4>
        <p>number: {{4}}</p>
        <p>string: {{'ddf'}}</p>
        <p>'null:' {{null}}</p>
        <p>'undefined:' {{undefined}}</p>
        <p>array: {{[4,5]}}</p>
        <p>object: 不能放到插值里，会报错！</p>
        <p>表达式: {{x+y > 1? z: 4 }}</p>
        <p>函数：报错！{{function (){x = -3}()}}</p>
        <p>
            立即执行的函数表达式：操作了x = -3,使得上面的显示不是r,而是4！
            貌似也没啥用，不正统，还容易bug的感觉！
            {{function (){x = -3}()}}
        </p>
        <h4>
            插值可以是简单数据类型，或者数组，或者data里的变量，复杂的就是它们组合成的表达式了！正规常用的大概如此了！
        </h4>
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
                <p>number: {{4}}</p>
                <p>string: {{'ddf'}}</p>
                <p>'null:' {{null}}</p>
                <p>'undefined:' {{undefined}}</p>
                <p>array: {{[4,5]}}</p>
                <p>object: 不能放到插值里，会报错！</p>
                <p>表达式: {{x+y > 1? z: 4 }}</p>
                <p>函数：报错！{{function (){x = -3}()}}</p>
                <p>
                    立即执行的函数表达式：操作了x = -3,使得上面的显示不是r,而是4！
                    貌似也没啥用，不正统，还容易bug的感觉！
                    {{function (){x = -3}()}}
                </p>

                数据：
                data(){
                    return {
                        x:2,
                        y:3,
                        z:'r'
                    }
                }
                `,
                x:2,
                y:3,
                z:'r'
            };
        }
    };
</script>

