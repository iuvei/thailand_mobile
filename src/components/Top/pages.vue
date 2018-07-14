<template>
    <div class='Pages' v-show="CloseNew.pages">
        <div class="pagesbox">
            <div class="pagesTop">
                <div class="TopLogo">
                    <img style="width: 30%" src="http://mobile.beike188.com/modelTTC/images/logo.png" alt="">
                </div>
            </div>
            <bnner style="margin-top: 1rem"></bnner>
            <notice></notice>
            <div style="height: 6rem" class="pages-solid">
                <div class="item">
                    <!--<div class="col-3">-->
                        <!--<b class="x-l">{{time.min}}ms</b>-->
                    <!--</div>-->
                    <div class="col-9">
                        <b class="x-z">线路一</b>
                    </div>
                    <div class="col-3">
                        <a href="javascript:void(0)" @click="Pages()">进入游戏</a>
                    </div>
                </div>
                <div class="item">
                    <!--<div class="col-3">-->
                        <!--<b class="x-l">{{time.man}}ms</b>-->
                    <!--</div>-->
                    <div class="col-9">
                        <b class="x-z">线路二</b>
                    </div>
                    <div class="col-3">
                        <a href="javascript:void(0)" @click="Pages()">进入游戏</a>
                    </div>
                </div>
                <div class="item">
                    <!--<div class="col-3">-->
                    <!--<b class="x-l">{{time.man}}ms</b>-->
                    <!--</div>-->
                    <div class="col-9">
                        <b class="x-z">线路三</b>
                    </div>
                    <div class="col-3">
                        <a href="javascript:void(0)" @click="Pages()">进入游戏</a>
                    </div>
                </div>
                <div class="item">
                    <!--<div class="col-3">-->
                    <!--<b class="x-l">{{time.man}}ms</b>-->
                    <!--</div>-->
                    <div class="col-9">
                        <b class="x-z">线路四</b>
                    </div>
                    <div class="col-3">
                        <a href="javascript:void(0)" @click="Pages()">进入游戏</a>
                    </div>
                </div>
                <div class="item">
                    <!--<div class="col-3">-->
                    <!--<b class="x-l">{{time.man}}ms</b>-->
                    <!--</div>-->
                    <div class="col-9">
                        <b class="x-z">线路五</b>
                    </div>
                    <div class="col-3">
                        <a href="javascript:void(0)" @click="Pages()">进入游戏</a>
                    </div>
                </div>
                <div class="item">
                    <!--<div class="col-3">-->
                    <!--<b class="x-l">{{time.man}}ms</b>-->
                    <!--</div>-->
                    <div class="col-9">
                        <b class="x-z">线路六</b>
                    </div>
                    <div class="col-3">
                        <a href="javascript:void(0)" @click="Pages()">进入游戏</a>
                    </div>
                </div>

            </div>
            <div style="border-bottom: none;height: 2.5rem" class="pages-solid">
                <h2 class="title">在线存款</h2>
                <div class="col-6">
                    <div class="dBtn ap" @click="Pages()"></div>
                </div>
                <div class="col-6">
                    <div class="dBtn on" @click="Pages()"></div>
                </div>
            </div>
            <div class="nav-meun">
                <div class="col-6">
                    <span @click="Pages()" class="tad"><i class="iconfont icon-icon-user-edit"></i>会员注册</span>
                </div>
                <div class="col-6">
                    <span @click="Pages()" class="tad"><i class="iconfont icon-dianziyouxi"></i>快速游戏</span>
                </div>
                <div class="col-6">
                    <span @click="Pages()" class="tad"><i class="iconfont icon-youhuihuodong"></i>优惠活动</span>
                </div>
                <div class="col-6">
                    <span @click="Pages()" class="tad"><i class="iconfont icon-kefu"></i>在线客服</span>
                </div>
                <div class="col-6">
                    <span @click="Pages()" class="tad"><i class="iconfont icon-jiaocheng"></i>新手教程</span>
                </div>
                <div class="col-6">
                    <span @click="Pages()" class="tad"><i class="iconfont icon-tiaokuan"></i>规则条款</span>
                </div>
            </div>
            <p class="pages-footer">
                Copyright © 天天彩票娱乐城版权所有 Reserved
            </p>
        </div>
    </div>
