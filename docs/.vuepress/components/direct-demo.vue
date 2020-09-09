<template>
    <div style="margin:1em;">
        <h3>指令</h3>
        <p>什么是指令？指令 (Directives) 是带有 v- 前缀的特殊 attribute。还有简写模式:XXX。
            指令 attribute 的值预期是单个 JavaScript 表达式 (v-for 是例外情况，
            循环语句)。指令的职责是，当表达式的值改变时，
            将其产生的连带影响，响应式地作用于 DOM。
        </p>
        <h4>v-if 示例</h4>
        <button @click="visible=!visible">click to switch visible</button>
        <p v-if="visible">visible</p>
        <br/>
        <button @click="show=!show">click to switch show</button>
        <p v-show="show">show</p>
        <p>v-if 与 v-show的不同，在于是否卸载了Vue节点。</p>

        <h4>参数</h4>
        <p>
            一些指令能够接收一个“参数”，在指令名称之后以冒号表示。
            例如，v-bind 指令可以用于响应式地更新 HTML attribute，还有事件。
        </p>
        <a :href="'http://baidu.com'" :target="'_blank'">
            百度链接：用Vue操作a标签的href,target属性
        </a>

        <h4>动态参数</h4>
        <button @click="current = Math.random()>0.5?1:0">click to change</button>
        <p :[currentAttr[0]]="currentAttr[1]">动态参数{{currentAttr}}</p>
        <button @click="currentEvtIndex = Math.random()>0.5?1:0">
            click to change event
        </button>
        <button @[currentEvt[0]]="currentEvt[1]">
            test changed event:  {{currentEvt}}
        </button>
        <h4>修饰符</h4>
        <p>
            修饰符 (modifier) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。
            例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()。
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
                current:0,
                currentEvtIndex:0,
                visible:true,
                show:true,
                attributes:[
                    ['style',{color:'red'}],
                    ['class','test']
                ],
                content: `
                    HTML ：
                    <div style="margin:1em;">
                        <h3>指令</h3>
                        <p>什么是指令？指令 (Directives) 是带有 v- 前缀的特殊 attribute。还有简写模式:XXX。
                            指令 attribute 的值预期是单个 JavaScript 表达式 (v-for 是例外情况，
                            循环语句)。指令的职责是，当表达式的值改变时，
                            将其产生的连带影响，响应式地作用于 DOM。
                        </p>
                        <h4>v-if 示例</h4>
                        <button @click="visible=!visible">click to switch visible</button>
                        <p v-if="visible">visible</p>
                        <br/>
                        <button @click="show=!show">click to switch show</button>
                        <p v-show="show">show</p>
                        <p>v-if 与 v-show的不同，在于是否卸载了Vue节点。</p>

                        <h4>参数</h4>
                        <p>
                            一些指令能够接收一个“参数”，在指令名称之后以冒号表示。
                            例如，v-bind 指令可以用于响应式地更新 HTML attribute，还有事件。
                        </p>
                        <a :href="'http://baidu.com'" :target="'_blank'">
                            百度链接：用Vue操作a标签的href,target属性
                        </a>

                        <h4>动态参数</h4>
                        <button @click="current = Math.random()>0.5?1:0">click to change</button>
                        <p :[currentAttr[0]]="currentAttr[1]">动态参数{{currentAttr}}</p>
                        <button @click="currentEvtIndex = Math.random()>0.5?1:0">
                            click to change event
                        </button>
                        <button @[currentEvt[0]]="currentEvt[1]">
                            test changed event:  {{currentEvt}}
                        </button>
                        <h4>修饰符</h4>
                        <p>
                            修饰符 (modifier) 是以半角句号 . 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。
                            例如，.prevent 修饰符告诉 v-on 指令对于触发的事件调用 event.preventDefault()。
                        </p>
                        <pre>
                            <code>{{content}}</code>
                        </pre>
                    </div>
                    data:
                        data() {
                            return {
                                current:0,
                                currentEvtIndex:0,
                                visible:true,
                                show:true,
                                attributes:[
                                    ['style',{color:'red'}],
                                    ['class','test']
                                ]
                            };
                        },
                        computed:{
                            currentAttr(){
                                return this.attributes[this.current]
                            },
                            currentEvt(){
                                return [
                                    ['click',()=>{alert('click!!')}],
                                    ['mouseenter',()=>{alert('mouseenter!!')}]
                                ][this.currentEvtIndex]
                            }
                        }

                        css:
                          .test{
                            color:blue;
                        }
                `,
            };
        },
        computed:{
            currentAttr(){
                return this.attributes[this.current]
            },
            currentEvt(){
                return [
                    ['click',()=>{alert('click!!')}],
                    ['mouseenter',()=>{alert('mouseenter!!')}]
                ][this.currentEvtIndex]
            }
        }
    };
</script>

<style>
    .test{
        color:blue;
    }
</style>

