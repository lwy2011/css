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
            this.dragstart = e => {
                const {screenX: x, screenY: y} = e;
                dragstartXY = {x, y};
                bar.style.opacity = ".2";
            };
            bar.addEventListener("dragstart", this.dragstart);
            this.dragend = e => {
                e.preventDefault();
                const deltaX = e.screenX - dragstartXY.x, deltaY = e.screenY - dragstartXY.y;
                const {style} = bar, {top, left} = window.getComputedStyle(bar);
                style.top = parseInt(top) + deltaY + "px";
                style.left = parseInt(left) + deltaX + "px";
            };
            bar.addEventListener("dragend", this.dragend);

            //mouse事件测试
            let bar1 = document.querySelector(".bar1"), start,
                startX, startY, deltaX, deltaY;
            let translateX = 0, translateY = 0;
            this.mousedown = e => {
                start = true;
                const {screenX: x, screenY: y} = e;
                startX = x;
                startY = y;
            };
            bar1.addEventListener(
                "mousedown", this.mousedown
            );
            this.mousemove = e => {
                console.log("w down", start);
                if (start) {
                    // console.log("w down", start);
                    const {screenX: x, screenY: y} = e;
                    deltaY = y - startY;
                    deltaX = x - startX;
                    translateX += deltaX;
                    translateY += deltaY;
                    bar1.style.transform = `
                            translate(${translateX}px,${translateY}px)
                        `;

                    startY = y;
                    startX = x;
                }
            };

            document.addEventListener(
                "mousemove", this.mousemove
            );
            this.mouseup = () => start = false;
            document.addEventListener(
                "mouseup", this.mouseup
            );
        },
        beforeDestroy() {
            document.removeEventListener(
                "mousemove", this.mousemove
            );
            document.removeEventListener(
                "mouseup", this.mouseup
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
        },
    };
</script>

