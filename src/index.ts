// 加载通用设置
import "./index.scss"
// @ts-ignore
document.querySelector("head link[rel='shortcut icon']").href = require("./favicon.ico").default;
// @ts-ignore
document.querySelector("head title").innerHTML = "Hello Vue";

// 应用Vue
import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import router from "./router"
Vue.config.productionTip = false;

// Ant-Design
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
