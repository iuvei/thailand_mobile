<template>
    <div class='Register'>
        <Top :text="text"></Top>
        <div class="Return">
            <router-link to="/">
                <img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">
            </router-link>
        </div>
        <div class="Promptbox">{{boxText}}</div>
        <div style="margin-top: 0.3rem;" class="Wrapper">
            <form action="">
                <div class="form">
                    <div class="Main">
                        <input id="userName" v-model="reg.userName"  v-focus name="ruserName" minlength="5" maxlength="10" type="text" placeholder="用户名">
                    </div>
                    <div class="Main">
                        <input id="passWord" v-model="reg.passWord"  v-focus name="rpassWord" minlength="6" maxlength="12" type="password" placeholder="密码">
                    </div>
                    <div class="Main">
                        <input id="repassWord" v-model="reg.repassWord"  v-focus name="rrepassWord" minlength="6" maxlength="12" type="password" placeholder="确认密码">
                    </div>
                    <p style="height:1px;width: 100%; border-bottom: 1px solid #e5e5e5"></p>
                    <div class="Main">
                        <input id="realName" v-model="reg.realName" v-focus name="rrealName" minlength="2" maxlength="4" type="text" placeholder="真实姓名必须与您的银行账户相同">
                    </div>
                    <div class="Main">
                        <input id="mobileNo" v-num v-model="reg.mobileNo"  v-focus name="rmobileNo" maxlength="11" type="text" placeholder="手机号码">
                    </div>
                    <div class="Main">
                        <input id="qkpwd" v-num v-model="reg.qkpwd"  v-focus name="rqkpwd" type="password" maxlength="4" placeholder="请输入4位数字的资金密码">
                    </div>
                    <div style="width:55%;margin-right: 40%;margin-left: 2.5%" class="Main">
                        <input  id="code" v-num v-model="reg.imgcode"  v-focus name="rimgcode" type="text" maxlength="4" placeholder="验证码">
                        <img ref="ImgCode" @click="LoginImg()" src="" id="ImgCode" class="ImgCode" alt="">
                    </div>
                    <p><input type="checkbox" id="jack" value="Jack"  v-model="checkedNames"><label style="margin-top: 0.18rem;" for="jack">我已经满合法博彩年龄，且同意各项开户条件
                        <b id="registerAgreement" href="javascript:void (0)" class="Orgrise">
                            "开户协议"
                        </b>
                    </label>
                    </p>
                </div>
                <div style="padding:0;border:none;height:1rem;background: #f5f5f9" class="Main row">
                    <div class="submit Org" @click="submit">
                        立即注册
                    </div>
                </div>
                <div class="LoIn row" style="background: #f5f5f9">
                    <router-link to="/LogIn">
                        已有账号立即登录
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    var vm;
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                text:'注册',
                obj:'',
                reg:{
                    userName:'',//用户名
                    passWord: '',//密码
                    repassWord:'',//确认密码
                    mobileNo:'',//手机号
                    imgcode:'',//验证码
                    reguuid:'',//token
                    qkpwd:'',//取款密码
                    reqkpwd:'',//确认取款密码
                    realName:'',//真实姓名
                    cagent:'',//字段
                    isMobile:1,//类型
                    proxyname:''//
                },
                checkedNames:true//单选框
            }
        },
        computed: {
            userNew:function () {////注册字段
                return this.$store.state.userNew;
            },
            boxText:function () {////提示输入内容
                return this.$store.state.boxText;
            }
        },
        mounted() {
            vm = this;
            vm.$store.dispatch("incrboxText","");
            vm.LoginImg();
        },
        methods:{
            LoginImg:function () {
                vm =this;
                var src = vm.userNew.jrg+'validateCode?timesp'+(new Date()).valueOf();
                vm.$refs.ImgCode.setAttribute('src',src)
            },
            fun:function () {
                vm=this;
                vm.registerAgreement=true;
            },
            fun1:function () {
                vm=this;
                vm.registerAgreement=false;
            },
            submit:function () {
                vm = this;
                vm.$store.dispatch("incrboxText","");
                if(this.checkedNames != true){
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'是否同意用户协议'});
                    vm.LoginImg();
                    return;
                }
                vm.$BugRegister(vm,vm.reg);
            }
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    .Register{
        width:100%;
        padding-top: 0.8rem;
        position: fixed;
        background: #f5f5f9;
        left:0;
        top:0;
        bottom:0;
        overflow: auto;
        z-index:1;
    .Wrapper{
        width:100%;
        margin: 0 auto;
        min-height:100%;
        font-size:0;
    form{
        padding-bottom: 1rem;
        width:100%;
    .form{
        /*background: #fff;*/
        border-radius: 8px;
        padding:5px 10px;
        overflow: hidden;
    }
    p{
        position: relative;
        height: 0.6rem;
        width:95%;
        margin: 0 auto;
        padding-left: 0.35rem;
        text-align:left;
    span{
        color:#666;
    }
    input{
        position: absolute;
        top:0.15rem;
        left:0;
    }
    label{
        font-size: 0.22rem;
        line-height: 0.22rem;
        display: inline-block;
    }
    }
    .Main{
        position: relative;
        width:95%;
        margin: 0.05rem auto;
        height: 0.7rem;
        border-radius: 5px;
        border: 1px solid #e5e5e5;
        /*border-bottom: 1px solid #e5e5e5;*/
        background: #fff;
    img{
        position: absolute;
        right:0;
        top:0;
        width:25%;
        border:none;
        height: 0.6rem;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
    }
    label{
        position: absolute;
        height: 0.4rem;
        width:0.4rem;
        display: none;
        top:0.3rem;
        left:0.15rem;
    img{
        height: 0.4rem;
        width:0.4rem;
    }
    }
    input{
        outline: none;
        border:none;
        height: 0.4rem;
        margin-top: 0.15rem;
        line-height: 0.4rem;
        font-size: 0.25rem;
        padding-left: 3%;
        width:100%;
    }
    /*#regcode{*/
    /*width:60%;*/
    /*}*/
    .submit{
        /*background: #219be4;*/
        color:#fff;
        width:95%;
        margin: 0 auto;
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.35rem;
        border-radius: 6px;
    }
    }
    .LoIn{
        height: 0.4rem;
        margin-top: 0.4rem;
        line-height: 0.4rem;
        background: #f5f5f9;
        font-size: 0.25rem;
        width: 100%;
    a{
        color:#108ee9;
        text-decoration: underline;
    }
    }

    }

    }
    }
    .registerAgreement .agreementWrap p:first-child{
        margin-top: 0.2rem;
    }
    .registerAgreement .agreementWrap div:last-child{
        padding-bottom: 0.3rem;
    }
    .registerAgreement{
        width:100%;
        position: fixed;
        top:0;
        left:0;
        padding:0 0.2rem;
        bottom:0;
        overflow: auto;
        z-index: 105;
        min-height: 100%;
        font-size: 0;
        background: #ffe282;
    .daoyan{
        height: 0.8rem;
        text-align: left;
        color:#ff4600;
        font-size: 0.3rem;
    }
    .text{
        font-size: 0.25rem;
        line-height: 0.3rem;
        text-align: left;
        color:#875800;
    }


    .Btnactive{
        background-color: #ff7f00;
        width:100%;
        height: 0.6rem;
        line-height:0.6rem;
        text-align: left;
        padding-left: 0.5rem;
        color: #fff;
        margin-top: 0.3rem;
        border-radius: 8px;
        font-size: 0.3rem;
        /*box-shadow: 4px 4px 2px #d76b00;*/
    }
    .agreementWrap{
        border-radius: 5px;
        margin-top: 0.2rem;
        padding: 0 0.25rem;
        margin-bottom: 0.2rem;
        background:#fff;
    p{
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: left;
        font-size: 0.3rem;
    }
    div{
        font-size: 0.25rem;
        line-height: 0.3rem;
        text-align: left;
    }
    }
    .marTop{
        height: 0.6rem;
        line-height: 0.6rem;
        font-size: 0.25rem;
    }
    }
    #returntop{
        position: fixed;
        top:0;
        left:0;
    }
</style>