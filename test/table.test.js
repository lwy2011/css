const expect = chai.expect;

import Vue from "vue";
import Table from "../src/table/table";

Vue.config.devtools = false;
Vue.config.productionTip = false;
Vue.component('y-table',Table)

describe('Table',()=>{
    it("存在！", function () {
        expect(Table).to.exist
    });
})