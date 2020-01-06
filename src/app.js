import Vue from "vue";

import Button from "./button/button.vue";
import Svg from './svg/svg.vue'

Vue.component("y-button", Button);
Vue.component("y-svg", Svg);


new Vue({
    el: "#app"
});

