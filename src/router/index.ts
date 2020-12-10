// import Vue from 'vue'
// import VueRouter from 'vue-router'
import { Vue, VueRouter } from '../library'
import { RouteConfig } from 'vue-router'
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [];
function addView(name: string, url?: string) {
    routes.push({
        path: undefined === url ? `/${name.toLowerCase()}` : `${url}`,
        name: name,
        component: () => import(`../views/${name}.vue`)
    });
}

addView('Home', '/');
addView('About');
addView('demo/Axios');
addView('demo/Echarts');
addView('demo/Com');

export default new VueRouter({
    routes
});