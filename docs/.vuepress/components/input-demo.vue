<template>
    <div style="margin:1em;">
        <h4>input输入框</h4>
        <ul>
            <li>
                <y-input value="哈哈！"></y-input>
            </li>
            <li>
                <y-input value="哈哈！" disabled></y-input>
            </li>
            <li>
                <y-input value="哈哈！" readonly></y-input>
            </li>
            <li>
                <y-input value="哈哈！" error="名字长度至少8个字符！"></y-input>
            </li>
            <li>
                <y-input :placeholder="placeholder"
                         v-model="inputValue"
                         @change="inputChange"
                         @blur="inputBlur"
                         @focus="inputFocus"
                ></y-input>
                <p>{{inputValue}}</p>
            </li>
        </ul>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import Input from '../../../src/input/input.vue'
    export default {
        components: {
            "y-input": Input,
        },
        data() {
            return {
                content: `
                <y-icon icon="setting"></y-icon>
                <y-icon icon="loading" loading="true"></y-icon>
                <y-icon icon="warn"></y-icon>
                <y-icon icon="left"></y-icon>
                `,
                inputValue: "",
                placeholder: "请输入姓名",
            };
        },
        methods:{
            inputChange(e) {
                const {value} = e.target;
                console.log(value, 1);
            },
            input(e) {
                const {value} = e.target;
                console.log(value, 2);
                this.inputValue = value;
            },
            inputFocus(e) {
                const {value} = e.target;
                console.log(value, 3);
            },
            inputBlur(e) {
                const {value} = e.target;
                console.log(value, 4);
            },
        }
    };
</script>

