<template>
    <div id="app" class="row-container" :style="{
        minWidth: `${windowWidth}px`, maxWidth: `${windowWidth}px`,
        minHeight: `${windowHeight}px`, maxHeight: `${windowHeight}px`,
    }">
        <!-- TOP -->
        <div class="frame-top" v-if="frameLayoutTopHeight>0" :style="{
            width: '100%', minHeight: `${frameLayoutTopHeight}px`, maxHeight: `${frameLayoutTopHeight}px`
        }"></div>
        <div class="frame-medium col-container" :style="{
            width: '100%',
            minHeight: `${windowHeight - frameLayoutTopHeight - frameLayoutBottomHeight}px`,
            maxHeight: `${windowHeight - frameLayoutTopHeight - frameLayoutBottomHeight}px`
        }">
            <!-- LEFT -->
            <div class="frame-left" v-if="frameLayoutLeftWidth>0" :style="{
                minWidth: `${frameLayoutLeftWidth}px`, maxWidth: `${frameLayoutLeftWidth}px`
            }"></div>
            <!-- MAIN -->
            <div class="frame-main" :style="{
                minWidth: `${windowWidth - frameLayoutLeftWidth - frameLayoutRightWidth}px`,
                maxWidth: `${windowWidth - frameLayoutLeftWidth - frameLayoutRightWidth}px`
            }"><keep-alive><router-view /></keep-alive></div>
            <!-- RIGHT -->
            <div class="frame-right" v-if="frameLayoutRightWidth>0" :style="{
                minWidth: `${frameLayoutRightWidth}px`, maxWidth: `${frameLayoutRightWidth}px`
            }"></div>
        </div>
        <!-- BOTTOM -->
        <div class="frame-bottom" v-if="frameLayoutBottomHeight>0" :style="{
            width: '100%', minHeight: `${frameLayoutBottomHeight}px`, maxHeight: `${frameLayoutBottomHeight}px`
        }"></div>
    </div>
</template>

<script lang="ts">
import $$ from "./library";
export default $$.Vue.extend({
    name: "app",
    data() {
        return {}
    },
    computed: {
        windowWidth() { return $$.store.state.windowWidth },
        windowHeight() { return $$.store.state.windowHeight },
        // locationHash() { return $$.store.state.locationHash },
        frameLayoutTopHeight() { return 10 },
        frameLayoutBottomHeight() { return 10 },
        frameLayoutLeftWidth() { return 10 },
        frameLayoutRightWidth() { return 10 },
    },
    mounted() {
        // 绑定窗口尺寸改变
        window.onresize = function(this: GlobalEventHandlers, ev: UIEvent) {
            $$.store.commit("windowRect");
        };
        $$.store.commit("windowRect");

        // 绑定目录Hash改变
        window.onhashchange = function(this: WindowEventHandlers, ev: HashChangeEvent) {
            $$.store.commit("locationHash");
        };
        $$.store.commit("locationHash");
    }
});
</script>

<style lang="scss" scoped>
#app {
    background-color: gray;
    .frame-top {
        background-color: palevioletred;
    }
    .frame-medium {
        .frame-left {
            background-color: peru;
        }
        .frame-main {
            background-color: gray;
            overflow: auto;
            // 仅当PC端访问时改变滚动条
            @media screen and (min-device-width: 650px) {
                // 自定义滚动条——宽度
                &::-webkit-scrollbar{
                    width: 8px;
                    height: 8px;
                }
                // 自定义滚动条——背景色
                &::-webkit-scrollbar {
                    background-color: transparent;
                }
                // 自定义滚动条——滑块颜色
                &::-webkit-scrollbar-thumb {
                    background-color: rgba(0, 0, 0, 0.2);
                    border-radius: 32px;
                }
            }
        }
        .frame-right {
            background-color: rgb(83, 63, 139);
        }
    }
    .frame-bottom {
        background-color: rgb(100, 237, 184);
    }
}
</style>
