﻿<template>
    <div class='interchange'>
        <Top :text="text"></Top>
        <div class="Return">
            <router-link to="/MemberCentre">
                <img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">
            </router-link>
        </div>
        <div class="interchangeBox row">
            <div class="title">
                <div class="col-6">
                    <p>中心钱包</p>
                    <p class="Orgrise" style="font-size: 0.25rem;">{{userNew.userMoney}}</p>
                </div>
                <div @click="TypeInquireAll()" class="col-6">
                    <b class="iconfont icon-shuaxin1"></b>一键查询
                </div>
            </div>
        </div>

        <ul class="GameListBox row">
            <li @click="TypeInquire($event)" class="col-4" v-for="v in game" :data-Type="v.type">
                <p>{{v.name}}</p>
                <span class="Orgrise">-</span>
            </li>
        </ul>
        <p class="tran">提示：互转金额￥ <span style="color:#bbb">{{Money.min}}</span> &nbsp;~  <span  style="color:#bbb">{{Money.man}}</span></p>
        <div class="row TypeInterchange">
            <form action="">
                <div class="ipt lect">
                    <div class="col-5">
                        <select  @change="transfer()"  name="" id="in">
                            <option value="中心钱包">中心钱包</option>
                            <option :value="v.type" v-for="v in game">{{v.name}}</option>
                        </select>
                    </div>
                    <div class="col-2 trans" @click="transferAll()" style="">
                        <i class="iconfont icon-zhuanhuan"></i>
                    </div>
                    <div class="col-5">
                        <select  name="" @change="transfer_right()" id="out">
                            <option :value="v.type" v-for="v in game">{{v.name}}</option>
                            <option value="中心钱包">中心钱包</option>
                        </select>
                    </div>
                </div>
                <div class="ipt">
                    <label for="Tranipt">金额</label>
                    <input v-num v-model="tran.credit" id="Tranipt" type="text" placeholder="请输入转账金额">
                </div>
                <div class="ipt">
                    <label for="Code">验证码</label>
                    <input v-focus v-num minlength="4" maxlength="4" name="imgcode" id="Code" v-model="tran.imgcode" type="text" placeholder="验证码">
                    <img @click="LoginImg()" ref="ImgCode" id="ImgCode" alt="">
                </div>
                <div class="ipt" style="margin-top: 0.5rem;">
                    <div class="InterchangeBtn Org" @click="submit()">提 交</div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    var Boo=false,Type,vm;
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                text:'平台互转',
                left:'',
                right:"",
                Money:{
                    min:1,
                    man:100000
                },
                tran:{
                    credit:'',
                    type:'',
                    imgcode:'',
                    uuid:''
                }
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
            game() {
                return this.$store.state.game;//获取游戏列表
            }
        },
        watch: {
        },
        mounted() {
            vm=this;
            vm.LoginImg();
        },
        methods:{
            LoginImg:function () {
                vm =this;
                var src = vm.userNew.jrg+'validateCode?timesp'+(new Date()).valueOf();
                vm.$refs.ImgCode.setAttribute('src',src)
            },
            transfer:function () {//原生js
                vm.LoginImg();
                vm.tran.imgcode="";
                vm.tran.credit='';
                var a=$('#out option').length-1
                var key = document.getElementById('in').options[window.document.getElementById("in").selectedIndex].text;
                key = key.indexOf('中心钱包') != -1;
                if(key == true){
                    document.getElementById("out").selectedIndex =2;
                }else{
                    document.getElementById("out").selectedIndex =a
                }
            },
            transfer_right:function () {//原生js
                vm.LoginImg();
                vm.tran.imgcode="";
                vm.tran.credit='';
                var key = document.getElementById('out').options[window.document.getElementById("out").selectedIndex].text;
                key = key.indexOf('中心钱包') != -1;
                if(key == true){
                    document.getElementById("in").selectedIndex =1;
                }else{
                    document.getElementById("in").selectedIndex =0;
                }
            },
            transferAll:function () {
                var a=$('#out option').length-1;
                vm.LoginImg();
                vm.tran.imgcode="";
                vm.tran.credit='';
                if(Boo == false){
                    document.getElementById("out").selectedIndex =a;
                    document.getElementById("in").selectedIndex =1;
                    Boo =true;
                }else{
                    document.getElementById("in").selectedIndex =0;
                    document.getElementById("out").selectedIndex =0;
                    Boo =false;
                }
            },
            TypeInquireAll:function () {//查询所有余额
                var Len=$('.GameListBox li');
                for(var i=0;i<Len.length;i++){
                    Len[i].lastChild.innerHTML='loading...';
                    Type = Len[i];
                    Type=$(Type).attr('data-Type');
                    vm.$BugNewRefresh(vm,{BType:Type},Len[i].lastChild);
                }
            },
            TypeInquire:function (event) {//查询余额
                var el = event.currentTarget;
                el.lastChild.innerHTML='loading...';
                Type= el.getAttribute('data-Type');
                vm.$BugNewRefresh(vm,{BType:Type},el.lastChild);
            },
            submit:function () {
                vm=this;
                vm.tran.credit = vm.$digital(vm.tran.credit);
                if(vm.tran.credit === false ){
                    vm.tran.credit = "";
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'转账金额'+vm.Money.min+'~'+vm.Money.man});
                    return
                }
                vm.tran.credit = Math.floor(vm.tran.credit);
                if(vm.tran.credit < vm.Money.min || vm.tran.credit > vm.Money.man ){
                    vm.tran.credit = "";
                    vm.LoginImg();
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'转账金额'+vm.Money.min+'~'+vm.Money.man});
                    return
                }
                if(!/^[0-9]{4}$/.test(vm.tran.imgcode)){
                    vm.tran.imgcode = "";
                    vm.LoginImg();
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'验证码有误，请重新输入'});
                    return;
                }
                if(vm.userNew.userkey === ""){
                    return vm.$router.push({path:'/interchange'});
                }
                vm.$ajax.call(this,{userKey:vm.userNew.userkey},vm.userNew.jrg+'User/getToken',function (objmsg) {
                    vm.tran.uuid=objmsg.msg;
                    if($('#in').val() === '中心钱包'){
                        vm.tran.type=$('#out').val();
                        vm.$BugNewtransfer(vm,vm.tran,'User/TransferTo')
                    }else if($('#out').val() === '中心钱包'){
                        vm.tran.type=$('#in').val();
                        vm.$BugNewtransfer(vm,vm.tran,'User/TransferFrom')
                    }
                })
            }
        },
        created() {
            vm=this;
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.interchange{
    min-height: 100%;
    font-size: 0;
    padding-bottom: 1rem;
}
.interchangeBox{
    font-size:0;
    .title{
        height: 1.2rem;
        padding:0.1rem;
        div{
            height: 1rem;
            p{
                height: 0.5rem;
                line-height: 0.5rem;
                font-size: 0.28rem;
            }
        }
        div:nth-child(1){
            border-right:1px solid #e5e5e5;
            p{font-size: 0.35rem;font-weight: 700}
        }
        div:nth-child(2){
            height: 1rem;line-height: 1rem;
            font-size: 0.3rem;
            color:#219be4;
            text-decoration: underline;
            position:relative;
            b{
                position: absolute;
                width:0.4rem;
                left:0.7rem;
                height: 0.4rem;
            }
        }
    }

}
.GameListBox{
    background: #fff;
    border-top:1px solid #e5e5e5;
}
.GameListBox li{
    height: 1.2rem;
    border-bottom:1px solid #e5e5e5;
    font-size: 0.25rem;
    p{
        height: 0.6rem;
        line-height: 0.6rem;
        background: #fff;
        border-bottom: 1px solid #e5e5e5;
    }
    span{
        display: block;
        height: 0.6rem;
        background: #f5f5f9;
        line-height: 0.6rem;
        border-bottom: 1px solid #e5e5e5;

    }

}
.GameListBox li:nth-child(3n+1){
    /*border-right:1px solid #e5e5e5;*/
}
/*.GameListBox li:nth-child(3n+3){*/
    /*border-top:1px solid #e5e5e5;*/
/*}*/
.GameListBox li:nth-child(3n+2){
    /*border-left:1px solid #e5e5e5;*/
    /*border-top:1px solid #e5e5e5 ;*/
    /*border-right:1px solid #e5e5e5;*/
}
.tran{
    height: 0.6rem;
    line-height: 0.6rem;
    font-size: 0.25rem;
    font-weight: 100;
    text-align: left;padding-left: 0.4rem;
    background: #faf9e6;
    margin: 0.3rem auto;
    border:1px solid #c3c1c1;
}
.TypeInterchange{
    width:100%;
    .trans{
        padding-top:  0.12rem;
         i{
           font-size: 0.5rem;
         }
    }
    .ipt:nth-child(1){
        background: #f5f5f9;
    }
    .ipt{
        width:90%;
        border-radius: 3px;
        background: #fff;
        height: 0.7rem;
        position: relative;
        margin: 0.1rem auto;
        label{
            display: inline-block;
            font-size: 0.3rem;
            font-weight: 600;
            vertical-align: top;
            line-height: 0.7rem;
            width:30%;
        }
        input,select{
            height: 0.7rem;
            font-size: 0.25rem;
            padding-left: 0.1rem;
            vertical-align: top;
            outline: none;
        }
        input{
            width:69%;
            border:none;
        }
        #ImgCode{
            position: absolute;
            right:0;top:0;
            width:1.6rem;
            height: 0.7rem;
        }
        #zhuanz{
            position: relative;
            a{
                position: absolute;
                top:0.2rem;
                left:0;
            }
        }
        select{
            width:55%;
        }
        .InterchangeBtn{
            height: 0.7rem;line-height: 0.7rem;
            font-size: 0.35rem;
            color:#fff;
            border-radius: 3px;
        }
    }
    div.lect{
        select{
            width:100%;
        }

    }
}
</style>