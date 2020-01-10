<template>
    <div class="yv-row" :style="getStyle" :align="align" :justify="justify">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            gutter: [Number, String],
            align: {
                type: String,
                validator(val) {
                    return ["up", "down", "center"].indexOf(val) >= 0;
                }
            },
            justify: {
                type: String,
                validator(val) {
                    return ["left", "right", "center"].indexOf(val) >= 0;
                }
            }
        },
        mounted() {
            // console.log(this.$children);
            //父元素想传值给子组件，在mounted事件，同时，想设置的值设置在子组件的data属性内。
            this.gutter &&
            this.$children.forEach(
                vm => vm.gutter = this.gutter
            );
        },
        computed: {
            getStyle() {
                const {gutter} = this;
                return gutter && {
                    marginLeft: `-${gutter / 2}px`,
                    marginRight: `-${gutter / 2}px`,
                };
            }
        }
    };
</script>


<style lang="scss" scoped>
    .yv-row {
        display: flex;
        flex-wrap: wrap;
        &[justify='left'] {
            justify-content: flex-start;
        }

        &[justify='right'] {
            justify-content: flex-end;
        }

        &[justify='center'] {
            justify-content: center;
        }

        &[align='up'] {
            align-items: flex-start;
        }

        &[align='down'] {
            align-items: flex-end;
        }

        &[align='center'] {
            align-items: center;
        }
    }
</style>