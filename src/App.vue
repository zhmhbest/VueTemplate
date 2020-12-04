<template>
    <div id='app'>
        <h2>Hello Vue</h2>
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'app',
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
