import validator from "validator";

class Validator {
    constructor(data, rules, id) {
        this.data = data;
        this.id = id;
        this.rules = rules;
        this.errors = {};
    }

    validateExist(data) {
        return data === 0 ? true :Boolean(data)
        //无法检查 '  '空字符串
    }

    typesHelper() {
        return {
            object(data) {
                return data === null ? false :
                    typeof data === "object";
            },
            array(data) {
                return Array.isArray(data);
            },
            default(data, type) {
                return typeof data === type;
            },
        };
    }

    validateType(data, expectVal) {
        if (data || data === 0) {
            const fn = this.typesHelper()[expectVal];
            return fn ? fn(data) : this.typesHelper().default(data, expectVal);
        }
        return data === expectVal;
    }

    validateMinLength(data, ruleMinLength) {
        return !data.length ?
            NaN : data.length >= ruleMinLength;
    }

    validateMaxLength(data, ruleMaxLength) {
        return !data.length ?
            NaN : data.length <= ruleMaxLength;
    }

    validateRangeMin(num, ruleMin) {
        return num >= ruleMin;
    }

    validateRangeMax(num, ruleMax) {
        return num <= ruleMax;
    }

    validateUpperCase(data) {
        return data.match(/[A-Z]/);
    }

    validateNonEmpty(data) {   //test '    '的补救！
        return Boolean(data.match(/\S/));
    }

    ifError(error, type, keepGoOn) {
        this.errors[type] = error;
        // console.log(this.errors);
        if (!keepGoOn) {
            throw new Error(this.id + "test" + type + ":" + error);
        }
    }

    async initValidator() {
        return await (
            () => this.rules.map(
                ({type, expect, error, keepGoOn, validateFn}) => {
                    if (validateFn && validateFn(this.data) !== expect) {
                        this.ifError(error, type, keepGoOn);
                    }
                    if (!validateFn) {
                        const key = type.replace(type[0], type[0].toUpperCase());
                        if (!this["validate" + key](this.data,expect)) {
                            this.ifError(error, type, keepGoOn);
                        }
                    }
                }
            ))();
    }

    async validate() {
        await this.initValidator().catch(
            error => {
                console.log(error.message);
            }
        )
        //     .finally(
        //     () => {
        //         console.log("fn",this.errors);
        //         // return this; 这里return 木有用的
        //     }
        // );
        // console.log(res,1);[undefined, undefined, undefined, undefined, undefined, undefined] 1
        return this
    }
}

export default Validator;