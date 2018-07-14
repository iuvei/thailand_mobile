<template>
    <div class='HomeWrapper'>

        <div class="pagesTop">
            <div class="TopLogo">
                <img style="width: 30%" src="http://mobile.beike188.com/modelTTC/images/logo.png" alt="">
            </div>
        </div>
        <bnner></bnner>

        <div style="width:95%;margin: 0 auto;" class="row">
            <notice></notice>
            <div class="row notice_tent">
                <div  class="col-3 item" >
                    <router-link style="display: block" to="/LowColor">
                        <p class="sup">
                            <b><img src="http://mobile.beike188.com/modelTTC/images/Home/card2.png" alt=""></b>
                        </p>
                        <p class="sub">传统彩</p>
                    </router-link>
                </div>
                <div  class="col-3 item" >
                    <router-link style="display: block" to="/Choose">
                        <p class="sup">
                            <b><img src="http://mobile.beike188.com/modelTTC/images/Home/dzyy1.png" alt=""></b>
                        </p>
                        <p class="sub">VR彩票</p>
                    </router-link>
                </div>
                <div  class="col-3 item" >
                    <router-link style="display: block" to="/ElectronicGames">
                        <p class="sup">
                            <b><img src="http://mobile.beike188.com/modelTTC/images/Home/dzyy.png" alt=""></b>
                        </p>
                        <p class="sub">电子游戏</p>
                    </router-link>
                </div>
                <div  class="col-3 item" >
                    <router-link style="display: block" to="/LiveVideo">
                        <p class="sup">
                            <b><img src="http://mobile.beike188.com/modelTTC/images/Home/zrsx.jpg" alt=""></b>
                        </p>
                        <p class="sub">真人视讯</p>
                    </router-link>
                </div>
            </div>
        </div>

        <router-view></router-view>

        <!--顶部登录和侧边栏-->
        <div class="RegLo" >
            <div class="LoBox rf" v-if="userNew.Login === false">
                <router-link class="log_in" to="/LogIn">
                    登录
                </router-link>
                <router-link class="Registe_red" to="/Registered">
                    注册
                </router-link>
            </div>
            <div class="RegBox lf">
                <a href="javascript:void (0)" @click="fun()" style="margin-top: 0.25rem;" id="btns">
                    <i style="color:#219be4;font-size: 0.5rem" class="iconfont icon-tubiaozhizuomoban-copy"></i>
                <div id="zTwrapper" class="zTwrapper">
                    <div class="leftWrapper">
                        <div id="leftBox" class="leftBox">
                            <h3 class="Org">导航</h3>
                            <div @click="fun1()">
                                <router-link  class="tad" to="/">
                                    <i class="iconfont icon-shouye"></i> 首页
                                </router-link>
                            </div>
                            <div @click="fun1()">
                                <router-link class="tad" to="/LowColor">
                                    <i class="iconfont icon-caipiao"></i>
                                    传统彩
                                </router-link>
                            </div>
                            <!--<div @click="fun1()">-->
                                <!--<router-link class="tad" to="/AlwaysColor">-->
                                    <!--<i class="iconfont icon-guanfang1"></i>-->
                                    <!--官方彩-->
                                <!--</router-link>-->
                            <!--</div>-->
                            <div @click="fun1()">
                                <router-link class="tad" to="/Choose">
                                    <i class="iconfont icon-VR"></i>
                                    VR 彩
                                </router-link>
                            </div>
                            <div @click="fun1()">
                                <router-link class="tad" to="/LiveVideo">
                                    <i class="iconfont  icon-shixun"></i>
                                    真人视讯
                                </router-link>
                            </div>
                           <div @click="fun1()">
                               <router-link class="tad" to="/ElectronicGames">
                                   <i class="iconfont icon-dianziyouxi"></i>
                                   电子游戏
                               </router-link>
                           </div>
                          <div @click="fun1()">
                              <router-link style="border:none;" class="tad" to="/Sportsevents">
                                  <i class="iconfont icon-tiyu"></i>
                                  体育赛事
                              </router-link>
                          </div>
                            <h3 class="Org">个人中心</h3>
                            <div v-if="userNew.Login === false">
                                <div @click="fun1()" >
                                    <router-link class="tad" to="/LogIn">
                                        <i class="iconfont icon-denglu1"></i> 登录
                                    </router-link>
                                </div>
                                <div @click="fun1()">
                                    <router-link  class="tad" to="/Registered">
                                        <i class="iconfont icon-freg"></i> 注册
                                    </router-link>
                                </div>
                            </div>
                            <div  v-if="userNew.Login === true">
                                <div @click="fun1()">
                                    <router-link  class="tad" to="/MemberCentre">
                                        <i class="iconfont icon-touxiang"></i> 我的
                                    </router-link>
                                </div>
                                <div style="border:none;" @click="fun1(),dropOut()" >
                                    <a  class="tad" href="javascript:void (0)">
                                        <i class="iconfont icon-tuichu"></i> 退出
                                    </a>
                                </div>
                            </div>
                            <div @click="fun1()">
                                <router-link  class="tad" to="/NoteSingle">
                                    <i class="iconfont icon-kefu"></i> 在线客服
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            </div>
        </div>
    </div>
