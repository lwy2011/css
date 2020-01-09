<template>
    <div class="yv-col"
         :style="setPadding"
         :class="setClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            span: [Number, String],
            interval: [Number, String]
        },
        data() {
            return {
                gutter: 0
            };
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
                const {span, interval} = this;
                return [
                    span && `col-${span}`,
                    interval && `interval-${interval}`
                ];
            }
        }
    };
</script>


<style lang="scss" scoped>
    .yv-col {
        @for $i from 1 through 120 {
            &.col-#{$i} {
                width: ($i/120)*100%;
            }
        }
        @for $i from 1 through 120 {
            &.interval-#{$i} {
                margin-left: ($i/120)*100%;
            }
        }
    }
</style>