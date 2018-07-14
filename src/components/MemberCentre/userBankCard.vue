<template>
    <div class='userBankCard'>
        <div class="WithdrawalsCard row">
            <div class="CardNumBj" v-if="bankcard.cardNum != ''">
                <p class="bankname">{{bankcard.cardNum.card_username}}</p>
                <p class="bank">{{bankcard.cardNum.bank_name}}</p>
                <p class="bankNum">{{bankcard.cardNum.card_num}}</p>
                <!--<i @click="delect()">删除</i>-->
                <div v-show="ctpop" class="delectpop" >
                    <div class="delectBox">
                        <h2>删除银行卡</h2>
                        <div class="item">
                            <label for="cardb">资金密码</label>
                            <input v-num minlength="4" maxlength="6" v-model="userId.password" id="cardb" type="password" placeholder="请输入资金密码">
                        </div>
                        <div class="item">
                            <div :data-id="bankcard.cardNum.id" @click="qrdelect($event)" class="lfbtn">确认</div>
                            <div @click="redelect()" class="rfbtn">关闭</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" v-if="bankcard.cardNum != ''" style="font-size: 0.25rem;height: 0.08rem;line-height: 0.8rem;color:#ff7700">
                温馨提示 ：如需修改绑定银行卡信息，请联系
                <router-link  style="color:blue" to="/NoteSingle">
                    在线客服
                </router-link>
            </div>
            <div class="addcard row" v-if="bankcard.cardNum === ''">
                <router-link to="/userCapitalPwd">
                    <i class="iconfont icon-addbank"></i>添加银行卡
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    var vm,el;
    export default {
        data () {
            return {
                text:'我的银行卡',
                userId:{
                    cardId:'',
                    password:""
                },
                ctpop:false
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
            bankcard:function () {
                return this.$store.state.bankcard;
            }
        },
        mounted() {
        },
        methods:{
            delect:function () {
                vm=this;
                vm.ctpop=true;
            },
            qrdelect:function (event) {
                vm=this;
                el=event.currentTarget;
                vm.userId.cardId= vm.bankcard.cardNum.id;
                if(vm.userId.password == ""){
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请输入资金密码'});
                    return;
                }
                vm.$BugNewdeletebank(vm,vm.userId)
            },
            redelect:function () {
                vm=this;
                vm.userId.password="";
                vm.ctpop=false;
            }
        },
        created() {
        },
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.userBankCard{
    width:100%;
.addcard{
    height: 3rem;
    background: #fff;
    border-radius: 5px;
    border:1px solid #e5e5e5;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    a{
        display: block;
        width: 100%;;
        line-height: 3rem;
        height: 3rem;
        font-size: 0.5rem;
        i{
            font-size: 0.6rem;
        }
    }
}
.CardNumBj{
    height: 1.8rem;
    padding-top: 0.3rem;
    border-radius: 3px;
    background: url(http://mobile.beike188.com/modelTTC/images/Lottery/cardbj.png) no-repeat;
    background-size:100% 100%;
    position: relative;
    padding-left: 20%;
    i{
        position: absolute;
        right:0.1rem;
        top:0.1rem;
        width:0.6rem;
        height: 0.3rem;
        font-size: 0.2rem;
        line-height: 0.3rem;
        border-radius: 3px;
        font-style:normal;
        background: #e6e6e6;
    }
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
.delectpop{
    position: fixed;
    left:0;
    top:0;
    right:0;
    bottom: 0;
    font-size: 0;
    background: rgba(0,0,0,0.5);
    z-index: 103;
    .delectBox{
        width:90%;
        height: 3rem;
        background: #fff;
        border-radius: 3px;
        margin: 3rem auto;
        h2{
            font-size: 0.35rem;
            font-weight: 800;
            height: 0.8rem;
            line-height: 0.8rem;
        }
        .item{
            height: 0.6rem;
            width:90%;
            border:none;
            font-size: 0;
            margin: 0 auto;
            label{
                display: inline-block;
                width:29.9%;
                height: 0.6rem;
                line-height: 0.6rem;
                font-size: 0.3rem;
            }
            input{
                width:70%;
                height: 0.6rem;
                line-height: 0.6rem;
                font-size: 0.25rem;
                border:1px solid #e6e6e6;
                padding-left: 0.1rem;
                outline: none;
            }
            .lfbtn,.rfbtn{
                float: left;
                width:40%;
                text-align: center;
                margin: 0 5%;
                height: 0.6rem;
                line-height: 0.6rem;
                font-size: 0.3rem;
                color:#ffffff;
                border-radius: 3px;
            }
            .lfbtn{
                background: #219be4;
            }
            .rfbtn{
                background: #666666;
            }
        }
        .item+.item{
            margin-top: 0.5rem;
        }
    }
}
</style>