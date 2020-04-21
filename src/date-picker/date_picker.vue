<template>
    <div class="yv-date-picker">
        <y-popover position="bottom">
            <Input type="text"/>
            <template v-slot:content>
                <div class="yv-date-picker-nav">
                    <y-icon icon="big-left" class="yv-date-picker-nav-bar"></y-icon>
                    <y-icon icon="left" class="yv-date-picker-nav-bar"></y-icon>
                    <p class="yv-date-picker-nav-bars">
                        <span @click="onYearClick">{{now.getFullYear()+"年"}}</span>
                        <span @click="onMonthClick">{{now.getMonth()+1+"月"}}</span>
                    </p>
                    <y-icon icon="right" class="yv-date-picker-nav-bar"></y-icon>
                    <y-icon icon="big-right" class="yv-date-picker-nav-bar"></y-icon>
                </div>
                <div class="yv-date-picker-panel">
                    <div v-if="panel==='year'"></div>
                    <div v-if="panel==='month'"></div>
                    <table v-if="panel==='default'" class="yv-date-picker-panel-table">
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
                                {{day.val}}
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div class="yv-date-picker-actions">
                    <p v-if="panel='default'">今天</p>
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

    export default {
        components: {
            YPopover, Input, YIcon, YTable
        },
        name: "v-date-picker.vue",
        props: {
            date:Number,
        },
        data() {
            return {
                panel: "default",
                now: new Date(),
                days: undefined,
                weeks: ["日", "一", "二", "三", "四", "五", "六"],
                // year:new Date().getFullYear(),
                // month:new Date().getMonth(),
                // date:new Date().getDate(),
            };
        },
        computed: {

        },
        mounted() {
            const {date} = this
            console.log(date);
            this.getMonthDays(new Date());
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
            getMonthDays(time) {
                const {firstDay, lastDay} = this.getMonthDayRange(time);
                const week = firstDay.getDay(), end = lastDay.getDate(),
                    lastMonthDay = new Date(time.setDate(0)).getDate();
                const arr = [];
                for (let i = 0; i < week; i++) {
                    arr.push({val: lastMonthDay - week + i + 1, type: "last"});
                }
                for (let i = 1; i <= end; i++) {
                    arr.push({val: i, type: "current"});
                }
                const {length} = arr;
                for (let i = 1; i <= 42 - length; i++) {
                    arr.push({val: i, type: "next"});
                }
                this.days = arr;
            },
            daysClasses(day){
                return {
                    currentMonth:day.type==='current',
                    currentDay:day.val=== this.now.getDate()
                }
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "../common";

    .yv-date-picker {
        &-nav {
            display: flex;
            align-items: center;
            justify-content: space-between;

            &-bar {
                fill: $border-color;
                margin: 0 .5em;
                cursor: pointer;
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
            &-table {
                display: table;
                width: 100%;

                tbody {
                    td {
                        color: $border-color;

                        &.currentMonth {
                            color: #666;
                        }
                        &.currentDay{
                            color:$blue;
                        }
                    }
                }
            }
        }
    }
</style>