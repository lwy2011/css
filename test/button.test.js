

import Vue from "vue";
import Button from "../src/button/button.vue";

Vue.config.productionTip = false;
Vue.config.devtools = false;
const expect = chai.expect;

const init = (props) => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button);
    const vm = new Constructor(props);
    vm.$mount(div);
    vm.getEl = key => vm.$el.querySelector(key);
    vm.getAllEl = key => vm.$el.querySelectorAll(key);
    vm.over = () => {
        vm.$el.remove();
        vm.destroy();
        div.remove();
    };
    return vm;
};
//BDD 行为驱动测试！
describe("Button", () => {
    it("存在！", function () {
        expect(Button).to.be.ok;
    });



    it("可以设置icon", () => {
        const vm = init({propsData: {icon: "setting"}});
        const useEl = vm.getEl("use");
        expect(useEl.getAttribute("xlink:href")).to.eq("#i-setting");
        vm.over();

    });
    it("icon的order默认为1！ ", function () {
        const div = document.createElement("div");
        document.body.appendChild(div);
        const vm = init(
            {
                propsData: {
                    icon: "right"
                },
                div
            }
        );
        const svg = vm.getEl("svg");
        expect(getComputedStyle(svg).order).to.eq("1");
        vm.over();
    });
    it("可以设置order! ", function () {
        const div = document.createElement("div");
        document.body.appendChild(div);
        const vm = init(
            {
                propsData: {
                    icon: "right", iconposition: "right"
                },
                div
            }
        );
        const svg = vm.getEl("svg");
        expect(window.getComputedStyle(svg).order).to.eq("2");
        vm.over();
    });

    it("可以设置loading状态！", function () {
        const vm = init(
            {
                propsData: {
                    icon: "download", loading: true
                }
            }
        );
        const useEls = vm.getAllEl("use");
        expect(useEls.length).to.eq(1);
        expect(useEls[0].getAttribute("xlink:href")).to.eq("#i-loading");
        const svgEl = vm.getEl("svg");
        expect(svgEl).to.have.style("class", "loading");
        vm.over();
    });
    it("可以触发点击事件！", function () {
        const vm = init({});
        const callback = sinon.fake();
        vm.$on("click", callback);
        vm.$el.click();
        expect(callback).to.have.been.called;
    });
});