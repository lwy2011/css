const expect = chai.expect;

import Vue from "vue";
import Tabs from "../src/tabs/tabs.vue";

import TabsHead from "../src/tabs/tabs-head.vue";
import TabsBody from "../src/tabs/tabs-body.vue";
import TabBar from "../src/tabs/tabs-nav-bar.vue";
import TabPanel from "../src/tabs/tabs-panel.vue";
import Button from "../src/button/button.vue";

Vue.config.devtools = false;
Vue.config.productionTip = false;
Vue.component("y-tabs", Tabs);
Vue.component("y-tabs-head", TabsHead);
Vue.component("y-tabs-body", TabsBody);
Vue.component("y-tabs-bar", TabBar);
Vue.component("y-tabs-panel", TabPanel);
Vue.component("y-button", Button);

const testChildren = (htmlCom, right, done, index) => {
    const html = `
                 <y-tabs selected ="'haha'" :direction="'X'">
                    ${htmlCom}
                </y-tabs>
            `;
    const div = document.createElement("div");
    div.innerHTML = html;
    document.body.appendChild(div);
    const vm = new Vue({
        el: div,
        errorCaptured(err, vm, info) {
            // console.log(222, err, info);
            expect(
                err.message ===
                "Tabs组件的子组件必须要有，必须是tabs-head和tabs-body"
            ).to.eq(true);
            right && right();
            return false;
        }
    });
    // throw new Error("test");
    setTimeout(
        () => {
            right && expect(right).to.have.not.been.called;
            vm.$el.remove();
            div.remove();
            vm.$destroy();
            done && done();
        }, 200 * index
    );
    // console.log(vm);
};
const html = `
     <y-tabs :selected.sync="tabs.default" :direction="'X'">
            <y-tabs-head>
                <y-tabs-bar :name="tab.name"
                            :key="tab.name"
                            :disabled="tab.name === '美女'"
                            v-for="tab in tabs.detail"
                >
                    {{tab.name}}
                </y-tabs-bar>
                <template v-slot:others>
                    <y-button icon="setting">设置</y-button>
                </template>
            </y-tabs-head>
            <y-tabs-body>
                <y-tabs-panel
                        :key="tab.name"
                        :name="tab.name"
                        v-for="tab in tabs.detail">
                    {{tab.content}}
                </y-tabs-panel>
            </y-tabs-body>
        </y-tabs>
`;
const init = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    document.body.appendChild(div);
    const vm = new Vue({
        el: div,
        data() {
            return {
                tabs: {
                    detail: [
                        {name: "数码", content: "数码"},
                        {name: "科技没血", content: "科技"},
                        {name: "美女", content: "美女"},
                        {name: "技术三明治", content: "技术"}
                    ],
                    default: "数码"
                }
            };
        }
    });
    vm.getItems = () => vm.$children[0].$children[0].$children;
    vm.getPanels = () => vm.$children[0].$children[1].$children;
    vm.activeItem = () => {
        return vm.getItems().filter(
            item => item.active
        )[0];
    };
    vm.activePanel = () => {
        return vm.getPanels().filter(
            val => val.active
        )[0];
    };
    vm.over = () => {
        vm.$el.remove();
        div.remove();
        vm.$destroy();
    };
    return vm;
};
const getStyle = (key, dom) => dom.getBoundingClientRect()[key];
describe(
    "Tabs", () => {
        it("存在！", function () {
            expect(Tabs).to.exist;
        });
        it("子组件只能是tabsHead,tabsBody", function (done) {
            this.timeout(15000);
            testChildren("<div></div>", "", "", 1);
            testChildren("", "", "", 2);
            testChildren(" <y-tabs-head></y-tabs-head>", "", "", 3);
            testChildren("<y-tabs-body></y-tabs-body>", "", "", 4);

            const callback = sinon.fake();
            testChildren(
                "<y-tabs-head></y-tabs-head><y-tabs-body></y-tabs-body>",
                callback, done, 5
            );
        });

        it("接收selected参数！", function (done) {
            this.timeout(15000);
            const vm = init(html);
            const tabs = vm.$children[0];
            const items = tabs.$children[0].$children;
            const panels = tabs.$children[1].$children;
            setTimeout(
                () => {
                    let itemCur, panelCur;

                    items.map(
                        item => {
                            // console.log(item.$options.name !== "tabs-bar-v");
                            if (item.$options.name !== "tabs-bar-v") return;
                            if (item.name === vm.tabs.default) {
                                itemCur = item;
                            }
                        }
                    );
                    expect(itemCur).to.exist;
                    expect(itemCur.active).to.eq(true);
                    panels.map(
                        panel => {
                            if (panel.name === vm.tabs.default) {
                                panelCur = panel;
                            }
                        }
                    );
                    expect(panelCur).to.exist;
                    expect(panelCur.active).to.eq(true);
                    vm.over();
                    done();
                }, 300
            );
        });
        it("TabsBar存在！", function () {
            expect(TabBar).to.exist;
        });
        it("TabBar可以接收name属性！", function (done) {
            const vm = init(html);
            this.timeout(15000);
            let err = 0;
            vm.$nextTick(
                () => {
                    const items = vm.getItems();
                    vm.tabs.detail.map(
                        (val, ind) => {
                            // console.log(items[ind].$el);
                            val.name !== items[ind].name &&
                            (err++);
                        }
                    );
                    expect(err).to.eq(0);
                    vm.over();
                    done();
                }
            );
        });
        it("TabBar可以接收disabled属性！", function (done) {
            const vm = init(html);
            this.timeout(15000);
            vm.$nextTick(
                () => {
                    const items = vm.getItems();
                    const disabled = items.filter(
                        (val) => val.disabled
                    )[0];
                    expect(disabled).to.exist;
                    expect(disabled.$el.classList.contains("disabled")).to.eq(true);
                    const callback = sinon.fake();
                    disabled.$el.click();
                    expect(callback).to.have.not.been.called;
                    vm.over();
                    done();
                }
            );
        });
        it(
            "tabs-bar可以点击，实现bar的active的切换，panel的切换，以及下划线的动画！",
            function (done) {
                this.timeout(15000);
                const vm = init(html);
                vm.$nextTick(() => {
                    // console.log(vm.$children[0].$$el);
                    const item1 = vm.activeItem();
                    const panel1 = vm.activePanel();
                    const line = vm.$children[0].$children[0].$refs.line;

                    const item2 = vm.getItems()[3];

                    expect(item1.active).to.eq(true);
                    expect(item2.active).to.eq(false);
                    const item1Width = getStyle("width", item1.$el);
                    const item2Width = getStyle("width", item2.$el);
                    const item1Left = getStyle("left", item1.$el);
                    const item2Left = getStyle("left", item2.$el);
                    const lineWidth1 = getStyle("width", line);
                    const lineLeft1 = getStyle("left", line);
                    expect(item1Width).to.eq(lineWidth1);
                    expect(item1Left).to.eq(lineLeft1);
                    item2.$el.click();
                    vm.$nextTick(
                        () => {
                            expect(item1.active).to.eq(false);
                            expect(item2.active).to.eq(true);
                            setTimeout(
                                () => {
                                    const lineWidth1 = getStyle("width", line);
                                    const lineLeft1 = getStyle("left", line);
                                    expect(item2Width).to.eq(lineWidth1);
                                    expect(item2Left).to.eq(lineLeft1);
                                    // console.log(lineLeft1,item2Left);
                                    //这里是动画的坑了，动画需要时间的。
                                    vm.over();
                                    done();
                                }, 500
                            );
                        }
                    );
                });
            });

        it("tab-panel组件存在。", function () {
            expect(TabPanel).to.exist;
        });
        it("tab-panel组件接收name属性", function (done) {
            const vm = init(html);
            vm.$nextTick(
                () => {
                    const panels = vm.getPanels();
                    vm.tabs.detail.map(
                        (val, index) => {
                            const name = val.name;
                            expect(name === panels[index].name).to.eq(true);
                        }
                    );
                    done();
                }
            );
        });
    }
);

