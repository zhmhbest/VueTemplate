// import Vue from 'vue'
// import Vuex from 'vuex'
import { Vue, Vuex } from '../library'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        windowWidth: 0 as number,
        windowHeight: 0 as number,
        locationHash: '' as string
    },
    mutations: {
        windowRect(state) {
            state.windowWidth = document.documentElement.clientWidth;
            state.windowHeight = document.documentElement.clientHeight;
        },
        locationHash(state) {
            const s = window.location.hash.toString();
            state.locationHash = s.substr(1, s.length - 1);
        }
    },
    actions: {
    },
    modules: {
    }
});

export default store;