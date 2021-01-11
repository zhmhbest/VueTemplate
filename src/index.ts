// 加载 样式、标题、图标
import "./index.scss"
import "./index.less"
const domLink: HTMLLinkElement = document.querySelector("head link[rel='shortcut icon']");
domLink.href = require("./favicon.ico").default;
const domTitle: HTMLTitleElement = document.querySelector("head title");
domTitle.innerHTML = "Hello Vue";


// 加载Vue
// import Vue from 'vue'
import { Vue } from "./library";
Vue.config.productionTip = false;
import App from "./App.vue"
import store from "./store"
import router from "./router"
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
