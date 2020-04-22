<template>
    <div class="yv-date-picker">
        <y-popover position="bottom">
            <Input type="text" :value="formatValue"/>
            <template v-slot:content>
                <div class="yv-date-picker-wrapper">
                    <div class="yv-date-picker-nav">
                        <y-icon icon="big-left"
                                v-if="control[panel]>=1"
                                @click="toPrevYear"
                                class="yv-date-picker-nav-bar"></y-icon>
                        <y-icon icon="left" v-if="control[panel]>=2"
                                @click="toPrevMonth"
                                class="yv-date-picker-nav-bar"></y-icon>
                        <p class="yv-date-picker-nav-bars">
                        <span @click="onYearClick"
                              v-if="control[panel]>=1">
                            {{selected[0]+"年"}}
                        </span>
                            <span @click="onMonthClick"
                                  v-if="control[panel]>=2">
                            {{selected[1]+1+"月"}}
                        </span>
                        </p>
                        <y-icon icon="right" v-if="control[panel]>=2"
                                @click="toNextMonth"
                                class="yv-date-picker-nav-bar"></y-icon>
                        <y-icon icon="big-right" v-if="control[panel]>=1"
                                @click="toNextYear"
                                class="yv-date-picker-nav-bar"></y-icon>
                    </div>
                    <div class="yv-date-picker-panel">
                        <div v-if="panel==='year'">
                            年
                        </div>
                        <div v-else-if="panel==='month'">
                            月
                        </div>
                        <table v-else class="yv-date-picker-panel-table">
                            <thead>
                            <tr>
                                <td v-for="week in weeks" :key="week">
                                    {{week}}
                                </td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="n in 6" :key="n+'ind'">
                                <td v-for="day in days.slice((n-1)*7,(n-1)*7+7)"
                                    :class="daysClasses(day)"
                                    @click="onDayClick(day)"
                                >
                                    {{day.getDate()}}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="yv-date-picker-actions">
                        <p v-if="panel==='day'">今天</p>
                        <p v-else>
                            <y-button @click="panel='day'">返回</y-button>
                        </p>
                    </div>
                </div>
            </template>
        </y-popover>
    </div>
</template>

<script>
    import YPopover from "../popvoer/popover";
    import Input from "../input/input";
    import YIcon from "../svg/svg";
    import YTable from "../table/table";
    import YButton from "../button/button";

    export default {
        components: {
            YPopover, Input, YIcon, YTable, YButton
        },
        name: "v-date-picker.vue",
        props: {
            value: {
                type: Date, default: () => new Date()
            }
        },
        data() {
            return {
                panel: "day",  //3，'default',2,'month'，1，'day'
                selected: undefined,
                weeks: ["日", "一", "二", "三", "四", "五", "六"],
                control: {
                    day: 3, month: 2, year: 1
                }
            };
        },
        computed: {
            days() {
                return this.getMonthDays(new Date(...this.selected));
            },
            valueDate() {
                return this.selected = this.getDateDetail(this.value);
            },
            formatValue() {
                const arr = [...this.valueDate];
                arr[1] += 1;
                return arr.join("-");
            },
        },

        mounted() {
            console.log(this.value.getTime());
        },
        watch: {
            panel: function x() {
                console.log(this.panel, 1);
            }
        },
        methods: {
            onYearClick() {
                this.panel = "year";
            },
            onMonthClick() {
                this.panel = "month";
            },
            getMonthFirstDay(time) {
                const [year, month] = this.getDateDetail(time);
                // const firstDay = time.setDate(1);  //可以是1-28的任何一天
                // const firstWeek = time.getDay() //0-6，0是周日
                //time.setMonth(time.getMonth() + 1); //setMonth的加减法，就是加减当前月份的天数
                // const lastDay = time.setDate(0);
                return new Date(year, month, 1);
            },
            getDateDetail(date) {
                const year = date.getFullYear(),
                    month = date.getMonth(),
                    day = date.getDate();
                return [year, month, day];
            },
            getMonthDays(time) {
                const firstDay = this.getMonthFirstDay(time),
                    week = firstDay.getDay(),
                    lastMonthEndDay = new Date(firstDay.setDate(0)),
                    [year, month, day] = this.getDateDetail(lastMonthEndDay);
                console.log(year, 11111);
                const arr = [];
                for (let i = 0; i < 42; i++) {
                    arr.push(new Date(year, month, day - week + i + 1));
                }
                return arr;
            },
            daysClasses(date) {
                const dateData = this.getDateDetail(date),
                    nowDate = this.getDateDetail(new Date());
                let currentMonth, selected, now;
                if (dateData[1] === this.selected[1]) {
                    currentMonth = true;
                    if (dateData.find((n, i) =>
                        n !== this.valueDate[i]) === undefined) {
                        selected = true;
                    }
                }
                if (dateData.find((n, i) =>
                    n !== nowDate[i]) === undefined) {
                    console.log(dateData, nowDate);
                    now = true;
                }
                return {currentMonth, selected, now};
            },
            onDayClick(day) {
                console.log(day);
                this.$emit("select", day);
            },
            toPrevYear() {
                const arr = [...this.selected];
                arr[0] -= 1;
                this.selected = this.getDateDetail(new Date(...arr));
            },
            toPrevMonth() {
                const arr = [...this.selected];
                arr[1] -= 1;
                this.selected = this.getDateDetail(new Date(...arr));
            },
            toNextMonth() {
                const arr = [...this.selected];
                arr[1] += 1;
                this.selected = this.getDateDetail(new Date(...arr));
            },
            toNextYear() {
                const arr = [...this.selected];
                arr[0] += 1;
                this.selected = this.getDateDetail(new Date(...arr));
            },
        }
    };
</script>

<style scoped lang="scss">
    @import "../common";

    $padding1: -$small-padding;
    $padding2: -$middle-padding;


    .yv-date-picker {
        &-wrapper {
            /*//因为用了popoverr组件，弹出框有padding,需要消除？*/
            margin: $padding1 $padding2;
            white-space: normal;
        }

        &-nav {
            display: flex;
            align-items: center;
            /*justify-content: space-between;*/
            border-bottom: 1px solid $light-border-color;
            padding: .5em 0;

            &-bar {
                fill: $border-color;
                margin: 0 .5em;
                cursor: pointer;

                &:hover {
                    fill: #000;
                }
            }

            &-bars {
                display: inline-flex;
                margin: 0 auto;
                min-width: 8em;
                justify-content: space-between;

                > span {
                    margin: 0 8px;
                    cursor: pointer;
                }
            }
        }

        &-panel {
            border-bottom: 1px solid $light-border-color;
            white-space: nowrap;

            &-table {
                display: table;
                width: 100%;
                text-align: center;
                border-spacing: 0;
                border-collapse: collapse;
                vertical-align: middle;

                td {
                    padding: .5em;
                }

                tbody {
                    td {
                        color: #999;
                        cursor: pointer;

                        &.currentMonth {
                            color: #666;
                        }

                        &.selected {
                            background: $blue;
                            color: #fff;
                        }

                        &:hover {
                            background: $light-blue;
                        }

                        &.now {
                            border: 1px solid $blue;
                        }
                    }
                }
            }
        }

        &-actions {
            padding: .5em;
            text-align: center;
            color: $blue
        }
    }
</style>