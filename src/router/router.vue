<template>
    <div class="yv-router">
        <slot v-if="false"></slot>
    </div>
</template>

<script>
    import Vue from "vue";

    export default {
        name: "router-v",
        props: {
            hash: {
                type: String, required: true
            },
        },
        data() {
            return {
                visible: false
            };
        },
        mounted() {
            this.setRouterTable(window);
        },
        methods: {
            onHashchange() {
                const {hash} = location.hash;
                let routerTable = window._routerTable;
                let key = Object.keys(routerTable).find(
                    key => "#" + key === hash
                );
                key = key || "404";
                let components = routerTable[key];
                console.log(key, "change", components);
                const Constructor = Vue.extend(components);
                new Constructor().$mount(document.body);
            },
            setRouterTable(storage) {
                const obj = Object.create(null);
                let routerTable = storage._routerTable;
                if (!routerTable) {
                    storage._routerTable =
                        routerTable = obj;
                    obj[404] = `<div>not found!!</div>`;
                    obj.onHashchange = this.onHashchange;
                    window.addEventListener(
                        "hashchange", obj.onHashchange
                    );
                }
                routerTable[this.hash] = this.$slots.default[0];
                console.log(routerTable,444,window._routerTable);
            }
        },
        beforeDestroy() {
            // window.removeEventListener(
            //     "hashchange", this.onHashchange
            // );
        }
    };
</script>

<style scoped lang="scss">
    .yv-router {

    }
</style>