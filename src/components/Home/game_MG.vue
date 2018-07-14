<template>
    <div id="MG_game" class='MG_game gameThree'>
        <Top :text="text"></Top>
        <div class="Return">
            <router-link to="/ElectronicGames">
                <img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">
            </router-link>
        </div>
        <p class="top-img"><img src="http://m.cqt56.com/src/components/home/game/img/microgaming.png" alt=""></p>
        <div class="wrapperMg row" v-for="item in one">
            <p v-if="item.BonusSlot" class="Mg-p">热门游戏</p>
            <ul class="Mg-List row" >
                <li :data-Id="v.GameID"  @click="EnterGame($event)" v-for="v in item.BonusSlot" :data-title="v.title">
                    <b :style="{background:'url('+v.src+') 0.1rem 0.05rem no-repeat',backgroundSize:'185% 90%',backgroundOrigin:'content-box'}"></b>
                    <p>{{v.title}}</p>
                </li>
            </ul>
            <p class="Mg-p">老虎机</p>
            <ul class="Mg-List row">
                <li :data-Id="v.GameID"  @click="EnterGame($event)" v-for="v in item.ClassicSlot" :data-title="v.title">
                    <b :style="{background:'url('+v.src+') 0.1rem 0.05rem no-repeat',backgroundSize:'185% 90%',backgroundOrigin:'content-box'}"></b>
                    <p>{{v.title}}</p>
                </li>
            </ul>
            <p class="Mg-p">累计奖池</p>
            <ul class="Mg-List row">
                <li :data-Id="v.GameID"  @click="EnterGame($event)" v-for="v in item.FeatureSlot" :data-title="v.title">
                    <b :style="{background:'url('+v.src+') 0.1rem 0.05rem no-repeat',backgroundSize:'185% 90%',backgroundOrigin:'content-box'}"></b>
                    <p>{{v.title}}</p>
                </li>
            </ul>
            <p v-if="item.others" class="Mg-p">视频扑克</p>
            <ul class="Mg-List row">
                <li :data-Id="v.GameID"  @click="EnterGame($event)" v-for="v in item.others" :data-title="v.title">
                    <b :style="{background:'url('+v.src+') 0.1rem 0.05rem no-repeat',backgroundSize:'185% 90%',backgroundOrigin:'content-box'}"></b>
                    <p>{{v.title}}</p>
                </li>
            </ul>
            <p class="Mg-p">刮刮乐</p>
            <ul class="Mg-List row">
                <li :data-Id="v.GameID"  @click="EnterGame($event)" v-for="v in item.Table" :data-title="v.title">
                    <b :style="{background:'url('+v.src+') 0.1rem 0.05rem no-repeat',backgroundSize:'185% 90%',backgroundOrigin:'content-box'}"></b>
                    <p>{{v.title}}</p>
                </li>
            </ul>
            <p class="Mg-p">视频</p>
            <ul class="Mg-List row">
                <li :data-Id="v.GameID"  @click="EnterGame($event)" v-for="v in item.Video" :data-title="v.title">
                    <b :style="{background:'url('+v.src+') 0.1rem 0.05rem no-repeat',backgroundSize:'185% 90%',backgroundOrigin:'content-box'}"></b>
                    <p>{{v.title}}</p>
                </li>
            </ul>
            <p class="Mg-p">桌面</p>
            <ul class="Mg-List row">
                <li :data-Id="v.GameID"  @click="EnterGame($event)" v-for="v in item.VideoSlot" :data-title="v.title">
                    <b :style="{background:'url('+v.src+') 0.1rem 0.05rem no-repeat',backgroundSize:'185% 90%',backgroundOrigin:'content-box'}"></b>
                    <p>{{v.title}}</p>
                </li>
            </ul>
            <p class="Mg-p">机台&卡牌</p>
            <ul class="Mg-List row">
                <li :data-Id="v.GameID"  @click="EnterGame($event)" v-for="v in item.VideoPoker" :data-title="v.title">
                    <b :style="{background:'url('+v.src+') 0.1rem 0.05rem no-repeat',backgroundSize:'185% 90%',backgroundOrigin:'content-box'}"></b>
                    <p>{{v.title}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    var vm,el;
    import Top from '../Top/Top.vue'
    import gamelist from './js/josn'
    export default {
        data () {
            return {
                one:gamelist,
                data:'',
                text:'MG游戏',
                Fata:{
                    gameType:"MG",
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
@import './css/gamethree.less';
#MG_game{
    background:#e5e5e5;
    .top-img{
        width:100%;
        text-align: center;
        img{
            width:48%;
            margin-top: 0.1rem;
            height: 1rem;
        }
    }
    .Mg-p{
        background-image: linear-gradient(to bottom,#20df31,#2fb8da);
    }
    .Mg-List{
        p{
            background-image: linear-gradient(to bottom,#20df31,#2fb8da);
        }
    }
}


</style>