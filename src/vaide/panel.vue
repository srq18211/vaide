<template>
  <div class="devtool-masking">
    <div class="devtool-panel">
      <div class="devtool-panel-sidbar">
        <div class="devtool-panel-menu">
          <div
            @click="menuItemClick(item)"
            :class="[
              'devtool-panel-menu-item',
              item.key === current ? 'active' : '',
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
        location.href :
        <span v-if="route.fullPath">{{ route.fullPath }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import platform from './panel/platform';
import update from './panel/update';

export default {
  components: {
    platform,
    update
  },
  props: ['visible'],
  data() {
    return {
      current: 'platform',
      menus: [
        {
          'title': '环境',
          'name': 'platform',
          'key': 'platform'
        },
        // {
        //   'title': '页面',
        //   'name': 'update',
        //   'key': 'update'
        // }
        ],
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
    this.route.fullPath = document.location.href
  }
};
</script>

<style>
.devtool-masking {
  position: fixed;
  z-index: 1024;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
}

.devtool-panel {
  border-radius: 10px;
  position: absolute;
  bottom: 150px;
  right: 90px;
  background: #30303d;
  width: 70vw;
  height: calc(95vh - 150px);
  overflow: hidden;
  box-shadow: 0 -6px 16px 0 rgba(0, 0, 0, 0.08);
}

.devtool-panel-sidbar {
  height: 100%;
  float: left;
  background: #272731;
}

.devtool-panel-menu {
  color: #fff;
}

.devtool-panel-menu-item {
  padding: 0 10px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}

.devtool-panel-menu .active {
  background: #008c8c;
}

.devtool-panel-main {
  overflow: hidden;
  background: #2e2e2e;
  margin-right: 0;
  height: 100%;
  color: #fff;
  position: relative;
}

.devtool-panel-footer {
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
}

.app-card-body {
  background: #fff;
  height: 100%;
  border-radius: 5px;
  position: relative;
}

.app-card-body__foot {
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

.devtoolPanel {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
</style>
