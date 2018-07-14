<template>
    <div id="HABA" class='gameThree'>
        <Top :text="text"></Top>
        <div class="Return">
            <router-link to="/ElectronicGames">
                <img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">
            </router-link>
        </div>
        <p class="top-img"><img src="http://m.cqt56.com/src/components/home/game/img/HABA1.png" alt=""></p>
        <div class="wrapperMg row" v-for="item in one">
            <p class="Mg-p">热门游戏</p>
            <ul class="Mg-List row" >
                <li :data-Id="v.Keyname"  @click="EnterGame($event)" v-for="v in item.Slot_Game" :data-title="v.title">
                    <b :style="{background:'url('+v.src+') 0rem 0rem no-repeat',backgroundSize:'100% 100%',backgroundOrigin:'content-box'}"></b>
                    <p>{{v.title}}</p>
                </li>
            </ul>
            <p class="Mg-p">桌面</p>
            <ul class="Mg-List row" >
                <li :data-Id="v.Keyname"  @click="EnterGame($event)" v-for="v in item.Table_Game" :data-title="v.title">
                    <b :style="{background:'url('+v.src+') 0.0rem 0.0rem no-repeat',backgroundSize:'100% 100%',backgroundOrigin:'content-box'}"></b>
                    <p>{{v.title}}</p>
                </li>
            </ul>
            <p class="Mg-p">老虎机</p>
            <ul class="Mg-List row" >
                <li :data-Id="v.Keyname"  @click="EnterGame($event)" v-for="v in item.Video_Poker" :data-title="v.title">
                    <b :style="{background:'url('+v.src+') 0rem 0rem no-repeat',backgroundSize:'100% 100%',backgroundOrigin:'content-box'}"></b>
                    <p>{{v.title}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    var vm,el;
    import Top from '../Top/Top.vue'
    import Habanero from './js/json2'
    export default {
        data () {
            return {
                one:Habanero,
                text:'HABA游戏',
                Fata:{
                    gameType:"HABA",
                    model:'',
                    gameID:''
                }
            }
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
                vm.Fata.gameID = el.getAttribute('data-Id');
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
    @import "./css/gamethree.less";
#HABA li img{
    width:100%;
}
#HABA{
    .top-img{
    width:100%;
    text-align: center;
    background: #fff;
    height: 1.2rem;
        img{
            width:49%;
            margin-top: 0.1rem;
            height: 0.8rem;
        }
    }
    .wrapperMg{
        margin-top: 0;
        .Mg-p{
            background-image: linear-gradient(to top,#f19225,#ec3849);
        }
        .Mg-List{
            li{
                p{
                    background-image: linear-gradient(to top,#ee6539,#ee6539);
                }
            }
        }
    }
}
</style>