</template>
<script>
    var vm;
    import bnner from  '../Home/bnner.vue'
    import notice from '../public/notice.vue'
    export default {
        data () {
            return {
                time:{
                    min:0,
                    man:0
                }
            }
        },
        computed: {
            CloseNew:function () {
                return this.$store.state.CloseNew;
            }
        },
        mounted: function () {
            vm = this;
            var  t;
            this.$nextTick(function () {
               t = setInterval(function () {
                    vm.time.min++;
                    vm.time.man++;
                   if(vm.time.min === 145 || vm.time.min > 145){
                       clearInterval(t);
                       vm.time.man += 8;
                   }
                },5)
            });
        },
        methods: {
            Pages:function () {
                vm = this;
                vm.$store.dispatch("incrwaitionValue",true);
                vm.$cookies.set("pages",true,60 * 60 * 24 * 1);
                setTimeout(function () {
                    vm.$store.dispatch("inceCloseNew",{id:2,pages:false});
                    vm.$store.dispatch("incrwaitionValue",false);
                    vm.$router.push({path:'/'})
                },3000)
            }
        },
        created(){
        },
        components: {
            bnner,
            notice
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.Pages{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: url("http://mobile.beike188.com/modelTTC/images/cloud_bg.png")  no-repeat;
    background-size: 100% 100%;
    overflow: auto;
    z-index: 120;
    .pages-solid{
        padding-top: 0.2rem;
        background: rgba(255,255,255,0.2);
        border-bottom: 1px solid #219be4;
        height: 3rem;
        .item{
            width: 100%;
            margin-top: 0.3rem;
            height: 0.6rem;
        }
        .item>div{
            height: 0.6rem;
            b{
                display: block;
                margin: 0 auto;
                font-size: 0.25rem;
                height: 0.6rem;
                background: #e1f4ff;
                line-height: 0.6rem;
                border:1px solid #219be4;
            }
            .x-l{
                width: 1.5rem;
            }
            .x-z{
                width: 3rem;
            }
            a{
                display: block;
                margin: 0 auto;
                width: 90%;
                height: 0.6rem;
                line-height: 0.55rem;
                font-size: 0.28rem;
                border:1px solid #e5e5e5;
                color:#fff;
                background:#fff url("http://mobile.beike188.com/modelTTC/images/btn.png") no-repeat;
                background-size: 100% 100%;
            }
        }
        .title{
            height: 0.8rem;line-height: 0.8rem;
            text-align: left;padding-left: 0.2rem;
            margin: 0;
        }
        .dBtn{
            width: 3rem;
            margin: 0.2rem auto;
            height: 0.8rem;
            line-height: 0.8rem;
        }
        .ap{
            background: url('http://mobile.beike188.com/modelTTC/images/alipay.png') no-repeat;
            background-size: 100% 100%;
        }
        .on{
            background: url('http://mobile.beike188.com/modelTTC/images/wechat.png') no-repeat;
            background-size: 100% 100%;
        }
    }
    .nav-meun{
        height: 2.5rem;
        font-size: 0;
        background: rgba(255,255,255,0.5);
        .tad{
            display: block;
            width: 3rem;
            margin: 0.1rem auto;
            height: 0.6rem;
            line-height: 0.6rem;
            font-size: 0.3rem;
            i{
                margin-right: 0.1rem;
            }
        }
    }
    .pages-footer{
        margin-top: 0.78rem;
        width: 100%;
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.25rem;
        background: rgba(255,255,255,0.5);
    }
}
.pagesbox{
    width: 100%;
    min-height: 100%;
}
.pagesTop{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 1rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 100;
    background:#219be4;
    .TopLogo{
        margin-top: 0.18rem;
        font-size: 0.5rem;
        width: 100%;
        padding-top: 0.02rem;
        height: 0.8rem;
        background: #fff;
        line-height: 0.8rem;
        img{
            width: 100%;
        }
    }
}

</style>