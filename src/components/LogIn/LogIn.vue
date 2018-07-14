﻿<template>
    <div class='LogIn'>
        <Top :text="text"></Top>
        <div class="Return">
            <router-link to="/">
                <img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">
            </router-link>
        </div>
        <div class="Wrapper">
            <div class="container">
                <p class="Title"><img width="60%" style="" src="http://mobile.beike188.com/modelTTC/images/logo.png" alt=""></p>
                <div class="Promptbox">{{boxText}}</div>
                <form action="" class="alearfix">
                    <div class="Form-wrapper">
                        <div class="main">
                            <label for="Loginname">
                                <i class="iconfont icon-denglu"></i>
                            </label>
                            <input v-focus  id="Loginname" minlength="5" maxlength="10" ref="Loginname" name="ltname" type="text" placeholder="用户名">
                        </div>
                        <div class="main">
                            <label for="LoginPass">
                                <i class="iconfont icon-mm"></i>
                            </label>
                            <input v-focus v-model="obj.tpwd" minlength="6" maxlength="12" name="ltpwd" id="LoginPass" type="password" placeholder="密码">
                        </div>
                        <div style="border:none" class="main">
                            <label for="LoginCode">
                                <i class="iconfont icon-code"></i>
                            </label>
                            <input v-num maxlength="4" v-focus v-model="obj.imgcode"   name="limgcode" id="LoginCode" type="text" placeholder="验证码">
                            <img @click="LoginImg()" ref="ImgCode" id="ImgCode" alt="">
                        </div>
                    </div>
                    <p class="ForGet"><a class="rf" style="display: none;" href="javascript:void (0)">忘记密码？</a></p>
                    <div class="Btn_Ck Org">
                        <div  @click="submit()">
                            登录
                        </div>
                    </div>
                    <div class="Btn-Foot">
                        <router-link class="Orgrise"  to="/Registered">
                            立即注册
                        </router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    var vm;
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                text:'登录',
                obj:{
                    tname:'',
                    tpwd:'',
                    imgcode:'',
                    savelogin:1,
                    isMobile:1
                }
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
            boxText:function () {//input 获得焦点时 提示信息
                return this.$store.state.boxText;
            }
        },
        mounted() {
            vm = this;
            vm.LoginImg();
        },
        methods:{
            LoginImg:function () {
                vm =this;
                var src = vm.userNew.jrg+'validateCode?timesp'+(new Date()).valueOf();
                vm.$refs.ImgCode.setAttribute('src',src)
            },
            submit:function () {
                vm = this;
                vm.obj.tname = vm.$refs.Loginname.value;
                vm.$BugLogin(vm,vm.obj);
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
    .LogIn{
        position: fixed;
        background: #f5f5f9;
        left:0;
        padding-top: 0.8rem;
        top:0;
        right:0;
        bottom:0;
        z-index:1;
        overflow: auto;
        .Wrapper{
            min-width:100%;
            font-size:0;
            .container{
                width:95%;
                margin: 0 auto;
                .Title{
                    height: 1.2rem;
                    line-height: 1.2rem;
                    width:100%;
                    font-size: 0.5rem;
                    color:#219be4;
                }
                form{
                    padding-bottom: 1rem;
                    width:100%;
                    .Form-wrapper{
                        width:100%;
                        height: 3rem;
                        background: #fff;
                        border-radius: 8px;
                        padding: 0 0.2rem;
                        border: 1px solid #e5e5e5;
                        .main{
                            position:relative;
                            width: 100%;
                            height: 1rem;
                            padding-top: 0.2rem;
                            border-bottom: 1px solid #e5e5e5;
                            padding-bottom: 0.3rem;
                            label{
                                position: absolute;
                                left:0;
                                top:0.2rem;
                                padding-top: 0.1rem;
                                display: inline-block;
                                width:10%;
                                height: 0.6rem;
                                vertical-align: top;
                               i{
                                   font-size: 0.4rem;
                               }
                            }
                            input{
                                width:100%;
                                margin-top: 0.1rem;
                                padding-left: 10%;
                                height: 0.4rem;
                                outline:none;
                                border:none;
                                font-size: 0.28rem;
                            }
                        }
                        #ImgCode{
                            position: absolute;
                            right:0;
                            top:0.15rem;
                            width:1.6rem;
                            height: 0.7rem;
                        }

                    }
                    .ForGet{
                        width:100%;
                        margin-top: 0.1rem;
                        height: 0.5rem;
                        a{
                            height: 0.5rem;
                            line-height: 0.5rem;
                            font-size: 0.25rem;
                            color:#666;
                        }
                    }
                    .Btn_Ck{
                        height: 0.8rem;
                        width:100%;
                        div{
                            width:100%;
                            height: 0.8rem;
                            line-height: 0.8rem;
                            /*background: #219be4;*/
                            color:#fff;
                            font-size: 0.3rem;
                            border-radius: 5px;
                        }
                    }
                    .Btn-Foot{
                        height: 0.4rem;
                        margin-top: 0.3rem;
                        line-height: 0.4rem;
                        width:100%;
                        text-align: center;
                        font-size: 0.25rem;
                        a{
                            padding: 0 0.2rem;
                        }
                    }
                }

            }
        }

    }
</style>
