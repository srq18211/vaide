<template>
  <div>
    <div class="appDevTools" @click="togglePanelVisible">
      <div class="logo" v-if="!panelVisible"></div>
      <div class="close" v-else>
        X
      </div>
    </div>
    <panel v-if="panelVisible" />
  </div>
</template>

<script>
import panel from './vaide/panel.vue';
export default {
  name: 'vaide',
  props:['router'],
  components: {
    panel
  },
  // provide: {
  //   router: this.router
  // },
  data() {
    return {
      disabled: false,
      panelVisible: true
    };
  },
  methods: {
    togglePanelVisible() {
      this.disabled = false;
      this.panelVisible = !this.panelVisible;
    }
  }
};
</script>
<style scoped>
* {
  -moz-user-select: none; /* 火狐 */
  -webkit-user-select: none; /* webkit浏览器 */
  -ms-user-select: none; /* IE10 */
  -khtml-user-select: none; /* 早期浏览器 */
}
</style>
<style lang="scss" scoped>
.appDevTools {
  user-select: none;
  position: fixed;
  width: 60px;
  height: 60px;
  right: 60px;
  bottom: 60px;
  // border: 1px solid #000;
  z-index: 9999;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  .logo {
    // background: #fff url('https://www.vue-js.com/public/images/vue.png');
    // background-size: 250% 250%;
    // background-position: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    background: #fff;
    text-align: center;
    font-size: 14px;
  }
  .close {
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    font-size: 30px;
    &::selection {
      color: #fff;
    }
  }
}
</style>