<template>
    <div class='AlwaysColor'>
        <Top :text="text"></Top>
        <div class="Return">
            <router-link to="/">
                <img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">
            </router-link>
        </div>
        <div class="AllWrapper" style="margin:  0;width:100%">
            <p  class="title row">
                <span class="tad">高频彩</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox" >
                <div v-for="v in AlwaysColor" class="col-4 BoxBlock" :data-title="v.title" @click="EnterGame($event)" :data-Id="v.id" >
                    <p class="sup"><img :src="v.img" alt=""></p>
                    <p class="sub">{{v.title}}</p>
                </div>
            </div>
            <p  class="title row">
                <span class="tad">低频彩</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox" >
                <div v-for="v in Fast3" class="col-4 BoxBlock" :data-title="v.title" @click="EnterGame($event)"  :data-Id="v.id" >
                    <p class="sup"><img :src="v.img" alt=""></p>
                    <p class="sub">{{v.title}}</p>
                </div>
            </div>
        </div>
        <!--提示框-->
    </div>
</template>

<script>
    var el,vm;
    import {mapActions} from "vuex";
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                text:'官方彩 BG',
                AlwaysColor:[
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/5878a932233e8.png',title:'重庆时时彩',id:'12'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/5878a9519fb93.png',title:'新疆时时彩',id:'14'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/5878a96421d0b.png',title:'天津时时彩',id:'11'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/lotto-17.png',title:'三分时时彩',id:'17'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/lotto-51.png',title:'PC蛋蛋',id:'51'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/lotto-50.png',title:'三分六合彩',id:'50'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/lotto-18.png',title:'分分时时彩',id:'18'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/lotto-53.png',title:'分分快三',id:'53'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/lotto-10.png',title:'上海时时乐',id:'10'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/lotto-24.png',title:'北京PK拾',id:'24'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/lotto-22.png',title:'三分PK拾',id:'22'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/lotto-26.png',title:'安微快三',id:'26'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/lotto-25.png',title:'江苏快三',id:'25'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/lotto-27.png',title:'三分快三',id:'27'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/lotto-31.png',title:'广东11选5',id:'31'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/lotto-30.png',title:'江西11选5',id:'30'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/lotto-32.png',title:'上海11选5',id:'32'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/lotto-28.png',title:'山东11选5',id:'28'}
                ],
                Fast3:[
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/lotto-49.png',title:'香港六合彩',id:'49'},

//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/585cf6481001b.png',title:'香港六合彩',id:'26'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/lotto-02.png',title:'排列三',id:'2'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/lotto-01.png',title:'福彩3D',id:'1'}

                ],
                Choose:[
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/585cf6ab549d4.png',title:'山东11选5',id:'28'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/cq11x5.png',title:'重庆11选5',id:'29'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/585cf6c70cca9.png',title:'江西11选5',id:'30'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/585cf6da941b2.png',title:'广东11选5',id:'31'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/585cf6b89bce2.png',title:'上海11选5',id:'32'}
                ],
                LowColor:[
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/58622205abe95.png',title:'福彩3D',id:'36'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/tc3.png',title:'体彩P3',id:'37'}
                ],
                Pk10:[
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/cq_c8.png',title:'北京赛车',id:'24'}
                ],
                PcEgg:[
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/card.png',title:'六合彩',id:'49'}
                ],
                Fata:{
                    gameType:'BG',
                    ltId:'',
                    gameID:'2',
                    model:'MB'
                }
            }
        },
        mounted:function(){
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        methods:{
            EnterGame:function () {
                vm = this;
                el = event.currentTarget;
                vm.Fata.ltId = el.getAttribute('data-Id');
                vm.$store.dispatch("incrgamepop",{id:1,gametitle:el.getAttribute('data-title')});
                vm.$BugPlaygame(vm,vm.Fata,vm.userNew.jrg+'User/forwardGame');
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
    .AlwaysColor{
        width:100%;
        padding-bottom:1rem;
    .title{
        margin: 0.2rem auto;
        z-index: 0;
        width: 95%;
        position: relative;
        font-size:0.25rem;
    .tad{
        float: left;
        line-height: 0.6rem;
        width: 2rem;
        text-align:center;
        margin-left: 0.1rem;
        background: #de3232;
        border-radius: 3px;
        font-weight: 900;
        color:#fff;
        z-index: 0;
    }
    .solid{
        position: absolute;
        height: 1px;
        width: 100%;
        top:0.3rem;
        left:0;
        z-index: -1;
        border-bottom: 1px solid #de3232;
    }
    }
    .AllBox{
        margin-top: 0.1rem;
        width:100%;
    .BoxBlock{
        height: 1.6rem;
        width:23%;
        background:#fff;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        margin: 0 1% 0.2rem;
    .sup{
        width:100%;
        height: 1.2rem;
    img{
        width: 0.8rem;
        margin-top: 0.2rem;
        border-radius: 50%;
    }
    }
    .sub{
        font-size: 0.25rem;
        width:100%;
        height: 0.4rem;
        text-align: center;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        line-height: 0.4rem;
    }
    }
    }
    }
</style>