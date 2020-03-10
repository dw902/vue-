<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li v-for="(v,i) in wudong" :key="i">
        {{v.name}}
        <br>
        {{v.city}}
        <br>
        {{v.title}}
        <br>
        {{v.content}}
    </li>-->
    <headt></headt>
    <contents></contents>
    <div class="nav">
      <div class="item-tab"> <router-link to="/home">商品</router-link></div>
      <div class="item-tab"> <router-link to="/home">评论</router-link></div>
      <div class="item-tab"> <router-link to="/home">商家</router-link></div>
    </div>
    <div class="contents">
      <router-view></router-view>
    </div>
    <!-- </ul> -->
  </div>
</template>

<script>
import axios from 'axios'
import headt from './Header'
import contents from './Content'
/* eslint-disable */
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      wudong: []
    };
  },
  components: { headt, contents },
  created: function() {
    var _this = this;
    axios
      .get("/user/userInfo")
      .then(function(res) {
        console.log(res.data.user);
        _this.wudong = res.data.user;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.nav {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  .item-tab {
    flex: 1;
    text-align: center;
  }
}
</style>
