<template>
  <div id="app">
    <router-view></router-view>
    <div class="footer row">
      <div class="item">
        <router-link  class="col-d" to="/LooteryGame">
          <span class="sup"><b class="iconfont icon-shouye"></b></span>
          <span class="sub">首页</span>
        </router-link>
      </div>
      <div class="item">
        <router-link  class="col-d" to="/NoteSingle">
          <span class="sup"><b class="iconfont icon-kefu"></b></span>
          <span class="sub">客服</span>
        </router-link>
      </div>
      <div class="item">
        <router-link   class="col-d" to="/deposit">
          <span class="sup"><b class="iconfont icon-qukuan"></b></span>
          <span class="sub">存取款</span>
        </router-link>
      </div>
      <div class="item">
        <router-link   class="col-d" to="/MemberCentre">
          <span class="sup"><b class="iconfont icon-touxiang"></b></span>
          <span class="sub">会员中心</span>
        </router-link>
      </div>
    </div>
    <!--APP下载-->
    <div class="titleapp" v-show="titleapp">
      <div class="titleappbox">
        <h2 class="">
          <i @click="fun2()"></i>
        </h2>
        <p style="margin-top: 0.15rem">1.点击右下角“安装”。应用会自动在后台运行安装</p>
        <p>2.打开设置>通用>设备管理</p>
        <p>3.点击“Youland Information Technology(ShangHai)Co.,Ltd.”后，
          选择“信任”</p>
        <p>4.您已成功安装 IOS 天天彩APP</p>
        <b @click="funcc()" class="btn">
          <img src="http://mobile.beike188.com/modelTTC/images/appbtn.gif" alt="">
        </b>
      </div>
    </div>

    <!--v-show="userNew.applet"  是true的话显示要求下载-->
    <div  id="openApp0" class="HGApp" v-show="userNew.applet">

      <a v-show="App" @click="fun1()" href="javascript:void(0)">
        手机App上线啦，<span style="color:yellow;font-size: 0.28rem;"> 点击安装 </span> 随机派送现金大奖
        <img  src="http://mobile.beike188.com/modelTTC/images/app.png" alt="">
      </a>
      <span v-show="App" @click="fun()" class="HGAppdianji">×</span>
    </div>
    <!--APP下载-->
    <pages></pages>
    <pop v-show="CloseNew.Closepop"></pop>
    <load v-show="show"></load>
    <poppublic v-show="gamepop.judgment"></poppublic>
  </div>
</template>
<script>
  var vm;
  import poppublic from '@/components/public/poppublic.vue'
  import load from '@/components/public/public.vue'
  import pop from '@/components/public/pop.vue'
  import pages from './components/Top/pages.vue'
export default {
    data () {
        return {
            App:true,
            titleapp:false
        }
    },
    computed: {
        show:function () {//等待提示框
            return this.$store.state.waiting;
        },
        CloseNew:function () {////系统提示框
            return this.$store.state.CloseNew;
        },
        userNew:function () {//判断登录 login
            return this.$store.state.userNew;
        },
        gamepop:function () {//判断登录 点击游戏提示框
            return this.$store.state.gamepop;
        },
        annouationNew:function () {//判断登录 公告轮播
            return this.$store.state.annouationNew;
        }
    },
    mounted() {
        vm = this;
        vm.$store.dispatch("incrajax",{id:4});
        if(vm.annouationNew.announcement === ""){
            vm.$store.dispatch("incrajax",{id:11});
        }
    },
    methods:{
      fun:function () {
          this.App=false;
      },
      //        APP下载
      fun:function () {
        vm = this;
        vm.App=false;
        vm.titleapp = false;
      },
      fun1:function () {
        vm = this;
        vm.titleapp = true;
      },
      fun2:function () {
        vm.titleapp = false;
      },
      funcc:function () {
        vm.titleapp = false;
        vm.App=false;
        window.location.href=vm.userNew.appsrc
      }
//        APP下载
    },
    components: {
        load,
        pop,
        poppublic,
        pages
    }
}
</script>

