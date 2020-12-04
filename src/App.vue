<template>
    <div id='app'>
        <h2>Hello Vue</h2>
    </div>
</template>

<script>
    export default {
        name: 'App',
        mounted() {
            console.log("Hello Vue");
        }
    }
</script>

<style lang="scss">
    #app {
        h2 {
            color: lightseagreen;
            background-color: bisque;
            text-align: center;
        }
    }
</style>
