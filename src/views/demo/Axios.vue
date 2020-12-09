<template>
    <div>
        <h2>This is an demo-Axios page</h2>
        <a-list bordered :data-source="arr">
            <a-list-item slot="renderItem" slot-scope="item, index">
                {{ index }} {{ item }}
            </a-list-item>
            <div slot="header">Header</div>
            <div slot="footer">Footer</div>
        </a-list>
    </div>
</template>

<script lang="ts">
import $$ from "../../library";
export default $$.Vue.extend({
    name: "demo-axios",
    data() {
        return {
            arr: null as Array<String>,
        };
    },
    mounted() {
        $$.axios.get("./data/axios.json").then((res) => {
            this.arr = res.data;
        });
    },
});
</script>

<style lang="scss" scoped>
h2 {
    color: goldenrod;
}
</style>
