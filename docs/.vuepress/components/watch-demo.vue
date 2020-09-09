<template>
    <div style="margin:1em;">
        <h3>计算属性</h3>
        <p>
            对于任何复杂逻辑，你都应当使用计算属性。官方说的，，，
            同时，代码清晰易读，逻辑明确！
        </p>
        <p>
            核心：
            依赖data的变量，进而可以使用缓存，减少不必要的计算！
        </p>
        <h4>与传统方法做对比</h4>
        <p>
            每当触发重新渲染时，调用传统方法将总会再次执行函数。
        </p>
        <button @click="test=!test">click to test = {{test}}</button>
        <p>
            {{reverseStr()}}
        </p>
        <p>
            {{reverseStr1}}
        </p>

        <h4>
            与监听属性进行比较
        </h4>
        <p>
                官网的例子，说了一点，就是他两个可以相互转换。
            但是，computed的应用场景，倾向于对已有的属性的逻辑操作得出来的延伸属性。用watch
            会逻辑不清晰，多个属性之间的逻辑耦合度高，麻烦。
            而我在做这个项目时，对watch的妙用，多用于解耦各个行为之间的逻辑变量，
            尤其是一个属性在一次行为逻辑中，关联了多个属性的时候。
            watch更适合做逻辑管控，一次行为，一条流水线关联了多个属性的时候，watch可以很清晰地
            表示出这条逻辑如何跑通的。
        </p>
        <h4>
            计算属性的setter,getter
        </h4>
        <p>
            这时候，计算属性就不是一个函数了，就是一个对象！
            <span style="white-space: pre;background:#6BBCF0;
            display: inline-block;width:100%;">
                {{
                `
                computed: {
                  fullName: {
                    // getter
                    get: function () {
                      return this.firstName + ' ' + this.lastName
                    },
                    // setter
                    set: function (newValue) {
                      var names = newValue.split(' ')
                      this.firstName = names[0]
                      this.lastName = names[names.length - 1]
                    }
                  }
                }
                `
                }}
            </span>
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
        methods: {
            reverseStr() {
                setTimeout(() => {
                    alert("methods 执行了");
                });
                return this.str.split("").reverse().join("");
            }
        },
        data() {
            return {
                str: "methods-test",
                str1: "computed-test",
                test: false,
                content: `
                html:
                    <div style="margin:1em;">
                        <h3>计算属性</h3>
                        <p>
                            对于任何复杂逻辑，你都应当使用计算属性。官方说的，，，
                            同时，代码清晰易读，逻辑明确！
                        </p>
                        <p>
                            核心：
                            依赖data的变量，进而可以使用缓存，减少不必要的计算！
                        </p>
                        <h4>与传统方法做对比</h4>
                        <p>
                            每当触发重新渲染时，调用传统方法将总会再次执行函数。
                        </p>
                        <button @click="test=!test">click to test = {{test}}</button>
                        <p>
                            {{reverseStr()}}
                        </p>
                        <p>
                            {{reverseStr1}}
                        </p>

                        <h4>
                            与监听属性进行比较
                        </h4>
                        <p>
                                官网的例子，说了一点，就是他两个可以相互转换。
                            但是，computed的应用场景，倾向于对已有的属性的逻辑操作得出来的延伸属性。用watch
                            会逻辑不清晰，多个属性之间的逻辑耦合度高，麻烦。
                            而我在做这个项目时，对watch的妙用，多用于解耦各个行为之间的逻辑变量，
                            尤其是一个属性在一次行为逻辑中，关联了多个属性的时候。
                            watch更适合做逻辑管控，一次行为，一条流水线关联了多个属性的时候，watch可以很清晰地
                            表示出这条逻辑如何跑通的。
                        </p>
                        <h4>
                            计算属性的setter,getter
                        </h4>
                        <p>
                            这时候，计算属性就不是一个函数了，就是一个对象！
                            <span style="white-space: pre;background:#6BBCF0;
                            display: inline-block;width:100%;">
                                {{
                                \`
                                computed: {
                                  fullName: {
                                    // getter
                                    get: function () {
                                      return this.firstName + ' ' + this.lastName
                                    },
                                    // setter
                                    set: function (newValue) {
                                      var names = newValue.split(' ')
                                      this.firstName = names[0]
                                      this.lastName = names[names.length - 1]
                                    }
                                  }
                                }
                                \`
                                }}
                            </span>
                        </p>
                        <pre>
                            <code>{{content}}</code>
                        </pre>
                    </div>
                    js :
                       methods: {
                            reverseStr() {
                                setTimeout(() => {
                                    alert("methods 执行了");
                                });
                                return this.str.split("").reverse().join("");
                            }
                        },
                        data() {
                            return {
                                str: "methods-test",
                                str1: "computed-test",
                                test: false,
                            };
                        },
                        computed: {
                            reverseStr1() {
                                setTimeout(() => {
                                    alert("computed 执行了");
                                });
                                return this.str1.split("").reverse().join("");
                            }
                        }
                `,
            };
        },
        computed: {
            reverseStr1() {
                setTimeout(() => {
                    alert("computed 执行了");
                });
                return this.str1.split("").reverse().join("");
            }
        }
    };
</script>


