import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//盲猜是实现响应式更新视图的操作

const store = new Vuex.Store({
    state: {   //存储
        n: 1
    },
    mutations: {    //各种setter逻辑放这里
        increment(state) {  //这里可以接收第二个参数，进行更加复杂的数据操作
            state.n++;
        },
        incrementAsync(state, config) {   //异步测试，在devtool上可以观察一下
            setTimeout(() => {
                state.n += config.amount
            },1000);
        }
    },
    //数据的读取，可以增加中间处理步骤，用getter函数
    actions:{  //更像是mutations的预处理步骤，假如一个mutation，原本是有异步的
        //那就把异步的逻辑拿出来，单独放在actions里！
        increment(store){
            setTimeout(
                ()=>{
                    store.commit('increment')
                },1000
            )
        }
    }
});

export default store;