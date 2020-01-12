import Toast from "./toast.vue";
import Vue from "vue";

export default {
    install(vue) {
        vue.prototype.$y_toast = (
            {html, msg, position, autoClose}
        ) => {
            // console.log(2);
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor(
                {
                    propsData: {html, position, autoClose}
                }
            );
            msg && (vm.$slots.default = [msg]);
            vm.$mount();
            document.body.appendChild(vm.$el);
        };
    }
};