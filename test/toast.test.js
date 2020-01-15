const expect = chai.expect;


import Vue from "vue";
import Toast from "../src/toast/toast.vue";
import Plugin from "../src/toast/plugin.js";

Vue.config.productionTip = false;
Vue.config.devtools = false;


Vue.use(Plugin);


const init = (props, msg, onlyone) => {
    const div = document.createElement("div");
    document.body.appendChild(div);

    const vm = new Vue({el: "div"});
    const toast = vm.$y_toast(props, msg, onlyone);

    toast.over = () => {
        toast.$el.remove();
        toast.$destroy();
        vm.$el.remove();
        vm.$destroy();
        div.remove();
    };
    return toast;
};

const autoCloseTest = (autoClose, done) => {
    const props = autoClose && {autoClose};
    // console.log(props, 1);
    const vm = init(
        props, "test！autoClose"
    );
    const callback = sinon.fake();
    vm.$destroy = callback;

    setTimeout(
        () => {
            // console.log(vm.$el, 2);
            expect(callback).to.have.not.been.called;
        },
        (autoClose || 4) * 1000 - 1000
    );
    setTimeout(
        () => {
            // console.log(vm.$el, 3);
            expect(callback).to.have.been.called;
            // console.log("ww");
            vm.over();
            done();
        }, (autoClose || 4) * 1000
    );
    done();
};
describe(
    "Toast", () => {
        it("存在！", function () {
            expect(Toast).to.exist;
        });
        it("可以设置文本内容msg", function () {
            const msg = "test测试";
            const vm = init(
                {autoClose: 0}, msg
            );
            // console.log(vm.$el.innerText.indexOf(msg));
            expect(vm.$el.innerText.indexOf(msg) >= 0).to.eq(true);
            vm.over();
        });
        it("可以设置HTML字符串，通过html属性！", function () {
            const html = `
                <div class="test">
                test <a href="http://baidu.com"></a>
            </div>
            `;
            const vm = init(
                {
                    autoClose: 0, html
                }
            );
            // console.log(vm.$el.querySelector(".wrapper").innerHTML);
            expect(vm.$el.querySelector(".wrapper").innerHTML.indexOf(html) >= 0)
                .to.eq(true);
            vm.over();
        });
        it("可以设置关闭按钮的文本closeBtn，以及关闭的点击事件的回调closeCallback", function () {
            const closeBtn = "关闭吧！";
            const callback = sinon.fake();
            const vm = init(
                {
                    closeBtn,
                    closeCallback: callback
                }
            );
            const close = vm.$el.querySelector(".toast-close");
            expect(close.innerText.indexOf(closeBtn) >= 0).to.eq(true);
            close.click();
            expect(callback).to.have.been.called;
            vm.over();
            // console.log(close.innerText);
        });
        it("可以设置position来控制上中下的位置。", function () {
            const vm = init(
                {position: "top"}, "haha"
            );
            expect(vm.$el.classList.contains("position-top")).to.eq(true);
            expect(vm.$el.querySelector(".wrapper").classList.contains("position-top"))
                .to.eq(true);
            vm.over();
        });
        it("在插件形式调用时，通过传入第三个参数onlyone的布尔值，操控连续调用插件创建，是否页面只存在一个Toast", function () {
            const vm1 = init({}, "test", true);
            const callback1 = sinon.fake();
            vm1.$destroy = callback1;
            const vm2 = init({}, "test", true);
            expect(callback1).to.have.been.called;
            const callback2 = sinon.fake();
            vm2.$destroy = callback2;
            const vm3 = init({}, "test", true);
            expect(callback2).to.have.been.called;
            vm3.over();

            const vm4 = init({}, "test", false);
            const callback4 = sinon.fake();
            vm4.$destroy = callback4;
            const vm5 = init({}, "test", false);
            expect(callback4).to.have.not.been.called;
            const callback5 = sinon.fake();
            vm5.$destroy = callback5;
            const vm6 = init({}, "test", false);
            expect(callback5).to.have.not.been.called;
            vm6.over();


        });
        it("可以设置自动关闭，通过autoClose属性设置关闭时间！", function (done) {
            //设置摩卡的异步测试的测试时间：
            this.timeout(15000);
            autoCloseTest(6, done);
        });
        it("不设置autuClose，autoClose的默认值为4！4s后会关闭！", function (done) {
            this.timeout(15000);
            autoCloseTest(undefined, done);
        });
    }
);
