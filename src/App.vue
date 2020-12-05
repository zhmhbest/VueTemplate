<template>
    <div id="app">
        <div class="frame-top">
            <a-button type="primary" value="small" href="#/">Home</a-button>
            <a-button type="primary" value="small" href="#/about">About</a-button>
        </div>
        <div class="frame-medium">
            <div class="frame-left">Left</div>
            <div class="frame-main"><router-view/></div>
            <div class="frame-right">Right</div>
        </div>
        <div class="frame-bottom">Bottom</div>
    </div>
</template>

<script lang="ts">
    export default {
        name: "app",
        mounted() {
            // @ts-ignore
            document.querySelector("#app").style["height"] = `${document.documentElement.clientHeight}px`;
        }
    }
</script>

<style lang="scss">
    #app {
        display: flex;
        flex-direction: column;
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
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
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
        }
        .frame-right {
            display: inline-block;
            width: 10%;
            background-color: powderblue;
        }
    }
</style>
