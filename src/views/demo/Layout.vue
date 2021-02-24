<template>
  <div class="col-container" id="projectLayout">
    <!-- LEFT -->
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <!-- LOGO -->
      <div class="logo"><span style="color: hotpink">LOGO</span></div>
      <!-- Navigations -->
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <template v-for="nav of navigations">
            <!-- 主导航 -->
            <a-menu-item  v-if="undefined === nav.sub" :key="nav.key" @click="navigate(nav)">
                <a-icon :type="nav.icon" /><span>{{ nav.title }}</span>
            </a-menu-item>
            <a-sub-menu v-else :key="nav.key">
                <span slot="title"><a-icon :type="nav.icon" /><span>{{ nav.title }}</span></span>
                <!-- 子导航 -->
                <a-menu-item v-for="nav of nav.sub" :key="nav.key" @click="navigate(nav)">
                    <a-icon :type="nav.icon" /><span>{{ nav.title }}</span>
                </a-menu-item>
            </a-sub-menu>
        </template>
      </a-menu>
    </a-layout-sider>

    <!-- RIGHT -->
    <a-layout>
      <!-- Menu -->
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <!-- ... -->
      </a-layout-header>
      <div class="content">Content</div>
    </a-layout>
  </div>
</template>

<script lang="ts">
interface Navigation {
    title: string,
    icon: string,
    key: string | number,
    sub?: Array<Navigation>
}

import $$ from "../../library";
export default $$.Vue.extend({
  data() {
    return {
      collapsed: false,
      navigations: [
        { title: "nav1", icon: "user", key: 1 },
        { title: "nav2", icon: "video-camera", key: 2 },
        { title: "nav3", icon: "upload", key: 3 , sub: [
            { title: "nav31", icon: "video-camera", key: 31 },
            { title: "nav32", icon: "video-camera", key: 32 },
        ]},
      ] as Array<Navigation>,
    };
  },
  methods: {
      navigate(nav: Navigation) {
          console.log(nav);
      }
  }
});
</script>

<style lang="scss" scoped>
#projectLayout {
  height: 100%;
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: #1890ff;
  }
  .content {
    margin: 24px 16px;
    padding: 24px;
    background: #fff;
    min-height: 280px;
  }
}
</style>
