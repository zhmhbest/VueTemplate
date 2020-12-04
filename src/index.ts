// 加载通用设置
import './index.scss'
// @ts-ignore
document.querySelector("head link[rel='shortcut icon']").href = require("./favicon.ico").default;
// @ts-ignore
document.querySelector("head title").innerHTML = "标题";


// 应用Vue
import Vue from 'vue'
const App = require('./App').default;
new Vue({
    el: '#app',
    components: {App},
    template: '<App/>'
});
