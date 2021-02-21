// import Vue from 'vue'
// import VueRouter from 'vue-router'
import { Vue, VueRouter } from '../library'
import { RouteConfig } from 'vue-router'
Vue.use(VueRouter);

const routerTableHolder: Array<RouteConfig> = [];
function addView(name: string, url?: string) {
    routerTableHolder.push({
        path: undefined === url ? `/${name.toLowerCase()}` : `${url}`,
        name: name.replace(/\//, '_'),
        component: () => import(`../views/${name}.vue`),
        meta: {
            opened: false
        }
    });
}
import RouterTable from './table.json5'
for(let item of RouterTable) {
    if (item instanceof Object) {
        addView(item['view'], item['path']);
    } else if ('string' === typeof item) {
        addView(item);
    }
}

// console.log(routerTableHolder);
const router = new VueRouter({ routes: routerTableHolder });
export default router;

// // RouterOpen
// router.beforeEach((to: RouteConfig, from: RouteConfig, next) => {
//     if (to.meta['opened']) {
//         // 已打开
//         next();
//         return;
//     } else {
//         // 未打开
//         next();
//         setTimeout(() => { to.meta['opened'] = true; }, 100);
//     }
// });

Vue.mixin({
    beforeRouteLeave: function (this: Vue, to, from, next) {
        // from文件已关闭：暴力移除keep-alive缓存
        // https://blog.csdn.net/qq_38402659/article/details/101353276
        if (!from.meta['opened'] && this.$vnode.componentOptions) {
            const key = this.$vnode.key == null
                // @ts-ignore
                ? this.$vnode.componentOptions.Ctor.cid + (this.$vnode.componentOptions.tag ? `::${this.$vnode.componentOptions.tag}` : '')
                : this.$vnode.key;
            // @ts-ignore
            const cache = this.$vnode.parent.componentInstance.cache;
            // @ts-ignore
            const keys = this.$vnode.parent.componentInstance.keys;
            // 清除缓存
            delete cache[key];
        }

        // 页面跳转
        next();

        // to文件未打开
        if (!to.meta['opened']) {
            setTimeout(() => { to.meta['opened'] = true; }, 100);
        }
    }
});