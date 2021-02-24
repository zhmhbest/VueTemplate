<template>
    <div id="home">
        <h2>Hello Vue</h2>

        <div style="margin-bottom: 20px">
            <!-- <a-button type="primary" value="small" href="#/">Home</a-button> -->
            <a-button type="primary" value="small" href="#/about"
                >About</a-button
            >
            <a-button type="primary" value="small" href="#/demo/imgs">imgs</a-button>
            <a-button type="primary" value="small" href="#/demo/axios">axios</a-button>
            <a-button type="primary" value="small" href="#/demo/echarts">echarts</a-button>
            <a-button type="primary" value="small" href="#/demo/com">com</a-button>
            <a-button type="primary" value="small" href="#/demo/layout">layout</a-button>
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
