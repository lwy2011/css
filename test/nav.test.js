const expect = chai.expect;

import Vue from "vue";
import Nav from "../src/nav/nav";
import NavItem from "../src/nav/nav-item";
import SubNav from "../src/nav/sub-nav";

Vue.config.devtools = false;
Vue.config.productionTip = false;

Vue.component("y-nav", Nav);
Vue.component("y-nav-item", NavItem);
Vue.component("y-sub-nav", SubNav);
const html = `
     <y-nav :selected.sync="selected" :hover-timer-delay="hoverDelay" @update:selected="callback">
            <component v-for="item in navs"
                       :name="item.name"
                       :key="item.name"
                       v-bind:is="item.sub ? 'y-sub-nav':'y-nav-item'"
                       :disabled="disabled(item.name)"
            >
                {{item.name}}
                <template v-slot:popover>
                    <component v-for="item1 in item.sub"
                               :name="item1.name"
                               :key="item1.name"
                               v-bind:is="item1.sub ? 'y-sub-nav':'y-nav-item'"
                               :disabled="disabled(item1.name)"
                    >
                        {{item1.name}}
                        <template v-slot:popover>
                            <component v-for="item2 in item1.sub"
                                       :name="item2.name"
                                       :key="item2.name"
                                       v-bind:is="item2.sub ? 'y-sub-nav':'y-nav-item'"
                                       :disabled="disabled(item2.name)"
                            >
                                {{item2.name}}
                                <template v-slot:popover>
                                    <component v-for="item3 in item2.sub"
                                               :name="item3.name"
                                               :key="item3.name"
                                               v-bind:is="item3.sub ? 'y-sub-nav':'y-nav-item'"
                                               :disabled="disabled(item3.name)"
                                    >
                                        {{item3.name}}
                                    </component>
                                </template>
                            </component>
                        </template>
                    </component>
                </template>
            </component>
            <y-nav-item name="百度">
                <a href="http://baidu.com" target="_blank">百度</a>
            </y-nav-item>
        </y-nav>
`;
const init = (html, hoverDelay, callbackFn) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    document.body.appendChild(div);
    return new Vue({
        el: div,
        data: {
            selected: "天津市",
            navs: [
                {
                    name: "天津市",
                },
                {
                    name: "河北省",
                    sub: [
                        {
                            name: "保定市"
                        },
                        {
                            name: "石家庄市"
                        },
                        {
                            name: "沧州市"
                        }
                    ]
                },
                {
                    name: "山西省",
                    sub: [
                        {
                            name: "太原市",
                            sub: [
                                {
                                    name: "t1"
                                },
                                {
                                    name: "t2"
                                },
                                {
                                    name: "3"
                                }
                            ]
                        },
                        {
                            name: "大同市",
                            sub: [
                                {
                                    name: "d1",
                                    sub: [
                                        {
                                            name: "d11"
                                        },
                                        {
                                            name: "2"
                                        },
                                        {
                                            name: "d31"
                                        }
                                    ]
                                },
                                {
                                    name: "c2",
                                    sub: [
                                        {
                                            name: "c21"
                                        },
                                        {
                                            name: "c22"
                                        },
                                        {
                                            name: "c23"
                                        }
                                    ]
                                },
                                {
                                    name: "d3"
                                }
                            ]
                        },
                        {
                            name: "晋城市"
                        }
                    ]

                },
                {
                    name: "广东省",
                    sub: [
                        {
                            name: "深圳市"
                        },
                        {
                            name: "广州市"
                        },
                        {
                            name: "珠海市"
                        }
                    ]
                },
                {name: "北京市"}
            ],
            hoverDelay
        },
        methods: {
            disabled(val) {
                return val.length < 2 || val === "河北省";
            },
            callback(val) {
                callbackFn(val);
            }
        },
        beforeDestroy() {
            div.remove();
        }
    });
};
describe(
    "Nav", () => {
        it("存在！", function () {
            expect(Nav).to.exist;
            expect(NavItem).to.exist;
            expect(SubNav).to.exist;
        });
        it("设置selected,默认选中项", function (done) {
            const vm = init(html);
            const nav = vm.$children[0];
            setTimeout(
                () => {
                    nav.items.map(
                        item => {
                            const test = vm.selected === item.name;
                            expect(item.$el.classList.contains("active")).to.eq(test);
                        }
                    );
                    vm.$destroy();
                    done();
                }, 0
            );
        });
        it("可以点击item，选中，更新selected，并且设置的selected更新的回调函数会执行。", function (done) {
            const callback = sinon.fake();
            const vm = init(html, 0, callback);
            const nav = vm.$children[0];
            const noselected = nav.items.filter(
                item => item.name !== vm.selected
            )[0];
            expect(noselected).to.exist;
            if (noselected) {
                noselected.$el.click();
                setTimeout(
                    () => {
                        expect(vm.selected).to.eq(noselected.name);
                        expect(callback).to.have.been.calledWith(noselected.name);
                        vm.$destroy();
                        done();
                    }, 0
                );
            }
        });
        it("设置hoverTimerDelay，可以hover，弹出次级菜单", function (done) {
            const vm = init(html, 150);
            const nav = vm.$children[0];
            const sub = nav.$children.find(
                item => !item.disabled && item.$options.name === "y-sub-nav"
            );
            const trigger = sub.$el.querySelector(".yv-sub-nav-trigger");
            const evt = new Event("mouseenter");
            const evt1 = new Event("mouseleave");
            const popover = sub.$el.querySelector(".yv-sub-nav-popover");
            expect(sub).to.exist;
            if (sub) {
                setTimeout(
                    () => {
                        expect(sub.visible).to.eq(false);
                        expect(sub.timer).to.eq(undefined);
                        expect(sub.hoverTimerDelay).to.eq(150);
                        trigger.dispatchEvent(evt);
                        sub.$nextTick(
                            () => {
                                expect(sub.visible).to.eq(true);
                                trigger.dispatchEvent(evt1);
                                sub.$nextTick(
                                    () => {
                                        expect(sub.timer > 0).to.eq(true);
                                        popover.dispatchEvent(evt);
                                        sub.$nextTick(
                                            () => {
                                                expect(sub.timer).to.eq(undefined);
                                                vm.$destroy();
                                                done();
                                            }
                                        );
                                    }
                                );
                            }
                        );
                    }, 0
                );
            }
        });
        it("item或者sub-nav，可以设置disabled,禁止选中的。", function (done) {
            const callback = sinon.fake();
            const vm = init(html, 0, callback);
            const nav = vm.$children[0];
            const disabledItems = nav.items.filter(
                item => vm.disabled(item.name)
            );
            const disabledSubs = nav.$children.filter(
                item => item.name === "河北省"
            );
            expect(disabledSubs.length > 0).to.eq(true);
            expect(disabledItems.length > 0).to.eq(true);

            setTimeout(
                () => {
                    disabledSubs.map(
                        item => expect(item.$el
                            .querySelector(".yv-sub-nav-trigger")
                            .classList.contains("disabled")).to.eq(true)
                    );
                    disabledItems.map(
                        item => expect(item.$el.classList.contains("disabled")).to.eq(true)
                    );
                    disabledItems[0].$el.click();
                    setTimeout(
                        () => {
                            expect(vm.selected === disabledItems[0].name).to.eq(false);
                            expect(callback).to.have.not.been.called;
                            disabledSubs[0].$el
                                .querySelector(".yv-sub-nav-trigger").click();
                            setTimeout(
                                () => {
                                    expect(disabledSubs[0].visible).to.eq(false);
                                    vm.$destroy();
                                    done();
                                }, 0
                            );
                        }, 0
                    );
                }, 0
            );
        });
    }
);

