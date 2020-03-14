<template>
    <div class="yv-pager">
        <span class="yv-pager-item last">
            <y-icon icon="left"></y-icon>
        </span>
        <span v-for="ind in pages"
              :key="ind"
              class="yv-pager-item"
              :class="{active:ind === current}"
              @click="onClickItem(ind)">
            {{ind}}
        </span>
        <span class="yv-pager-item  next">
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
                pages: arr1
            };
        },
        computed: {
            currentUpdate() {

            }
        },
        methods: {
            onClickItem(val) {
                if (val === this.current) return;
                if (val !== "...") {
                    this.$emit("update:current", val);
                }
            },
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
            padding: 4px .5em;
            cursor: pointer;
            align-items: center;

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
    }
</style>