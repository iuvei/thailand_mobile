<template>
    <div class='withdrawRecord'>
        <Top :text="text"></Top>
        <div class="Return">
            <router-link to="/MemberCentre">
                <img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">
            </router-link>
        </div>
        <div class="row SubmitForm">
            <form action="" class="row">
                <div class="item-nav">
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
                                <label for="Type" class="tad">状态</label>
                            </div>
                            <div class="col-8">
                                <select name="" id="Type" class="my_type">
                                    <option value="">所有</option>
                                    <option value="0">交易中</option>
                                    <option value="2">交易失败</option>
                                    <option value="1">交易成功</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-nav">
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
                            <div class="col-4"></div>
                            <div class="col-8"></div>
                        </div>
                    </div>
                </div>
                <div class="item-nav">
                    <div  class="RecordBoxBtn btn-submit" @click="submit()">提交</div>
                </div>
            </form>
        </div>
        <div class="wrapper-cont">
            <div class="row Rec_text"  v-if="Recharge.judgment != true">没有符合条件的记录</div>
            <div class="row" v-if="Recharge.judgment === true">
                <div class="row recording-list" v-for="v in Recharge.data">
                    <div class="item row">
                        <p class="tad-sup btn-submit">
                            卡号： <span style="padding-right: 0.1rem;">{{v.card_num}}</span>
                        </p>
                        <p class="tad-sub" >
                            时间 : <span>{{v.time}}</span>
                        </p>
                    </div>
                    <div class="row item">
                        <div class="main-sup">
                            <div class="col-3">
                                取款金额
                            </div>
                            <div class="col-3">
                                手续费
                            </div>
                            <div class="col-3">
                                实收金额
                            </div>
                            <div class="col-3">
                                状态
                            </div>
                        </div>
                        <div class="main-sub">
                            <div class="col-3">
                                {{v.amount}}元
                            </div>
                            <div class="col-3">
                                {{v.money}}元
                            </div>
                            <div class="col-3">
                                {{v.amount_paid}}元
                            </div>
                            <div class="col-3">
                                {{v.status}}
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
            <pagination :change="pageCb" :total="Recharge.total" :page-size="Recharge.size" :current="1" layout="total,pager" size="small"></pagination>
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
                text:'提现记录',
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
                    status:''
                }
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
            Recharge:function () {//判断登录
                return this.$store.state.Recharge;
            }
        },
        mounted() {
            vm = this;
            vm.obj.bdate=vm.$datatboy('1000');
            vm.obj.edate=vm.$datatboy('0');
        },
        methods:{
            submit:function () {
                vm=this;
                vm.obj.status = $('#Type').val();
                if(vm.obj.bdate == ""){
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请选择开始日期'});
                    return;
                }
                if(vm.obj.edate == ""){
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请选择结束日期'});
                    return;
                }
                vm.$store.dispatch("incrajax",{id:7,data:vm.obj});
            },
            pageCb(page) {
                vm=this;
                vm.obj.pageNo=page;
                vm.obj.status = $('#Type').val();
                vm.$store.dispatch("incrajax",{id:7,data:vm.obj});
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
    .withdrawRecord{
        padding-bottom: 1rem;
        min-width:100%;
    }
</style>