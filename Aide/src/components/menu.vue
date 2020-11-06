<template>
  <div class="menu">
    <div
      @click="clickHandle(item)"
      :class="['menu-item', item.key === value ? 'active' : '']"
      :index="item.name"
      v-for="(item, index) in menus"
      :key="item.key"
    >
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['items', 'value'],
  name: 'theMenu',
  methods: {
    clickHandle({ key }) {
      this.$emit('input', key);
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  color: #fff;
  &-item {
    padding: 0 20px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }
  .active {
    background: #008c8c;
  }
}
</style>