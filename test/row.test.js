const expect = chai.expect;

import Vue from "vue";

import Row from "../src/grid/row.vue";
import Col from "../src/grid/col.vue";

Vue.config.devtools = false;
Vue.config.productionTip = false;

const Constructor1 = Vue.extend(Row);
const Constructor2 = Vue.extend(Col);
const init = (props, Constructor, fix) => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const vm = new Constructor({propsData: props});
    if (fix) {
        const col1 = new Constructor2().$mount();
        const col2 = new Constructor2().$mount();
        vm.$children = [col1, col2];
    }
    vm.$mount(div);
    vm.getEl = key => vm.$el.querySelector(key);
    vm.getAllEl = key => vm.$el.querySelectorAll(key);
    vm.over = () => {
        vm.$el.remove();
        vm.$destroy();
        div.remove();
    };
    return vm;
};

describe(
    "Row", () => {
        it("存在！", function () {
            expect(Row).to.exist;
        });
        it("gutter属性，可以设置自身的margin值。并且可以把值传递给子组件的gutter属性",
            function (done) {
                Vue.component("y-row", Row);
                Vue.component("y-col", Col);
                const html = `
                        <y-row gutter="20">
                            <y-col span="6" class="g">
                                <div></div>
                            </y-col>
                            <y-col span="6" class="g">
                                <div></div>
                            </y-col>
                            <y-col span="6" class="g">
                                <div></div>
                            </y-col>
                            <y-col span="6" class="g">
                                <div></div>
                            </y-col>
                        </y-row>
                `;
                const div = document.createElement("div");
                div.innerHTML = html;
                document.body.appendChild(div);
                const vm = new Vue(
                    {
                        el: div
                    }
                );
                setTimeout(
                    () => {
                        // console.log(vm.$el);
                        const col = vm.$el.querySelector(".yv-col");
                        expect(getComputedStyle(col).paddingLeft).to.eq("10px");
                        expect(getComputedStyle(col).paddingRight).to.eq("10px");
                        const row = vm.$el.querySelector(".yv-row");
                        expect(getComputedStyle(row).marginLeft).to.eq("-10px");
                        expect(getComputedStyle(row).marginRight).to.eq("-10px");
                        done();
                    }, 1000
                );
                // const row = init(
                //     {gutter: 20}, Constructor1, true
                // );
                // const dom = row.$el;
                // const children = row.$children;
                // children.map(
                //     child => {
                //         // console.log(child.gutter);
                //         expect(child.gutter).to.eq(20);
                //         const col = child.$el;
                //         console.log(col.classList, getComputedStyle(col).paddingLeft);
                //         expect(getComputedStyle(col).paddingLeft).to.eq("10px");
                //         expect(getComputedStyle(col).paddingRight).to.eq("10px");
                //     }
                // );
                // const {marginLeft, marginRight} = getComputedStyle(dom);
                // expect(marginLeft).to.eq("-10px");
                // expect(marginRight).to.eq("-10px");
                //
                // row.over();
            }
        );
        it("可以设置flex的justify-content属性值为left,right,center!", function () {
            const obj = {
                row0: "", row1: "", row2: ""
            };
            ["left", "right", "center"].map(
                (val, ind) => {
                    obj["row" + ind] = init(
                        {justify: val}, Constructor1
                    );
                }
            );
            ["flex-start", "flex-end", "center"].map(
                (val, ind) => {
                    const vm = obj["row" + ind];
                    const div = vm.$el;
                    // console.log(div,div.getAttribute('justify-content'));
                    expect(getComputedStyle(div).justifyContent).to.eq(val);
                    vm.over();
                }
            );
        });
        it("可以设置flex的align-items属性值为up,down,center!", function () {
            const obj = {
                row0: "", row1: "", row2: ""
            };
            ["up", "down", "center"].map(
                (val, ind) => {
                    obj["row" + ind] = init(
                        {align: val}, Constructor1
                    );
                }
            );
            ["flex-start", "flex-end", "center"].map(
                (val, ind) => {
                    const vm = obj["row" + ind];
                    const div = vm.$el;
                    // console.log(div,div.getAttribute('justify-content'));
                    expect(getComputedStyle(div).alignItems).to.eq(val);
                    vm.over();
                }
            );
        });
    }
);

describe(
    "Col", () => {
        it("存在！", function () {
            expect(Col).to.exist;
        });
        it("设置span，可以设置width!", function () {
            const vm = init(
                {span: 10}, Constructor2
            );
            const div = vm.$el;
            expect(div.classList.contains("col-10")).to.eq(true);
        });
        it("设置interval，可以设置margin-left!", function () {
            const vm = init(
                {interval: 10}, Constructor2
            );
            const div = vm.$el;
            expect(div.classList.contains("interval-10")).to.eq(true);
        });
        it("设置gutter，可以设置padding!", function (done) {
            const vm = init(
                {}, Constructor2
            );
            // console.log(vm.gutter);
            const div = vm.$el;
            vm.gutter = 20;
            // console.log(vm.gutter);
            //这里是异步的错误！！
            Vue.nextTick(
                () => {
                    expect(getComputedStyle(div).paddingLeft).to.eq("10px");
                    expect(getComputedStyle(div).paddingRight).to.eq("10px");
                    done();
                }
            );
        });
        it("可以自定义媒体查询，做到完全形式的响应式！", function () {

        });

    }
);