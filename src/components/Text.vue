<template>
    <div>
        <h3>{{ title }}</h3>
        <a-input @change="onChange" />
    </div>
</template>

<script lang="ts">
import $$ from "../library";
export default $$.Vue.extend({
    name: "Text",
    props: ["title"], //组建接受的属性值
    data() {
        return {};
    },
    methods: {
        onChange(e: InputEvent) {
            this.$emit('oninsert', e.data);
        },
    },
});
</script>

<style lang="scss" scoped>
</style>
