import validator from "validator";

class Validator {
    constructor(data, rules, id) {
        this.data = data;
        this.id = id;
        this.rules = rules;
        this.errors = {};
    }

    validateExist(data) {
        return data === 0 ? true : Boolean(data);
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
        if (!data.length)
            return this.dataTypeError("minLength", "length");
        return data.length >= ruleMinLength;
    }

    validateMaxLength(data, ruleMaxLength) {
        if (!data.length)
            return this.dataTypeError("maxLength", "length");
        return data.length <= ruleMaxLength;
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
        return data.match(/\S/);
    }

    ifError(error, type, keepGoOn) {
        this.errors[type] = error;
        // console.log(this.errors);
        if (!keepGoOn) {
            throw new Error(this.id + "test" + type + ":" + error);
        }
    }

    dataTypeError(type, attr) {
        return this.ifError(
            `数据格式错误,无${attr}属性`, type, false
        );
    }

    addValidator(name, fn) {
        this[name] = fn;
    }

    async initValidator() {
        await (
            () => this.rules.map(
                ({type, expect, error, keepGoOn}) => {
                    const key = type.replace(type[0], type[0].toUpperCase());
                    if (!this["validate" + key])
                        return this.ifError(
                            "没有匹配到内置的validator方法,请通过实例的addValidator的方法，添加自定义校验器方法！",
                            type, keepGoOn
                        );
                    if (!this["validate" + key](this.data, expect)) {
                        this.ifError(error, type, keepGoOn);
                    }
                }
            ))();
    }

    async validate() {
        await this.initValidator().catch(
            error => {
                console.log(error.message);
            }
        );
        return this;
    }
}

export default Validator;