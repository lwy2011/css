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

//单元测试
import chai from "chai";
import spies from "chai-spies";

chai.use(spies);

const expect = chai.expect;
const createDom = () => {
    const node = document.createElement("div");
    document.body.appendChild(node);
    return node;
};
const init = (component, props, dom) => {
    const Constructor = Vue.extend(component);
    const Vm = new Constructor(props);
    Vm.$mount(dom);
    Vm.getEl = (val) => Vm.$el.querySelector(val);
    Vm.over = () => {
        Vm.$el.remove();
        Vm.$destroy();
    };
    return Vm;
};

{
    const Vm = init(Button, {
        propsData: {icon: "awesome", icononly: true}
    });
    const useEl = Vm.getEl("use");
    // expect(useEl.getAttribute('xlink:href')).to.eq('awesome');
    expect(useEl.getAttribute("xlink:href")).to.eq("#i-awesome");
    Vm.over();
}
{
    const Vm = init(Button, {
        propsData: {icon: "awesome", icononly: true}
    });
    const useEl = Vm.$el.querySelector("use");
    // expect(useEl.getAttribute('xlink:href')).to.eq('awesome');
    expect(useEl.getAttribute("xlink:href")).to.eq("#i-awesome");
    const span = Vm.$el.querySelector("span");
    expect(span).to.eq(null);
    Vm.over();

}
{
    const Vm = init(Button, {
        propsData: {icon: "download", loading: true}
    });
    const useEl = Vm.$el.querySelector("use");
    // expect(useEl.getAttribute('xlink:href')).to.eq('awesome');
    expect(useEl.getAttribute("xlink:href")).to.eq("#i-loading");
    Vm.over();

}
{
    //测试css相关的属性，就需要真挂载到页面上的，上面的都没有真挂载页面：
    const div = createDom();
    const Vm = init(Button, {
        propsData: {
            icon: "awesome",
        }
    }, div);
    const svg = Vm.getEl("svg");
    // console.log(svg);
    const span = Vm.getEl(".content");
    const order1 = window.getComputedStyle(svg).order;
    const order2 = window.getComputedStyle(span).order;

    expect(order1).to.eq("1");
    expect(order2).to.eq("2");
    Vm.over();


}
{
    //测试css相关的属性，就需要真挂载到页面上的，上面的都没有真挂载页面：
    const div = createDom();
    const Vm = init(Button, {
        propsData: {
            icon: "awesome", iconposition: "right"
        }
    }, div);
    const svg = Vm.getEl("svg");
    // console.log(svg);
    const span = Vm.getEl(".content");
    const order1 = window.getComputedStyle(svg).order;
    const order2 = window.getComputedStyle(span).order;

    expect(order1).to.eq("2");
    expect(order2).to.eq("1");


    Vm.over();

}
{
    const Vm = init(Button, {
        propsData: {
            icon: "awesome",
        }
    });
    let spy = chai.spy(() => {});
    Vm.$on("click", spy);

    const button = Vm.$el;
    button.click();
    expect(spy).to.have.been.called();
    Vm.over();

}


