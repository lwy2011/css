import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//盲猜是实现响应式更新视图的操作

const store = new Vuex.Store({
    state: {   //存储
        n: 1
    },
    mutations: {    //各种setter逻辑放这里
        increment(state) {
            state.n++;
        }
    }
});

export default store;