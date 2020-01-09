const expect = chai.expect;

import Vue from "vue";
import Input from "../src/input/input.vue";


Vue.config.productionTip = false;
Vue.config.devtools = false;


const Constructor = Vue.extend(Input);

const init = (props) => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const vm = new Constructor({
        propsData: props
    }).$mount(div);
    vm.getEl = key => vm.$el.querySelector(key);
    vm.over = () => {
        vm.$el.remove();
        vm.$destroy();
        div.remove();
    };
    return vm;
};
describe(
    "Input", () => {
        it("存在", function () {
            expect(Input).to.exist;
        });

        it("接收value和placeholder", function () {
            const vm = init({value: "哈哈", placeholder: "请"});
            const input = vm.getEl("input");
            expect(input.value).to.eq("哈哈");
            expect(input.placeholder).to.eq("请");
            vm.over();
        });
        it("接收disabled", function () {
            const vm = init({disabled: true});
            const input = vm.getEl("input");
            // console.log(input);
            expect(input.disabled).to.eq(true);
            vm.over();
        });
        it("接收disabled", function () {
            const vm = init({readonly: true});
            const input = vm.getEl("input");
            // console.log(input);
            expect(input.readOnly).to.eq(true);  //这里的直接拿到属性要驼峰的意思是，碰的。
            vm.over();
        });
        it("接收error", function () {
            const vm = init({error: "出错了！"});
            const use = vm.getEl("use");
            const span = vm.getEl(".err-msg");
            expect(use).to.exist;
            expect(span).to.exist;
            expect(use.getAttribute("xlink:href")).to.eq("#i-warn");
            expect(span.innerText).to.eq("出错了！");
            vm.over();
        });
    }
);
describe(
    "Input", () => {
        it("支持change/input/focus/blur事件！", function () {
            const vm = init();
            const input = vm.getEl("input");
            const callback = sinon.fake();
            ["change", "input", "focus", blur].map(
                val => {
                    vm.$on(val, callback);
                    const event = new Event(val);
                    Object.defineProperty(
                        event, "target", {
                            value: "haha"
                        }
                    );
                    input.dispatchEvent(event);
                    expect(callback).to.have.been.calledWith(event);
                    //回调的第一个参数是事件本身！
                }
            );
        });
        // it("支持input事件！", function () {
        //     const vm = init();
        //     const input = vm.getEl('input');
        //     const callback = sinon.fake();
        //     vm.$on("input", callback);
        //     const event = new Event("input");
        //     input.dispatchEvent(event);
        //     expect(callback).to.have.been.calledWith(event);
        // });
        // it("支持change事件！", function () {
        //     const vm = init();
        //     const input = vm.getEl('input');
        //     const callback = sinon.fake();
        //     vm.$on("focus", callback);
        //     const event = new Event("focus");
        //     input.dispatchEvent(event);
        //     expect(callback).to.have.been.calledWith(event);
        // });
        // it("支持change事件！", function () {
        //     const vm = init();
        //     const input = vm.getEl('input');
        //     const callback = sinon.fake();
        //     vm.$on("blur", callback);
        //     const event = new Event("blur");
        //     input.dispatchEvent(event);
        //     expect(callback).to.have.been.calledWith(event);
        // });
    }
);


