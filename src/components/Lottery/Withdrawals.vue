﻿﻿<template>
    <div class='Withdrawals'>
        <p class="drawalsTop">
            您目前中心钱包账户余额为 : <span class="Orgrise">{{userNew.userMoney}}</span>
        </p>
        <div class="WithdrawalsCard" v-if="bankcard.cardNum != ''">
            <div class="CardNumBj">
                <p class="bankname">{{bankcard.cardNum.card_username}}</p>
                <p class="bank">{{bankcard.cardNum.bank_name}}</p>
                <p class="bankNum">{{bankcard.cardNum.card_num}}</p>
            </div>
        </div>
        <div class="row">
            <form action="">
                <div class="ipt">
                    <label for="card_num">卡号</label>
                    <input id="card_num"  disabled="disabled" :value="bankcard.cardNum.card_num" type="text">
                </div>
                <div class="ipt">
                    <label for="marking_quantity">要求打码量</label>
                    <input id="marking_quantity" disabled="disabled" :value="bankcard.Config.marking_quantity" type="text">
                </div>
                <div class="ipt">
                    <label for="user_quantity">完成打码量</label>
                    <input id="user_quantity"  disabled="disabled" :value="bankcard.Config.user_quantity" type="text">
                </div>
                <div class="ipt">
                    <label for="ipt6">金额</label>
                    <input v-numd v-model="tk.credit" type="text" id="ipt6" placeholder="金额">
                </div>
                <p style="height: 0.5rem;line-height: 0.5rem;text-align: left;padding-left: 27%;font-size: 0.25rem;color:#666">
                    提款金额 : ￥{{Money.min}} ~  {{Money.man}}
                </p>
                <div style="margin-top: 0rem; border-bottom: 1px solid #e6e6e6;" class="ipt">
                    <label for="pass">提款密码</label>
                    <input v-num maxlength="6" minlength="4" id="pass" v-model="tk.password" type="password" placeholder="请输入资金密码">
                </div>
                <div   style="height: 1.3rem;margin-top: 0.3rem;background:#e4e8ec;border:none" class="ipt">
                    <div @click="tkmoney()" class="WithdrawalsBtn">提交</div>
                </div>
            </form>
        </div>
        <div class="Wpop-wrapper" v-show="show">
            <div class="wrapper_main">
                <h3>系统提示</h3>
                <div class="text">{{text}}</div>
                <div class="row">
                    <div @click='fun1()' class="Close_button" style="margin-right: 10%;">确定</div>
                    <div @click='fun()' class="Close_button" style="background: #f11717">取消</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var vm;
    export default {
        data () {
            return {
                tk:{
                    credit:'',
                    password:'',
                    cardid:''
                },
                Money:{
                    min:100,
                    man:500000
                },
                text:'',
                obj:null,
                show:false
            }
        },
        computed: {
            bankcard:function () {
                return this.$store.state.bankcard;
            },
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        mounted() {
            vm=this;
        },
        methods:{
            tkmoney:function () {
                let vm,credit;
                vm=this;
                vm.tk.cardid = vm.bankcard.cardNum.id;
                credit = vm.$digital(vm.tk.credit);
                if(credit === false ){
                    vm.tk.credit = "";
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请输入金额，（有效数字）'});
                    return;
                }
                if(credit < vm.Money.min || credit > vm.Money.man){
                    vm.tk.credit = "";
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请输入金额,提款金额 : ￥'+vm.Money.min+' ~ '+vm.Money.man});
                    return;
                }
                if(!/^[0-9]{4,6}$/.test(vm.tk.password)){
                    vm.tk.password = "";
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'密码有误，请重新输入'});
                    return;
                }
                if(vm.bankcard.Config.marking_quantity === ""){
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请再次填写'});
                    return vm.$router.push({path:"/Withdrawals"});
                }
                if((Number(vm.bankcard.Config.marking_quantity) > Number(vm.bankcard.Config.user_quantity)) && (Number(vm.bankcard.Config.withdraw_fee)> 0 || Number(vm.bankcard.Config.withdraw_manage_fee) > 0)){
                    vm.text = "未完成打码量,提款将收取"+vm.bankcard.Config.withdrawConfig +"%的费率,"+'且今日提款次数过多，提款将收取' + vm.bankcard.Config.withdraw_fee + '%的手续费和'+vm.bankcard.Config.withdraw_manage_fee+'元的行政费,是否继续提款？';
                    return vm.show = true;
                }else if(Number(vm.bankcard.Config.marking_quantity) > Number(vm.bankcard.Config.user_quantity)){
                    vm.text = "未完成打码量,提款将收取"+vm.bankcard.Config.withdrawConfig +"%的费率,是否继续提款？";
                    return vm.show = true;
                }else if(Number(vm.bankcard.Config.withdraw_fee) > 0 || Number(vm.bankcard.Config.withdraw_manage_fee) > 0){
                    vm.text = "今日提款次数过多，提款将收取"+vm.bankcard.Config.withdraw_fee +"%的费率+"+vm.bankcard.Config.withdraw_manage_fee+'的行政费,是否继续提款？';
                    return vm.show = true;
                }else{
                    vm.$BugNewWithDraw(vm,vm.tk)
                }
            },
            fun:function () {
                vm=this;
                vm.show = false;
            },
            fun1:function () {
                vm=this;
                vm.show = false;
                vm.$BugNewWithDraw(vm,vm.tk)
            }
        },
        created(){
            vm=this;
        },
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    .Withdrawals{
        padding-bottom:0.5rem;
        width:100%;
        min-height: 100%;
        font-size: 0;
    }
    .WithdrawalsCard{
        height: 2.2rem;
        padding: 0.2rem;
    .CardNumBj{
        height: 1.8rem;
        padding-top: 0.3rem;
        border-radius: 3px;
        background: url(http://mobile.beike188.com/modelTTC/images/Lottery/cardbj.png) no-repeat;
        background-size:100% 100%;
        padding-left: 20%;
    p{
        text-align: left;
        padding-left: 0.2rem;
        color:#d5d5d5;
    }
    .bankname,.bank{
        height: 0.4rem;
        line-height: 0.4rem;
    }
    .bankname{
        font-size: 0.3rem;
        font-weight: 800;
    }
    .bank{
        font-size: 0.22rem;
    }
    .bankNum{
        height: 0.7rem;
        font-weight: 600;
        line-height: 0.7rem;
        font-size: 0.32rem;
    }
    }
    }
    .Wpop-wrapper{
        position: fixed;
        left:0;
        top:0;
        right: 0;
        bottom: 0;
        z-index: 105;
        background: rgba(0,0,0,0.6);
    h3{
        font-weight: 500;
        height: 1rem;
        text-align: center;
        font-size: 0.4rem;
        line-height:1rem;
    }
    .text{
        width:100%;
        height: 1.8rem;
        font-size:0.3rem;
        padding: 0.5rem 0.2rem;

        text-align: center;
        border-bottom: 1px solid #bfbfbf;
        border-top: 1px solid #bfbfbf;
    }
    .wrapper_main{
        /*position: relative;*/
        width:94%;
        text-align: center;
        height: 4.2rem;
        margin: 40% auto;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 0.1rem;
        background: #FFF;
        font-size: 0.3rem;
    .Close_button{
        /*position: absolute;*/
        /*right:-0.7rem;*/
        display: inline-block;
        border-radius: 4px;
        height:0.8rem;
        line-height: 0.8rem;
        text-align: center;
        background: #219be4;
        margin-top: 0.3rem;
        color:#fff;
        width:2rem;
    img{
        width:100%;
    }
    }
    }
    }
    .Withdrawals{
    .drawalsTop{
        height: 0.6rem;
        width:97%;
        margin: 0.1rem auto;
        font-size: 0.3rem;
        text-align: left;
        padding-left:5%;
        background: #faf9e6;
        line-height: 0.6rem;
        border:1px solid #c3c1c1;

    }
    form{
        width:97%;
        border: 1px solid #e5e5e5;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        margin:0 auto;
    .ipt{
        position: relative;
        height: 1.1rem;
        padding: 0.2rem;
        background: #fff;

    label{
        position: absolute;
        left:0;
        top:0.2rem;
        color:#000;
        font-size: 0.3rem;
        background: #fff;
        width:25%;
        line-height: 0.7rem;
    }
    input[type="text"]:disabled{
        height: 0.6rem;
        margin-top: 0.05rem;
    }
    input{
        width:100%;
        height: 0.7rem;
        outline: none;
        border:none;
        font-size: 0.25rem;
        padding-left: 27%;
    }
    }
    .ipt:not(:nth-child(1)){
        border-top: 1px solid #e6e6e6;
    }
    }
    }
    .WithdrawalsBtn{
        height: 0.7rem;
        line-height: 0.7rem;
        background: #219be4;
        margin-top: 0.2rem;
        font-size: 0.35rem;
        border-radius: 3px;
        color:#fff;
    }
</style>