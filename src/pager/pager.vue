<template>
    <div class="yv-pager">
        <span class="yv-pager-item last"
              :class="{disabled:current === 1}"
              @click="onLastClick"
        >
            <y-icon icon="left"></y-icon>
        </span>
        <template v-for="(ind,index) in pages">
            <template v-if="ind !== '...'">
                <span :class="{active:ind === current}" class="yv-pager-item"
                      @click="onClickItem(ind)" :key="index">
                    {{ind}}
                </span>
            </template>
            <template v-else="ind === '...'">
                <span class="yv-pager-item  yv-pager-dots"
                      @click="onClickItem(ind)" :key="index">
                    <y-icon icon="dots"></y-icon>
                </span>
            </template>
        </template>

        <span class="yv-pager-item  next"
              :class="{disabled:current === total}"
              @click="onNextClick"
        >
            <y-icon icon="right"></y-icon>
        </span>
    </div>
</template>

<script>
    import YIcon from "../svg/svg";

    export default {
        name: "v-pager",
        components: {YIcon},
        props: {
            total: {
                type: Number,
                required: true
            },
            current: {
                type: Number,
                default: 1
            },
            onlyOneHidden: {
                type: Boolean,
                default: false
            }
        },
        data() {
            const {total, current} = this;
            const arr = [1, current - 2, current - 1, current, current + 1, current + 2, total]
                .filter(val => val > 0).sort((a, b) => a - b);
            const obj = {};
            arr.map(
                val => obj["ind" + val] = val
            );
            let arr1 = Object.keys(obj).map(
                key => obj[key]
            );
            const maxIndex = arr1.indexOf(total);
            if (maxIndex + 1 < arr1.length) {
                arr1 = arr1.slice(0, maxIndex + 1);
            }
            arr1 = arr1.reduce(
                (a, b) => {
                    const last = a.length ? a[a.length - 1] : 0;
                    if (last === "...") a.push(b);
                    if (b - last > 1) {
                        a = a.concat(["...", b]);
                    } else {
                        a.push(b);
                    }
                    return a;
                }, []
            );
            console.log(arr1);

            return {
                pages: this.updateView()
            };
        },
        computed: {
            currentUpdate() {

            }
        },
        watch: {
            current: function () {
                this.pages = this.updateView();
            }
        },
        methods: {
            onClickItem(val) {
                if (val === this.current) return;
                if (val !== "...") {
                    this.$emit("update:current", val);
                }
            },
            onLastClick() {
                if (this.current === 1) return;
                this.$emit("update:current", this.current - 1);
            },
            onNextClick() {
                if (this.current === this.total) return;
                this.$emit("update:current", this.current + 1);
            },
            updateView() {
                const {total, current} = this;
                const arr = [1, current - 2, current - 1, current, current + 1, current + 2, total]
                    .filter(val => val > 0).sort((a, b) => a - b);
                const obj = {};
                arr.map(
                    val => obj["ind" + val] = val
                );
                let arr1 = Object.keys(obj).map(
                    key => obj[key]
                );
                const maxIndex = arr1.indexOf(total);
                if (maxIndex + 1 < arr1.length) {
                    arr1 = arr1.slice(0, maxIndex + 1);
                }
                return arr1.reduce(
                    (a, b) => {
                        const last = a.length ? a[a.length - 1] : 0;
                        if (last === "...") a.push(b);
                        if (b - last > 1) {
                            a = a.concat(["...", b]);
                        } else {
                            a.push(b);
                        }
                        return a;
                    }, []
                );
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../common";

    .yv-pager {
        display: inline-flex;
        font-size: $small-font-size;

        &-item {
            @extend %border;
            @extend %border-radius;
            margin-left: 8px;
            display: inline-flex;
            padding: 0 .5em;
            cursor: pointer;
            align-items: center;
            min-width: 20px;
            height: 20px;

            &.active, &:hover {
                border-color: $blue;
                color: $blue;

                > svg {
                    fill: $blue;
                }
            }

            &.active {
                cursor: not-allowed;
            }
        }

        &-dots, &-item.last, &-item.next {
            width: 20px;
            padding: 0;
            border: none;
            justify-content: center;
        }

        &-item.last, &-item.next {
            background: $light-border-color;

            &.disabled {
                @extend %disabled;

                svg {
                    fill: darken($border-color, 20%);
                }
            }
        }

        &-item.last {
            margin-left: 0;
        }
    }
</style>