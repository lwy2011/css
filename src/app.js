import Vue from "vue";
import "./animate.scss";
import "./common.scss";
import Button from "./button/button.vue";
import Svg from "./svg/svg.vue";

import Btn_group from "./button/buttongroup.vue";
import Input from "./input/input.vue";
import Row from "./grid/row.vue";
import Col from "./grid/col.vue";
import Layout from "./layout/layout.vue";
import Header from "./layout/header.vue";
import Aside from "./layout/aside.vue";
import Footer from "./layout/footer.vue";
import Content from "./layout/content.vue";


Vue.component("y-button", Button);
Vue.component("y-svg", Svg);
Vue.component("y-btn-group", Btn_group);
Vue.component("y-input", Input);
Vue.component("y-row", Row);
Vue.component("y-col", Col);
Vue.component("y-layout", Layout);
Vue.component("y-header", Header);
Vue.component("y-aside", Aside);
Vue.component("y-content", Content);
Vue.component("y-footer", Footer);

new Vue({
    el: "#app",
    data: {
        loading1: false,
        loading2: false,
        inputValue: "",
        placeholder: "请输入姓名",
        medias1: [
            {
                condition: "(max-width:576px)",
                span: 12,
            },
            {
                condition: "(min-width:576px) and (max-width:768px)",
                span: 8,
            },
            {
                condition: "(min-width:768px) and (max-width:992px)",
                span: 6,
            },
            {
                condition: "(min-width:992px) and (max-width:1200px)",
                span: 4,
            },
            {
                condition: "(min-width:1200px)",
                span: 2,
            }
        ],
        medias2: [
            {
                condition: "(max-width:576px)",
                span: 12,
            },
            {
                condition: "(min-width:576px) and (max-width:768px)",
                span: 12,
                interval: 4
            },
            {
                condition: "(min-width:768px) and (max-width:992px)",
                span: 10,
                interval: 8
            },
            {
                condition: "(min-width:992px) and (max-width:1200px)",
                span: 8,
                interval: 12
            },
            {
                condition: "(min-width:1200px)",
                span: 8,
                interval: 12
            }
        ]
    },
    methods: {
        inputChange(e) {
            const {value} = e.target;
            console.log(value, 1);
        },
        input(e) {
            const {value} = e.target;
            console.log(value, 2);
            this.inputValue = value;
        },
        inputFocus(e) {
            const {value} = e.target;
            console.log(value, 3);
        },
        inputBlur(e) {
            const {value} = e.target;
            console.log(value, 4);
        }
    },
    watch: {
        loading1: function () {
            if (!this.loading1) return;
            setTimeout(
                () => {
                    this.loading1 = !this.loading1;
                }, 2000
            );
        },
        loading2: function () {
            if (!this.loading2) return;
            setTimeout(
                () => {
                    this.loading2 = !this.loading2;
                }, 2000
            );
        }
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


