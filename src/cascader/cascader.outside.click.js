const items = [];
const callback = (e) => {
    if (items.length){
        const {target} = e;
        // console.log(1);
        items.map(
            ({el, fn}) => {
                if (target === el || el.contains(target)) return;
                // console.log(el, "outside",items);
                fn();
            }
        );
    }
};
document.addEventListener(
    "click", callback
);

export default {
    bind: function (el, binding) {
        items.push({el, fn: binding.value});
    }
};