/* import "@babel/polyfill"
(function talk() {
    console.info("hello world")
}
)();
let p = new Promise(() => {
    console.info("你好世界")
})*/
import { add } from "./math.js";
add(1, 2);
/*  同步加载
import _ from "lodash";
console.log(_.join("a","b","c","d"),"~~~~");
console.log(_.join("a","b","c","d"),"~~~~");
console.log(_.join("a","b","c","d"),"~~~~");
console.log(_.join("a","b","c","d"),"~~~~");
*/

//异步加载
function getComponent() {
    return import(/* webpackChunkName: "lodash" */"lodash").then((
        { default: _ }
    ) => {
        let ele = document.createElement("div");
        ele.innerText = _.join(["a", "b", "c", "d"], "~~~~");
        return ele;
    })
}
document.addEventListener("click", () => {
    getComponent().then((ele) => {
        document.body.appendChild(ele);
    })
})