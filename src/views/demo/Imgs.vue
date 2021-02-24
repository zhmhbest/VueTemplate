<template>
    <div>
        <div class="conationer" v-for="index of 5" :key="index">
            <img alt="" src="static/images/arrow_girl.png" />
        </div>
    </div>
</template>

<script lang="ts">
// import $$ from "../../library";
// export default $$.Vue.extend({});
</script>

<style lang="scss" scoped>
.conationer {
    display: flex;
    justify-content: center;
}
</style>
