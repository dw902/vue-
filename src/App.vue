<template>
  <div id="app">
    <headt :getseller='seller'></headt>
    <div class="nav border-1px">
      <div class="item-tab ">
        <router-link class="ds" active-class="gg" to="/goods">商品</router-link>
      </div>
      <div class="item-tab">
        <router-link class="ds" active-class="gg" to="/ratings">评论</router-link>
      </div>
      <div class="item-tab">
        <router-link class="ds" active-class="gg" to="/seller">商家</router-link>
      </div>
    </div>
    <div class="contents">
      <keep-alive>
        <router-view :getseller='seller'></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import headt from './components/Header/Header'
import axios from 'axios'
export default {
   data () {
    return {
      seller:[],
      goods:[],
      commnet:[]
    }
  },
  name: 'App',
  components: {headt},
  mounted() {
   this.getseller(),
   this.getgoods(),
   this.getcomment()
     },
  methods:{
    getseller() {
    var _this = this;
    this.axios
      .get("/seller")
      .then(function(res) {
        // console.log(res.data)
        _this.seller=res.data
        
      })
      .catch(function(err) {
        // console.log(err);
      });
    },
    getgoods() {
      var _this = this;
    this.axios
      .get("/goods")
      .then(function(res) {
        // console.log(res.data);
        // _this.wudong = res.data.user;
        
      })
      .catch(function(err) {
        console.log(err);
      });

    },
    getcomment() {
      var _this = this;
    this.axios
      .get("/ratings")
      .then(function(res) {
        // console.log(res.data);
        // _this.wudong = res.data.user;
        
      })
      .catch(function(err) {
        // console.log(err);
      });

    }
  }
     
     
 
}
</script>

<style lang="less" scoped>

@import './common/styles/mixin.less';

// #app {
//   font-family: "Avenir", Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
// h1,
// h2 {
//   font-weight: normal;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
//   text-decoration: none;
// }
.nav {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  .border-1px(rgba(7,17,27,0.1));
  .item-tab {
    flex: 1;
    text-align: center;
    .ds {
      display: block;
    }
    .gg {
      color: red;
    }
  }
}
</style>
