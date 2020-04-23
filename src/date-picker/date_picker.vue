<template>
    <div class="yv-date-picker" @selectStart.prevent>
        <y-popover position="bottom" :before-close="initPanelType">
            <Input type="text" :value="formatValue"/>
            <template v-slot:content>
                <div class="yv-date-picker-wrapper" ref="wrapper">
                    <div class="yv-date-picker-nav">
                        <y-icon icon="big-left"
                                @click="toPrevYear"
                                class="yv-date-picker-nav-bar"></y-icon>
                        <y-icon icon="left"
                                @click="toPrevMonth"
                                class="yv-date-picker-nav-bar"></y-icon>
                        <p class="yv-date-picker-nav-bars" @click="onYearMonthClick">
                            <span>
                                {{selected[0]+"年"}}
                            </span>
                            <span>
                                {{selected[1]+1+"月"}}
                            </span>
                        </p>
                        <y-icon icon="right"
                                @click="toNextMonth"
                                class="yv-date-picker-nav-bar">
                        </y-icon>
                        <y-icon icon="big-right"
                                @click="toNextYear"
                                class="yv-date-picker-nav-bar">
                        </y-icon>
                    </div>
                    <div class="yv-date-picker-panel">
                        <div v-if="panel==='year'"
                             class="yv-date-picker-panel-year">
                            <div class="yv-date-picker-panel-year-result">
                                <p>
                                    <span v-for="n in 4" :key="n">
                                        {{yearAndMonth[n-1]}}
                                    </span>年
                                </p>
                                <p>
                                    <span>{{yearAndMonth[4]}}</span>月
                                </p>
                            </div>
                            <p class="yv-date-picker-panel-year-error">
                                {{errorMessage||"&nbsp"}}
                            </p>
                            <ul class=" yv-date-picker-panel-year-set">
                                <li v-for="n in 13"
                                    @click="setYearAndMonth(n-1)"
                                    :key="n"
                                    :class="{disabled:yearAndMonth.length<4&&n>10}"
                                >
                                    {{n-1}}
                                </li>
                                <li>
                                    <y-button @click="inputYearMonthConfirm"> ok</y-button>
                                    <y-icon icon="delete"
                                            @click="onDeleteYearAndMonth">
                                    </y-icon>
                                    <y-button @click="goBackToDayMode">返回</y-button>
                                </li>
                            </ul>
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
                                    @click="onDayClick(day,$event)"
                                >
                                    {{day.getDate()}}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="yv-date-picker-actions" v-if="panel==='day'">
                        <y-button @click="toToday">今天</y-button>
                        <y-button @click="onClear">清除</y-button>
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
            value: Date,
            minDate: Array,
            maxDate: Array,
        },
        data() {
            return {
                panel: "day",  //3，'default',2,'month'，1，'day'
                selected: undefined,
                weeks: ["日", "一", "二", "三", "四", "五", "六"],
                yearAndMonth: [],
                errorMessage: null,
                initPanelType: () => this.panel = "day"
            };
        },
        computed: {
            days() {
                return this.getMonthDays(new Date(...this.selected));
            },
            valueDate() {
                console.log(this.value, 666);
                return this.value && (this.selected = this.getDateDetail(this.value));
            },
            formatValue() {
                if (this.valueDate) {
                    const arr = [...this.valueDate];
                    return `${arr[0]}-${this.leftPad(arr[1]+1)}-${this.leftPad(arr[2]+1)}`;
                }
                return "";
            },
            fineTuningYearAndMonth() {//input mode 箭头联动功能
                let [year, month] = this.selected;
                let arr = [], n = 1000;
                while (n >= 1) {
                    const m = year % n;
                    arr.push((year - m) / n);
                    year = m;
                    n = n / 10;
                }
                arr.push(month + 1);
                console.log(arr, 888);
                return arr;
            },
            minDateTime() {
                return this.minDate && new Date(...this.minDate).getTime();
            },
            maxDateTime() {
                return this.maxDate && new Date(...this.maxDate).getTime();
            },
        },

        mounted() {
            // console.log(this.days);
            if (!this.selected) {
                this.selected = this.getDateDetail(new Date());
            }
        },
        watch: {
            panel: function x() {
                console.log(this.panel, 1, this.selected);
            },
            selected: function y() {
                this.panel === "year" && (this.yearAndMonth =
                    this.fineTuningYearAndMonth);
            }
        },
        methods: {
            leftPad(n){
                return n>9? n : '0'+n
            },
            setWrapperSize() {
                const {wrapper} = this.$refs;
                const {width, height} = wrapper.getBoundingClientRect();
                wrapper.style.width = width + "px";
                wrapper.style.height = height + "px";
            },
            onYearMonthClick() {
                this.setWrapperSize();
                const obj = {year: "day", day: "year"};
                this.panel = obj[this.panel];
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
                const arr = [];
                for (let i = 0; i < 42; i++) {
                    arr.push(new Date(year, month, day - week + i + 1));
                }
                return arr;
            },
            validate(dateTime) {
                if (
                    this.minDateTime && this.minDateTime > dateTime ||
                    this.maxDateTime && this.maxDateTime < dateTime
                ) return false;
                return true;
            },
            daysClasses(date) {
                const dateData = this.getDateDetail(date),
                    nowDate = this.getDateDetail(new Date());
                let currentMonth, selected, now, disabled;
                if (!this.validate(date.getTime())) {
                    disabled = true;
                } else if (dateData[1] === this.selected[1]) {
                    currentMonth = true;
                    if (this.valueDate && dateData.find((n, i) =>
                        n !== this.valueDate[i]) === undefined) {
                        selected = true;
                    }
                }
                if (dateData.find((n, i) =>
                    n !== nowDate[i]) === undefined) {
                    now = true;
                }
                return {currentMonth, selected, now, disabled};
            },
            closePopOver() {
                this.$children[0].close();
            },
            onDayClick(day, e) {
                if (e.target.classList.contains("disabled"))
                    return this.$emit("error",
                        {val: day, message: `${day}超出设置的时间范畴！`}
                    );
                this.$emit("select", day);
                this.closePopOver();
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
            onDeleteYearAndMonth() {
                this.errorMessage = null;
                this.yearAndMonth.pop();
            },
            setYearAndMonth(val) {
                this.errorMessage = null;
                const arr = this.yearAndMonth;
                if (arr.length < 4 && val > 9) {
                    return this.errorMessage = `${val}作为year的单次输入值不可大于9！`;
                } else if (arr.length === 4 && val === 0) {
                    return this.errorMessage = `${val}作为month的输入值不可为0！`;
                }
                arr.length < 5 ? arr.push(val) : arr.splice(4, 1, val);
            },
            inputYearMonthConfirm() {
                const [a, b, c, d, e] = this.yearAndMonth;
                if (!e) return this.errorMessage = "请先填写完整年月数据！";
                const year = a * 1000 + b * 100 + c * 10 + d, arr = [year, e - 1, 1];
                const test = arr.find((v, i) => v !== this.selected[i]) === undefined;
                setTimeout(() => this.panel = "day");
                //this.panel='day'分析源于这中间隔了很多的更新，其中的环节dom层没渲染，导致展示的
                if (test) return;
                this.selected = arr;
            },
            goBackToDayMode() {
                setTimeout(() => this.panel = "day");//不加定时器有bug
            },
            toToday() {
                this.selected = this.getDateDetail(new Date());
            },
            onClear() {
                this.$emit("clear");
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
            white-space: nowrap;
            padding: 1em;

            &-year {
                $size: 2em;

                .box {
                    display: inline-flex;
                    width: $size;
                    height: $size;
                    justify-content: center;
                    align-items: center;
                    border-radius: $border-radius;
                }

                &-result {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 14px;

                    > p {
                        margin: 0 .5em;

                        > span {
                            margin: 0 4px;
                            vertical-align: middle;
                            @extend .box;
                            border: 1px solid $border-color;
                        }
                    }
                }

                &-error {
                    font-size: 12px;
                    text-align: center;
                    color: $warn-color;
                }

                &-set {
                    list-style: none;
                    display: inline-flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    font-size: 20px;
                    margin: 8px 1em;

                    > li {
                        @extend .box;
                        cursor: pointer;
                        margin: 2px;
                        background: $light-black;
                        color: #fff;

                        &:hover {
                            background: $blue;
                        }

                        &.disabled {
                            @extend %disabled;
                            background: $border-color;
                        }

                        &:last-child {
                            width: 6em;
                            background: #fff;
                            border-bottom: 1px solid $border-color;
                            display: inline-flex;
                            justify-content: space-between;
                        }

                        > svg {
                            cursor: pointer;
                            fill: $warn-color;

                            &:hover {
                                opacity: .5;
                                transition: all 500ms;
                            }
                        }
                    }
                }
            }

            &-table {
                display: table;
                width: 100%;
                text-align: center;
                border-spacing: 0;
                border-collapse: collapse;
                vertical-align: middle;

                td {
                    padding: 4px;
                }

                tbody {
                    td {
                        color: #999;
                        cursor: pointer;
                        min-width: 2em;
                        justify-content: center;
                        align-items: center;

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

                        &.disabled {
                            @extend %disabled;
                        }
                    }
                }
            }
        }

        &-actions {
            border-top: 1px solid $light-border-color;
            padding: .5em;
            text-align: center;
            color: $blue;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
</style>