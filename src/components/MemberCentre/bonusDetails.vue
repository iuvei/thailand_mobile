<template>
    <div class='bonusDetails'>
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
                        <div class="col-3">
                            <label class="tad" for="">开始时间</label>
                        </div>
                        <div class="col-5">
                            <datepicker id="detepik" v-model="obj.startTime" placeholder="日期" :options="StartTimeDay"></datepicker>
                        </div>
                    </div>
                </div>
                <div class="item-nav row">
                    <div class="main-nav row">
                        <div class="col-3">
                            <label class="tad" for="">结束时间</label>
                        </div>
                        <div class="col-5">
                            <datepicker id="detepik" v-model="obj.endTime" placeholder="日期" :options="EndTimeDay"></datepicker>
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
                            {{v.t_type}}： <span style="padding-right: 0.1rem;">{{v.rmk}}</span>
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
                                变动后金额
                            </div>
                        </div>
                        <div class="main-sub">
                            <div class="col-6">
                                {{v.amount}}元
                            </div>
                            <div class="col-6">
                                {{v.new_money}}元
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="row" v-if="Recharge.judgment === true">
            <pagination :change="pageCb" :page-size="Recharge.size" :total="Recharge.total"  layout="total,pager" size="small"></pagination>
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
                text:'资金流水',
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
                    startTime:'',
                    endTime:''
                }
            }
        },
        computed: {
            Recharge:function () {//判断登录
                return this.$store.state.Recharge;
            }
        },
        mounted() {
            vm = this;
            vm.obj.startTime=vm.$datatboy('1000');
            vm.obj.endTime=vm.$datatboy('0');
        },
        methods: {
            submit: function () {
                vm = this;
                if (vm.obj.startTime == "") {
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请选择开始日期'});
                    return;
                }
                if (vm.obj.endTime == "") {
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请选择结束日期'});
                    return;
                }
                vm.$store.dispatch("incrajax",{id:6,data:vm.obj});
            },
            pageCb(page) {
                vm = this;
                vm.obj.pageNo = page;
                vm.$store.dispatch("incrajax",{id:6,data:vm.obj});
            }
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    .bonusDetails{
        padding-bottom: 1rem;
        min-width:100%;
    }
    .bonusDetails{
    .recording-list{
    .item:nth-child(2){
    .main-sub{
        border-bottom: 1px solid #93673E;
    }
    }
    }
    }

</style>