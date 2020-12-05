import VueRouter, { RouteConfig } from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)
const routes: Array<RouteConfig> = [];
function addView(name: string, url?: string) {
    routes.push({
        path: undefined===url ? `/${name.toLowerCase()}` : `${url}`,
        name: name,
        component: () => import(`../views/${name}.vue`)
    });
}

addView('Home', '/');
addView('About');

export default new VueRouter({
    routes
});