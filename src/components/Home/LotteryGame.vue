<template>
    <div class='LotteryGame'>
        <div class="container">
            <div class="row Featured">
                <div class="Box"><b><img src="http://mobile.beike188.com/modelTTC/images/Home/Featured.png" alt=""></b>热门精选
                    <router-link  id="child" style="color:#666;padding-right: 0.1rem;" class="rf" to="/LowColor">
                        更多游戏 ...
                    </router-link>
                </div>
            </div>
            <div class="row">
                <div class="loattery alearfix">
                    <ul class="loatteryBox" >
                        <li @click="EnterGame($event)" class="col-3"  v-for="v in Loattery"　:data-title="v.tltle" :data-Type="v.Type" :data-Id="v.id" :data-mobile="v.Mod">
                            <a href="javascript:void (0)">
                                <p class="row BoxImg">
                                    <b :style="{background: 'url(' + v.img + ') center no-repeat',backgroundSize:'50% 100%'}"></b>
                                </p>
                                <p class="row BoxText">
                                    <span class="BoxSub">{{v.tltle}}</span>
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row Marquee">
                <div class="Marquee-min">
                    <b class="MinImg"><img src="http://mobile.beike188.com/modelTTC/images/Home/Trophy.png" alt=""></b>最新中奖纪录
                </div>
                <div class="Marquee-Box">
                    <ul class="Marquee-List">
                        <li>
                            <p class="col-3">swal***</p><p class="col-5">购买重庆时时彩</p><p class="col-4 red">喜中3321.5元</p>
                        </li>
                        <li>
                            <p class="col-3">xwdn***</p><p class="col-5">购买重庆时时彩</p><p class="col-4 red">喜中5565元</p>
                        </li>
                        <li>
                            <p class="col-3">wpos***</p><p class="col-5">购买天津时时彩</p><p class="col-4 red">喜中8897元</p>
                        </li>
                        <li>
                            <p class="col-3">garz***</p><p class="col-5">购买新疆时时彩</p><p class="col-4 red">喜中4435元</p>
                        </li>
                        <li>
                            <p class="col-3">oweq***</p><p class="col-5">购买上海时时彩</p><p class="col-4 red">喜中8997元</p>
                        </li>
                        <li>
                            <p class="col-3">mnbo***</p><p class="col-5">购买江西时时彩</p><p class="col-4 red">喜中1564元</p>
                        </li>
                        <li>
                            <p class="col-3">logi***</p><p class="col-5">购买福彩3D</p><p class="col-4 red">喜中8974.5元</p>
                        </li>
                        <li>
                            <p class="col-3">fbww***</p><p class="col-5">购买河内时时彩</p><p class="col-4 red">喜中7365.5元</p>
                        </li>
                        <li>
                            <p class="col-3">pgwa***</p><p class="col-5">购买安微快3</p><p class="col-4 red">喜中2314.5元</p>
                        </li>
                        <li>
                            <p class="col-3">hgqd***</p><p class="col-5">购买江苏快3</p><p class="col-4 red">喜中1567.5元</p>
                        </li>
                        <li>
                            <p class="col-3">klje***</p><p class="col-5">购买江西11选5</p><p class="col-4 red">喜中1023元</p>
                        </li>
                        <li>
                            <p class="col-3">opfg***</p><p class="col-5">购买江西11选5</p><p class="col-4 red">喜中5697元</p>
                        </li>
                        <li>
                            <p class="col-3">qeas***</p><p class="col-5">购买体彩P3</p><p class="col-4 red">喜中6456元</p>
                        </li>
                        <li>
                            <p class="col-3">klpg***</p><p class="col-5">购买福彩3D</p><p class="col-4 red">喜中8974元</p>
                        </li>
                        <li>
                            <p class="col-3">fbww***</p><p class="col-5">购买广东11选5</p><p class="col-4 red">喜中1237元</p>
                        </li>
                        <li>
                            <p class="col-3">dsff***</p><p class="col-5">购买上海11选5</p><p class="col-4 red">喜中6987.5元</p>
                        </li>
                        <li>
                            <p class="col-3">jkea***</p><p class="col-5">购买北京赛车</p><p class="col-4 red">喜中1200元</p>
                        </li>
                        <li>
                            <p class="col-3">loga***</p><p class="col-5">购买六合彩</p><p class="col-4 red">喜中1400元</p>
                        </li>
                        <li>
                            <p class="col-3">trah***</p><p class="col-5">购买一分时时彩</p><p class="col-4 red">喜中1561元</p>
                        </li>
                        <li>
                            <p class="col-3">nmha***</p><p class="col-5">购买极速市时时彩</p><p class="col-4 red">喜中1565元</p>
                        </li>
                        <li>
                            <p class="col-3">read***</p><p class="col-5">购买云南时时彩</p><p class="col-4 red">喜中9000元</p>
                        </li>
                        <li>
                            <p class="col-3">blok***</p><p class="col-5">购买重庆时时彩</p><p class="col-4 red">喜中6987元</p>
                        </li>
                        <li>
                            <p class="col-3">qety***</p><p class="col-5">购买排列3D</p><p class="col-4 red">喜中6651.5元</p>
                        </li>
                        <li>
                            <p class="col-3">puey***</p><p class="col-5">购买一分赛车</p><p class="col-4 red">喜中2567.5元</p>
                        </li>
                        <li>
                            <p class="col-3">mond***</p><p class="col-5">购买一分赛车</p><p class="col-4 red">喜中1535元</p>
                        </li>
                        <li>
                            <p class="col-3">nima***</p><p class="col-5">购买幸运飞艇</p><p class="col-4 red">喜中4000元</p>
                        </li>
                        <li>
                            <p class="col-3">doub***</p><p class="col-5">购买PC蛋蛋</p><p class="col-4 red">喜中6000.5元</p>
                        </li>
                        <li>
                            <p class="col-3">kenv***</p><p class="col-5">购买重庆时时彩</p><p class="col-4 red">喜中9800元</p>
                        </li>
                        <li>
                            <p class="col-3">tond***</p><p class="col-5">购买广东快乐十分</p><p class="col-4 red">喜中14000.5元</p>
                        </li>
                        <li>
                            <p class="col-3">hpad***</p><p class="col-5">购买广西快乐十分</p><p class="col-4 red">喜中4895元</p>
                        </li>
                        <li>
                            <p class="col-3">koub***</p><p class="col-5">购买湖南快乐十分</p><p class="col-4 red">喜中17000元</p>
                        </li>
                        <li>
                            <p class="col-3">shab***</p><p class="col-5">购买天津快乐十分</p><p class="col-4 red">喜中2567.5元</p>
                        </li>
                        <li>
                            <p class="col-3">niko***</p><p class="col-5">购买云南快乐十分</p><p class="col-4 red">喜中6651.5元</p>
                        </li>
                        <li>
                            <p class="col-3">owen***</p><p class="col-5">购买幸运农场</p><p class="col-4 red">喜中9000元</p>
                        </li>
                        <li>
                            <p class="col-3">nett***</p><p class="col-5">购买幸运农场</p><p class="col-4 red">喜中6800元</p>
                        </li>
                        <li>
                            <p class="col-3">kone***</p><p class="col-5">购买湖南快乐十分</p><p class="col-4 red">喜中4000.5元</p>
                        </li>
                        <li>
                            <p class="col-3">fbww***</p><p class="col-5">购买澳洲快乐8</p><p class="col-4 red">喜中6500元</p>
                        </li>
                        <li>
                            <p class="col-3">jkot***</p><p class="col-5">购买加拿大快乐8</p><p class="col-4 red">喜中6890元</p>
                        </li>
                        <li>
                            <p class="col-3">kont***</p><p class="col-5">购买湖南快乐十分</p><p class="col-4 red">喜中7890元</p>
                        </li>
                        <li>
                            <p class="col-3">towl***</p><p class="col-5">购买韩国快乐8</p><p class="col-4 red">喜中1200元</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="" style="height: 1.5rem;" v-show="userNew.applet">
                <a :href="userNew.PC" style="display: block;margin-top: 0.5rem">
                    <img style="width: 50%" src="http://mobile.beike188.com/modelTTC/images/btn-pct.png" alt="">
                </a>
            </div>
        </div>
        <!--提示-->
    </div>
