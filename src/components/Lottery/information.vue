﻿﻿<template>
    <div class='information'>
        <Top :text="text"></Top>
        <div class="Return">
            <router-link to="/deposit">
                <img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">
            </router-link>
        </div>
        <div class="informationBox">
            <p style="font-size: 0.3rem;text-align: left">
                汇款前请联系客服确认汇款信息
                <router-link style="color:#219be4;text-decoration: underline" to="/NoteSingle">
                    在线客服
                </router-link>
            </p>
            <div class="informationBoxForm row">
                <form action="">
                    <p class="Title">存款人姓名(*转账账号对应的姓名)</p>
                    <div class="item">
                        <input minlength="2" maxlength="4" v-model="CardObj.name" type="text" placeholder="真实姓名">
                    </div>
                    <p class="Title">支付账号(*例如：***9558，可填后4位)</p>
                    <div class="item">
                        <input v-num v-model="CardObj.account" id="ipt4" minlength="4" maxlength="19" type="text" placeholder="卡号">
                    </div>
                    <p class="Title">存款金额</p>
                    <div class="item">
                        <input v-numd v-model="CardObj.amount" id="ipt5" type="text" placeholder="金额">
                    </div>
                    <p class="Title">存款时间</p>
                    <div class="item">
                        <input  v-model="CardObj.ctime" disabled="disabled" type="text">
                    </div>
                    <p class="Title">存款方式</p>
                    <div class="item">
                        <select  name="" id="cardtype">
                            <option value="">请选择存款方式</option>
                            <option value="1">网银转账</option>
                            <option value="2">支付宝</option>
                            <option value="3">财付通</option>
                            <option value="4">微信</option>
                            <option value="5">ATM自动柜员机</option>
                            <option value="6">ATM现金入款</option>
                            <option value="7">银行柜台</option>
                        </select>
                    </div>
                    <p class="Title">是否申请彩金</p>
                    <div class="item">
                        <select name="" id="cardBo">
                            <option value="1">不申请</option>
                            <option value="0">申请</option>
                        </select>
                    </div>
                    <div class="item itemText">
                        <p><br>
                            *转帐完成后请保留单据作为核对证明。<br> <br>
                            *必须填写表单内容，不能为空。<br> <br>
                            *每笔转帐请提交一次。<br> <br>
                            <!--&lt;!&ndash;*若您想加快ATM存款到帐时间，请填写ATM所属分行。-->
                        </p>
                    </div>
                    <div style="margin-bottom: 1rem;" class="item">
                        <div @click="submit()"  class="informationBoxFormBtn">提交</div>
                    </div>
                </form>
            </div>
        </div>
        <div class="webApp" v-show="webApp">
            <div class="content">
                <h2 class="title">系统提示 <b class="cuo rf" @click="drot()">×</b></h2>
                <p class="main">提交成功！<br>
                    如有疑问，请及时联系 <router-link to="/NoteSingle">
                        在线客服
                    </router-link>确认存款信息，谢谢！
                </p>
                <div class="item">
                    <router-link  @click="drot()" to="/NoteSingle">
                        在线客服
                    </router-link>
                    <a href="javascript:void(0)" @click="drot()">知道了</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var vm;
    import Top from '../Top/Top.vue'
    import { zh } from 'flatpickr/dist/l10n/zh';
    export default {
        data () {
            return {
                text:'填写存款信息',
                obj:null,
                min:0,
                man:0,
                start:'',
                enableOddDays: {
                    locale: zh,
                    enable: [
                        {
                            from: new Date().fp_incr(-31),
                            to: new Date().fp_incr(30) // 7 days from now
                        }
                    ],
                    enableTime: true
                },
                CardObj:{
                    name:'',
                    account:'',
                    amount:'',
                    ctime:'',
                    type:'',
                    caijin:''
                },
                mydata:'',
                webApp:false
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        mounted() {
            vm=this;
            vm.CardObj.ctime= vm.GetDateT();
        },
        ready() {
        },
        methods:{
            drot:function () {
                this.webApp = false;
            },
            GetDateT:function () {
                var d,s;
                d = new Date();
                s = d.getFullYear() + "-";             //取年份
                s = s + (d.getMonth() + 1) + "-";//取月份
                s += d.getDate() + " ";         //取日期
                s += d.getHours() + ":";       //取小时
                s += d.getMinutes() + ":";    //取分
                s += d.getSeconds();         //取秒
                return(s);
            },
            submit:function () {
                vm=this;
                vm.CardObj.type=$('#cardtype').val();
                vm.CardObj.caijin=$('#cardBo').val();
                vm.$BugNewBankPay(vm,vm.CardObj);
            }
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    .informationBoxFormBtn{
        height: 0.6rem;
        line-height: 0.6rem;
        background:#219be4;
        font-size: 0.4rem;
        border-radius: 3px;
        color:#fff;
    }
    .information{

        font-size: 0;
        min-height: 100%;
        width:100%;
    .webApp{
        position: fixed;
        top:0;
        left:0;
        bottom: 0;
        width: 100%;
        font-size: 0;
        min-height: 100%;
        z-index: 105;
        background: rgba(0,0,0,0.5);
    .content{
        margin: 50% auto;
        width: 90%;
        height: 3rem;
        border-radius: 3px;
        background: #fff;
    .title{
        height: 0.6rem;
        line-height: 0.6rem;
        font-weight: 900;
        margin: 0;
        border-bottom: 1px solid #e5e5e5;
        font-size: 0.3rem;
        text-align: left;
        padding-left: 0.25rem;
    .cuo{
        margin-right: 0rem;
        text-align: center;
        width: 0.8rem;
        font-size: 0.45rem;
        /*float: right;*/
    }
    }
    .main{
        padding-top: 0.3rem;
        padding-bottom: 0.1rem;
        line-height: 0.4rem;
        font-size: 0.25rem;
    a{
        color:blue;
    }
    }
    .item{
        border-top:1px solid #e5e5e5;
        height: 0.9rem;
    a{
        display: inline-block;
        width: 2rem;
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.3rem;
        border-radius: 3px;
        margin: 0.2rem 0.5rem;
        border-bottom: none;
        background:#219be4;
        color:#fff;

    }

    }
    }

    }
    .informationBox{
        padding: 0.2rem;
    .BankBoxList{
        background: #fff;
        border-radius: 3px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0.1rem;
        box-shadow: 0px 5px 5px 5px #e6e6e6;
        width:100%;
    li{
        height: 0.7rem;
        text-align: left;
        line-height: 0.7rem;
    b{
        font-size: 0.3rem;
        display: inline-block;
        vertical-align: top;
        width:20%;
        padding-right: 0.2rem;
        text-align: right;
    }
    span{
        font-size: 0.25rem;
        display: inline-block;
        vertical-align: top;
    }
    }
    li:not(:last-child){
        border-bottom: 1px solid #e6e6e6;
    }
    }
    .informationBoxForm{
        margin-top: 0.3rem;
        padding: 0.1rem;
    .Title{
        height: 0.5rem;
        line-height: 0.5rem;
        font-size: 0.25rem;
        text-align: left;
    }
    .item{
        width:100%;
        height: 0.6rem;
    input,select{
        width:100%;
        font-size: 0.25rem;
        padding-left: 0.1rem;
        height: 0.6rem;
        outline: none;
        border-radius: 3px;
        border:1px solid #e6e6e6;
    }
    p{
        font-size: 0.25rem;
        text-align: left;
        color:#219be4
    }
    }
    .itemText{
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
        min-height: 2rem;
    }
    }
    }
    }
</style>