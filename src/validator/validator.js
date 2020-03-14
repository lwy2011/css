import validator from "validator";

class Validator {
    constructor(data, rules, id, prototypeFix) {
        this.data = data;
        this.id = id;
        this.rules = rules;
        this.errors = {};
        this.prototypeFix = prototypeFix;
    }

    validateExist(data) {
        return data === 0 ? true : Boolean(data);
        //无法检查 '  '空字符串
    }

    validateNonEmpty(data) {   //test '    '的补救！
        return data.match(/\S/);
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

    // findValidatorFromPrototype(fnName,prototype=this){
    //     if(prototype[fnName]) return prototype[fnName];
    //     if (prototype === Validator) return this.noValidatorError(fnName);
    //     this.findValidatorFromPrototype(fnName,Object.getPrototypeOf(prototype))
    // }
    async initValidator() {
        await (
            () => this.rules.map(
                ({type, expect, error, keepGoOn}) => {
                    const key = "validate" + type.replace(type[0], type[0].toUpperCase());
                    if (!this[key]) {
                        return this.ifError(
                            `没有匹配到内置的${key}方法,
                            请自行添加自定义校验器方法！`,
                            type, keepGoOn
                        );
                    }
                    if (!this[key](this.data, expect)) {
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