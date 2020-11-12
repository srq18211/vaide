<template>
  <div>
    <div class="sidbar">
      <div
        @click="clickHandle(item)"
        :class="['menu-item', item.key === current ? 'active' : '']"
        :index="item.name"
        v-for="(item, index) in menus"
        :key="item.key"
      >
        <span>{{ item.label }}</span>
      </div>
    </div>
    <div class="divtool-panel-main_body__interface right-content">
      <div class="app-card">
        <div class="app-card-body">
          <div class="app-card-body__foot">表格</div>
        </div>
      </div>
      <div class="app-card">
        <div class="app-card-body">
          <div class="app-card-body__foot">基础表格</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'create',
  cname: '创建',
  data() {
    return {
      menus: [
        { label: '表格', key: 'biaoge' },
        { label: '详情页', key: 'xiangqing' },
        { label: '进度页', key: 'jindu' }
      ],
      current: ''
    };
  },
  methods: {
    clickHandle({ key }) {
      this.current = key;
    }
  }
};
</script>

<style scoped>
.sidbar {
  height: 100%;
  float: left;
  width: 150px;
  background: #000;
}
.menu {
  color: #fff;
  width: 200px;
}
.menu-item {
  padding: 0 20px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}
.active {
  background: #505050;
}
</style>