<style lang="less">

  /*<!--APP下载-->*/
  .HGApp{
    position: fixed;
    bottom:1rem;
    width:100%;
    vertical-align: top;
    font-size: 0.25rem;
    background: #219be4;
    text-align: left;
    a{
      position: relative;
      display: block;
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      color:#fff;
      padding-left: 0.7rem;
      font-size: 0.2rem;
      vertical-align: top;
      img{
        position: absolute;
        right: 0;
        bottom:0;
        height: 1.7rem;
        vertical-align: top;
      }
      h2{
        height: 0.8rem;line-height: 0.8rem;
        font-size: 0.35rem;
        color:#fff;padding-left: 0.7rem;
      }
    }
    .HGAppdianji{
      position: absolute;
      left:0;
      height: 0.7rem;
      line-height: 0.7rem;
      width:0.7rem;
      text-align: center;
      top:0;
      font-size: 0.6rem;
      color:#fff;
    }
  }
  .titleapp{
    position: fixed;
    bottom: 2.5rem;
    left:0;
    width: 100%;
    height: 4rem;
    font-size: 0;
    padding: 0 0.1rem;
    .titleappbox{
      background: #ffffff;
      height: 4rem;
      position: relative;
      padding:0.1rem 0.1rem;
      border-radius: 3px;
      border:1px solid #601308;
      h2{
        position: relative;
        width: 100%;
        background: url('http://mobile.beike188.com/modelTTC/images/title.png') no-repeat;
        background-size: 100% 100%;
        height: 0.72rem;
        i{
          position: absolute;
          width: 0.7rem;
          right:0;
          top:0;
          height: 0.7rem;
          background: rgba(0,0,0,0);
        }
      }
      p{
        padding-left: 0.1rem;
        height: 0.6rem;
        line-height: 0.3rem;
        text-align: left;
        font-size: 0.25rem;
      }
      p:nth-child(4){
        margin-bottom: 0.1rem;
      }
      .btn{
        position: absolute;
        bottom: 0.2rem;
        right:0.2rem;
        width: 1.9rem;
        height: 0.6rem;
      }
    }

  }
  .Bnner{
    width:100%;
    height: 3.2rem;
    overflow: hidden;
  .swiper-container{
    height: 3.2rem;
  .swiper-wrapper{
    height: 3.2rem;
  .swiper-slide{
    height: 3.2rem;
  img{
    height: 100%;
  }
  }
  }
  }
  }
  /*<!--APP下载-->*/
  #lim_mobile_chat{
    display: none;
  }
  img{
    display: inline-block;
  }
  #somediv{
    width:100%;
    height: 100%;
    font-size: 0.5rem;
  }
  .Promptbox{
    height: 0.5rem;
    background: #e6e6e6;
    line-height: 0.5rem;
    color:#219be4;
    margin-bottom: 0.1rem;
    border-radius: 5px;
    margin-top: 0.2rem;
    font-size: 0.25rem;
    text-align: center;
  }
  /*公用返回样式*/
  .Return{
    position: fixed;
    top:0;
    left:0;
    z-index: 102;
    width:0.8rem;
    /*border:1px solid ;*/
    height: 0.8rem;
    a{
      position:relative;
      display: block;
      height: 0.8rem;
      width:0.8rem;
      img{
        position: absolute;
        top:0.15rem;
        left:0.2rem;
        height: 0.5rem;
      }
    }
  }
  /*公用返回样式*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #e4e8ec;
  padding-top: 0.8rem;
  min-height: 12.5rem;
  padding-bottom: 1.3rem;
  color: #2c3e50;
  .footer{
    position: fixed;
    bottom:0;
    padding:0;
    background: #fafcff;
    border-top:1px solid #d2d2d2;
    height: 1rem;
    width:100%;
    font-size: 0;
  .item{
    height: 1rem;
    display: inline-block;
    vertical-align: top;
    width:24.9%;
  }
    .router-link-exact-active{
      color:#219be4;
    }
    a{
      display: block;
      width: 100%;
      color:#666;
      border-bottom: none;
      font-size: 0.3rem;
      .sup,.sub{
        display: inline-block;
        width:100%;
        vertical-align: top;
      }
      .sup{
        position: relative;
        padding-top: 0.1rem;
        text-align: center;
        height: 0.6rem;
       b{
         font-size: 0.45rem;
       }
      }
      /*.sub{*/
        /*height: 0.4rem;*/
        /*color: #666;*/
      /*}*/
    }
  }
}
</style>
