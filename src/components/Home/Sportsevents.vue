<template>
    <div class='Sportsevents'>
        <div class="container">
            <div id="Featured" class="Featured" style="margin: 0.5rem 0;;height:0px;border-bottom:1px solid #e94929; background: #85d25f;">
                <span>体育赛事</span>
            </div>
            <div class="row">
                <div class="loattery alearfix">
                    <ul class="loatteryBox" >
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
    </div>
</template>

<script>
    var el,vm;
    export default {
        data () {
            return {
                text:'体育赛事',
                Loattery:[
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/hg.png',tltle:'皇冠体育',sub:'开始游戏',Type:"HG",id:"",Mod:"MB"}
                ],
                Fata:{
                    gameType:'',
                    gameID:'',
                    model:''
                }
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
                vm.$store.dispatch("incrgamepop",{id:1,gametitle:el.getAttribute('data-index'),});
                vm.$BugPlaygame(vm,vm.Fata,vm.userNew.jrg+'User/forwardGame');
            }
        },
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.Sportsevents{
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
    font-size: 0.31rem;
    font-weight: 900;
    background:#e94929;
    color:#fff;
    border-radius: 6px;
}
}
}

</style>