import Vue from "vue";

import Button from "./button/button.vue";
import Svg from "./svg/svg.vue";

import Btn_group from "./button/buttongroup.vue";

Vue.component("y-button", Button);
Vue.component("y-svg", Svg);
Vue.component("y-btn-group", Btn_group);

new Vue({
    el: "#app",
    data: {
        loading1: false,
        loading2: false,
    }
});



