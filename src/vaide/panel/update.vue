<template>
  <div>
    <div class="main_nav">
      <div class="main_nav-tabs">
        <div
          @click="menuItemClick(item)"
          :class="['main_nav-tabs-item', item.key === current ? 'active' : '']"
          v-for="(item, index) in panes"
          :key="index"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
    <component :is="current" class="main_body" />
  </div>
</template>

<script>
import edit from './update/edit.vue';
import create from './update/create.vue';

export default {
  components: {
    edit,
    create
  },
  name: 'update',
  cname: '页面',
  data() {
    return {
      current: 'edit',
      panes: [
        {
          label:'创建',
          name:'create',
          key:'create'
        },{
          label:'编辑',
          name:'edit',
          key:'edit'
        },
      ]
    };
  },
  methods: {
    menuItemClick({ key }) {
      this.current = key;
    }
  }
};
</script>

<style scoped>
.main_nav {
  width: 100%;
  position: absolute;
  top: 0;
  height: 40px;
  line-height: 40px;
  background: rgb(77, 76, 76);
  padding: 0 20px;
  border-bottom: 1px solid #000;
}
.main_nav-tabs {
  width: 300px;
  height: 100%;
}
.main_nav-tabs-item {
  display: inline-block;
  padding: 0 20px;
}
.active::after {
  content: '';
  display: block;
  width: 100%;
  height: 3px;
  background: #008c8c;
  transform: translateY(-3px);
}
.main_body {
  width: 100%;
  padding: 40px 0px 30px 0px;
  height: 100%;
  overflow: hidden;
}
.main_body__sidbar {
  width: 100px;
  float: left;
  height: 100%;
  background: #202121;
}
.main_body__interface {
  background: #000;
  height: 100%;
  overflow: hidden;
}
</style>
