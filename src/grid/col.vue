<template>
    <div class="yv-col"
         :style="setPadding"
         :class="[span&&`col-${span}`,interval&&`interval-${interval}`]">
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
                return this.gutter &&
                    {
                        paddingLeft: `${this.gutter / 2}px`,
                        paddingRight: `${this.gutter / 2}px`
                    };
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