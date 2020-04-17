const expect = chai.expect;
import Vue from "vue";
import Upload from "../src/upluad/upload";

Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.component("y-upload", Upload);
const html = () => `
        <y-upload
                :action="action"
                :name="name"
                :ajax-callback="ajaxCallback"
                :files.sync="files"
                :max-size="3"
                @error="onFail"
        >
            <button id="trigger">upload</button>
        </y-upload>
`;
const init = ()=>{
    const div = document.createElement('div')
    div.innerHTML = html()
    document.body.appendChild(div)
    const vm = new Vue({
        el:div,
        data:{
            current: 1,
            action: "http://127.0.0.1:3000/image/upload",
            name: "avatar",
            ajaxCallback: res => {
                console.log(res);
                // const success = Math.random() > 0.5
                const {url,code} = JSON.parse(res.response)
                return {
                    url,
                    status:res.status,
                    errorMessage: code          //code
                };
            },
            files:[]
        },
        methods: {
            onFail(val){
                alert(val)
            }
        },
        beforeDestroy(){
            div.remove()
        }
    })
    return vm;
}
describe(
    "Upload", () => {
        it("存在！", function () {
            expect(Upload).to.exist;
        });
        it("可以上传图片", function () {
            const vm = init();
            const upload = vm.$children[0]
            upload.$el.querySelector('#trigger').click()
            expect(upload.input).to.exist;
            let file = new File(
                [new ArrayBuffer(2e+5)],
                'test-file.jpg',
                { lastModified: null, type: 'image/jpeg' })
                ,file1 = new File(
                [new ArrayBuffer(2e+5)],
                'test1-file.jpg',
                { lastModified: null, type: 'image/jpeg' });
//https://stackoverflow.com/questions/52078853/is-it-possible-to-update-filelist/52079109
            let list = new DataTransfer();
            list.items.add(file);
            list.items.add(file1);
            upload.input.files = list.files
        });
    }
);