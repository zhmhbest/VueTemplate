<template>
    <div id='app'>
        <div>Top</div>
        <router-view/>
    </div>
</template>

<script lang='ts'>
    export default {
        name: 'app'
    }
</script>

<style lang='scss'>
    #app {
        background-color: cornflowerblue;
    }
</style>
