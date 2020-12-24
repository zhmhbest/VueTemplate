<template>
    <div id="app" class="row-container">
        <div class="frame-top">
            <a-button type="primary" value="small" href="#/">Home</a-button>
            <a-button type="primary" value="small" href="#/about"
                >About</a-button
            >
            <a-button type="primary" value="small" href="#/demo/axios">demo-axios</a-button>
            <a-button type="primary" value="small" href="#/demo/echarts">demo-echarts</a-button>
            <a-button type="primary" value="small" href="#/demo/com">demo-com</a-button>
        </div>
        <div class="frame-medium col-container">
            <div class="frame-left">Left</div>
            <div class="frame-main"><router-view /></div>
            <div class="frame-right">Right</div>
        </div>
        <div class="frame-bottom">Bottom</div>
    </div>
</template>

<script lang="ts">
import $$ from "./library";
export default $$.Vue.extend({
    name: "app",
    mounted() {
        this.balanceFrame();
    },
    methods: {
        balanceFrame() {
            const clientHeight: number = document.documentElement.clientHeight;
            const frameTopHeight: number = 100;
            const frameBottomHeight: number = 100;
            const frameMediumHeight: number = clientHeight - frameTopHeight - frameBottomHeight;
            //
            const App: HTMLDivElement = document.querySelector("#app");
            const Top: HTMLDivElement = document.querySelector(".frame-top");
            const Bottom: HTMLDivElement = document.querySelector(".frame-bottom");
            const Medium: HTMLDivElement = document.querySelector(".frame-medium");
            // const Left: HTMLDivElement = document.querySelector(".frame-left");
            // const Right: HTMLDivElement = document.querySelector(".frame-right");
            //
            App.style.height = `${clientHeight}px`;
            Top.style.height = `${frameTopHeight}px`;
            Bottom.style.height = `${frameBottomHeight}px`;
            Medium.style.height = `${frameMediumHeight}px`;
        }
    }
});
</script>

<style lang="scss" scoped>
#app {
    background-color: gray;
    .frame-top {
        display: flex;
        background-color: palevioletred;
    }
    .frame-bottom {
        display: flex;
        background-color: cornflowerblue;
    }
    .frame-medium {
        flex-wrap: nowrap;
        justify-content: space-between;
        height: 100%;
    }
    .frame-left {
        display: inline-block;
        width: 10%;
        background-color: peru;
    }
    .frame-main {
        display: inline-block;
        width: 80%;
        background-color: gray;
        overflow: auto;
    }
    .frame-right {
        display: inline-block;
        width: 10%;
        background-color: powderblue;
    }
}
</style>
