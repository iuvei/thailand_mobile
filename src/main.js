// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


//测试代理接口
// var xpj_src = 'http://192.168.0.3:8480/XPJ/';

var xpj_src ='';




import Vue from 'vue'
import App from './App'
import 'babel-polyfill' //e6~e5 兼容
import router from './router'
import store from '@/router/store'
import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'
import Public from './components/public/Public'
import VueQriously from 'vue-qriously'
  //轮播
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Laypage from 'vue-laypage'
import List from './router/list'
import Membercentre from './components/MemberCentre/js/Membercentre'
import validation from './components/public/validation'
import $ from 'jquery'
import '../static/css/reset.css'
import '../static/css/styles.css'
import '../static/css/public.less'
import '../static/js/head'
import '../static/css/iconfont.css'
Vue.config.productionTip = false;
Vue.use(validation); //验证  各种验证
Vue.use(VueBlu); // 日期插件
Vue.use(Public); // 公用js   ajax 插件
Vue.use(VueQriously) //生成二维码
Vue.use(VueAwesomeSwiper); //轮播
Vue.use(List) //地址
Vue.use(Membercentre) //个人中心
Vue.use(Laypage) //分页
if (process.BROWSER_BUILD) {
  const VueAwesomeSwiper = require('vue-awesome-swiper/ssr');
  Vue.use(VueAwesomeSwiper)
}

function datatboy(time) {
  let tody = new Date();
  let day = tody.getTime() - parseFloat(time) * 60 * 60 * 24;
  let t = new Date(day);
  return t.getFullYear() + '-' + (year(t.getMonth() + 1)) + '-' + year(t.getDate())
}

function year(el) {
  if (el < 10) {
    return ('0' + el);
  } else {
    return el;
  }
}
router.beforeEach(({
  meta, path
}, from, next) => { //路由地址跳转前
  $.ajax({
    type: "post",
    url: xpj_src + 'checklogin.do',
    async: true,
    cache: false,
    success: function(data) {
      if (data.msg == "faild") { //没登录的情况下
        if (meta.requiresAuth === true) { //meta  true的话  需要登录 跳到登录页面
          store.dispatch('inceuserNew', {
            id: 0,
            Login: false
          });
          return next({
            path: '/Login'
          });
        } else { //meta  false的话 是跳转普通页面 不需要登录
          store.dispatch('inceuserNew', {
            id: 0,
            Login: false
          });
          return next();
        }
      } else if (data.msg == "islogin") {
        if (meta.requiresAuth === true) {
          store.dispatch('inceuserNew', {
            id: 0,
            Login: false
          });
          return next({
            path: '/Login'
          });
        } else {
          store.dispatch('inceuserNew', {
            id: 0,
            Login: false
          });
          return next();
        }
      } else if (data.msg == "success") { //已经登录
        store.dispatch('inceuserNew', {
          id: 1,
          Login: true,
          userkey: data.userkey,
          userName: data.userName
        });
        store.dispatch("incruser", data.userName);
        if (path === '/Withdrawals') {
          store.dispatch("incrwaitionValue", true);
          $.ajax({
            type: "post",
            url: store.state.userNew.jrg + 'User/getUserCard',
            async: true,
            timeout: 30000,
            cache: false,
            success: function(data) {
              store.dispatch("incrwaitionValue", false);
              if (data.length > 0) {
                store.dispatch("incrajax", {
                  id: 0
                });
                store.dispatch("incrajax", {
                  id: 1
                });
                store.dispatch("inceuserNew", {
                  id: 9,
                  cardNum: data[0]
                });
                return next();
              } else {
                store.dispatch("inceuserNew", {
                  id: 9,
                  cardNum: ""
                });
                return next({
                  path: '/userBankCard'
                });
              }
            },
            error: function() {
              return next({
                path: '/'
              });
            }
          })
        }
        if (path === "/userBankCard") {
          store.dispatch("incrwaitionValue", true);
          $.ajax({
            type: "post",
            url: store.state.userNew.jrg + 'User/getUserCard',
            async: true,
            timeout: 30000,
            cache: false,
            success: function(data) {
              store.dispatch("incrwaitionValue", false);
              if (data.length > 0) {
                store.dispatch("incrajax", {
                  id: 0
                });
                store.dispatch("inceuserNew", {
                  id: 9,
                  cardNum: data[0]
                });
                return next();
              } else {
                store.dispatch("inceuserNew", {
                  id: 9,
                  cardNum: ""
                });
                return next();
              }
            },
            error: function() {
              return next({
                path: '/'
              });
            }
          })
        }
        if (path === "/MemberCentre") {
          store.dispatch("incrajax", {
            id: 0
          });
        }
        if (path === "/interchange") {
          store.dispatch("incrajax", {
            id: 0
          });
        }
        if (path === "/gameLimit") {
          store.dispatch("incrajax", {
            id: 2
          });
        }
        if (path === "/collection") {
          store.dispatch("incrajax", {
            id: 3
          });
        }
        if (path === "/integral") {
          store.dispatch("incrajax", {
            id: 2
          });
        }
        if (path === "/rechargeRecord") {
          let objs = {
            pageSize: 5,
            pageNo: 1,
            bdate: '',
            edate: '',
            Type: '',
            status: ''
          };
          objs.bdate = datatboy('1000');
          objs.edate = datatboy('0');
          store.dispatch("incrajax", {
            id: 5,
            data: objs
          });
        }
        if (path === "/bonusDetails") {
          let objs = {
            pageSize: 5,
            pageNo: 1,
            startTime: "",
            endTime: ""
          };
          objs.startTime = datatboy('1000')
          objs.endTime = datatboy('0')
          store.dispatch("incrajax", {
            id: 6,
            data: objs
          });
        }
        if (path === "/withdrawRecord") {
          let objs = {
            pageSize: 5,
            pageNo: 1,
            bdate: '',
            edate: '',
            status: ''
          };
          objs.bdate = datatboy('1000')
          objs.edate = datatboy('0')
          store.dispatch("incrajax", {
            id: 7,
            data: objs
          });
        }
        if (path === "/accountDetails") {
          let objs = {
            pageSize: 5,
            pageNo: 1,
            bdate: '',
            edate: '',
            Type: '',
            Ttype: ''
          };
          objs.bdate = datatboy('1000')
          objs.edate = datatboy('0')
          store.dispatch("incrajax", {
            id: 8,
            data: objs
          });
        }
        if (path === "/lotteryForm") {
          let objs = {
            pageSize: 5,
            pageNo: 1,
            bdate: '',
            edate: '',
            type: 'IGPJ'
          };
          objs.bdate = datatboy('1000')
          objs.edate = datatboy('0')
          store.dispatch("incrajax", {
            id: 9,
            data: objs
          });
        }
        return next();
      }
    },
    error: function() {
      if (meta.requiresAuth === true) {
        store.dispatch('inceuserNew', {
          id: 0,
          Login: false
        });
        return next({
          path: '/Login'
        });
      } else {
        store.dispatch('inceuserNew', {
          id: 0,
          Login: false
        });
        return next();
      }
    }
  });
  return next();
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
