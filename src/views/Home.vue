<template>
    <div>
        <h2>Hello Vue</h2>
        <img alt="" src="static/images/arrow_girl.png">
        <a href="#/about">About</a>
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'home',
        mounted() {
            const hello: string = "Hello Vue!";
            console.log(hello);
        }
    }
</script>

<style lang='scss'>
    #app {
        h2 {
            color: lightseagreen;
            background-color: bisque;
            text-align: center;
        }
    }
</style>
