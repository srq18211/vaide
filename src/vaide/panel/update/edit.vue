<template>
  <div :class="['edit', loading ? 'loading' : '']">
    <!-- <el-input :row="10" type="textarea" v-model="data"></el-input> -->
    <textarea
      class="textarea"
      style="height:100%;width:60%;margin:0"
      name=""
      id=""
      cols="30"
      rows="30"
      :value="data.fileText"
    ></textarea>
    <div class="info">
      <p>文件位置：{{ filePath }}</p>
      <p>文件行数：{{ data.fileLine }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'edit',
  cname: '编辑',
  data() {
    return {
      route: '',
      data: '',
      filePath: '',
      loading: false
    };
  },
  created() {
    // this.route = this.$route;
  },
  mounted() {
    // console.log(this.$route.matched);
    // // 根据当前路径获得 文件路径
    // let filePath = this.route.matched[this.route.matched.length - 1].components
    //   .default.__file;
    // let url = `http://localhost:3000/read?filePath=` + filePath;
    // this.filePath = filePath;
    // fetch(url, { mode: 'cors' }).then(res => {
    //   res.json().then(data => {
    //     this.data = data;
    //     this.loading = false;
    //   });
    // });

    // document.write(lastLog);
  }
};
</script>

<style scoped>
.edit {
  overflow: hidden;
}
.textarea {
  float: left;
  margin: 10px;
}
.info {
  overflow: hidden;
}
.loading {
  position: relative;
}
.loading::after {
  content: 'loading...';
  display: block;
  text-align: center;
  position: absolute;
  line-height: 750px;
  font-size: 50px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
}
</style>
