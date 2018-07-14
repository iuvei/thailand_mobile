﻿<template>
    <div class='LotteryWrapper'>
        <Top :text="text"></Top>
        <div class="NoBox">
            <div  class="row item" data-Type="">
                <router-link to="/deposit">
                    <i class="iconfont icon-homedeposit"></i>在线存款
                </router-link>
                <router-link to="/Withdrawals">
                    <i class="iconfont icon-cunkuan"></i>在线取款
                </router-link>
                <router-link to="/userBankCard">
                    <i class="iconfont icon-yinhangqia"></i>银行卡
                </router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    var el,Type;
    import Top from '../Top/Top.vue';
    export default {
        data () {
            return {
                text:'存取款'
            }
        },
        computed: {
        },
        mounted:function(){
        },
        methods:{
            PageJump:function (event) { //
            },
        },
        created () {
        },
        components: {
            Top
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.LotteryWrapper{
    width:100%;
    font-size:0;
    .item{
        background: #fff;
        height: 0.8rem;
        font-size: 0.3rem;
        text-align: left;
        line-height: 0.8rem;
        a{
            float: left;
            width: 33%;
            padding-left: 1rem;
            position: relative;
            i{
                position: absolute;
                width:0.5rem;
                height: 0.5rem;
                left:0.2rem;
                top:0rem;
                font-size: 0.5rem;
                color:#219be4;
            }
        }
        .router-link-active{
            border-bottom: 1px solid #219be4;
            color:#219be4;
        }
    }
    .item+.item{
        border-top: 1px solid #f5f5f9;
    }
}
</style>