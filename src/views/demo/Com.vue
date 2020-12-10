<template>
    <div>
        <h2>This is an Com page</h2>
        <com-Text
            :title="com_title"
            @oninsert="onInsert"
        />
    </div>
</template>

<script lang="ts">
import $$ from "../../library";
import Com_Text from "../../components/Text.vue";
export default $$.Vue.extend({
    name: "Com",
    data() {
        return {
            com_title: "刚输入的内容" as String
        }
    },
    components: {
        // 引入局部组建
        "com-Text": Com_Text,
    },
    methods: {
        onInsert(text: String) {
            this.com_title = text;
        }
    }
});
</script>

<style lang="scss" scoped>
h2 {
    color: rgb(7, 182, 182);
}
</style>
