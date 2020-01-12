import Toast from "./toast.vue";

let created;
const init = (onlyone, msg, props, Vue) => {
    if (onlyone && created) {
        created.close();
    }
    const Constructor = Vue.extend(Toast);
    const vm = new Constructor(
        {
            propsData: props
        }
    );
    msg && (vm.$slots.default = [msg]);
    vm.$mount();
    document.body.appendChild(vm.$el);
    return vm;
};
export default {
    install(vue) {
        vue.prototype.$y_toast = (props, msg, onlyone = true) => {
            // console.log(2, props);
            created = init(onlyone, msg, props, vue);
        };
    }
};