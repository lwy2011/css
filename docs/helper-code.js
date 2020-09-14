const getCode = path => {
    return require("!!raw-loader!./.vuepress/components/" + path);
};

export default getCode;