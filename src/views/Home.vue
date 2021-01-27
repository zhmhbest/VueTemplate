<template>
    <div id="home">
        <h2>Hello Vue</h2>

        <div style="margin-bottom: 20px">
            <!-- <a-button type="primary" value="small" href="#/">Home</a-button> -->
            <a-button type="primary" value="small" href="#/about"
                >About</a-button
            >
            <a-button type="primary" value="small" href="#/demo/axios">demo-axios</a-button>
            <a-button type="primary" value="small" href="#/demo/echarts">demo-echarts</a-button>
            <a-button type="primary" value="small" href="#/demo/com">demo-com</a-button>
        </div>

        <div v-for="index of 5" :key="index">
            <img alt="" src="static/images/arrow_girl.png" />
        </div>
    </div>
</template>

<script lang="ts">
import $$ from "../library";
export default $$.Vue.extend({
    name: "home",
    data() {
        return {
            hello: "Hello Home" as String,
        };
    },
    mounted() {
        console.log(this.hello);
    },
});
</script>

<style lang="scss" scoped>
#home {
    h2 {
        text-align: center;
        color: darkmagenta;
    }
    div {
        display: flex;
        justify-content: center;
    }
}
</style>
