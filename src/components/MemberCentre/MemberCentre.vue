<template>
    <div class='MemberCentre'>
        <Top :text="text"></Top>
        <div class="Setup">
            <router-link to="/userSettings">
                <i class="iconfont icon-shezhi"></i>
            </router-link>
        </div>
        <div class="MemberBox">
            <div v-if="userNew.Login === false" class="row MemberTitle">
                <div class="col-2 userlf">
                    <i class="iconfont icon-touxiang"></i>
                </div>
                <div class="col-10 userrf">
                    <router-link to="/LogIn">
                        登录
                    </router-link>
                    <span>/</span>
                    <router-link  to="/Registered">
                        注册
                    </router-link>
                </div>
            </div>
            <div v-if="userNew.Login === true" class="row MemberTitle">
                <div class="col-2 userlf">
                    <i class="iconfont icon-touxiang"></i>
                </div>
                <div class="col-10 userLogin">
                    <div class="col-10">
                        <h2>{{userNew.userName}}</h2>
                        <p class="Orgrise"><b class="iconfont icon-shangchengxitongtubiaozitihuayuanwenjian84"></b>{{userNew.userMoney}}</p>
                    </div>
                    <div @click="Refreshmoney()" class="col-2 Tran_Ime">
                        <i class="iconfont icon-shuaxin1"></i>
                    </div>
                </div>
            </div>
            <div class="row MemberTransfer">
                <div class="col-4 Recharge">
                    <router-link to="/deposit" >
                        充值
                    </router-link>
                </div>

                <div class="col-4 withdraw">
                    <router-link style="color:#1f1f1f;" to="/Withdrawals" >
                        提现
                    </router-link>
                </div>
                <div class="col-4 inchange">
                    <router-link to="/interchange" >
                        平台互转
                    </router-link>
                </div>
            </div>
            <div class="row" >
                <ul style="margin-bottom: 0.3rem;" class="MemberListOne">
                    <li @click="Boo($event)" v-for="v in user_" >
                        <router-link :to="v.url" >
                            <i :class="v.img"></i>{{v.title}}<b class="iconfont icon-iconfontyoujiantou"></b>
                        </router-link>
                    </li>
                </ul>
                <ul class="MemberListOne">
                    <li @click="Boo($event)" v-for="v in one" >
                        <router-link :to="v.url" >
                            <i :class="v.img"></i>{{v.title}}<b class="iconfont icon-iconfontyoujiantou"></b>
                        </router-link>
                    </li>
                </ul>
                <ul style="margin: 0.18rem 0" class="MemberListOne">
                    <li  @click="Boo($event)" v-for="v in two">
                        <router-link :to="v.url" >
                            <i :class="v.img"></i>{{v.title}}<b class="iconfont icon-iconfontyoujiantou"></b>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    var b=true,el,Type,vm;
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                text:'会员中心',
                user_:[
                    {img:'icon-gerenziliao iconfont',title:'个人资料',url:'/gameLimit'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/MemberCentre/wdsc.png',title:'积分商城',url:'/integral'}
                ],
                one:[
                    {img:'iconfont icon-06',title:'投注记录',url:'/lotteryForm'},
                    {img:'iconfont icon-jilu2-copy-copy',title:'转账记录',url:"/accountDetails"},
                    {img:'iconfont icon-chongzhijilu',title:'充值记录',url:'/rechargeRecord'},
                    {img:'iconfont icon-jilu',title:'提款记录',url:'/withdrawRecord'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/MemberCentre/wdsc.png',title:'积分兑换记录',url:'/integral'}
                ],
                two:[
//                    {img:'../../../static/images/MemberCentre/wfgz.png',title:'玩法规则',url:'/gameRules'},
//                    {img:'../../../static/images/MemberCentre/jxxp.png',title:'详细设定',url:'/gameLimit'},
                    {img:'iconfont icon-liushuizijin',title:'资金流水',url:"/bonusDetails"},
                    {img:'iconfont icon-youhuihuodong',title:'优惠活动',url:'/collection'}
                ]
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        mounted() {
        },
        methods:{
            Boo:function (event) {//检验登录状态 、执行操作
                var vm = this;
//                this.$store.dispatch("incrementWithValue");
            },
            Card:function (event) {//检验登录状态 、执行操作
                var vm = this;
//                this.$store.dispatch("incrementWithValue");
            },
            Refreshmoney:function () {
                vm=this;
                vm.$store.dispatch("incrajax",{id:0});
            }

        },
        created() {
        },
        components: {
            Top,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
.MemberCentre, .MemberBox,.MemberTitle{
    width:100%;
    font-size: 0;
}

.MemberCentre{
    .Setup{
        position:fixed;
        z-index: 102;
        right:0;
        width:0.8rem;
        height: 0.8rem;
        top:0;
        a{
            margin-top: 0.15rem;
            display: block;

            i{

                font-size: 0.5rem;
                color:#fff;
            }
        }

    }
    .MemberTitle{
        font-size: 0;
        background: #fff;
        padding: 0.15rem;
        .userlf{
            padding-top: 0.1rem;
            height: 1rem;
            i{
                font-size: 0.8rem;
            }
        }
        .userLogin{
            padding-left: 0.2rem;
            height: 1rem;
            h2{
                font-size: 0.35rem;
                text-align: left;
                height: 0.5rem;
                line-height: 0.5rem;
            }
            p{
                height: 0.5rem;
                line-height: 0.5rem;
                text-align: left;
                font-size: 0.3rem;
                padding-left: 0.6rem;
                position: relative;
                b{
                    position: absolute;
                    height: 0.5rem;
                    width:0.5rem;
                    top:0;
                    font-size: 0.5rem;
                    left:0;
                }
            }
        }
        .Tran_Ime{
            height: 1rem;
            position: relative;
            i{
                position: absolute;
                top:0.2rem;
                height: 0.6rem;
                width:0.6rem;
                left:0;
               font-size: 0.5rem;
            }
        }
        .userrf{
            height: 1rem;
            padding-left: 0.2rem;
            line-height: 1rem;
            text-align: left;
            a,span{
                font-size: 0.35rem;
                color:#000;
            }
            span{
                padding-left: 0.1rem;
                padding-right: 0.2rem;
            }
        }
    }
    .MemberTransfer{
        height: 1rem;
        background: #Fff;
        padding: 0.25rem;
        margin: 0.2rem 0;
        .Recharge,.withdraw,.inchange{
            height:0.5rem;
            line-height: 0.5rem;
            a{
                font-size: 0.32rem;
                display: block;
                font-weight: 700;
                color:#666;
            }
        }
        .Recharge{
            height: 0.5rem;
            a{
                color:#f11717;
            }
        }
        .inchange{
            padding:0;
            a{
                color:#000;
            }
        }
        .withdraw{
            a{
                border-right: 1px solid #e5e5e5;
                border-left:1px solid #e5e5e5;
            }
        }
    }
    .MemberListOne{
        background: #fff;
        padding: 0 0.2rem;
        li{
            position: relative;
            font-size: 0.3rem;
            line-height: 0.8rem;text-align: left;
            height: 0.8rem;
            a{
                display: block;
                width:100%;
                padding-left: 0.8rem;
                height: 0.8rem;
                color:#000;
            }
            b,i{
                position: absolute;
                top:0rem;
                height: 0.5rem;
                width:0.5rem;
                font-size: 0.5rem;
            }
            b{
                right:0;
            }
            i{
                top:0rem;
                left:0;
                font-size: 0.5rem;
            }
        }
        li+li{
            border-top:1px solid #e5e5e5;
        }
    }
}
</style>