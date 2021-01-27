<template>
    <div>
        <h3>{{ title }}</h3>
        <input style="width: 90%; margin-left: 5%" type="text" @change="onChange" ref="myText"/>
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
        onChange(ev: Event) {
            const it = this.$refs["myText"] as HTMLInputElement;
            this.$emit('oninsert', it.value);
        },
    },
});
</script>

<style lang="scss" scoped>
</style>
