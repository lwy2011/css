const expect = chai.expect;

import Vue from "vue";
import Popover from "../src/popvoer/popover.vue";


Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.component("y-popover", Popover);
const html = (type) => `
        <y-popover position="bottom" ${type} >
            <template #content>
                设置
                <div>
                    testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest
                    testtesttesttesttesttesttesttesttesttesttesttesttesttesttest
                    testtesttesttesttesttesttesttesttesttes
                </div>
            </template>
            <button id="open">弹出bottom</button>
        </y-popover>`;
describe(
    "Popover", () => {
        it("存在", function () {
            expect(Popover).to.exist;
        });

        it("1，默认是点击弹出的功能；2，设置position属性，可以设置出现的位置。", function (done) {
            const div = document.createElement("div");
            div.innerHTML = html("");
            document.body.appendChild(div);
            const vm = new Vue({
                el: div
            });
            const popover = vm.$children[0];
            // console.log(content);
            expect(popover.$refs.content).to.not.exist;
            popover.$refs.trigger.click();
            popover.$nextTick(
                () => {
                    expect(popover.$refs.content).to.exist;
                    expect(popover.$refs.content.classList.contains("position-bottom"))
                        .to.eq(true);
                    div.remove();
                    vm.$destroy();
                    done();
                }
            );
        });
        it("可以支持hover触发，通过设置type属性为mouseenter", function (done) {
            this.timeout(15000);
            const div = document.createElement("div");
            div.innerHTML = html("type=\"mouseenter\"");
            document.body.appendChild(div);
            const vm = new Vue({
                el: div
            });
            const popover = vm.$children[0];
            expect(popover.$refs.content).to.not.exist;
            popover.$refs.trigger.click();
            popover.$nextTick(
                () => {
                    expect(popover.$refs.content).to.not.exist;
                    const evt = new Event("mouseenter");
                    popover.$el.dispatchEvent(evt);
                    popover.$nextTick(
                        () => {
                            expect(popover.$refs.content).to.exist;
                            expect(popover.hovering).to.not.exist;
                            const evt = new Event("mouseleave");
                            popover.$el.dispatchEvent(evt);
                            popover.$nextTick(
                                () => {
                                    expect(popover.hovering).to.exist;
                                    div.remove();
                                    vm.$destroy();
                                    done();
                                }
                            );
                        }
                    );
                }
            );
        });

    }
);