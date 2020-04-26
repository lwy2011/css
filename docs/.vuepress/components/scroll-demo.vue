<template>
    <div style="margin:1em;">
        <div style="height:450px;display:inline-flex;border:1px solid red;marginBottom: 2em;">
            <y-scroll>
                <div style="border:1px solid;width: 500px;">
                    <div v-for="n in 35" :key="n" style="background:burlywood;margin:1em 0;">{{n}}</div>
                </div>
            </y-scroll>
        </div>
        <div style="height: 300px;margin:1em;">
            <div class="bar" style="width: 80px;height: 80px;z-index:3;
                background: brown;right:10px;border-radius: 4px;
                position: absolute" draggable="true">
                drap 事件模拟测试失败
            </div>
            <div class="bar1" style="width: 60px;height: 70px;
                z-index:30;background: burlywood;border-radius: 6px;position: absolute">
                mouse 事件模拟测试
            </div>
        </div>

        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>

<script>

    import YScroll from "../../../src/scroll/scroll";

    export default {
        components: {
            YScroll,
        },
        mounted() {
            //drag事件测试：
            let dragstartXY, bar = document.querySelector(".bar");
            bar.addEventListener("dragstart", e => {
                const {screenX: x, screenY: y} = e;
                dragstartXY = {x, y};
                bar.style.opacity = ".2";
            });

            bar.addEventListener("dragend", e => {
                e.preventDefault();
                const deltaX = e.screenX - dragstartXY.x, deltaY = e.screenY - dragstartXY.y;
                const {style} = bar, {top, left} = window.getComputedStyle(bar);
                style.top = parseInt(top) + deltaY + "px";
                style.left = parseInt(left) + deltaX + "px";
                console.log(parseInt(top), deltaX, window.getComputedStyle(e.target).top);
            });

            //mouse事件测试
            let bar1 = document.querySelector(".bar1"), start,
                startX, startY, deltaX, deltaY;
            let translateX = 0,translateY=0
            bar1.addEventListener(
                "mousedown", e => {
                    start = true;
                    console.log("bar1 down");
                }
            );
            document.addEventListener(
                "mousedown", e => {
                    if (start) {
                        console.log("w down", start);
                        const {screenX: x, screenY: y} = e;
                        startX = x;
                        startY = y;
                    }
                }
            );
            document.addEventListener(
                "mousemove", e => {
                    if (start) {
                        console.log("w down", start);
                        const {screenX: x, screenY: y} = e;
                        deltaY = y - startY;
                        deltaX = x - startX;
                        translateX += deltaX;
                        translateY += deltaY
                        bar1.style.transform = `
                            translate(${translateX}px,${translateY}px)
                        `;

                        startY = y;
                        startX = x;
                    }
                }
            );
            document.addEventListener(
                "mouseup", e => {
                    start = false;
                    console.log("w up", start);
                }
            );
        },
        data() {
            return {
                content: `
                <y-icon icon="setting"></y-icon>
                <y-icon icon="loading" loading="true"></y-icon>
                <y-icon icon="warn"></y-icon>
                <y-icon icon="left"></y-icon>
                `,
                loading: false
            };
        }
    };
</script>

