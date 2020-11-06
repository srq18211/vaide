<template>
  <div style="padding:16px">
    <h2>系统环境</h2>
    <p v-for="(item, index) in data.env" :key="index">
      {{ item.label }}：{{ item.value }}
    </p>
    <br />
    <h2>进程管理</h2>
    <span
      >开发服务器 pid:{{ data.pid }}
      <!-- <button class="button" @click="restart">重启</button> -->
    </span>
    <!-- <table class="table">
      <thead>
        <tr>
          <th colspan="2"><h2>node 进程管理</h2></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data.process">
          <td>The table body</td>
          <td>with two columns</td>
          <td>
            <button>重新启动</button>
            <button>关闭进程</button>
          </td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
// import context from './panel/update/context.js';
export default {
  name: 'platform',
  cname: '环境',
  data() {
    return {
      // context: context
      data: ''
    };
  },
  created() {
    let url = `http://localhost:3000/info`;
    fetch(url, { mode: 'cors' }).then(res => {
      res.json().then(data => {
        this.data = data;
      });
    });
  },
  methods: {
    // restart() {
    //   fetch('http://localhost:3000/restart');
    // }
  }
};
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
  border-radius: 5px;
  background: rgb(165, 164, 164);
}
.button {
  border: none;
  outline: none;
  padding: 0 20px;
}
</style>