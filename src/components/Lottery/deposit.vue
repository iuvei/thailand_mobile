<template>
    <div class='deposit'>
        <div class="DepositBox">
            <ul class="BoxList">
                <li @click="PageJump($event)" v-for="v in tranfer" :data-src="v.url">
                    <a href="javascript:void(0)">
                        <div class="col-2 Img">
                            <i :class="v.img"></i>
                        </div>
                        <div class="col-10 tab">
                            <p class="sup">{{v.sup}}</p>
                            <p class="sub">{{v.sub}}</p>
                        </div>
                        <div class="tuijian" v-if="v.title === '1'">
                            <div class="x-icon x-icon-tuijian"></div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            text:'存款',
            tranfer:[
                {img:'x-icon x-icon-wechat',sup:'微信付款',sub:'Wechat transfer',url:'/Wechat',title:'2'},
                {img:'x-icon x-icon-Alipay',sup:'支付宝付款',sub:'Alipay transfer',url:"/Alipay",title:'2'},
                {img:'x-icon x-icon-Online',sup:'网银支付',sub:'Online payment',url:'/Online',title:'2'},
                {img:'x-icon x-icon-tenpay',sup:'财付通',sub:'TenPay transfer',url:'/TenPay',title:'2'},
                {img:'x-icon x-icon-ScanCode',sup:'扫码支付',sub:'Scan Code',url:'/ScanCode',title:'2'},
                {img:'x-icon x-icon-Banktranfer',sup:'银行汇款',sub:'Bank tranfer',url:'/information',title:'2'}
            ]
        }
    },
    computed: {
        userNew:function () {//判断登录
            return this.$store.state.userNew;
        }
    },
    mounted:function(){
    },
    methods:{
        PageJump:function (event) {
            let el,vm,type;
            vm = this;
            el = event.currentTarget.getAttribute('data-src');
            if(el === "/Online"){
                type = '5';
                vm.$store.dispatch("inceuserNew",{id:8,src:'/Recharge',type:type});
                vm.$BugNewPaymentList(vm,{type:type});
            }else if(el === "/Alipay"){
                type = '6';
                vm.$store.dispatch("inceuserNew",{id:8,src:'/Recharge',type:type});
                vm.$BugNewPaymentList(vm,{type:type});
            }else if(el === "/Wechat"){
                type = '7';
                vm.$store.dispatch("inceuserNew",{id:8,src:'/Recharge',type:type});
                vm.$BugNewPaymentList(vm, {type:type});
            } else if(el === "/TenPay"){
                type = '8';
                vm.$store.dispatch("inceuserNew",{id:8,src:'/Recharge',type:type});
                vm.$BugNewPaymentList(vm,{type:type});
            }else{
                return vm.$router.push({path:el});
            }
        }
    },
    components: {
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.deposit{
    width:100%;
    .DepositBox{
        font-size: 0;
        padding: 0.3rem 0.3rem;
        .BoxList{
            border-radius: 5px;
            background: #fff;
            li{
                width:100%;
                height: 1.4rem;
                box-sizing: border-box;
                a{
                    position: relative;
                    display: block;
                    width:100%;
                    height: 1.4rem;
                    padding: 0.2rem;
                    .tab{
                        padding-left: 0.15rem;
                    }
                    .tuijian{
                        position: absolute;
                        right: 0;
                        top:0;
                        width: 60px;
                        height: 60px;
                    }
                }
                .Img{
                    padding-top: 0.15rem;
                }
                .sup{
                    height: 0.7rem;
                    line-height: 0.7rem;
                    text-align: left;
                    font-weight:400;
                    font-size: 0.32rem;
                    color:#00008b;
                }
                .sub{
                    height: 0.3rem;
                    line-height: 0.3rem;
                    font-size: 0.25rem;
                    text-align: left;
                }
            }
            li + li{
                border-top: 1px solid #e6e6e6;

            }
        }
    }
}
</style>