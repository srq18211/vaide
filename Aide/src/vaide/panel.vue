<template>
  <div class="devtool-masking">
    <div class="devtool-panel">
      <div class="devtool-panel-sidbar">
        <div class="devtool-panel-menu">
          <div
            @click="menuItemClick(item)"
            :class="[
              'devtool-panel-menu-item',
              item.key === current ? 'active' : ''
            ]"
            :index="item.name"
            v-for="(item, index) in menus"
            :key="item.key"
          >
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
      <component :is="current" class="devtool-panel-main" />
      <div class="devtool-panel-footer">
        当前url :
        <span v-if="route.fullPath">{{ route.fullPath }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import context from './panel/context.js';
import { contextWithMenus } from '@/tools/importAll.js';
export default {
  components: { ...context },
  props: ['visible'],
  data() {
    return {
      current: 'update',
      menus: contextWithMenus(context),
      route: { fullPath: '' }
    };
  },
  methods: {
    menuItemClick({ key }) {
      this.current = key;
    }
  },
  mounted() {
    // this.route = this.$route;
  }
};
</script>

<style lang="scss">
.devtool {
  &-masking {
    position: fixed;
    z-index: 1024;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
  }
  &-panel {
    border-radius: 10px;
    position: absolute;
    bottom: 150px;
    right: 90px;
    background: #30303d;
    width: 70vw;
    height: calc(95vh - 150px);
    overflow: hidden;
    box-shadow: 0 -6px 16px 0 rgba(0, 0, 0, 0.08);
    &-sidbar {
      height: 100%;
      float: left;
      background: #272731;
    }
    &-menu {
      color: #fff;
      &-item {
        padding: 0 10px;
        text-align: center;
        line-height: 50px;
        cursor: pointer;
      }
      .active {
        background: #008c8c;
      }
    }
    &-main {
      overflow: hidden;
      background: rgb(46, 46, 46);
      margin-right: 0;
      height: 100%;
      color: #fff;
      position: relative;
    }
    &-footer {
      background: #000;
      color: #fff;
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding: 0 20px;
      box-sizing: border-box;
    }
  }
}
.right-content {
  overflow: hidden;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
}
.app-card {
  width: 220px;
  height: 180px;
  border-radius: 5px;
  background: transparent;
  display: inline-block;
  box-sizing: border-box;
  padding: 10px;
  &-body {
    // overflow: hidden;
    background: #fff;
    height: 100%;
    border-radius: 5px;
    position: relative;
    &__foot {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 38px;
      box-sizing: border-box;
      padding: 8px 12px;
      background: #606266;
      color: #fff;
    }
  }
}
.devtoolPanel {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.el-menu {
  border-right: none !important;
}
</style>