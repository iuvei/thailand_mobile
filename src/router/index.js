import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home.vue'
// 彩票游戏
import LooteryGame from '../components/Home/LotteryGame.vue'
// 真人视讯
import LiveVideo from '../components/Home/LiveVideo.vue'
// 电子游艺
import ElectronicGames from '../components/Home/ElectronicGames.vue'
// haba
import GAMEHABA from '../components/Home/game_HABA.vue'
import PT from '../components/Home/game_PT.vue'
import GAMEMG from '../components/Home/game_MG.vue'
// 体育赛事
import Sportsevents from '../components/Home/Sportsevents.vue'

import BuyColor from '@/components/BuyCoolor/BuyColor.vue'
// 时时彩
import AlwaysColor from '../components/BuyCoolor/AlwaysColor.vue'
// 11选5
import Choose from '../components/BuyCoolor/Choose.vue'
// 低频彩
import LowColor from '../components/BuyCoolor/LowColor.vue'

// 全部彩种
import AllColor from '../components/BuyCoolor/AllColor.vue'
//存取款
import Lottery from '@/components/Lottery/Lottery.vue'
// 存款
import deposit from '../components/Lottery/deposit.vue'
import AlipayscanPay from '../components/Lottery/AlipayscanPay.vue'
//扫码支付
import ScanCodebank from '../components/Lottery/ScanCodebank.vue'
import ScanCode from '../components/Lottery/ScanCode.vue'
//填写存款信息
import information from '../components/Lottery/information.vue'
// 取款
import Withdrawals from '../components/Lottery/Withdrawals.vue'
import Recharge from '../components/Lottery/Recharge.vue'
// 客服
import NoteSingle from '@/components/NoteSingle/NoteSingle.vue'
// 会员中心
import MemberCentre from '@/components/MemberCentre/MemberCentre.vue'
//平台互转
import interchange from '../components/MemberCentre/interchange.vue'
// 投注明细
import lotteryForm from '../components/MemberCentre/lotteryForm.vue'
// 充值记录
import rechargeRecord from '../components/MemberCentre/rechargeRecord.vue'
// 设置
import userSettings from '../components/MemberCentre/userSettings.vue'
// 转账记录
import accountDetails from '../components/MemberCentre/accountDetails.vue'
// 提现记录
import  withdrawRecord from '../components/MemberCentre/withdrawRecord.vue'
// 玩法规则

// 详细设定
import gameLimit from '../components/MemberCentre/gameLimit.vue'
// 奖金详情
import bonusDetails from '../components/MemberCentre/bonusDetails.vue'
// 我的收藏
import collection from '../components/MemberCentre/collection.vue'
// 信息公告
import  infoMain from '../components/MemberCentre/infoMain.vue'
//添加银行卡
import userCapitalPwd from '../components/MemberCentre/userCapitalPwd.vue'
// 银行卡
import userBankCard from '../components/MemberCentre/userBankCard.vue'
// 修改登录密码
import modifyloginpass from '../components/MemberCentre/modifyloginpass.vue'
// 修改取款密码
import modifybankpass from '../components/MemberCentre/modifybankpass.vue'
//登录
import LogIn from '../components/LogIn/LogIn.vue'
// 注册
import Registered from '../components/Registered/Registered.vue'
//共用
import Public from '../components/public.vue'

