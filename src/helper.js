const scrollY = () => {
    return window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
        || window.scrollY
        || 0;
};
const scrollX = () => {
    return window.pageXOffset
        || document.documentElement.scrollLeft
        || document.body.scrollLeft
        || window.scrollX
        || 0;
};
export {scrollY,scrollX};