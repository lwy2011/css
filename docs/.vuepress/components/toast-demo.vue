<template>
    <div style="margin:1em;">
        <div class="toasts">
            <y-button @click="toastClick">toast</y-button>
            <y-button @click="toastClick('center',0)">center toast</y-button>
            <y-button @click="toastClick('top')">top toast</y-button>
            <y-button @click="toastClick('bottom')">bottom toast</y-button>
            <y-button @click="toastClick('center',0)">closeBtn toast
            </y-button>
        </div>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import YButton from '../../../src/button/button'
    import YToast from '../../../src/toast/toast'
    import Vue from "vue";
    import toastPlugin from "../../../src/toast/plugin";
    //做成全局的实例的插件方法，用户自己主动设置的！
    Vue.use(toastPlugin);
    export default {
        components: {
            YButton,YToast
        },
        data() {
            return {
                content: `
                <y-icon icon="setting"></y-icon>
                <y-icon icon="loading" loading="true"></y-icon>

                `,
                toastMsg: "出现啦啦啦！出现啦啦啦！出现啦啦啦！出现啦啦啦！出现啦啦啦！出现啦啦啦！出现啦啦啦！出现啦啦啦！出现啦啦啦！出现啦啦啦！",
            };
        },
        methods:{
            toastClick(
                position, autoClose, msg
            ) {
                // const html = `
                //         <div class = 'msg'>
                //             ${this.toastMsg}
                //             </div>
                //     `;
                // console.log(position, html, msg);
                const closeBtn = "我知道了";
                const closeCallback = () => {
                    this.toastMsg += 1;
                };
                this.$y_toast(
                    {
                        html: "",
                        position, autoClose,
                        closeBtn, closeCallback
                    },
                    this.toastMsg
                );
            },
        }
    };
</script>

