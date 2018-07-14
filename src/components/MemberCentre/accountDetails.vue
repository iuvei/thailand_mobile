<template>
    <div class='accountDetails'>
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
                                <datepicker  v-model="obj.bdate" id="detepik" placeholder="日期" :options="StartTimeDay"></datepicker>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="col-4">
                                <label for="" class="tad">转账状态</label>
                            </div>
                            <div class="col-8">
                                <select name="" id="Type"><option value="">所    有</option> <option value="OUT">转入游戏</option> <option value="IN">转入平台</option></select>
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
                                <datepicker v-model="obj.edate" id="detepik" placeholder="日期" :options="EndTimeDay"></datepicker>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="col-4">
                                <label for="" class="tad">游戏平台</label>
                            </div>
                            <div class="col-8">
                                <select name="" id="GameType">
                                    <option value="">所有</option>
                                    <option :value="v.type" v-for="v in game">{{v.name}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-nav row">
                    <div  @click="submit()" class="RecordBoxBtn btn-submit">提交</div>
                </div>
            </form>
        </div>
        <div class="wrapper-cont">
            <div class="row Rec_text" v-if="Recharge.judgment != true">没有符合条件的记录</div>
            <div class="row"  v-if="Recharge.judgment === true">
                <div class="row recording-list" v-for="v in Recharge.data">
                    <div class="item row">
                        <p class="tad-sup btn-submit">
                            {{v.t_type}}： <span style="padding-right: 0.1rem;">{{v.type}}</span>
                        </p>
                        <p class="tad-sub" >
                            时间 : <span>{{v.time}}</span>
                        </p>
                    </div>
                    <div class="row item">
                        <div class="main-sup">
                            <div class="col-4">
                                金额
                            </div>
                            <div class="col-4">
                                转前金额
                            </div>
                            <div class="col-4">
                                转后金额
                            </div>
                        </div>
                        <div class="main-sub">
                            <div class="col-4">
                                {{v.t_money}}元
                            </div>
                            <div class="col-4">
                                {{v.old_money}}元
                            </div>
                            <div class="col-4">
                                {{v.new_money}}元
                            </div>
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
                text:'转账记录',
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
                    Ttype:''
                }
            }
        },
        computed: {
            game() {
                return this.$store.state.game;//获取游戏
            },
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
                vm.obj.Type = $('#GameType').val();
                vm.obj.Ttype = $('#Type').val();
                if(vm.obj.bdate == ""){
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请选择开始日期'});
                    return;
                }
                if(vm.obj.edate == ""){
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请选择结束日期'});
                    return;
                }
                vm.$store.dispatch("incrajax",{id:8,data:vm.obj});
            },
            pageCb(page) {
                vm=this;
                vm.obj.pageNo=page;
                vm.$store.dispatch("incrajax",{id:8,data:vm.obj});
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
@import "../MemberCentre/css/from.less";
.accountDetails{
    font-size: 0;
    padding-bottom: 1rem;
    min-width:100%;
    p{
        font-size: 0.25rem;
    }
}
.accountDetails{
    .recording-list{
        .item:nth-child(2){
            .main-sub{
                border-bottom: 1px solid #93673E;
            }
        }
    }
}

</style>