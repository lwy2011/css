import Toast from "./toast.vue";
import Vue from "vue";

export default {
    install(vue) {
        vue.prototype.$y_toast = (
            props, msg
        ) => {
             console.log(2,props);
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor(
                {
                    propsData: props
                }
            );
            msg && (vm.$slots.default = [msg]);
            vm.$mount();
            document.body.appendChild(vm.$el);
        };
    }
};