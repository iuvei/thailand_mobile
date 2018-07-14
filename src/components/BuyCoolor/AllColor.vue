<template>
    <div class='AllColor'>
        <div class="AllWrapper" style="margin: 0;width:100%;">
            <p  class="title row">
                <span class="tad">时时彩</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox" >
                <div v-for="v in AlwaysColor" class="col-3 BoxBlock" :data-title="v.title" :data-type="v.gameType"  @click="EnterGame($event)"  :data-Id="v.id" >
                    <p class="sup"><img :src="v.img" alt=""></p>
                    <p class="sub">{{v.title}}</p>
                </div>
            </div>
            <p  class="title row">
                <span class="tad">11选5</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox" >
                <div v-for="v in Choose" class="col-3 BoxBlock" :data-title="v.title" :data-type="v.gameType" @click="EnterGame($event)"  :data-Id="v.id" >
                    <p class="sup"><img :src="v.img" alt=""></p>
                    <p class="sub">{{v.title}}</p>
                </div>
            </div>
            <p  class="title row">
                <span class="tad">快乐十分</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox" >
                <div v-for="v in ThirdDivision" class="col-3 BoxBlock" :data-title="v.title" :data-type="v.gameType" @click="EnterGame($event)"  :data-Id="v.id" >
                    <p class="sup"><img :src="v.img" alt=""></p>
                    <p class="sub">{{v.title}}</p>
                </div>
            </div>
            <p class="title row">
                <span class="tad">快乐8</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox" >
                <div v-for="v in Popular" class="col-3 BoxBlock"  :data-title="v.title" :data-type="v.gameType" @click="EnterGame($event)"  :data-Id="v.id" >
                    <p class="sup"><img :src="v.img" alt=""></p>
                    <p class="sub">{{v.title}}</p>
                </div>
            </div>
            <p  class="title row">
                <span class="tad">快三</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox" >
                <div v-for="v in Fast3" class="col-3 BoxBlock" :data-title="v.title" :data-type="v.gameType" @click="EnterGame($event)"  :data-Id="v.id" >
                    <p class="sup"><img :src="v.img" alt=""></p>
                    <p class="sub">{{v.title}}</p>
                </div>
            </div>
            <p  class="title row">
                <span class="tad">PK10</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox" >
                <div v-for="v in Pk10" class="col-3 BoxBlock" :data-title="v.title" :data-type="v.gameType" @click="EnterGame($event)"  :data-Id="v.id" >
                    <p class="sup"><img :src="v.img" alt=""></p>
                    <p class="sub">{{v.title}}</p>
                </div>
            </div>
            <p  class="title row">
                <span class="tad">3D</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox" >
                <div v-for="v in LowColor" class="col-3 BoxBlock" :data-title="v.title" :data-type="v.gameType" @click="EnterGame($event)"  :data-Id="v.id" >
                    <p class="sup"><img :src="v.img" alt=""></p>
                    <p class="sub">{{v.title}}</p>
                </div>
            </div>
            <p  class="title row">
                <span class="tad">PC蛋蛋</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox" >
                <div v-for="v in PcEgg" class="col-3 BoxBlock" :data-title="v.title" :data-type="v.gameType" @click="EnterGame($event)"  :data-Id="v.id" >
                    <p class="sup"><img :src="v.img" alt=""></p>
                    <p class="sub">{{v.title}}</p>
                </div>
            </div>
            <p  class="title row">
                <span class="tad">六合彩</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox" >
                <div v-for="v in liuhe" class="col-3 BoxBlock" :data-title="v.title" :data-type="v.gameType" @click="EnterGame($event)"  :data-Id="v.id" >
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
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-jskl8.png',title:'极速快乐8',id:'33',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-janada.png',title:'加拿大快乐8',id:'29',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-cq_c9111.png',title:'斯洛伐克',id:'31',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-cq_c921.png',title:'马耳他',id:'32',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-twbg.png',title:'台湾宾果',id:'33',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-bjk8.png',title:'北京快乐8',id:'29',gameType:'IGLOTTERY'}
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-jskl8.png',title:'极速快乐8',id:'54',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-janada.png',title:'加拿大快乐8',id:'28',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-cq_c9111.png',title:'斯洛伐克',id:'31',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-cq_c921.png',title:'马耳他',id:'32',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-twbg.png',title:'台湾宾果',id:'33',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-bjk8.png',title:'北京快乐8',id:'26',gameType:'IGLOTTERY'}
                ],
                AlwaysColor:[
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-js.png',title:'极速时时彩',id:'1',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-yfssc.png',title:'一分时时彩',id:'1',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-cp.png',title:'重庆时时彩',id:'1',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-tj.png',title:'天津时时彩',id:'1',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-xj.png',title:'新疆时时彩',id:'6',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-ynssc.png',title:'云南时时彩',id:'1',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-shs.png',title:'上海时时彩',id:'18',gameType:'IGLOTTERY'}
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-js.png',title:'极速时时彩',id:'48',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-yfssc.png',title:'一分时时彩',id:'50',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-cp.png',title:'重庆时时彩',id:'1',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-tj.png',title:'天津时时彩',id:'5',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-xj.png',title:'新疆时时彩',id:'6',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-ynssc.png',title:'云南时时彩',id:'8',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-shs.png',title:'上海时时彩',id:'15',gameType:'IGLOTTERY'}
                ],
                Fast3:[
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-sd-.png',title:'极速快3',id:'3',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-jssb.png',title:'江苏骰宝',id:'3',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-sd.png',title:'安微快3',id:'13',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-gxk3.png',title:'广西快3',id:'14',gameType:'IGLOTTERY'}
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-sd-.png',title:'极速快3',id:'53',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-jssb.png',title:'江苏骰宝',id:'3',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-sd.png',title:'安微快3',id:'11',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-gxk3.png',title:'广西快3',id:'13',gameType:'IGLOTTERY'}
                ],
                Choose:[
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-jisu11x5.png',title:'极速11选5',id:'18',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-jx.png',title:'江西11选5',id:'18',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-sd.png',title:'山东11选5',id:'19',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-bj.png',title:'北京11选5',id:'20',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-sh.png',title:'上海11选5',id:'18',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-ln.png',title:'辽宁11选5',id:'22',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-hb.png',title:'湖北11选5',id:'18',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-jss.png',title:'江苏11选5',id:'18',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-ahh.png',title:'安徽11选5',id:'18',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-gd.png',title:'广东11选5',id:'18',gameType:'IGLOTTERY'}
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-jisu11x5.png',title:'极速11选5',id:'52',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-jx.png',title:'江西11选5',id:'18',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-sd.png',title:'山东11选5',id:'19',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-bj.png',title:'北京11选5',id:'20',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-sh.png',title:'上海11选5',id:'21',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-ln.png',title:'辽宁11选5',id:'22',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-hb.png',title:'湖北11选5',id:'23',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-jss.png',title:'江苏11选5',id:'24',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-ahh.png',title:'安徽11选5',id:'25',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-gd.png',title:'广东11选5',id:'17',gameType:'IGLOTTERY'}
                ],
                LowColor:[
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-js3d.png',title:'极速3D',id:'36',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-sd-.png',title:'福彩3D',id:'36',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-pl3.png',title:'排列3D',id:'36',gameType:'IGLOTTERY'}
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-js3d.png',title:'极速3D',id:'55',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-sd-.png',title:'福彩3D',id:'55',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-pl3.png',title:'排列3D',id:'36',gameType:'IGLOTTERY'}
                ],
                Pk10:[
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-jssc.png',title:'极速赛车',id:'37',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-yfsc.png',title:'一分赛车',id:'37',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-bjpk.png',title:'北京赛车',id:'2',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-xyft.png',title:'幸运飞艇',id:'16',gameType:'IGLOTTERY'}
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-jssc.png',title:'极速赛车',id:'36',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-yfsc.png',title:'一分赛车',id:'49',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-bjpk.png',title:'北京赛车',id:'2',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-xyft.png',title:'幸运飞艇',id:'16',gameType:'IGLOTTERY'}
                ],
                PcEgg:[
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-jspcdd.png',title:'极速蛋蛋',id:'42',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-jndpcdd.png',title:'加拿大蛋蛋',id:'42',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-slfkpcdd.png',title:'斯洛伐克蛋蛋',id:'42',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-metpcdd.png',title:'马其他',id:'42',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-twbgpcdd.png',title:'台湾',id:'42',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-bjpcdd.png',title:'北京蛋蛋',id:'42',gameType:'IGLOTTERY'}
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-jspcdd.png',title:'极速蛋蛋',id:'56',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-jndpcdd.png',title:'加拿大蛋蛋',id:'41',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-slfkpcdd.png',title:'斯洛伐克蛋蛋',id:'44',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-metpcdd.png',title:'马其他',id:'45',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-twbgpcdd.png',title:'台湾',id:'46',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-bjpcdd.png',title:'北京蛋蛋',id:'39',gameType:'IGLOTTERY'}
                ],
                ThirdDivision:[
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-jskl10.png',title:'极速快乐十分',id:'4',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-tjkl10.png',title:'天津快乐十分',id:'4',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-hnkl10.png',title:'湖南快乐十分',id:'12',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-gxkl10.png',title:'广西快乐十分',id:'11',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-ynkl10.png',title:'云南快乐十分',id:'4',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/585cf6481001b2.png',title:'幸运农场',id:'4',gameType:'IGLOTTERY'},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-gdkl10.png',title:'广东快乐十分',id:'4',gameType:'IGLOTTERY'}
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-jskl10.png',title:'极速快乐十分',id:'51',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-tjkl10.png',title:'天津快乐十分',id:'9',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-hnkl10.png',title:'湖南快乐十分',id:'10',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-gxkl10.png',title:'广西快乐十分',id:'0',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-ynkl10.png',title:'云南快乐十分',id:'38',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/585cf6481001b2.png',title:'幸运农场',id:'4',gameType:'IGLOTTERY'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-gdkl10.png',title:'广东快乐十分',id:'14',gameType:'IGLOTTERY'}
                ],
                liuhe:[
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-lhc.png',title:'六合彩',id:'',gameType:'IGLOTTO'}
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/j-lhc.png',title:'六合彩',id:'',gameType:'IGLOTTO'}
                ],
                Fata:{
                    gameType:'IGLOTTERY',
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

.AllColor{
    width: 100%;
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
            background: #e64c99;
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
            border-bottom: 1px solid #e64c99;
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
