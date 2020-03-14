<template>
    <div style="margin:1em;">
        <h4>validator测试:测试运行时机为input的onblur事件发生的回调函数</h4>
        <ul>
            <li>
                <p>name:</p>
                <y-input v-model="name"
                         @blur="test(name,'name')"
                         :error="nameError"></y-input>
                <p>{{name}}</p>
            </li>
            <li>
                <p>password:</p>
                <y-input v-model="password"
                         @blur="test(password,'password')"
                         :error="passwordError"></y-input>
                <p>{{password}}</p>
            </li>
            <li>
                <p>password1:</p>
                <y-input v-model="password1"
                         @blur="test"
                         :error="password1Error"></y-input>
                <p>{{password1}}</p>
            </li>
            <li>
                <p>email:</p>
                <y-input v-model="email"
                         @blur="test"
                         :error="emailError"></y-input>
                <p>{{email}}</p>
            </li>
            <li>
                <p>phone:</p>
                <y-input v-model="phone"
                         @blur="test"
                         :error="phoneError"></y-input>
                <p>{{phone}}</p>
            </li>
            <li>
                <p>sex:</p>
                <y-input v-model="sex"
                         @blur="test"
                         :error="sexError"></y-input>
                <p>{{sex}}</p>
            </li>
            <li>
                <p>age:</p>
                <y-input v-model="age"
                         @blur="test"
                         :error="ageError"></y-input>
                <p>{{age}}</p>
            </li>
            <button @click="onsubmit">提交时全部检验！</button>
        </ul>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>
    import Input from "../../../src/input/input.vue";
    import Validator from "../../../src/validator/validator";


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
                keys: [
                    "name",
                    "password",
                    "password1",
                    "email",
                    "phone",
                    "sex",
                    "age",
                ],
                placeholder0: "请输入姓名",
                placeholder1: "请输入密码",
                placeholder2: "再次输入密码",
                placeholder3: "请输入邮箱",
                placeholder4: "请输入手机号",
                placeholder5: "请输入性别",
                placeholder6: "请输入年龄",
                name: "",
                password: "",
                password1: "",
                email: "",
                phone: "",
                sex: "",
                age: "",
                nameError: "",
                passwordError: "",
                password1Error: "",
                emailError: "",
                phoneError: "",
                sexError: "",
                ageError: "",
                rules: {
                    name: [
                        {
                            type: "exist",
                            expect: true,
                            error: "name不能为空！",
                            keepGoOn: false,
                        },
                        {
                            type: "type",
                            expect: "string",
                            error: "name类型必须是string类型！",
                            keepGoOn: false,
                        },
                        {
                            type: "nonEmpty",
                            expect: true,
                            error: "name必须要有非空的字符！",
                            keepGoOn: false
                        },
                        {
                            type: "minLength",
                            expect: 4,
                            error: "name最小长度为4个字符！",
                            keepGoOn: true,
                        },
                        {
                            type: "maxLength",
                            expect: 10,
                            error: "name最大长度为10个字符！",
                            keepGoOn: true,
                        },
                        {
                            type: "upperCaseNeed",
                            expect: true,
                            error: "name的姓或名的首字母必须大写！"
                        }
                    ],
                    password: [
                        {
                            type: "exist",
                            expect: true,
                            error: "password不能为空！",
                            keepGoOn: false,
                        },
                        {
                            type: "nonEmpty",
                            expect: false,
                            error: "输入值必须要有非空字符！",
                            keepGoOn: false
                        },
                        {
                            type: "minLength",
                            expect: 6,
                            error: "name最小长度为6个字符！",
                            keepGoOn: true,
                        },
                        {
                            type: "maxLength",
                            expect: 12,
                            error: "name最大长度为12个字符！",
                            keepGoOn: true,
                        },
                        {
                            type: "upperCaseNeed",
                            expect: true,
                            error: "必须要有大写字母！",
                            keepGoOn: true,
                        },
                        {
                            type: "lowerCase",
                            expect: true,
                            error: "必须要有小写字母！",
                            keepGoOn: true,
                        },
                        {
                            type: "number",
                            expect: true,
                            error: "必须要有数字！",
                        },
                    ]
                }
            };
        },
        methods: {
            async test(val, type) {
                const obj = {};

                class NameValidator extends Validator {
                    validateUpperCaseNeed(val) {
                        return !val.match(/\b[a-z]/g);
                    }
                }

                obj.name = new NameValidator(val, this.rules[type], type);

                class PasswordValidator extends NameValidator {
                    validateUpperCaseNeed(data) {
                        return data.match(/[A-Z]/);
                    }

                    validateLowerCase(data) {
                        return data.match(/[a-z]/);
                    }

                    validateNumber(data) {
                        return data.match(/\d/);
                    }
                }

                obj.password = new PasswordValidator(val, this.rules[type], type);
                console.log(11);
                const res = await obj[type].validate();
                const errors = Object.keys(res.errors).reduce(
                    (a, b) => a + (a ? "。" : "") + b + "-test:" + res.errors[b], ""
                );
                this[type + "Error"] = errors;
                console.log(res, Object.getPrototypeOf(res));
            },
            onsubmit() {

            }
        }
    };
</script>

