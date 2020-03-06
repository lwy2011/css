const expect = chai.expect;

import Vue from "vue";
import Slides from "../src/slides/slides.vue";
import SlidesItem from "../src/slides/slides-item.vue";

Vue.config.devtools = false;
Vue.config.productionTip = false;
Vue.component("y-slides", Slides);
Vue.component("y-slides-item", SlidesItem);
const html1 = `
        <y-slides :selected.sync="selected">
                <y-slides-item
                        v-for="(src,index) in source"
                        :key="index"
                        :index="index">
                    <img :src="src" alt="img" style="width:100%;height:100%;">
                </y-slides-item>
            </y-slides>
    `;
const html2 =
    `
        <y-slides :selected.sync="selected" :reverse="true">
                <y-slides-item
                        v-for="(src,index) in source"
                        :key="index"
                        :index="index">
                    <img :src="src" alt="img" style="width:100%;height:100%;">
                </y-slides-item>
            </y-slides>
    `;
const init = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    document.body.appendChild(div);
    return new Vue({
        el: div,
        data() {
            return {
                source: [
                    `
                   https://th.bing.com/th/id/OIP.AmHPnrxrSCgG1N_Xl0lRnAHaHa?w=178&h=178&c=7&o=5&dpr=2&pid=1.7
                    `,

                    `
                 https://th.bing.com/th/id/OIP.K-Qwp4iCLYtu7OILbpj9EQHaHa?w=181&h=181&c=7&o=5&dpr=2&pid=1.7
                    `,
                    `
                   https://th.bing.com/th/id/OIP.VauuRrjXonQ9zAeBTQEmkwHaHa?w=178&h=178&c=7&o=5&dpr=2&pid=1.7
                    `
                ],
                selected: 1,
            };
        },
        beforeDestroy() {
            div.remove();
        }
    });
};
describe(
    "slides", () => {
        it("存在！", function () {
            expect(Slides).to.exist;
        });
        it("slides-item存在！", function () {
            expect(SlidesItem).to.exist;
        });
        it("接收selected=1，设置第一张图片为source的index=1的数据", function () {
            const vm = init(html1);
            const slides = vm.$children[0];
            expect(slides.selected === vm.selected).to.eq(true);
            expect(slides.$children[vm.selected].visible).to.eq(true);
            expect(slides.$children[vm.selected + 1].visible).to.eq(false);
            vm.$destroy();
        });
        it("autoplay 默认为true，自动正向播放,圆点按钮的active跟随当前的selected变化", function (done) {
            this.timeout(15000);
            const vm = init(html1);
            const slides = vm.$children[0];
            setTimeout(
                () => {
                    expect(slides.selected === 1).to.eq(false);
                    expect(slides.selected).to.eq(slides.$children[0].selected);
                    expect(slides.$children[2].visible).to.eq(true);
                    expect(slides.$children[1].visible).to.eq(false);
                    const {dots} = slides.$refs;
                    expect(dots[slides.selected].classList.contains("active")).to.eq(true);
                    vm.$destroy();
                    done();
                }, 3500
            );
            expect(slides.autoplay).to.eq(true);
            expect(slides.reverse).to.eq(false);
            expect(slides.selected === 1).to.eq(true);
            expect(slides.$children[1].visible).to.eq(true);
            expect(slides.$children[2].visible).to.eq(false);
            slides.$children.map(
                child => expect(child.reverse).to.eq(false)
            );
            setTimeout(
                () => {
                    const {dots} = slides.$refs;
                    expect(dots[slides.selected].classList.contains("active")).to.eq(true);
                }, 0
            );
        });
        it("设置reverse=true,反向播放！", function (done) {
            this.timeout(15000);
            const vm = init(html2);
            const slides = vm.$children[0];
            setTimeout(
                () => {
                    expect(slides.selected === 1).to.eq(false);
                    expect(slides.$children[0].visible).to.eq(true);
                    vm.$destroy();
                    done();
                }, 3500
            );
            expect(slides.reverse).to.eq(true);
            slides.$children.map(
                child => expect(child.reverse).to.eq(true)
            );
            expect(slides.$children[0].visible).to.eq(false);
            expect(slides.$children[1].visible).to.eq(true);
        });
        it("鼠标onmouseenter,播放停止，onmouseleave重新开始播放！", function (done) {
            const vm = init(html1);
            const slides = vm.$children[0];
            const evt1 = new Event("mouseenter");
            const evt2 = new Event("mouseleave");
            const window = slides.$el.querySelector(".yv-slides-window");
            setTimeout(
                () => {
                    expect(slides.timer > 0).to.eq(true);
                    window.dispatchEvent(evt1);
                    vm.$nextTick(
                        () => {
                            expect(slides.timer).to.eq(undefined);
                            window.dispatchEvent(evt2);
                            vm.$nextTick(
                                () => {
                                    expect(slides.timer > 0).to.eq(true);
                                    vm.$destroy();
                                    done();
                                }
                            );
                        }
                    );
                }, 0
            );
        });
        it("下面的按钮，点击可以关闭自动播放，同时切换到对应的图片视野。", function (done) {
            const vm = init(html1);
            const slides = vm.$children[0];
            setTimeout(
                () => {
                    const {dots} = slides.$refs;
                    expect(slides.selected).to.eq(1);
                    expect(slides.timer > 0).to.eq(true);
                    expect(dots[1].classList.contains("active")).to.eq(true);
                    expect(slides.$children[0].visible).to.eq(false);
                    expect(slides.$children[1].visible).to.eq(true);

                    dots[0].click();
                    slides.$nextTick(
                        () => {
                            expect(slides.selected).to.eq(0);
                            expect(slides.timer).to.eq(undefined);
                            expect(dots[1].classList.contains("active")).to.eq(false);
                            expect(dots[0].classList.contains("active")).to.eq(true);
                            expect(slides.$children[0].visible).to.eq(true);
                            expect(slides.$children[1].visible).to.eq(false);
                            vm.$destroy();
                            done();
                        }
                    );
                }, 0
            );
        });
        it("点击左箭头可以,终止自动播放，切换到上一张。并且为反向动画设置，item的reverse为true", function (done) {
            const vm = init(html1);
            const slides = vm.$children[0];
            setTimeout(
                () => {
                    const {pre} = slides.$refs;
                    expect(slides.selected).to.eq(1);
                    expect(slides.timer > 0).to.eq(true);
                    expect(slides.$children[0].visible).to.eq(false);
                    expect(slides.$children[1].visible).to.eq(true);
                    expect(slides.$children[0].reverse).to.eq(false);
                    expect(slides.$children[1].reverse).to.eq(false);

                    pre.click();
                    slides.$nextTick(
                        () => {
                            expect(slides.selected).to.eq(0);
                            expect(slides.timer).to.eq(undefined);
                            expect(slides.$children[0].visible).to.eq(true);
                            expect(slides.$children[0].reverse).to.eq(true);
                            expect(slides.$children[1].reverse).to.eq(true);
                            expect(slides.$children[1].visible).to.eq(false);
                            vm.$destroy();
                            done();
                        }
                    );
                }, 0
            );
        });
        it("点击右箭头箭头可以,终止自动播放，切换到下一张。并且为正向向动画设置，item的reverse为false", function (done) {
            const vm = init(html2);
            const slides = vm.$children[0];
            setTimeout(
                () => {
                    const {next} = slides.$refs;
                    expect(slides.selected).to.eq(1);
                    expect(slides.timer > 0).to.eq(true);
                    expect(slides.$children[2].visible).to.eq(false);
                    expect(slides.$children[1].visible).to.eq(true);
                    expect(slides.$children[2].reverse).to.eq(true);
                    expect(slides.$children[1].reverse).to.eq(true);
                    next.click();
                    slides.$nextTick(
                        () => {
                            expect(slides.selected).to.eq(2);
                            expect(slides.timer).to.eq(undefined);
                            expect(slides.$children[2].visible).to.eq(true);
                            expect(slides.$children[2].reverse).to.eq(false);
                            expect(slides.$children[1].reverse).to.eq(false);
                            expect(slides.$children[1].visible).to.eq(false);
                            vm.$destroy();
                            done();
                        }
                    );
                }, 0
            );
        });
    }
);