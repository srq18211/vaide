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
  data() {
    return {
      disabled: false,
      panelVisible: false
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
<style>
.user-select-text{
  user-select: text!important;
}
</style>
<style scoped>
/** {*/
/*  -moz-user-select: text; !* 火狐 *!*/
/*  -webkit-user-select: text; !* webkit浏览器 *!*/
/*  -ms-user-select: text; !* IE10 *!*/
/*  -khtml-user-select: text; !* 早期浏览器 *!*/
/*}*/
*{
  user-select: none
}

.appDevTools {
  user-select: none;
  position: fixed;
  width: 60px;
  height: 60px;
  right: 60px;
  bottom: 60px;
  z-index: 10000;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}
.appDevTools .logo {
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
.appDevTools .close {
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  font-size: 30px;
}
.appDevTools .close::selection {
  color: #fff;
}
</style>
