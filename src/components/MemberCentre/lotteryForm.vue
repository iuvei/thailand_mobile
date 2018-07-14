<template>
    <div class='lotteryForm'>
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
                        <div class="col-8">
                            <div class="col-4">
                                <label for="" class="tad">开始时间</label>
                            </div>
                            <div class="col-8">
                                <datepicker id="detepik" v-model="obj.bdate" placeholder="日期" :options="StartTimeDay"></datepicker>
                            </div>
                        </div>
                        <div class="col-4">
                            <label for="" class="tad">游戏类型</label>
                        </div>
                    </div>
                </div>
                <div class="item-nav row">
                    <div class="main-nav">
                        <div class="col-8">
                            <div class="col-4">
                                <label for="" class="tad">结束时间</label>
                            </div>
                            <div class="col-8">
                                <datepicker id="detepik" v-model="obj.edate" placeholder="日期" :options="EndTimeDay"></datepicker>
                            </div>
                        </div>
                        <div class="col-4">
                            <select id="Asele" name="" style="width:95%;">
                                <option :value="v.type" v-for="v in game">{{v.name}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="item-nav row">
                    <div @click="submit()" class="RecordBoxBtn btn-submit">提交</div>
                </div>
            </form>
        </div>
        <div class="wrapper-cont">
            <div class="row Rec_text"  v-if="Recharge.judgment != true">没有符合条件的记录</div>
            <div class="row" v-if="Recharge.judgment === true">
                <div class="row recording-list" v-for="v in Recharge.data">
                    <div class="item row">
                        <p class="tad-sup btn-submit">
                            游戏类型： <span style="padding-right: 0.1rem;">{{v.type}}</span>
                        </p>
                        <p class="tad-sub" >
                            时间 : <span>{{v.time}}</span>
                        </p>
                    </div>
                    <div class="row item">
                        <div class="main-sup">
                            <div class="col-4">
                                下注金额
                            </div>
                            <div class="col-4">
                                派彩金额
                            </div>
                            <div class="col-4">
                                输赢金额
                            </div>
                        </div>
                        <div class="main-sub">
                            <div class="col-4">
                                {{v.betAmount}}元
                            </div>
                            <div class="col-4">
                                {{v.Payout}}元
                            </div>
                            <div class="col-4">
                                {{v.netAmount}}元
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="Recharge.column != ''" class="column-title row">
                <div class="col-4 main" style="">
                    <p class="sup">派彩金额小计</p>
                    <p class="sub">{{Recharge.column.payoutSum}}元</p>
                </div>
                <div class="col-4 main">
                    <p class="sup">下注金额小计</p>
                    <p class="sub">{{Recharge.column.betamountSum}}元</p>
                </div>
                <div class="col-4 main" >
                    <p class="sup">输赢金额小计</p>
                    <p class="sub">{{Recharge.column.netAmountSum}}元</p>
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
//    import {mapActions} from "vuex";
    export default {
        data () {
            return {
                text: '投注记录',
                StartTimeDay: {
                    locale: zh,
                    enable: [
                        {
                            from: new Date().fp_incr(-30),
                            to: "today" // 7 days from now
                        }
                    ],
                    defaultDate : new Date().fp_incr(-1)
//                    enableTime: true,
//                    enableSeconds:true
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
//                    enableTime: true,
//                    enableSeconds:true
                },
                obj:{
                    pageSize:5,
                    pageNo:1,
                    bdate:'',
                    edate:'',
                    type:''
                },
                game:[//游戏列表
                    {name:'IG彩票（新）',type:'IGPJ'},
                    {name:'IG彩票',type:'IG'},
//                    {name:'BG彩票',type:'BGLOTTERY'},
                    {name:'VR 彩票',type:'VR'},
                    {name:'Cagayan88视讯',type:'CG'},
                    {name:'DS视讯',type:'DS'},
                    {name:'AGIN国际厅',type:'AG'},
//                    {name:'BG视讯',type:'BG'},
                    {name:'BBIN 视讯',type:'BBIN'},
                    {name:'申博视讯',type:'SHENBO'},
                    {name:'OG视讯',type:'OG'},
                    {name:'皇冠',type:'HG'},
                    {name:'BBIN电子',type:'BBINGAME'},
                    {name:'PT电子',type:'PT'},
                    {name:'申博电子(TGP)',type:'TGP'},
                    {name:'MG电子',type:'MG'},
                    {name:'HABA电子',type:'HABA'}
                ]
            }
        },
        computed: {
            Recharge:function () {//判断登录
                return this.$store.state.Recharge;
            }
        },
        mounted() {
            vm=this;
            vm.obj.bdate=vm.$datatboy('1000');
            vm.obj.edate=vm.$datatboy('0');
        },
        methods:{
            submit:function () {
                vm=this;
                vm.obj.type = $('#Asele').val();
                if(vm.obj.bdate == ""){
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请选择开始日期'});
                    return;
                }
                if(vm.obj.edate == ""){
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请选择结束日期'});
                    return;
                }
                vm.$store.dispatch("incrajax",{id:9,data:vm.obj});
            },
            pageCb(page) {
                vm=this;
                vm.obj.pageNo=page;
                vm.$store.dispatch("incrajax",{id:9,data:vm.obj});
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
   @import "./css/from.less";
</style>