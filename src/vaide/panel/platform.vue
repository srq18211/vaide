<template>
  <div style="padding:40px;overflow-y: scroll;font-size: 14px;color:#008c8c" class="user-select-text">
    <h2> window.navigator：</h2>
    <div v-for="(item,key) in data">
      <div v-if="item.type">
        {{item.title}}:
        <p v-for="(i,ik) in item.value" :key="ik">
          {{i}}
        </p>
      </div>
      <p v-else>{{item.title}}:  {{item.value}}</p>
    </div>

    <h2>matched routes</h2>
    <div class="route">
      <table style="width:100%" border="0" collapse="true" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
           <th style="text-align:center;color:rgba(255,255,255,0.85);font-size:16px;line-height:32px" colspan="2"> matched routes</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,key) in routeMatched">
            <td class="cell">{{key}}</td>
            <td class="cell">{{item}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}
// import context from './panel/update/context.js';
export default {
  name: 'platform',
  cname: '环境',
  data() {
    return {
      // context: context
      data: [],
      routeMatched:{}
    };
  },
  mounted() {
    let info = []
    for (let key in window.navigator){
      let value = window.navigator[key]
      if(value ){
        if(isPrimitive(value)){
          info.push(
            {
              title:key,
              value:value.toString()
            }
          )
        }
      }
    }
    this.data=info
    this.routeMatched=JSON.parse(window.sessionStorage.getItem('route'))
  }
};
</script>

<style scoped>
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

.text-align-right{
  text-align: right;
}
.cell{
  border-bottom:1px solid #fff;
  font-size: 14px;
  color:#008c8c;
  padding:4px 24px;
}
</style>
