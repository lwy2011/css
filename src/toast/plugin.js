import Toast from "./toast.vue";
import Vue from "vue";

export default {
    install(vue) {
        vue.prototype.$y_toast = ({html, msg, position}) => {
            // console.log(2);
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor();
            msg && (vm.$slots.default = [msg]);
            html && (vm.html = html);
            position && (vm.position = position);
            vm.$mount();
            document.body.appendChild(vm.$el);
        };
    }
};