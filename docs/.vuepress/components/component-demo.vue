<template>
    <div style="margin:1em;">
        <h3>component</h3>
        <h4>组件通讯</h4>
        <p>props，$emit ,自定义事件</p>
        <div>
            <p>
                <input type="text" v-model="message">
                <button @click="add">add</button>
            </p>
            <ul>
                <List v-for="(item,index) in lists"
                      :data="item"
                      :key="item.id" :index="index"
                      @onDelete="onDelete"
                ></List>
            </ul>
        </div>
        <div>
            <h4>event 自定义事件 code</h4>
            <code>
                `import Vue from "vue";

                export default new Vue();
                //自定义事件！`
            </code>
        </div>
        <div>
            <h4>List Component code</h4>
            <img src="./component/list.png" alt="image">
        </div>
       <p>
           自定义事件相当于一个window的人设，公共平台，可以接收和分发各种信息！不论嵌套多少层级。
           props,$emit是最基本父子组件通信的手段，当层级深了，可以用自定义事件来进行父子组件间的通讯。
           如果自定义事件的event只关注于数据层面，自身的data里面进行数据存储，其实就是单向数据流的状态管理了。
       </p>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>

    import List from "./component/list";
    import event from "./component/event";

    export default {
        components: {
            List,
        },
        data() {
            return {
                message: "",
                content: `
html:
    <div style="margin:1em;">
        <h3>component</h3>
        <h4>组件通讯</h4>
        <p>props，$emit ,自定义事件</p>
        <div>
            <p>
                <input type="text" v-model="message">
                <button @click="add">add</button>
            </p>
            <ul>
                <List v-for="(item,index) in lists"
                      :data="item"
                      :key="item.id" :index="index"
                      @onDelete="onDelete"
                ></List>
            </ul>
        </div>
        <div>
            <h4>List Component code</h4>
            <img src="./component/list.png" alt="image">
        </div>
        <div>
            <h4>event 自定义事件 code</h4>
            <code>
                \`import Vue from "vue";

                export default new Vue();
                //自定义事件！\`
            </code>
        </div>
        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
js:
 import List from "./component/list";
    import event from "./component/event";
        components: {
            List,
        },
        data() {
            return {
                message: "",

                lists: [
                    {message: "title", id: 1}
                ],
                count: 2,
            };
        },
        mounted() {
            this.onDeleteCallback = (index) => {
                alert("用自定义事件，进行组件间的消息通信：onDelete index=" + \${index});
            }
            event.$on("onDelete", this.onDeleteCallback);
            this.onAddCallback = (message) => {
                alert("用自定义事件，进行组件间的消息通信：onAdd message=" + \${message}\);
            }
            event.$on("onAdd",this.onAddCallback );
        },
        methods: {
            add() {
                const {message} = this;
                if (!message) return;
                event.$emit("onAdd", message);
                this.lists.push({message, id: this.count});
                this.count += 1;
                this.message = "";
            },
            onDelete(index) {
                this.lists.splice(index, 1);
            }
        },
        beforeDestroy() {
            event.$off(   //去除副作用的！避免内存泄漏！
                'onDelete',this.onDeleteCallback
            )
            event.$off(
                'onAdd',this.onAddCallback
            )
        }

                `,

                lists: [
                    {message: "title", id: 1}
                ],
                count: 2,
            };
        },
        mounted() {
            this.onDeleteCallback = (index) => {
                alert("用自定义事件，进行组件间的消息通信：onDelete index=" + `${index}`);
            };
            event.$on("onDelete", this.onDeleteCallback);
            this.onAddCallback = (message) => {
                alert("用自定义事件，进行组件间的消息通信：onAdd message=" + `${message}`);
            };
            event.$on("onAdd", this.onAddCallback);
        },
        methods: {
            add() {
                const {message} = this;
                if (!message) return;
                event.$emit("onAdd", message);
                this.lists.push({message, id: this.count});
                this.count += 1;
                this.message = "";
            },
            onDelete(index) {
                this.lists.splice(index, 1);
            }
        },
        beforeDestroy() {
            event.$off(
                "onDelete", this.onDeleteCallback
            );
            event.$off(
                "onAdd", this.onAddCallback
            );
        }
    };
</script>

<style>

</style>

