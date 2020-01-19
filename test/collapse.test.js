const expect = chai.expect;

import Vue from "vue";
import Collapse from "../src/collapse/collapse.vue";
import CollapseItem from "../src/collapse/collapse-item.vue";


Vue.config.devtools = false;
Vue.config.productionTip = false;

Vue.component("y-collapse", Collapse);
Vue.component("y-collapse-item", CollapseItem);
const init = (single) => {
    const html = `
                 <y-collapse :selected.sync="selected" ${single === false ? ":single = \"false\"" : ""}>
                    <y-collapse-item
                            v-for="(item,ind) in collapse"
                            :key="ind"
                            :name="item.title">
                        {{item.title}}
                        <template #content>
                            <div>
                                {{item.content}}
                            </div>
                        </template>
                    </y-collapse-item>
                </y-collapse>
            `;
    const div = document.createElement("div");
    div.innerHTML = html;
    document.body.appendChild(div);
    return new Vue({
        el: div,
        data: {
            collapse: [
                {
                    title: "title1", content: "content1"
                },
                {
                    title: "title2", content: "content2"
                },
                {
                    title: "title3", content: "content3"
                },
                {
                    title: "title4", content: "content4"
                }
            ],
            selected: ["title3"],
        },
        destroy() {
            div.remove();
        }
    });
};

describe(
    "Collapse", () => {
        it("Collapse组件存在！", function () {
            expect(Collapse).to.exist;
        });
        it("CollapseItem存在！", function () {
            expect(CollapseItem).to.exist;
        });
        it("子组件没有collapse-item会报错!", function (done) {
            const html = `
             <y-collapse :selected.sync="selected">
                <div></div>
            </y-collapse>`;
            const div = document.createElement("div");
            div.innerHTML = html;
            document.body.appendChild(div);
            const vm = new Vue({
                el: div,
                data:{
                    selected:['title1']
                },
                errorCaptured(err, vm, info) {
                    expect(
                        err.message ===
                        "collapse组件的子组件只能是而且必须有collapse-item！")
                        .to.eq(true);
                    div.remove();
                    vm.$destroy();
                    done();
                }
            });
        });
        it("子组件collapse-item可以接收name属性", function () {
            const vm = init();
            vm.$children[0].$children.map(
                (item, index) => {
                    expect(item.name).to.eq(vm.collapse[index].title);
                }
            );
            vm.$destroy();
        });
        it("接收selected，可以控制子组件collapse-item的显示与否！", function () {
            const vm = init();
            const selected = vm.$children[0].$children.filter(
                item => vm.selected.indexOf(item.name) >= 0
            );
            const noselected = vm.$children[0].$children.filter(
                item => vm.selected.indexOf(item.name) < 0
            );
            expect(selected.length).to.eq(vm.selected.length);
            selected.map(
                item => expect(item.active).to.eq(true)
            );
            noselected.map(
                item => expect(item.active).to.eq(false)
            );
            vm.$destroy();
        });
        it("子组件collapse-item可以点击，改变collapse的selected的值！", function (done) {
            const vm = init();
            const active = vm.$children[0].$children[2];
            expect(active.active).to.eq(true);
            active.$refs.trigger.click();
            vm.$nextTick(
                () => {
                    expect(vm.selected.indexOf("title3") < 0).to.eq(true);
                    vm.$destroy();
                    done();
                }
            );
        });
        it("single的默认值为true，说明点击子组件的dom，只能最多出现一个，selected的长度最大为1！",
            function (done) {
                const vm = init();
                expect(vm.$children[0].single).to.eq(true);
                const items = vm.$children[0].$children.filter(
                    item => !item.active
                );
                const click = (index) => {
                    items[index].$refs.trigger.click();
                    vm.$nextTick(
                        () => {
                            expect(vm.selected.length).to.eq(1);
                            index < items.length - 1 ? click(index + 1) :
                                (() => {
                                    vm.$destroy();
                                    done();
                                })();
                        }
                    );
                };
                click(0);
            });
        it("single 为false的时候，通过点击items，可以同时展示多个items。", function (done) {
            this.timeout(15000);
            const vm = init(false);
            const items = vm.$children[0].$children.filter(
                item => !item.active
            );
            // console.log(vm.$children[0].single);
            expect(vm.$children[0].single).to.eq(false);
            const click = (index) => {
                items[index].$refs.trigger.click();
                vm.$nextTick(
                    () => {
                        // console.log(vm.selected.length,index+1+1);
                        expect(vm.selected.length).to.eq(index + 1 + 1);
                        expect(vm.selected.indexOf(items[index].name) >= 0)
                            .to.eq(true);
                        index < items.length - 1 ? click(index + 1) :
                            (() => {
                                vm.$destroy();
                                done();
                            })();
                    }
                );
            };
            click(0);
        });
    }
);
