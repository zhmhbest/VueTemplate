<template>
    <div id="home">
        <h2>Hello Vue</h2>
        <div>
            <img alt="" src="static/images/arrow_girl.png">
        </div>
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
    #home {
        h2 {
            text-align: center;
        }
        div {
            display: flex;
            justify-content: center;
        }
    }
</style>
