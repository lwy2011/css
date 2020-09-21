import Vue from "vue";
import Vuex from "vuex";


const user = {
    state: {
        name: "liu", id: 2
    },
    mutations: {},
    actions: {},
    getters: {}
};
const products = {
    state: {
        id:3,name:''
    },
    mutations: {},
    actions: {},
    getters: {}
};
const cart = {
    state: {
        userId:3,
        products:[]
    },
    mutations: {
        add(){

        },
        delete(){

        }
    },
    actions: {}
};
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        user, products, cart
    }
});

export default store;