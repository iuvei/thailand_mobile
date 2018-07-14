<template>
    <div class='ElectronicGames'>
        <div class="container">
            <div id="Featured" class="Featured" style="margin: 0.5rem 0;;height:0px;border-bottom:1px solid #85d25f; background: #85d25f;">
                <span>电子游艺</span>
            </div>
            <div class="row">
                <div class="loattery alearfix">
                    <ul class="loatteryBox row" >
                        <li @click="EnterGame($event)" class="col-3" data-Type="PT">
                            <a href="javascript:void (0)">
                                <p class="row BoxImg">
                                    <img width="80%" src="http://mobile.beike188.com/modelTTC/images/Home/pt.png" alt="">
                                </p>
                                <p class="row BoxText">
                                    <span class="BoxSub">PT电子</span>
                                </p>
                            </a>
                        </li>
                        <li @click="EnterGame($event)" class="col-3" v-for="v in Loattery" :data-index="v.tltle" :data-Type="v.Type" :data-Id="v.id" :data-mobile="v.Mod">
                            <a href="javascript:void (0)">
                                <p class="row BoxImg">
                                    <img width="80%" :src="v.img" alt="">
                                </p>
                                <p class="row BoxText">
                                    <span class="BoxSub">{{v.tltle}}</span>
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--提示-->
    </div>
</template>

<script>
    var el,vm;
    export default {
        data () {
            return {
                Loattery:[
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/mg.png',tltle:'MG电子',sub:'开始游戏',Type: "GAMEMG",id:'',Mod:''},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/haba.png',tltle:'HABA电子',sub:'开始游戏',Type: "GAMEHABA",id:'',Mod:''},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/bbin.png',tltle:'BBIN电子',sub:'开始游戏',Type: "BBIN",id:'2',Mod:''},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/sun.png',tltle:'TGP电子',sub:'开始游戏',Type: "SB",id:'4',Mod:''}
                ],
                Fata:{
                    gameType:'',
                    gameID:'',
                    model:''
                },
                title:'',
                gamemoney:''
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        mounted() {
        },
        methods:{
            EnterGame:function (event) {
                vm = this;
                el = event.currentTarget;
                vm.Fata.gameType = el.getAttribute('data-Type');
                vm.Fata.gameID = el.getAttribute('data-Id');
                vm.Fata.model = el.getAttribute('data-mobile');
                vm.$store.dispatch("incrgamepop",{id:1,gametitle:el.getAttribute('data-index')});
                vm.$BugPlaygame(vm,vm.Fata,vm.userNew.jrg+'User/forwardGame');
            }
        },
        components: {
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.ElectronicGames{
    width:100%;
    #Featured{
        position: relative;
        span{
            position: absolute;
            height: 0.5rem;
            line-height: 0.5rem;
            width:30%;
            left:0.2rem;
            top:-0.25rem;
            font-weight: 900;
            font-size: 0.31rem;
            background: #85d25f;
            color:#fff;
            border-radius: 3px;
        }
    }
}
</style>