</template>
<script>
var t,l,el,vm;
    import Top from '../Top/Top.vue'
    import notice from '../public/notice.vue'
    import bnner from './bnner.vue'
    export default {
        data () {
            return {
                text:'',
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
//            annouationNew:function () {//判断登录
//                return this.$store.state.annouationNew;
//            }
        },
        mounted() {
            vm=this;
//            if(vm.annouationNew.announcement === ""){
//                vm.$store.dispatch("incrajax",{id:11});
//            }
            var btns = document.getElementById('zTwrapper');
            document.onclick = function (e) {
                if(e.target != btns){
                    $("#leftBox").animate({left:'0'},100);
                }else{
                    $("#leftBox").animate({left:'-100%'},50,function () {
                        $("#zTwrapper").animate({background:'rgba(0,0,0,0)'},10,function () {
                            $('#zTwrapper').hide()
                        })
                    });
                }
            };

        },
        methods:{
            fun:function () {
                $(".zTwrapper").show();
                $("#leftBox").animate({left:'0'},100);
            },
            fun1:function () {
                $("#leftBox").animate({left:'-100%'},50,function () {
                    $("#zTwrapper").animate({background:'rgba(0,0,0,0)'},10,function () {
                        $('#zTwrapper').hide()
                    })
                });
            },
            dropOut:function () {
                vm=this;
                vm.$BugNewdropOut(vm,{},vm.userNew.jrg+'logout.do')
            }
        },
        created(){
            clearInterval(l);
        },
        components: {
            Top,
            bnner,
            notice
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
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
        margin-top: 0.2rem;
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
#zTwrapper{
    position: fixed;
    left:0;
    top:0;
    right:0;
    bottom:0;
    background:#000;
    background: rgba(0,0,0,0.8);
    display: none;
    z-index: 105;
    .leftWrapper{
        font-size: 0;
        width:50%;
        display: inline-block;
        position: relative;
        min-height: 100%;
        .leftBox{
            position: absolute;
            width:100%;
            left:-100%;
            min-height: 100%;
            background: #0a0a0a;
            top:0;
        }
        h3{
            width:100%;
            height: 0.8rem;
            font-size: 0.31rem;
            line-height: 0.8rem;
            text-align: center;
            font-weight: 100;
            padding-left: 0.2rem;
            color:#ffffff;
        }
        .tad{
            position: relative;
            display: block;
            height: 0.7rem;
            background: #2f2f2f;
            padding-left: 1rem;
            color:#999;
            width:100%;
            line-height:0.7rem;
            text-align: left;
            font-size: 0.25rem;
            border-bottom: 1px solid #3a3a3a;
            i{
                position: absolute;
                top:0rem;
                left:0.4rem;
                width:0.4rem;
                height: 0.4rem;
                font-size: 0.4rem;
                color:#fff;
            }
        }
    }
}
.RegLo{
    left:-50%;
}
.TopHeader{
}
.notice_tent{
    margin-top: 0.2rem;
    height: 1.8rem;
.item{
    height: 1.5rem;
    width:23%;
    margin: 0 1%;
    background:#fff;
    -moz-box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding-top: 0.2rem;
.sup{
    position: relative;
    width:100%;
    height: 0.8rem;
b{
    position: absolute;
    height: 0.8rem;
    left: 0;
    width:100%;
img{
    margin-top: 5%;
    width: 45%;
}
}
}
.sub{
    height: 0.5rem;
    line-height: 0.5rem;
    color:#333;
    font-size: 0.25rem;
}
}
}
.HomeWrapper{
    padding-top: 0.2rem;
    width:100%;
    padding-bottom: 0.8rem;
    position:relative;
    .RegLo{
        position:fixed;
        width: 100%;
        top:0;
        left:0;
        font-size: 0;
        padding-left: 0rem;
        height: 1rem;
        z-index: 101;
        .LoBox{
            width:1.7rem;
            font-size: 0;
            text-align: right;
            color:#fff;
            a{
                float: left;
                color:#fff;
                font-size: 0.25rem;
                border-radius: 3px;
                margin-top: 0.35rem;
                height: 0.5rem;
                line-height: 0.5rem;
            }
            .Registe_red{
                vertical-align: top;
                width:48%;
                margin-left: 3%;
                margin-right: 1%;
                text-align:center;
                background: #ff7700;
            }
            .log_in{
                vertical-align: top;
                font-size: 0.25rem;
                background: #05aee6;
                width:48%;
                border-style: solid;


            }

        }
        .RegBox{
            height: 0.8rem;
            width:1rem;
            a{
                color:#fff;
                vertical-align: top;
                display: inline-block;
                width:1rem;
                line-height: 0.8rem;
                font-size: 0.28rem;
            }
        }
        .LoBox a{
            text-align: center;
        }
        .RegBox>a{
            text-align: left;
            position: relative;
            height: 0.6rem;
            margin: 0.1rem auto;
            width:0.5rem;
            background: url(http://mobile.beike188.com/modelTTC/images/Home/menu.png) center no-repeat;
            .RegBoxLIst{
                position: absolute;
                top:0.7rem;
                right:0;
                display: none;
                height: 2rem;
                width:1.5rem;
                z-index: 50;
                li{
                    width:100%;
                    height: 0.5rem;
                    background:rgba(0,0,0,0.8);
                    .tad{
                        width:100%;
                        margin: 0;
                        padding:0;
                        text-align: center;
                        line-height: 0.5rem;
                        height: 0.5rem;
                    }
                }
                li:hover .tad{
                    color:red;
                }
            }
        }
    }
}
.container {
    width: 95%;
    padding-top: 0.2rem;
    margin: 0 auto;
    font-size: 0;
    /*background: url();*/
    min-height: 4rem;
    .Featured {
        height: 0.6rem;
        border-bottom: 1px solid #e5e5e5;
        margin-bottom:0.2rem;
        width: 100%;
        .Box {
            position: relative;
            height: 0.6rem;
            text-align: left;
            padding-top: 0.21rem;
            padding-left: 0.6rem;
            font-size: 0.25rem;
            b {
                display: inline-block;
                height: 0.6rem;
                top: 0;
                left: 0;
                position: absolute;
                width: 0.6rem;
                img {
                    margin-top: 20%;
                    margin-left: 20%;
                    width: 60%;
                }
            }
        }
    }
    .loattery {
        margin-top: 0.2rem;
        width: 100%;
        .loatteryBox {
            width: 100%;
            li {
                margin-bottom: 0.2rem;

                height: 1.6rem;
                a {
                    display: block;
                    width: 90%;
                    padding-top: 0.2rem;
                    margin: 0 5%;
                    background:#fff;
                    -moz-box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);
                    -webkit-box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.2);
                    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
                    border-radius: 5px;
                    height: 1.6rem;
                }
                .BoxImg {
                    /*margin-top: 0.2rem;*/
                    height:0.9rem;
                    b {
                        display: inline-block;
                        width:100%;
                        margin-top: 0.1rem;
                        height: 0.8rem;
                    }
                }
                .BoxText {
                    height: 0.5rem;
                    /*font-family: '微软雅黑';*/
                    line-height: 0.5rem;
                    font-size: 0.25rem;
                    color:#000;
                }
            }
        }
    }
}
</style>
