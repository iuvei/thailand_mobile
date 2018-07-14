﻿<template>
    <div class='userCapitalPwd'>
        <Top :text="text"></Top>
        <div class="Return">
            <router-link to="/userBankCard">
                <img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">
            </router-link>
        </div>
        <div class="row Carpittitle" >
            为了您账户安全，真实姓名需要与绑定银行卡姓名一致
        </div>
        <div class="CapitalPwd CapitalPwdCard">
            <form action="">
                <div class="row ipt">
                    <label for="">姓名</label>
                    <input class="CarcName" minlength="2" maxlength="4" v-model="addtext.cardUserName" type="text" placeholder="用户名">
                </div>
                <div class="row ipt">
                    <label for="haorooms">银行卡号</label>
                    <input class="CardNumber Card" maxlength="19" minlength="15" v-model.trim="addtext.cardNum" id="haorooms" v-num type="text" placeholder="请输入银行卡号">
                </div>
                <div class="row ipt">
                    <label for="">银行</label>
                    <select name="" id="" class="bankCode" v-model="addtext.bankCode">
                        <option value="">选择银行种类</option>
                        <option value="1">中国农业银行</option>
                        <option value="2">中国银行</option>
                        <option value="3">交通银行</option>
                        <option value="4">中国建设银行</option>
                        <option value="5">中国工商银行</option>
                        <option value="6">中国邮政储蓄银行</option>
                        <option value="7">招商银行</option>
                        <option value="8">浦发银行</option>
                        <option value="9">中国光大银行</option>
                        <option value="10">中信银行</option>
                        <option value="11">平安银行</option>
                        <option value="12">中国民生银行</option>
                        <option value="13">华夏银行</option>
                        <option value="14">广发银行</option>
                        <option value="15">北京银行</option>
                        <option value="16">上海银行</option>
                        <option value="17">兴业银行</option>
                    </select>
                </div>
                <div class="row ipt"><label for="">开户行地址</label>
                    <!--<input class="CardAddress" type="text" placeholder="请输入开户行地址" v-model="addtext.cardAddress">-->
                    <select name="" @change='select' ref="province" id="" style="width: 2.3rem;" class="province">
                        <option  value="">选择-省-</option>
                        <option  v-for='(v,key) in $list' :value='key'>{{v.name}}</option>
                    </select>
                    <select name=""  @change='city' ref="city" id="" style="width: 2.3rem;margin: 0 0 0 0.2rem;" class="city">
                        <option value="">选择-市-</option>
                        <option v-for='(index,key) in cities' :value='index.id'>{{index.name}}</option>
                    </select>
                </div>
            </form>
            <div class="row Cardpass ipt">
                <label style="padding-left: 0.2rem;" for="">资金密码</label>
                <input v-num maxlength="6" minlength="4" v-model="addtext.password" id="Cardpass" type="password" placeholder="请输入资金密码">
            </div>
            <div class="CapBtn Org" @click="addcard()" >确认</div>
        </div>
    </div>
</template>

<script>
    var vm;
    import Top from '../Top/Top.vue'
    import {mapActions} from "vuex";
    export default {
        data () {
            return {
                text:'绑定银行卡',
                firstName:'Foo',
                lastName:'bar',
                cities:null,
                incrementValue: 0,
                addtext:{
                    cardUserName:'',
                    cardNum:'',
                    cardAddress:'',
                    password:'',
                    bankCode:''
                }
            }
        },
        mounted() {
            vm=this;
            vm.select();
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        methods: {
            incrementWithValue() {
                this.$store.dispatch("incrementWithValue", this.incrementValue);
            },
            city:function() {
                var province= $('.province').val();
                var city =$('.city').val()
            },
            select: function(){
                if($('.province').val() ==""){
                    $('.city')[0].selectedIndex = 0;
                    $(".city").attr("disabled","disabled");
                }else if($('.province').val() !=""){
                    $('.city')[0].selectedIndex = 1;
                    $(".city").removeAttr("disabled");
                    var a = $('.province').val();
                    var list = vm.$list;
                    vm.cities = list[a].cities;
                }
            },
            addcard:function () {
                vm=this;
                var province=$(".province").find("option:selected").text();
                var city=$(".city").find("option:selected").text();
                vm.$Capital.call(this,vm.addtext,function (err) {
                    if(err){
                        vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:err});
                        return;
                    }
                    if(vm.$refs.province.value === ''){
                        vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请选择省份'});
                        return;
                    }
                    if(vm.$refs.city.value === ''){
                        vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请选择市'});
                        return;
                    }
                    vm.addtext.cardAddress=province+','+city;
                    vm.$BugNewAddCard(vm,vm.addtext)
                })
            }
        },
        created() {
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.userCapitalPwd{
    font-size: 0;
    .Carpittitle{
        height: 0.6rem;
        font-size: 0.22rem;
        line-height: 0.6rem;
        color:#b3b3b3;
        text-align: left;
        padding-left: 0.15rem;
    }
    .CapitalPwd{
        /*background: #fff;*/
        form{
            background: #fff;
            padding-left: 0.2rem;
            padding-right: 0.2rem;
            border-bottom:1px solid #e6e6e6;
            border-top:1px solid #e6e6e6;
        }
        .ipt{
            height: 0.97rem;
            text-align: left;
            position:relative;
            label{
                position: absolute;
                left:0;
                top:0;
                height: 0.97rem;
                width:2rem;
                text-align: left;
                font-size: 0.3rem;
                line-height: 0.97rem;
            }
            input{
                width:100%;
                height: 0.4rem;
                margin-top: 0.3rem;
                outline: none;
                border: none;
                padding-left: 2rem;
                font-size: 0.25rem;
            }
            select{
                height: 0.6rem;
                width:3rem;
                padding-left: 0.2rem;
                margin-top: 0.2rem;
                margin-left: 2rem;
                /*outline: none;*/
                /*border: none;*/
            }
        }
        .ipt+.ipt{
            border-top: 1px solid #e6e6e6;
        }
        .Cardpass{
            margin: 0.5rem 0;
            border-bottom:1px solid #e6e6e6;
            border-top:1px solid #e6e6e6;
            background: #fff;
        }
    }
    .CapBtn{
        height: 0.8rem;
        width:95%;
        margin: 0.8rem auto;
        line-height: 0.8rem;
        font-size: 0.34rem;
        color:#fff;
        border-radius: 5px;
    }

}
</style>