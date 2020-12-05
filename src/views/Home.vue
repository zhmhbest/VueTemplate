<template>
    <div id="home">
        <h2>Hello Vue</h2>
        <div>
            <img alt="" src="static/images/arrow_girl.png">
        </div>
    </div>
</template>

<script lang="ts">
    import $$ from "../library"
    export default {
        name: "home",
        mounted() {
            const hello: string = "Hello Vue!";
            console.log(hello);
            $$.sayHello();
        }
    }
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
