<template>
    <div class='LowColor'>
        <div class="AllWrapper" style="margin: 0;width:100%;">
            <p  class="title row">
                <span class="tad">时时彩</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox" >
                <div v-for="v in AlwaysColor" :data-title="v.title" :data-type="v.gameType" class="col-3 BoxBlock"  @click="EnterGame($event)"  :data-Id="v.id" >
                    <p class="sup"><img :src="v.img" alt=""></p>
                    <p class="sub">{{v.title}}</p>
                </div>
            </div>
            <p  class="title row">
                <span class="tad">11选5</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox" >
                <div v-for="v in Choose" :data-title="v.title" :data-type="v.gameType" class="col-3 BoxBlock"  @click="EnterGame($event)"  :data-Id="v.id" >
                    <p class="sup"><img :src="v.img" alt=""></p>
                    <p class="sub">{{v.title}}</p>
                </div>
            </div>
            <p class="title row">
                <span class="tad">快乐十分</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox" >
                <div v-for="v in ThirdDivision" :data-title="v.title" :data-type="v.gameType" class="col-3 BoxBlock"  @click="EnterGame($event)"  :data-Id="v.id" >
                    <p class="sup"><img :src="v.img" alt=""></p>
                    <p class="sub">{{v.title}}</p>
                </div>
            </div>
            <p class="title row">
                <span class="tad">快乐8</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox" >
                <div v-for="v in Popular" :data-title="v.title" :data-type="v.gameType" class="col-3 BoxBlock"   @click="EnterGame($event)"  :data-Id="v.id" >
                    <p class="sup"><img :src="v.img" alt=""></p>
                    <p class="sub">{{v.title}}</p>
                </div>
            </div>
            <p  class="title row">
                <span class="tad">快三</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox" >
                <div v-for="v in Fast3" :data-title="v.title" :data-type="v.gameType" class="col-3 BoxBlock"  @click="EnterGame($event)"  :data-Id="v.id" >
                    <p class="sup"><img :src="v.img" alt=""></p>
                    <p class="sub">{{v.title}}</p>
                </div>
            </div>
            <p   class="title row">
                <span class="tad">PK10</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox" >
                <div v-for="v in Pk10" :data-title="v.title" :data-type="v.gameType" class="col-3 BoxBlock" @click="EnterGame($event)"  :data-Id="v.id" >
                    <p class="sup"><img :src="v.img" alt=""></p>
                    <p class="sub">{{v.title}}</p>
                </div>
            </div>
            <p  class="title row">
                <span class="tad">3D</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox" >
                <div v-for="v in LowColor" :data-title="v.title" :data-type="v.gameType" class="col-3 BoxBlock"  @click="EnterGame($event)"  :data-Id="v.id" >
                    <p class="sup"><img :src="v.img" alt=""></p>
                    <p class="sub">{{v.title}}</p>
                </div>
            </div>
            <p   class="title row">
                <span class="tad">PC蛋蛋</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox" >
                <div v-for="v in PcEgg" :data-title="v.title" :data-type="v.gameType" class="col-3 BoxBlock"  @click="EnterGame($event)"  :data-Id="v.id" >
                    <p class="sup"><img :src="v.img" alt=""></p>
                    <p class="sub">{{v.title}}</p>
                </div>
            </div>
            <p  class="title row">
                <span class="tad">六合彩</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox" >
                <div v-for="v in liuhe" :data-title="v.title" :data-type="v.gameType" class="col-3 BoxBlock"  @click="EnterGame($event)"  :data-Id="v.id" >
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
    export default {
        data () {
            return {
                Popular:[
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/bjkl8_90.png',title:'极速快乐8',id:'54',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/jndkl8.png',title:'加拿大快乐8',id:'28',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/slfkkl8.png',title:'斯洛伐克',id:'31',gameType:'IGPJLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-cq_c921.png',title:'马耳他',id:'32',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/twbgkl8.png',title:'台湾宾果',id:'33',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/bjkl8.png',title:'北京快乐8',id:'26',gameType:'IGPJLOTTERY'}
                ],
                AlwaysColor:[
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/jscq.png',title:'极速时时彩',id:'48',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/jscq60.png',title:'一分时时彩',id:'50',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/ssc.png',title:'重庆时时彩',id:'1',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/tjsc.png',title:'天津时时彩',id:'5',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/xjsc.png',title:'新疆时时彩',id:'6',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/ynsc.png',title:'云南时时彩',id:'8',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/shsc.png',title:'上海时时彩',id:'15',gameType:'IGPJLOTTERY'}
                ],
                Fast3:[
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/jsc_90.png',title:'极速快3',id:'53',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/jsc.png',title:'江苏骰宝',id:'3',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/ahk3.png',title:'安微快3',id:'11',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/gxk3.png',title:'广西快3',id:'13',gameType:'IGPJLOTTERY'}
                ],
                Choose:[
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/gd115_90.png',title:'极速11选5',id:'52',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/jx115.png',title:'江西11选5',id:'18',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/sd115.png',title:'山东11选5',id:'19',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/bj115.png',title:'北京11选5',id:'20',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/sh115.png',title:'上海11选5',id:'21',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/ln115.png',title:'辽宁11选5',id:'22',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/hb115.png',title:'湖北11选5',id:'23',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/js115.png',title:'江苏11选5',id:'24',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/ah115.png',title:'安徽11选5',id:'25',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/gd115.png',title:'广东11选5',id:'17',gameType:'IGPJLOTTERY'}
                ],
                LowColor:[
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/gxk3.png',title:'极速3D',id:'55',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/fc3d.png',title:'福彩3D',id:'55',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/tc3d.png',title:'排列3D',id:'36',gameType:'IGPJLOTTERY'}
                ],
                Pk10:[
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/jssc.png',title:'极速赛车',id:'36',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/jssc60.png',title:'一分赛车',id:'49',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/bjc.png',title:'北京赛车',id:'2',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/xyft.png',title:'幸运飞艇',id:'16',gameType:'IGPJLOTTERY'}
                ],
                PcEgg:[
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/bjkl8pc_90.png',title:'极速蛋蛋',id:'56',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/twbgkl8pc.png',title:'加拿大蛋蛋',id:'41',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/slfkkl8pc.png',title:'斯洛伐克蛋蛋',id:'44',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/metkl8pc.png',title:'马其他',id:'45',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/twbgkl8pc.png',title:'台湾',id:'46',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/twbgkl8pc.png',title:'北京蛋蛋',id:'39',gameType:'IGPJLOTTERY'}
                ],
                ThirdDivision:[
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/klc_90.png',title:'极速快乐十分',id:'51',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/tjkc.png',title:'天津快乐十分',id:'9',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/hnkc.png',title:'湖南快乐十分',id:'10',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/gxkc.png',title:'广西快乐十分',id:'0',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/ynkc.png',title:'云南快乐十分',id:'38',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/xyc.png',title:'幸运农场',id:'4',gameType:'IGPJLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/klc.png',title:'广东快乐十分',id:'14',gameType:'IGPJLOTTERY'}
                ],
                liuhe:[
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/card.png',title:'六合彩',id:'',gameType:'IGPJLOTTO'}
                ],
                Fata:{
                    gameType:'IGPJLOTTERY',
                    gameID:'',
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
                vm.Fata.gameType = el.getAttribute('data-type');
                vm.Fata.gameID = el.getAttribute('data-Id');
                vm.$store.dispatch("incrgamepop",{id:1,gametitle:el.getAttribute('data-title')});
                vm.$BugPlaygame(vm,vm.Fata,vm.userNew.jrg+'User/forwardGame');
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

    .LowColor{
        width:100%;
        height: 100%;
        margin: 0rem auto;
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
            background: #219be4;
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
            border-bottom: 1px solid #219be4;
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
