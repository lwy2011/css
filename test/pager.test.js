const expect = chai.expect;
import Vue from "vue";
import Pager from "../src/pager/pager";

Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.component("y-pager", Pager);
const init = (html, current = 2, total = 8,onlyOneHidden=false) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    document.body.appendChild(div);
    return new Vue({
        el: div,
        data: {
            current, total,onlyOneHidden
        },
        beforeDestroy() {
            div.remove();
        }
    });
};
const html = `
     <y-pager :total="total" :current.sync="current" :only-one-hidden="onlyOneHidden">
        </y-pager>
`;
describe(
    "Pager", () => {
        it("存在", function () {
            expect(Pager).to.exist;
        });
        it("接收current参数，设置当前的活动页码", function () {
            const vm = init(html);
            const pager = vm.$children[0];
            expect(pager.$el.querySelector(".active").innerText).to.eq("2");
            vm.$destroy();
        });
        it("可以点击数字页码，进行更新current,点击的数字页码也会变为active,旧的会不active", function (done) {
            this.timeout(15000);
            const vm = init(html);
            const pager = vm.$children[0];
            const item = pager.$el.querySelectorAll(".yv-pager-item")[1];
            const active = pager.$el.querySelector(".active");
            const number = +item.innerText;
            expect(number).to.not.eq(vm.current);
            expect(item.classList.contains(".active")).to.eq(false);
            item.click();
            vm.$nextTick(
                () => {
                    expect(vm.current).to.eq(number);
                    expect(active.classList.contains("active")).to.eq(false);
                    expect(item.classList.contains("active")).to.eq(true);
                    // console.log(vm.current,number,pager.$el);
                    vm.$destroy();
                    // console.log(2,active);
                    done();
                }
            );
        });
        it("点击last箭头可以递减设置current的值，并且当current=1时，last被禁用", function (done) {
            const vm = init(html, 3);
            const pager = vm.$children[0];
            const last = pager.$el.querySelector(".yv-pager-last");
            expect(vm.current).to.eq(3);
            last.click();
            vm.$nextTick(
                () => {
                    expect(vm.current).to.eq(2);
                    expect(last.classList.contains("disabled")).to.eq(false);
                    last.click();
                    vm.$nextTick(
                        () => {
                            expect(vm.current).to.eq(1);
                            expect(last.classList.contains("disabled")).to.eq(true);
                            last.click();
                            vm.$nextTick(
                                () => {
                                    expect(vm.current).to.eq(1);
                                    vm.$destroy();
                                    done();
                                }
                            );
                        }
                    );
                }
            );
        });
        it("点击next箭头可以递减设置current的值，并且当current=最大值时，next被禁用", function (done) {
            const vm = init(html, 6);
            const pager = vm.$children[0];
            const next = pager.$el.querySelector(".yv-pager-next");
            expect(vm.current).to.eq(6);
            next.click();
            vm.$nextTick(
                () => {
                    expect(vm.current).to.eq(7);
                    expect(next.classList.contains("disabled")).to.eq(false);
                    next.click();
                    vm.$nextTick(
                        () => {
                            expect(vm.current).to.eq(8);
                            expect(next.classList.contains("disabled")).to.eq(true);
                            next.click();
                            vm.$nextTick(
                                () => {
                                    expect(vm.current).to.eq(8);
                                    vm.$destroy();
                                    done();
                                }
                            );
                        }
                    );
                }
            );
        });
        it("dots的按钮，可以最大以5为递增或递减设置当前的current，直到到达total，或者1", function (done) {
            const vm = init(html, 2, 15);
            const pager = vm.$children[0];
            const dots = () => {
                const {bigLast, bigNext} = pager;
                const items = pager.$el.querySelectorAll(".yv-pager-item");
                const last = bigLast && items[bigLast + 1];
                const next = bigNext && items[bigNext + 1];
                return {last, next};
            };
            const {last, next} = dots();
            expect(next).to.exist;
            if (next) {
                next.click();
                vm.$nextTick(
                    () => {
                        expect(vm.current).to.eq(2 + 5);
                        const {last, next} = dots();
                        expect(next).to.exist;
                        next.click();
                        vm.$nextTick(
                            () => {
                                expect(vm.current).to.eq(2 + 5 + 5);
                                const {last, next} = dots();
                                expect(next).to.exist;
                                next.click();
                                vm.$nextTick(
                                    () => {
                                        expect(vm.current).to.eq(15);
                                        const {last, next} = dots();
                                        expect(last).to.exist;
                                        last.click();
                                        vm.$nextTick(
                                            () => {
                                                expect(vm.current).to.eq(15 - 5);
                                                const {last, next} = dots();
                                                expect(last).to.exist;
                                                last.click();
                                                vm.$nextTick(
                                                    () => {
                                                        expect(vm.current).to.eq(15 - 5 - 5);
                                                        const {last, next} = dots();
                                                        expect(last).to.exist;
                                                        last.click();
                                                        vm.$nextTick(
                                                            () => {
                                                                expect(vm.current).to.eq(1);
                                                                vm.$destroy();
                                                                done();
                                                            }
                                                        );
                                                    }
                                                );
                                            }
                                        );
                                    }
                                );
                            }
                        );
                    }
                );
            }
            // console.log(last, next);
        });
        it("可以设置onlyOneHidden的设置，使dom消失，用于只有一页的时候", function () {
            const vm = init(html,2,8,true)
            const pager = vm.$children[0]
            expect(pager.$el.classList.contains('hidden')).to.eq(true)
            vm.$destroy()
        });
    }
);