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
const init = () => {
    const div = document.createElement("div");
    div.innerHTML = html();
    document.body.appendChild(div);
    const vm = new Vue({
        el: div,
        data: {
            current: 1,
            action: "http://127.0.0.1:3000/image/upload",
            name: "avatar",
            ajaxCallback: res => {
                // console.log(res);
                // const success = Math.random() > 0.5
                // const {url, code} = JSON.parse(res.response);
                const  now = new Date()
                while (new Date() - now <200){}
                return {
                    url: "testUrl",
                    status: 200,
                    errorMessage: "ok"          //code
                };
            },
            files: []
        },
        methods: {
            onFail(val) {
                alert(val);
            }
        },
        beforeDestroy() {
            div.remove();
        }
    });
    return vm;
};
const addFiles = (input) => {
    let file = new File(
        [new ArrayBuffer(2e+5)],
        "test-file.jpg",
        {lastModified: null, type: "image/jpeg"})
        , file1 = new File(
        [new ArrayBuffer(2e+5)],
        "test1-file.jpg",
        {lastModified: null, type: "image/jpeg"});
//https://stackoverflow.com/questions/52078853/is-it-possible-to-update-filelist/52079109
    let list = new DataTransfer();
    list.items.add(file);
    list.items.add(file1);
    input.files = list.files;
    const evt = new Event("change"); //这里需要主动触发，而老师的视频里却是自动触发，很奇怪
    input.dispatchEvent(evt);
    return {file, file1};
};
describe(
    "Upload", () => {
        it("存在！", function () {
            expect(Upload).to.exist;
        });
        it("可以上传图片", function (done) {
            const vm = init();
            const upload = vm.$children[0];
            upload.$el.querySelector("#trigger").click();
            expect(upload.input).to.exist;
            const {input} = upload;
            const {file, file1} = addFiles(input);
            vm.$nextTick(
                () => {
                    const {files} = vm;
                    setTimeout(
                        () => {
                            expect(files[0].url).to.eq('testUrl');
                            expect(files[1].url).to.eq('testUrl');
                            expect(files[0].status).to.eq(200);
                            expect(files[1].status).to.eq(200);
                            upload.$el.querySelectorAll("img").forEach(
                                img=>expect(img.getAttribute('src'))
                                    .to.eq('testUrl')
                            )
                            vm.$destroy()
                            done();
                        },200
                    );
                    expect(files[0].name).to.eq(file.name);
                    expect(files[0].status).to.eq(1);
                    expect(files[1].name).to.eq(file1.name);
                    expect(files[1].status).to.eq(1);
                    expect(upload.$el.querySelector("use")
                        .getAttribute('xlink:href')).to.eq('#i-loading')

                }
            );
        });
    }
);