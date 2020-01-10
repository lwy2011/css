<template>
    <div class="yv-col"
         :style="setPadding"
         :class="setClass"
    >
        <slot></slot>
    </div>
</template>

<script>
    const validator = arr => {
        if (!arr) return;
        if (!Array.isArray(arr)) {
            console.warn("medias字段值必须是数组！");
            return false;
        }
        let test = true;
        for (let obj of arr) {
            if (!obj || typeof obj !== "object" || !obj.condition) {
                console.warn("medias字段值不正确！");
                test = false;
                break;
            }
        }
        return test;
    };
    export default {
        props: {
            span: [Number, String],
            interval: [Number, String],
            medias: {
                type: Array,
                validator
            }
        },
        data() {
            return {
                gutter: 0,
                mediaClass: "",
                lock: false,
                mediaClasses: []
            };
        },
        mounted() {
            if (!validator(this.medias)) return;
            this.setMediaClasses();
            console.log(this.mediaClasses);
            window.addEventListener(
                "resize", this.createMedia
            );
            this.createMedia();
        },
        beforeDestroy() {
            window.removeEventListener(
                "resize", this.createMedia
            );
        },
        methods: {
            createMedia() {
                if (this.lock) return;
                this.lock = true;
                const {medias} = this;
                let i = 0;
                for (const media of medias) {
                    const mql = window.matchMedia(media.condition);
                    // console.log(mql);
                    if (mql.matches) {
                        this.mediaClass = this.mediaClasses[i];
                        break;
                    }
                    i++;
                }
                // console.log("lll");

                setTimeout(
                    ()=>this.lock = false,0
                )
                // this.lock = false;
                // for (const media of medias) {
                //     let ok = true;
                //     for (const val of media.condition) {
                //         const mql = window.matchMedia(val);
                //         if (!mql) {
                //             ok = false;
                //             break;
                //         }
                //         console.log(mql,val,ok);
                //     }
                //
                //     if (ok) {
                //         this.mediaClass = this.mediaClasses[i];
                //         break;
                //     }else{
                //         i++;
                //     }
                // }
            },
            setMediaClasses() {
                const {medias} = this;
                medias.map(
                    ({span, interval}, index) => {
                        let str = "";
                        span && (str += `media-${index + 1}-col-${span}`);
                        interval && (str += `  media-${index + 1}-interval-${interval}`);
                        this.mediaClasses.push(str);
                    }
                );
            }
        },

        computed: {
            setPadding() {
                const {gutter} = this;
                // console.log(gutter);
                return gutter &&
                    {
                        paddingLeft: gutter / 2 + "px",
                        paddingRight: gutter / 2 + "px"
                    };
            },
            setClass() {
                const {span, interval, mediaClass} = this;
                return [
                    span && `col-${span}`,
                    interval && `interval-${interval}`,
                    mediaClass
                ];
            }
        },
        watch: {
            medias: function () {
                this.setMediaClasses();
            }
        }
    };
</script>


<style lang="scss" scoped>
    .yv-col {
        @for $i from 1 through 24 {
            &.col-#{$i} {
                width: ($i/24)*100%;
            }
        }
        @for $i from 1 through 24 {
            &.interval-#{$i} {
                margin-left: ($i/24)*100%;
            }
        }
        @for $i from 1 through 10 {
            @for $c from 1 through 24 {
                &.media-#{$i}-col-#{$c} {
                    width: ($c/24)*100%;
                }
                &.media-#{$i}-interval-#{$c} {
                    margin-left: ($c/24)*100%;
                }
            }
        }
    }
</style>