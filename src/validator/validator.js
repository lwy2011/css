import validator from "validator";

class Validator {
    constructor(data, rules) {
        this.data = data;
        this.rules = rules;
        this.errors = {};
    }

    validateExist(data) {
        return data === 0 ? true :
            Boolean(data);    //无法检查 '  '空字符串
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
        return data.length ?
            NaN : data.length >= ruleMinLength;
    }

    validateMaxLength(data, ruleMaxLength) {
        return data.length ?
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

    validateSpaceOnly(data) {
        return data.match(/\S/);
    }

    validate() {
        this.rules.map(
            rule => {

            }
        );
    }
}

export default Validator;