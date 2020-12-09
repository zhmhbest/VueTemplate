<template>
<div>
    <h2>This is an about page</h2>
</div>
</template>

<script lang="ts">
    import $$ from "../library"
    export default $$.Vue.extend({
        name: "about",
        data() {
          return {
            hello:  "Hello About"
          }
        },
        mounted() {
          console.log(this.hello);
        }
    });
</script>

<style lang="scss" scoped>
  h2 {
    color: hotpink;
  }
</style>
