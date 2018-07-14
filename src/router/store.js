/**
 * Created by Administrator on 2017/10/2. Bug
 */
import Vue from 'vue'
import Vuex from 'vuex'
import Public from '../components/public/Public'
import VueCookies from 'vue-cookies'
Vue.use(VueCookies);
Vue.use(Public); // 公用js
Vue.use(Vuex); //管理响应
import $ from 'jquery'
  // 内网
var Host = document.location.host;
var strs = document.location.protocol;
var pc = strs + '//' + document.location.hostname.slice(2) + "?PC=true";
var xpj_src = strs + '//' + Host + "/XPJ/";
// var xpj_src = strs+'//'+Host+"/TTC/";
// 外网

//测试代理接口
// var xpj_src = 'http://192.168.0.3:8480/XPJ/';


var applet, appall, pages;
pages = false;
var bug = {
  geturl: function() {
    var url = document.location.toString();
    if (url.indexOf('?') != -1) {
      var number1 = url.indexOf('?');
      var url2 = url.slice(number1);
      if (url2.indexOf('p') != -1) {
        var mumber2 = url2.indexOf('p');
        var urlstring = url2.slice(mumber2 + 2);
        $cookies.set("proxyname", urlstring, 60 * 60 * 24 * 1);
      }
    }
  },
  ajax: function(objs, src, callback) {
    $.ajax({
      type: "post",
      data: objs,
      timeout: 10000,
      url: src,
      async: true,
      cache: false,
      success: function(data) {
        callback(data);
      },
      error: function(xhr, textStatus) {
        var id;
        if (textStatus == 'timeout') {
          id = 1
        } else {
          id = 0
        }
        callback(id)
      }
    })
  },
  franttime: function(time) {
    var date, Y, M, D, h, m, s;
    date = new Date(time);
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() +
      1) + '-';
    D = date.getDate() + ' ';
    h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) +
      ':';
    m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) +
      ':';
    s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
    var fommat_time = Y + M + D + h + m + s;
    return fommat_time;
  },
  datatboy: function(time) {
    let tody = new Date();
    let day = tody.getTime() - parseFloat(time) * 60 * 60 * 24;
    let t = new Date(day);
    return t.getFullYear() + '-' + (year(t.getMonth() + 1)) + '-' + year(t.getDate())
  },
  year: function(el) {
    if (el < 10) {
      return ('0' + el);
    } else {
      return el;
    }
  },
  App: function() { //判断是否 下载过了app
    if (document.location.search === '?app=true') { //下载过
      $cookies.set("appTest", true, 60 * 60 * 24 * 30);
      return false;
    } else { //网址不对
      if ($cookies.get('appTest') === 'true') { //下载过了
        return false;
      } else {
        return true; //没下载
      }
    }
  }
}
bug.geturl(); //获取网址 代理名称
var cagent = 'TTC';
export default new Vuex.Store({
  state: {
    cagent: 'TTC',
    userNew: {
      proxyname: $cookies.get('proxyname'),
      jrg: xpj_src,
      cagent: cagent,
      userName: '',
      userMoney: '',
      gameMoney: '',
      userkey: '',
      integral: '',
      Login: false,
      data: '',
      applet: bug.App(), //true要求下载
      appsrc: 'https://www.txw-app.com/ttc.html',
      PC: pc
    },
    Recharge: {
      judgment: false,
      page: 1,
      total: "1",
      size: 5,
      column: '',
      data: {},
    },
    annouationNew: { //公告轮播
      announcement: '',
      Rotation: '',
      offer: ''
    },
    gamepop: {
      gametitle: '',
      judgment: false,
      src: '',
      data: {}
    },
    bankcard: {
      PaymentList: '',
      judgment: '',
      err: '',
      src: '',
      type: '',
      cardNum: '',
      Config: '',
    },
    CloseNew: { //系统提示框
      Closepoptext: '',
      Closepop: false,
      pages: pages,
    },
    game: [ //游戏列表
      {
        name: 'IG 彩票（新）',
        type: 'IGPJ'
      }, {
        name: 'IG 彩票',
        type: 'IG'
      }, {
        name: 'VR 彩票',
        type: 'VR'
      },
      // {name:'BG 彩票/视讯',type:'BG'},
      {
        name: 'Cagayan88视讯',
        type: 'CG'
      }, {
        name: 'DS视讯',
        type: 'DS'
      }, {
        name: 'AGIN国际厅',
        type: 'AGIN'
      }, {
        name: '申博视讯(TGP)',
        type: 'SB'
      }, {
        name: 'OG视讯',
        type: 'OG'
      }, {
        name: 'BBIN 视讯/电子',
        type: 'BBIN'
      }, {
        name: 'PT电子',
        type: 'PT'
      }, {
        name: 'MG电子',
        type: 'MG'
      }, {
        name: 'HABA电子',
        type: 'HABA'
      }, {
        name: '皇冠',
        type: 'HG'
      }
    ],
    // 旧的
    user: {
      name: '',
      money: ''
    },
    jrg: xpj_src,
    Scan: null,
    typeList: null,
    waiting: false,
    Login: false,
    cardbox: null, //模拟银行卡是否存在
    count: 0,
    AlipayscanPayNum: 2,
    AlipayscanPay: null, //支付宝 页面
    boxText: '', ////表单获取焦点提示文本内容
    paydata: null, //内容
    amount: 300 //模拟金额
      // 旧的
  },
  mutations: {
    // 新
    INCENEWUSERLOGINUSERNAME(state, value) { //New user  Name
        state.userNew.userName = value.substring(3)
      },
      INCENEWUSERLOGINUSERMONEY(state, value) { //New user  Money
        state.userNew.userMoney = value
      },
      INCENEWUSERLOGINGAMEMONEY(state, value) { //New user  gameMoney
        state.userNew.gameMoney = value
      },
      INCENEWUSERLOGINLOGIN(state, value) { //New user  Login
        state.userNew.Login = value
      },
      INCENEWUSERLOGINTOKEN(state, value) { //New user  token
        state.userNew.userkey = value
      },
      INCENEWUSERLOGININTEGRAL(state, value) { //New user  integral
        state.userNew.integral = parseFloat(value)
      },
      INCENEWUSERLOGINDATA(state, value) { //New user  data
        state.userNew.data = value
      },
      // 查询记录Recharge
      INCENRECHARGEJUDGAMENT(state, value) { //New Recharge judgment
        state.Recharge.judgment = value
      },
      INCENRECHARGEDATA(state, value) { //New Recharge judgment
        state.Recharge.data = value
      },
      INCENRECHARGETOTAL(state, value) { //New Recharge total
        state.Recharge.total = value
      },
      INCENRECHARGECOLUMN(state, value) { //New Recharge column
        state.Recharge.column = value
      },
      INCENEWCLOSEPOP(state, value) { //New 系统提示框
        state.CloseNew.Closepop = value
      },
      INCENEWCLOSEPOPTEXT(state, value) { //New 系统提示文本pages
        state.CloseNew.Closepoptext = value
      },
      INCENEWCLOSEPAGES(state, value) { //New 系统提示文本
        state.CloseNew.pages = value
      },
      INCEANNOUATIONANNOUNCEMENT(state, value) { //New 公告
        state.annouationNew.announcement = value
      },
      INCEANNOUATIONROTATION(state, value) { //New 轮播
        state.annouationNew.Rotation = value
      },
      INCEANNOUATIONOffER(state, value) { //New 优惠
        state.annouationNew.offer = value
      },
      // game
      INCEGAMEPOP(state, value) { //游戏组件
        state.gamepop.judgment = value
      },
      INCEGAMEPOPTITLE(state, value) { //游戏 title
        state.gamepop.gametitle = value
      },
      INCEGAMEPOPSRC(state, value) { //游戏组件 src
        state.gamepop.src = value
      },
      INCEGAMEPOPDATA(state, value) { //游戏组件 data
        state.gamepop.data = value
      },
      INCRWAITING(state, value) { //等待页面
        state.waiting = value
      },
      INCEBANKCARDPAYMENTLIST(state, value) { //CARD data
        state.bankcard.PaymentList = value
      },
      INCEBANKCARDJUDGMENT(state, value) { //card judgment
        state.bankcard.judgment = value
      },
      INCEBANKCARDERR(state, value) { //card err
        state.bankcard.err = value
      },
      INCEBANKCARDSRC(state, value) { //card src
        state.bankcard.src = value
      },
      INCEBANKCARDTYPE(state, value) { //card src cardNum
        state.bankcard.type = value
      },
      INCEBANKCARDCARDNUM(state, value) { //card  cardNum
        state.bankcard.cardNum = value
      },
      INCEBANKCARDCONFIG(state, value) { //card  cardNum
        state.bankcard.Config = value
      },
      // 旧
      INCEALIPAYSCANPAY(state, value) { //支付宝页面
        state.AlipayscanPay = value
      },
      INCEALIPAYSCANPAYNUM(state, value) { //支付宝页面
        state.AlipayscanPayNum = value
      },
      INCEClosepop(state, value) { //系统提示显示隐藏
        state.Closepop = value
      },
      INCEPAYDATA(state, value) { //w微信支付宝专用
        state.paydata = value
      },
      INCETYPELIST(state, value) { //银行卡列表
        state.typeList = value
      },
      INCESCAN(state, value) { //扫码支付银行卡列表
        state.Scan = value
      },
      INCRClosepoptext(state, value) { //系统提示内容
        state.Closepoptext = value
      },
      INCRLOGIN(state, value) { //title 判断登录状态
        state.Login = value
      },
      INCR_box_Text(state, value) { //表单获取焦点提示文本内容
        state.boxText = value
      },
      INCRCARDBOX(state, value) { //银行卡是否存在
        state.cardbox = value
      },
      INCRUSER(state, value) { //获取用户信息
        state.user.name = value.substring(3);
      },
      INCRMONEY(state, value) { //获取用户信息
        state.user.money = value;
      },
      INCRUSERKER(state, value) { //获取用户token
        state.user.money = value;
      },
      INCREMENT_WITH_VALUE(state, value) {
        state.count += value;
      },
      // 显示和隐藏waiting
      SHOW_WAITING_MESSAGE(state) {
        state.waiting = true;
      },
      HIDE_WAITING_MESSAGE(state) {
        state.waiting = false;
      }
      // 旧
  },
  actions: {
    // 新
    inceuserNew({
        commit
      }, value) { //个人
        if (value.id === 0) {
          commit("INCENEWUSERLOGINLOGIN", value.Login)
        } else if (value.id === 1) {
          commit("INCENEWUSERLOGINLOGIN", value.Login);
          commit("INCENEWUSERLOGINUSERNAME", value.userName);
          commit("INCENEWUSERLOGINTOKEN", value.userkey);
        } else if (value.id === 2) {
          commit("INCENEWUSERLOGINLOGIN", value.Login);
          commit("INCENEWUSERLOGINUSERNAME", value.userName);
          commit("INCENEWUSERLOGINTOKEN", value.userkey);
          commit("INCENEWUSERLOGINUSERMONEY", value.balance);
        } else if (value.id === 3) { //  公告   暂停
          commit("INCEANNOUATIONANNOUNCEMENT", value.announcement);
        } else if (value.id === 4) { //  轮播   暂停
        } else if (value.id === 5) { // 钱包余额    暂停使用
          commit("INCENEWUSERLOGINUSERMONEY", value.balance);
        } else if (value.id === 6) { // 游戏余额
          commit("INCENEWUSERLOGINGAMEMONEY", value.balance);
        } else if (value.id === 7) { // card
          commit("INCEBANKCARDJUDGMENT", value.judgment);
          commit("INCEBANKCARDERR", value.err);
          commit("INCEBANKCARDPAYMENTLIST", value.PaymentList);
        } else if (value.id === 8) { // card
          commit("INCEBANKCARDSRC", value.src);
          commit("INCEBANKCARDTYPE", value.type);
        } else if (value.id === 9) {
          commit("INCEBANKCARDCARDNUM", value.cardNum);
        }
      },
      incrrecharge({
        commit
      }, value) { //个人
        if (value.id === 0) {
          commit("INCENRECHARGEJUDGAMENT", value.judgment);
          commit("INCENRECHARGETOTAL", value.total);
        } else if (value.id === 1) {
          commit("INCENRECHARGEDATA", value.obj);
          commit("INCENRECHARGETOTAL", value.total);
          commit("INCENRECHARGEJUDGAMENT", value.judgment);
        }
      },
      incrajax({
        commit
      }, value) { //游戏组件
        commit("INCRWAITING", true)
        if (value.id === 0) {
          bug.ajax({
            BType: "WALLET"
          }, xpj_src + 'User/getBalance', function(obj) {
            commit("INCRWAITING", false)
            if (obj === 0) {} else if (obj === 1) {} else {
              if (isNaN(obj.balance)) {
                commit("INCENEWUSERLOGINUSERMONEY", obj.balance);
                return;
              } else {
                commit("INCENEWUSERLOGINUSERMONEY", parseFloat(obj.balance)
                  .toFixed(2));
              }
            }
          })
        } else if (value.id === 1) { //获取打码量
          bug.ajax({}, xpj_src + 'User/selectWithdrawConfig', function(obj) {
            commit("INCRWAITING", false)
            if (obj === 0) {} else if (obj === 1) {} else if (obj.status ==
              "success") {
              commit("INCEBANKCARDCONFIG", obj);
            } else if (obj.status == "faild") {}
          })
        } else if (value.id === 2) { //获取钱包
          bug.ajax({}, xpj_src + 'User/getUserInfo', function(obj) {
            commit("INCRWAITING", false)
            if (obj === 0) {} else if (obj === 1) {} else {
              let time = {
                reg_date: '',
                login_time: "",
                vip_level: '',
                mobile: ''
              };
              commit("INCENEWUSERLOGINUSERNAME", obj.username);
              commit("INCENEWUSERLOGINUSERMONEY", parseFloat(obj.wallet)
                .toFixed(2));
              commit("INCENEWUSERLOGININTEGRAL", obj.integral);
              time.reg_date = bug.franttime(parseInt(obj.reg_date.time));
              time.login_time = bug.franttime(parseInt(obj.login_time.time));
              time.vip_level = parseInt(obj.vip_level);
              time.mobile = obj.mobile
              commit("INCENEWUSERLOGINDATA", time);
            }
          })
        } else if (value.id === 3) { //获取优惠bnner
          bug.ajax({
            type: 2,
            cagent: cagent
          }, xpj_src + 'mobleWebcomConfig.do', function(obj) {
            commit("INCRWAITING", false)
            if (obj === 0) {} else if (obj === 1) {} else {
              commit("INCEANNOUATIONOffER", obj);
            }
          })
        } else if (value.id === 4) { //获取轮播
          commit("INCEANNOUATIONROTATION", "");
          bug.ajax({
            type: 1,
            cagent: cagent
          }, xpj_src + 'mobleWebcomConfig.do', function(obj) {
            commit("INCRWAITING", false);
            if (obj === 0) {} else if (obj === 1) {} else {
              commit("INCEANNOUATIONROTATION", obj);
            }
          })
        } else if (value.id === 5) { //充值记录
          commit("INCENRECHARGEDATA", "");
          bug.ajax(value.data, xpj_src + "User/getReChargeInfo", function(
            obj) {
            commit("INCRWAITING", false)
            if (obj === 0) {} else if (obj === 1) {} else {
              if (parseInt(obj[0].cnt) == 0) {
                commit("INCENRECHARGEJUDGAMENT", false);
                commit("INCENRECHARGETOTAL", "0");
              } else {
                commit("INCENRECHARGETOTAL", obj[0].cnt);
                let bj = obj.slice(1)
                for (var i = 0; i < bj.length; i++) {
                  bj[i].time = bug.franttime(parseInt(bj[i].order_time.time))
                }
                commit("INCENRECHARGEDATA", bj);
                commit("INCENRECHARGEJUDGAMENT", true);
              }
            }
          })
        } else if (value.id === 6) { //资金流水
          commit("INCENRECHARGEDATA", "");
          bug.ajax({
            pageSize: value.data.pageSize,
            pageNo: value.data.pageNo,
            startTime: value.data.startTime + ' ' + '00:00:00',
            endTime: value.data.endTime + ' ' + '23:59:59'
          }, xpj_src + "User/queryByTreasurePage", function(obj) {
            commit("INCRWAITING", false)
            if (obj === 0) {} else if (obj === 1) {} else {
              if (obj.status == "failed") {
                commit("INCENEWCLOSEPOP", true);
                commit("INCENEWCLOSEPOPTEXT", obj.msg)
                return;
              }
              if (parseInt(obj.total) > 0) {
                commit("INCENRECHARGETOTAL", obj.total);
                let bj = obj.data;
                for (var i = 0; i < bj.length; i++) {
                  bj[i].time = bug.franttime(parseInt(bj[i].addtime.time))
                }
                commit("INCENRECHARGEDATA", bj);
                commit("INCENRECHARGEJUDGAMENT", true);

              } else {
                commit("INCENRECHARGEJUDGAMENT", false);
                commit("INCENRECHARGETOTAL", obj.total);
              }
            }
          })
        } else if (value.id === 7) { //获取提款记录
          commit("INCENRECHARGEDATA", "");
          bug.ajax(value.data, xpj_src + "User/getWithDrawInfo", function(
            obj) {
            commit("INCRWAITING", false);
            if (obj === 0) {} else if (obj === 1) {} else {
              if (parseInt(obj[0].cnt) == 0) {
                commit("INCENRECHARGEJUDGAMENT", false);
                commit("INCENRECHARGETOTAL", "0");
              } else {
                commit("INCENRECHARGETOTAL", obj[0].cnt);
                let bj = obj.slice(1);
                for (var i = 0; i < bj.length; i++) {
                  bj[i].time = bug.franttime(parseInt(bj[i].add_time.time))
                  bj[i].money = parseFloat(bj[i].administrative_fee) +
                    parseFloat(bj[i].poundage)
                }
                commit("INCENRECHARGEDATA", bj);
                commit("INCENRECHARGEJUDGAMENT", true);
              }

            }
          })
        } else if (value.id === 8) { //获取转账记录
          commit("INCENRECHARGEDATA", "");
          bug.ajax(value.data, xpj_src + 'User/getTransferInfo', function(
            obj) {
            commit("INCRWAITING", false)
            if (obj === 0) {} else if (obj === 1) {} else {
              if (parseInt(obj[0].cnt) == 0) {
                commit("INCENRECHARGEJUDGAMENT", false);
                commit("INCENRECHARGETOTAL", "0");
              } else {
                commit("INCENRECHARGETOTAL", obj[0].cnt);
                let bj = obj.slice(1);
                for (var i = 0; i < bj.length; i++) {
                  bj[i].time = bug.franttime(parseInt(bj[i].t_time.time))
                }
                commit("INCENRECHARGEDATA", bj);
                commit("INCENRECHARGEJUDGAMENT", true);
              }
            }
          })
        } else if (value.id === 9) { //投注记录
          commit("INCENRECHARGEDATA", "");
          bug.ajax({
            pageSize: value.data.pageSize,
            pageNo: value.data.pageNo,
            bdate: value.data.bdate + ' ' + '00:00:00',
            edate: value.data.edate + ' ' + '23:59:59',
            type: value.data.type
          }, xpj_src + 'User/getBetInfo', function(obj) {
            commit("INCRWAITING", false);
            if (obj === 0) {} else if (obj === 1) {} else {
              console.log(obj[0].cnt)
              if (parseInt(obj[0].cnt) === 0) {
                commit("INCENRECHARGEJUDGAMENT", false);
                commit("INCENRECHARGETOTAL", "0");
              } else {
                commit("INCENRECHARGETOTAL", obj[0].cnt);
                commit("INCENRECHARGECOLUMN", obj[1]);
                let bj = obj.slice(2);
                for (var i = 0; i < bj.length; i++) {
                  bj[i].time = bug.franttime(parseInt(bj[i].bettime))
                }
                commit("INCENRECHARGEDATA", bj);
                commit("INCENRECHARGEJUDGAMENT", true);
              }
            }
          })
        } else if (value.id === 10) { //获取游戏余额
          commit("INCRWAITING", false)
          commit("INCENEWUSERLOGINGAMEMONEY", "加载中...");
          bug.ajax(value.data, xpj_src + 'User/getBalance', function(obj) {
            if (obj === 0) {} else if (obj === 1) {} else {
              if (isNaN(obj.balance)) {
                commit("INCENEWUSERLOGINGAMEMONEY", obj.balance);
                return;
              } else {
                commit("INCENEWUSERLOGINGAMEMONEY", parseFloat(obj.balance)
                  .toFixed(2));
              }
            }
          })
        } else if (value.id === 11) { //公告
          commit("INCEANNOUATIONANNOUNCEMENT", "");
          bug.ajax({
            cagent: cagent
          }, xpj_src + 'gonggao.do', function(obj) {
            commit("INCRWAITING", false);
            if (obj === 0) {} else if (obj === 1) {} else {
              let gao = "";
              for (let i = 0; i < obj.length; i++) {
                gao += (i + 1) + '、' + obj[i].rmk
              }
              commit("INCEANNOUATIONANNOUNCEMENT", gao);
            }
          })
        } else {
          console.log("参数有误")
        }
      },
      incrgamepop({
        commit
      }, value) { //游戏组件
        if (value.id === 0) {
          commit("INCEGAMEPOP", value.judgment);
        } else if (value.id === 1) {
          commit("INCEGAMEPOPTITLE", value.gametitle)
        } else if (value.id === 2) {
          commit("INCEGAMEPOPSRC", value.src)
        }
      },
      inceCloseNew({
        commit
      }, value) { //系统提示框
        if (value.id === 0) {
          commit("INCENEWCLOSEPOP", value.Closepop)
        } else if (value.id === 1) {
          commit("INCENEWCLOSEPOP", value.Closepop);
          commit("INCENEWCLOSEPOPTEXT", value.Closepoptext)
        } else if (value.id === 2) {
          commit("INCENEWCLOSEPAGES", value.pages);
        }
      },
      // 旧
      incealipayscanpay({
        commit
      }, value) { //支付宝页面
        commit("INCEALIPAYSCANPAY", value)
      },
      incealipayscanpaynum({
        commit
      }, value) { //支付宝页面
        commit("INCEALIPAYSCANPAYNUM", value)
      },
      incrtypelist({
        commit
      }, value) { //支付接口专用
        commit("INCETYPELIST", value)
      },
      incruser({
        commit
      }, value) { //获取用户信息
        commit("INCRUSER", value)
      },
      incrpaydata({
        commit
      }, value) { //w微信支付宝专用
        commit("INCEPAYDATA", value)
      },
      incrmoney({
        commit
      }, value) { //获取钱包余额
        commit("INCRMONEY", value)
      },
      incrscan({
        commit
      }, value) { //扫码支付
        commit("INCESCAN", value)
      },
      incrClosepop({
        commit
      }, value) { //系统提示内容显示隐藏
        commit("INCEClosepop", value);
      },
      incrClosepoptext({
        commit
      }, value) { //系统提示内容
        commit("INCRClosepoptext", value);
      },
      incrcardbox({
        commit
      }, value) { //表单获取焦点提示文本内容
        commit("INCRCARDBOX", value);
      },
      incruserkey({
        commit
      }, value) { //获取用户token
        commit("INCRUSERKER", value)
      },
      decrement({
        commit
      }, value) {
        commit("INCRLOGIN", value)
      },
      incrwaitionValue({
        commit
      }, value) {
        commit("INCRWAITING", value)
      },
      incrboxText({
        commit
      }, value) {
        commit("INCR_box_Text", value);
      },
      incrementWithValue({
        commit
      }) {
        commit("SHOW_WAITING_MESSAGE");
        setTimeout(function() {
          commit("HIDE_WAITING_MESSAGE");
        }, 1000)
      }
  }
})
