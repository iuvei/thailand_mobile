<template>
    <div class='rechargeRecord'>
        <Top :text="text"></Top>
        <div class="Return">
            <router-link to="/MemberCentre">
                <img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">
            </router-link>
        </div>
        <div class="row SubmitForm">
            <form action="" class="row">
                <div class="item-nav row">
                    <div class="main-nav">
                        <div class="col-6">
                            <div class="col-4">
                                <label for="" class="tad">开始时间</label>
                            </div>
                            <div class="col-8">
                                <datepicker id="detepik" v-model="obj.bdate" placeholder="日期" :options="StartTimeDay"></datepicker>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="col-4">
                                <label for="Type" class="tad">转账类型</label>
                            </div>
                            <div class="col-8">
                                <select name="" id="Type">
                                    <option value="">所有</option>
                                    <option value="网银">网银</option>
                                    <option value="微信">微信</option>
                                    <option value="支付宝">支付宝</option>
                                    <option value="银行汇款">银行汇款</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-nav row">
                    <div class="main-nav">
                        <div class="col-6">
                            <div class="col-4">
                                <label for="" class="tad">结束时间</label>
                            </div>
                            <div class="col-8">
                                <datepicker id="detepik" v-model="obj.edate" placeholder="日期" :options="EndTimeDay"></datepicker>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="col-4">
                                <label for="status" class="tad">转账状态</label>
                            </div>
                            <div class="col-8">
                                <select name="" id="status">
                                    <option value="">所有</option>
                                    <option value="处理中">处理中</option>
                                    <option value="交易失败">交易失败</option>
                                    <option value="交易成功">交易成功</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-nav row">
                    <div  class="RecordBoxBtn btn-submit" @click="submit()">提交</div>
                </div>
            </form>
        </div>
        <div class="wrapper-cont">
            <div class="row Rec_text" v-if="Recharge.judgment != true">没有符合条件的记录</div>
            <div class="row" v-if="Recharge.judgment === true">
                <div class="row recording-list" v-for="v in Recharge.data">
                    <div class="item row">
                        <p class="tad-sup btn-submit">
                            支付方式： <span style="padding-right: 0.1rem;">{{v.pay_type}}</span>
                        </p>
                        <p class="tad-sub" >
                            时间 : <span>{{v.time}}</span>
                        </p>
                    </div>
                    <div class="row item">
                        <div class="main-sup">
                            <div class="col-6">
                                金额
                            </div>
                            <div class="col-6">
                                状态
                            </div>
                        </div>
                        <div class="main-sub">
                            <div class="col-6">
                                {{v.order_amount}}元
                            </div>
                            <div class="col-6">
                                {{v.trade_status}}
                            </div>
                        </div>
                    </div>
                    <div style="height:0.4rem;" id="item-main" class="item  row">
                        <div class="main-sub">
                            备注
                        </div>
                    </div>
                    <div id="item-main" class="item  row">
                        <div class="main-text">
                            {{v.rmk}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-if="Recharge.judgment === true">
            <pagination :change="pageCb" :page-size="Recharge.size" :total="Recharge.total" layout="total,pager" size="small"></pagination>
        </div>
    </div>
</template>
<script>
    var vm;
    import Top from '../Top/Top.vue'
    import { zh } from 'flatpickr/dist/l10n/zh';
    export default {
        data () {
            return {
                text:'充值记录',
                StartTimeDay: {
                    locale: zh,
                    enable: [
                        {
                            from: new Date().fp_incr(-30),
                            to: "today" // 7 days from now
                        }
                    ],
                    defaultDate : new Date().fp_incr(-1)
//                    enableTime: true
                },
                EndTimeDay: {
                    locale: zh,
                    enable: [
                        {
                            from: new Date().fp_incr(-30),
                            to: "today" // 7 days from now
                        }
                    ],
                    defaultDate : new Date()
//                    enableTime: true
                },
                obj:{
                    pageSize:5,
                    pageNo:1,
                    bdate:'',
                    edate:'',
                    Type:'',
                    status:''
                }
            }
        },
        computed: {
            Recharge:function () {//判断登录
                return this.$store.state.Recharge;
            }
        },
        mounted() {
            vm= this;
            vm.obj.bdate=vm.$datatboy('1000');
            vm.obj.edate=vm.$datatboy('0');
        },
        methods:{
            submit:function () {
                vm=this;
                vm.obj.Type = $('#Type').val();
                vm.obj.status = $('#status').val();
                if(vm.obj.bdate == ""){
                    vm.$store.dispatch("incrClosepoptext",'请选择开始日期');
                    vm.$store.dispatch("incrClosepop",true);
                    return;
                }
                if(vm.obj.edate == ""){
                    vm.$store.dispatch("incrClosepoptext",'请选择结束日期');
                    vm.$store.dispatch("incrClosepop",true);
                    return;
                }
                vm.$store.dispatch("incrajax",{id:5,data:vm.obj});
            },
            pageCb(page) {
                vm=this;
                vm.obj.pageNo=page;
                vm.obj.Type = $('#Type').val();
                vm.obj.status = $('#status').val();
                vm.$store.dispatch("incrajax",{id:5,data:vm.obj});
            }
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
@import "./css/from.less";
</style>