</template>

<script>
    var t,l,el,vm;
    export default {
        data () {
            return {
                text:'CPCP彩票',
                Loattery:[
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/585cf5a8ae2ac.png',tltle:'PK拾',Type:"IGPJLOTTERY",id:'2',Mod:'MB'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/ssc.png',tltle:'时时彩',Type:"IGPJLOTTERY",id:'15',Mod:'MB'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/img082.png',tltle:'快乐十分',Type:"IGPJLOTTERY",id:'14',Mod:'MB'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/11x5.png',tltle:'11选5',Type:"IGPJLOTTERY",id:'18',Mod:'MB'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/k8.png',tltle:'快乐8分',Type: "IGPJLOTTERY",id:'26',Mod:'MB'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/k3.png',tltle:'快3',Type: "IGPJLOTTERY",id:'13',Mod:'MB'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/58622205abe95.png',tltle:'3D',Type:"IGPJLOTTERY",id:'55',Mod:'MB'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/pc.png',tltle:'PC蛋蛋',Type:"IGPJLOTTERY",id:'39',Mod:'MB'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/card.png',tltle:'六合彩',Type:"IGPJLOTTO",id:'',Mod:'MB'}
                ],
                LBer:0,
                Fata:{
                    gameType:'',
                    gameID:'',
                    model:'MB'
                }
            }
        },
        mounted() {
            var vm = this;
            l=setInterval(function(){
                vm.ListInt();
            },80);
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        methods:{
            EnterGame:function (event) {
                vm = this;
                el = event.currentTarget;
                vm.Fata.gameType = el.getAttribute('data-Type');
                vm.Fata.gameID = el.getAttribute('data-Id');
                vm.$store.dispatch("incrgamepop",{id:1,gametitle:el.getAttribute('data-title')});
                vm.$BugPlaygame(vm,vm.Fata,vm.userNew.jrg+'User/forwardGame');
            },
            ListInt:function () {
                var List = $('.Marquee-List li').height();
                var Lnum = $('.Marquee-List li').length;
                $('.Marquee-List').height(List*Lnum+'px');
                var Num = $('.Marquee-List').height();
                this.LBer++;
                if(this.LBer >= Num){
                    this.LBer = 0 ;
                    $('.Marquee-List').css('top',this.LBer);
                }else{
                    $('.Marquee-List').css('top',-this.LBer+'px');
                }
            },
            headerNav:function () {
                $('.RegBoxLIst').toggle();
            }
        },
        created(){
            clearInterval(t);
            clearInterval(l);
        },
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.LotteryGame{
    width: 100%;
    .container {
        width: 95%;
        padding-top: 0.2rem;
        margin: 0 auto;
        font-size: 0;
        /*background: ;*/
        /*background: url();*/
        min-height: 4rem;
        .Marquee, .Marquee .Marquee-min, .Marquee .Marquee-Box, .Marquee-List {
            width: 100%;
        }
        .Marquee {
            height: 4rem;
            margin-top: 0.3rem;
            margin-bottom: 0.2rem;
            text-align: left;
            .Marquee-min {
                position: relative;
                height: 0.6rem;
                line-height: 0.6rem;
                border-radius: 12px;
                padding-left: 0.8rem;
                font-size: 0.25rem;
                color: #666;
                background: #f0f0f0;
                .MinImg {
                    position: absolute;
                    left: 0;
                    top: -0.2rem;
                    width: 0.7rem;
                    height: 0.8rem;
                    img {
                        width: 100%;
                    }
                }
            }
            .Marquee-Box {
                position: relative;
                height: 3.4rem;
                overflow: hidden;
                background: #fff;
                border-radius: 8px;
                .Marquee-List li, .Marquee-List li p {
                    height: 0.8rem;
                }
                .Marquee-List {
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                .Marquee-List li {
                    width: 100%;
                    border-bottom: 1px solid #e5e5e5;
                    p {
                        font-size: 0.25rem;
                        line-height: 0.8rem;
                        text-align: center;
                    }
                }
            }
        }
    }
}
.allbuycolor{
    #child{
        display: block;
        width:70%;
        height: 0.8rem;
        margin: 0.2rem auto;
        color:darkblue;
        font-size: 0.3rem;
        /*background:;*/
        line-height: 0.8rem;
        border-radius: 3px;
        /*box-shadow: 0 0 3px #000;*/
    }
}
</style>