// 积分商城
import integral from '../components/MemberCentre/integral.vue'
import integralRecording from '../components/MemberCentre/integralRecording.vue'
import NotFoundComponent from '../components/Top/NotFoundComponent.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        //首页
        { path: '*', component: NotFoundComponent},  //404页面
        {path: '/',component: Home,  //home页面
            children: [
                {path: '/', redirect:'/LooteryGame',component:LooteryGame},  //重定向到彩票页面
                {path: '/LooteryGame',component:LooteryGame,meta: { requiresAuth: false }},
                {path: '/LiveVideo',component:LiveVideo,meta: { requiresAuth: false }},
                {path: '/ElectronicGames',component:ElectronicGames,meta: { requiresAuth: false }},
                {path: '/Sportsevents',component:Sportsevents,meta: { requiresAuth: false }}
            ]
        },
        //客服
        {path: '/NoteSingle',component: NoteSingle,meta: { requiresAuth: false }},
        //登录
        {path: '/LogIn',component: LogIn,meta: { requiresAuth: false }},
        //注册
        {path: '/Registered',component: Registered,meta: { requiresAuth: false }},
        //存取款
        {path: '/Lottery',component: Lottery,
            children: [
                {path: '/Lottery', redirect:'/deposit',component:deposit},
                {path: '/deposit',component:deposit,meta: { requiresAuth: true }},//存款
                {path: '/Withdrawals',component:Withdrawals,meta: { requiresAuth:true }},//取款
                {path: '/userBankCard',component:userBankCard,meta: { requiresAuth: true }},//我的银行卡//
           ]
        },
        //会员中心
        {path: '/MemberCentre',component: MemberCentre,meta: { requiresAuth: true }},
        // 全部彩种
        {path: '/Public',component:Public,meta: { requiresAuth: true },
            children: [
                {path: '/userSettings',component:userSettings,
                    children: [
                        {path: '/userSettings', redirect:'/modifyloginpass',component:modifyloginpass},
                        {path: '/modifyloginpass',component:modifyloginpass,meta: { requiresAuth: true }},//修改登录密码
                        {path: '/modifybankpass',component:modifybankpass,meta: { requiresAuth: true }}//修改取款密码
                    ]
                },//设置
                {path: '/userCapitalPwd',component:userCapitalPwd,meta: { requiresAuth: true }},//添加银行卡

                {path: '/interchange',component:interchange,meta: { requiresAuth: true }},//平台互转
                {path: '/gameLimit',component:gameLimit,meta: { requiresAuth: true }},//个人信息
                {path: '/bonusDetails',component:bonusDetails,meta: { requiresAuth: true }},//奖金详情 修改 资金流水
                {path: '/lotteryForm',component:lotteryForm,meta: { requiresAuth: true }},//投注记录
                {path: '/rechargeRecord',component:rechargeRecord,meta: { requiresAuth: true }},//充值记录
                {path: '/accountDetails',component:accountDetails,meta: { requiresAuth:true }},
                {path: '/withdrawRecord',component:withdrawRecord,meta: { requiresAuth: true }},//提现记录
                {path: '/collection',component:collection,meta: { requiresAuth: true }},//优惠记录
                // {path: '/infoMain',component:infoMain,meta: { requiresAuth: true }},//信息公告
                {path: '/AlipayscanPay',component:AlipayscanPay,meta: { requiresAuth: true }},//
                {path: '/Recharge',component:Recharge,meta: { requiresAuth: true }},//支付 微信 财付通ScanCode
                {path: '/ScanCode',component:ScanCode,meta: { requiresAuth: true }},//扫码支付
                {path: '/ScanCodebank',component:ScanCodebank,meta: { requiresAuth: true }},//扫码支付跳转
                {path: '/information',component:information,meta: { requiresAuth: true }},//填写存款信息
                // 积分商城 **********************
                {path: '/integral',component:integral,meta: { requiresAuth: true }},// 积分商城
                {path: '/integralRecording',component:integralRecording,meta: { requiresAuth: true }},// 积分商城integralRecording
                // 积分商城 **********************
                {path: '/GAMEHABA',component:GAMEHABA,meta: { requiresAuth: true }},//HABA 游戏
                {path: '/PT',component:PT,meta: { requiresAuth: true }},//PT 游戏
                {path: '/GAMEMG',component:GAMEMG,meta: { requiresAuth: true }},//HABA 游戏
                // {path: '/AlwaysColor',component:AlwaysColor,meta: { requiresAuth: false }},//官方彩
                {path: '/Choose',component:Choose,meta: { requiresAuth: false }},// 快2
                {path: '/BuyColor',component:BuyColor,
                    children: [
                        {path: '/BuyColor', redirect:'/LowColor',component:LowColor},
                        {path: '/LowColor',component:LowColor,meta: { requiresAuth: true }},//修改登录密码
                        {path: '/AllColor',component:AllColor,meta: { requiresAuth: true }}//修改取款密码
                    ]
                },// 快2
                // {path: '/LowColor',component:LowColor,meta: { requiresAuth:false }},//传统彩
                // {path: '/AllColor',component:AllColor,meta: { requiresAuth:false }},
            ]
        },
    ]
})
