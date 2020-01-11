import Toast from "./toast.vue";
import Vue from "vue";

export default {
    install(vue, toast) {
        vue.prototype.$y_toast = (msg) => {
            // console.log(2);
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor();
            vm.$slots.default = [msg];
            vm.$mount();
            document.body.appendChild(vm.$el);
        };
    }
};