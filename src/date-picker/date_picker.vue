<template>
    <div class="yv-date-picker">
        <y-popover position="bottom">
            <Input type="text"/>
            <template v-slot:content>
                <div class="yv-date-picker-wrapper">
                    <div class="yv-date-picker-nav">
                        <y-icon icon="big-left" v-if="control[panel]>=1"
                                class="yv-date-picker-nav-bar"></y-icon>
                        <y-icon icon="left" v-if="control[panel]>=2"
                                class="yv-date-picker-nav-bar"></y-icon>
                        <p class="yv-date-picker-nav-bars">
                        <span @click="onYearClick"
                              v-if="control[panel]>=1">
                            {{selected.year+"年"}}
                        </span>
                            <span @click="onMonthClick"
                                  v-if="control[panel]>=2">
                            {{selected.month+1+"月"}}
                        </span>
                        </p>
                        <y-icon icon="right" v-if="control[panel]>=2"
                                class="yv-date-picker-nav-bar"></y-icon>
                        <y-icon icon="big-right" v-if="control[panel]>=1"
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
        props: {},
        data() {
            return {
                panel: "day",  //3，'default',2,'month'，1，'day'
                selected: undefined,
                days: undefined,
                weeks: ["日", "一", "二", "三", "四", "五", "六"],
                year: undefined, month: undefined, day: undefined,
                control: {
                    day: 3, month: 2, year: 1
                }
            };
        },
        computed: {},
        mounted() {
            this.selected = this.getDateDetail(new Date());
            this.getMonthDays(new Date());
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
            getMonthDayRange(time) {
                const firstDay = time.setDate(1);  //可以是1-28的任何一天
                // const firstWeek = time.getDay() //0-6，0是周日
                time.setMonth(time.getMonth() + 1); //setMonth的加减法，就是加减当前月份的天数
                const lastDay = time.setDate(0);
                return {firstDay: new Date(firstDay), lastDay: new Date(lastDay)};
            },
            getDateDetail(date) {
                const year = date.getFullYear(),
                    month = date.getMonth(),
                    day = date.getDate(),
                    week = date.getDay();
                return {year, month, day, week};
            },
            getMonthDays(time) {
                const {firstDay, lastDay} = this.getMonthDayRange(time);
                const firstDayData = this.getDateDetail(firstDay),
                    lastDayData = this.getDateDetail(lastDay);
                const {week, year, month} = firstDayData,
                    lastMonthEndDay = new Date(firstDay.setDate(0)),
                    lastMonthEndDayData = this.getDateDetail(lastMonthEndDay);
                const arr = [];
                {
                    const {year, month, day} = lastMonthEndDayData;
                    for (let i = 0; i < week; i++) {
                        arr.push(new Date(year, month, day - week + i + 1));
                    }
                }
                for (let i = 1; i <= lastDayData.day; i++) {
                    arr.push(new Date(year, month, i));
                }
                const {length} = arr;
                for (let i = 1; i <= 42 - length; i++) {
                    arr.push(new Date(year, month + 1, i));
                }
                this.days = arr;
            },
            daysClasses(date) {
                const dateData = this.getDateDetail(date);
                return {
                    currentMonth: dateData.month === this.selected.month,
                    currentDay: !Object.keys(this.selected).find(
                        key => this.selected[key] !== dateData[key]
                    )
                };
            }
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
            justify-content: space-between;
            border-bottom: 1px solid $light-border-color;
            padding:.5em 0;
            &-bar {
                fill: $border-color;
                margin: 0 .5em;
                cursor: pointer;

                &:hover {
                    fill: #000;
                }
            }

            &-bars {
                margin: 0 1em;

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
                        color: $border-color;

                        &.currentMonth {
                            color: #666;
                        }

                        &.currentDay {
                            color: $blue;
                        }
                    }
                }
            }
        }

        &-actions {
            padding: .5em;text-align: center;color:$blue
        }
    }
</style>