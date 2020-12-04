// 加载通用设置
import './index.scss'
// @ts-ignore
document.querySelector("head link[rel='shortcut icon']").href = require("./favicon.ico").default;
// @ts-ignore
document.querySelector("head title").innerHTML = "Hello Vue";

// 应用Vue
import Vue from 'vue'
import App from "./App.vue"
import store from './store'
import router from './router'

console.log(store);
console.log(router);

new Vue({
    render: h => h(App)
}).$mount('#app');
