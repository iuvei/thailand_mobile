<template>
    <div class='LiveVideo'>
        <div class="container">
            <div id="Featured" class="Featured" style="margin: 0.5rem 0;;height:0px;border-bottom:1px solid #4b84d8;">
                <span>真人视讯</span>
            </div>
            <div class="row">
                <div class="loattery alearfix">
                    <ul class="loatteryBox row">
                        <li @click="EnterGame($event)" class="col-3" v-for="v in Loattery" :data-index="v.tltle" :data-Type="v.Type" :data-Id="v.id" :data-mobile="v.Mod">
                            <a href="javascript:void (0)">
                                <p class="row BoxImg">
                                    <img width="90%" :src="v.img" alt="">
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
    </div>
</template>
<script>
    var el,vm;
    export default {
        data () {
            return {
                Loattery:[
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/cg.png',tltle:'Cagayan88',sub:'开始游戏',Type:"CG",id:"",Mod:""},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/ds.png',tltle:'DS太阳城',sub:'开始游戏',Type:"DS",id:"",Mod:""},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/ag.png',tltle:'AGIN国际厅',sub:'开始游戏',Type:"AGIN",id:"",Mod:"mobile"},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/sun.png',tltle:'申博视讯',sub:'开始游戏',Type:"SB",id:"3",Mod:""},
//                    {img:'http://mobile.beike188.com/modelTTC/images/Home/bg.png',tltle:'BG视讯',sub:'开始游戏',Type:"BG",id:"1",Mod:"MB"},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/og.png',tltle:'OG视讯',sub:'开始游戏',Type:"OG",id:"",Mod:""},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/bbin.png',tltle:'BBIN视讯',sub:'开始游戏',Type:"BBIN",id:"1",Mod:""}
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
    .LiveVideo{
        #Featured{
            position: relative;
            span{
                position: absolute;
                height: 0.5rem;
                line-height: 0.5rem;
                width:30%;
                left:0.2rem;
                font-weight: 900;
                top:-0.25rem;
                font-size: 0.31rem;
                background:#4b84d8 ;
                color:#fff;
                border-radius: 3px;
            }
        }
    }

</style>