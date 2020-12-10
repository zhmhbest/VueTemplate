/*
 * Vue VueRouter Vuex
 */
import Vue from 'vue'
if (undefined === Vue)
    // @ts-ignore
    Vue = require('vue'); // CDN修正

import VueRouter from 'vue-router'
if (undefined === VueRouter)
    // @ts-ignore
    VueRouter = require('vue-router'); // CDN修正

import Vuex from 'vuex'
if (undefined === Vuex)
    // @ts-ignore
    Vuex = require('vuex'); // CDN修正

export {
    Vue,
    VueRouter,
    Vuex
};


/*
 * Ant-Design
 */
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);


/*
 * Others
 */
import * as echarts from 'echarts'
import axios from 'axios'


// $$
export default {
    Vue,
    axios,
    echarts
}