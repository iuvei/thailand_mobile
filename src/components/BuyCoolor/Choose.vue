<template>
    <div id="AllColor" class='Choose'>
        <Top :text="text"></Top>
        <div class="Return">
            <router-link to="/">
                <img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">
            </router-link>
        </div>
        <div class="AllWrapper" style="margin:  0;width:100%">
            <p  class="title row">
                <span class="tad">视讯彩频道</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox">
                <div v-for="v in Popular" class="col-4 BoxBlock" :data-title="v.title" @click="EnterGame($event)" :data-Id="v.id" >
                    <p class="sup"><img :src="v.img" alt=""></p>
                    <p class="sub">{{v.title}}</p>
                </div>
            </div>
            <p  class="title row">
                <span class="tad">国彩频道</span>
                <b class="solid"></b>
            </p>
            <div class="row AllBox">
                <div v-for="v in AlwaysColor" class="col-4 BoxBlock" :data-title="v.title" @click="EnterGame($event)"  :data-Id="v.id" >
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
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                text:'VR彩票',
                Popular:[
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/officail_vrjx2.png',title:'VR金星1.5分彩',id:'1'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/officail_sc2.png',title:'VR赛车',id:'2'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/officail_sfc2.png',title:'VR3分彩',id:'11'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/officail_vrhs2.png',title:'VR 火星5分彩 ',id:'12'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/officail_ft2.png',title:'VR快艇',id:'13'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/officail_vrbjl2.png',title:'VR百家乐',id:'15'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/officail_vrsix2.png',title:'VR六合彩',id:'16'}
                ],
                AlwaysColor:[
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/ssc.png',title:'重庆时时彩',id:'3'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/xjsc.png',title:'新疆时时彩',id:'4'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/tjsc.png',title:'天津时时彩',id:'5'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/gd115.png',title:'广东11选5',id:'6'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/jx115.png',title:'江西11选5',id:'7'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/bjc.png',title:'北京赛车',id:'8'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/ahk3.png',title:'江苏快三',id:'9'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/xyc.png',title:'幸运28',id:'10'},
                    {img:'http://mobile.beike188.com/modelTTC/images/Home/card.png',title:'香港六合彩',id:'14'}
                ],
                Fata:{
                    gameType:'VR',
                    gameID:'',
                    model:''
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
                vm.Fata.gameID= el.getAttribute('data-Id');
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
    /**/
    .Choose{
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
        background: darkslateblue;
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
        border-bottom: 1px solid darkslateblue;
    }
    }
        .AllBox{
            margin: 0.1rem auto;
            width:95%;
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