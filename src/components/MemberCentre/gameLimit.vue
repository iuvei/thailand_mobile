﻿<template>
    <div class='gameLimit'>
        <Top :text="text"></Top>
        <div class="Return">
            <router-link to="/MemberCentre">
                <img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">
            </router-link>
        </div>
        <div class="wrappergamelimit">
            <div class="item">用户名 <span class="rf">{{userNew.userName}}</span></div>
            <div class="item">真实姓名 <span class="rf">{{userNew.userMoney}}</span></div>
            <!--<div class="item">邮箱 <span class="rf">{{obj.email}}</span></div>-->
            <div class="item">等级 <span class="rf" id="vip_leve"><i v-for="v in userNew.data.vip_level" :data-id="v" class="iconfont icon-wujiaoxing"></i></span></div>
            <div class="item">手机号 <span class="rf">{{userNew.data.mobile}}</span></div>
            <div class="item" style="border-bottom: 1px solid #e5e5e5">钱包余额 <span class="rf">{{userNew.userMoney}}</span></div>
            <div class="item" style="margin-top: 0.3rem;">注册时间 <span class="rf">{{userNew.data.reg_date}}</span></div>
            <div class="item" style="margin-bottom: 0.3rem;border-bottom: 1px solid #e5e5e5">最后登录时间 <span class="rf">{{userNew.data.login_time}}</span></div>
        </div>
    </div>
</template>
<script>
    var vm,CLS_ON = 'on';
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                text:'个人信息',
                obj:{}
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        mounted() {
            vm=this;
        },
        created() {
            vm=this;
            if(vm.userNew.userName === ""){
                return vm.$router.push({path:'/MemberCentre'});
            }
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.gameLimit{
    width:100%;
    .wrappergamelimit{
        width:100%;
        .item{
            height: 0.7rem;
            font-size: 0.3rem;
            border-radius: 3px;
            padding-left: 0.2rem;
            line-height: 0.7rem;
            background: #fff;
            text-align: left;
        }
        .rf{
            font-size: 0.25rem;
            margin-right: 0.2rem;
            height: 0.6rem;
            color: #999;
        }
        i{
            display: inline-block;
            height: 0.4rem;
            width:0.4rem;
            color:#219be4;
        }
        .item+ .item{
            border-top:1px solid #e5e5e5;
        }
    }
}
.on{
    background:url(http://mobile.beike188.com/modelTTC/images/MemberCentre/2.png) no-repeat;
    background-size: 100% 100% ;
}
</style>