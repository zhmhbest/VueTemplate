<template>
    <div>
        <h2>This is an demo-Echarts page</h2>
        <div id="graph" @click="paintGraph">点击画图</div>
    </div>
</template>

<script lang="ts">
import $$ from "../../library";
export default $$.Vue.extend({
    name: "demo-echarts",
    data() {
        return {
            graph: null as HTMLDivElement,
        };
    },
    mounted() {
        this.graph = document.querySelector("#graph");
    },
    methods: {
        paintGraph() {
            let chart = $$.echarts.init(this.graph);
            chart.setOption({
                title: {
                    text: "ECharts 入门示例",
                },
                tooltip: {},
                xAxis: {
                    data: [
                        "衬衫",
                        "羊毛衫",
                        "雪纺衫",
                        "裤子",
                        "高跟鞋",
                        "袜子",
                    ],
                },
                yAxis: {},
                series: [
                    {
                        name: "销量",
                        type: "bar",
                        data: [5, 20, 36, 10, 10, 20],
                    },
                ],
            });
        },
    },
});
</script>

<style lang="scss" scoped>
h2 {
    color: indianred;
}
#graph {
    width: 300px;
    height: 300px;
    background-color: white;
}
</style>
