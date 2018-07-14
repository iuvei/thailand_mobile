<template>
    <div class='poppublic'>
        <div class="poppublicbox">
            <h2>{{gamepop.gametitle}}<i @click="gamestop()">关闭</i></h2>
            <div class="item">
                账户名称：<span>{{userNew.userName}}</span>

            </div>
            <div class="item">
                游戏余额： <span>{{userNew.gameMoney}}</span>
            </div>
            <div class="item">
                中心钱包： <span>{{userNew.userMoney}}</span>
            </div>
            <div class="main">
                <router-link to="/interchange">
                    转入
                </router-link>
                <router-link to="/interchange">
                    转出
                </router-link>
            </div>
            <div class="main">
                <div @click="Game()" class="gamebtn">开始游戏</div>
            </div>
        </div>
    </div>
</template>

<script>
    var vm;
    export default {
        data () {
            return {
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
            gamepop:function () {//游戏组件
                return this.$store.state.gamepop;
            }
        },
        mounted() {
            vm=this;
            setInterval(function () {
                if(vm.gamepop.judgment === true){
                    vm.$store.dispatch("incrgamepop",{id:0,judgment:false});
                }
            },60000)
        },
        methods:{
            Game:function () {
                vm = this;
                if(vm.gamepop.src != "" || vm.gamepop.src  != undefined || vm.gamepop.src != null){
                    window.location.href = vm.gamepop.src;
                }
            },
            gamestop:function () {
                vm=this;
                vm.$store.dispatch("incrgamepop",{id:0,judgment:false});
            }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.poppublic{
    position: fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    overflow: auto;
    font-size: 0;
    background: rgba(0,0,0,0.8);
    z-index: 122;
    .poppublicbox{
        width:95%;
        margin:40% auto;
        height:4.5rem;
        background: #fff;
        border-radius: 5px;
        h2{
            font-size: 0.35rem;
            height: 0.8rem;
            position: relative;
            line-height: 0.8rem;border-bottom: 1px solid #e6e6e6;
            i{
                position: absolute;
                right: 0.1rem;
                top:0.1rem;
                width:1rem;
                height: 0.5rem;
                line-height: 0.5rem;
                font-style: normal;
                font-size: 0.25rem;
                background: #666;
                border-radius: 3px;
                color:#fff;
            }
        }
        .item{
            height: 0.6rem;
            width:90%;
            border-bottom: 1px solid #e6e6e6;
            margin: 0 auto;
            line-height: 0.6rem;
            font-size: 0.3rem;
            text-align: left;
            padding:0 0.2rem;
            span{
                float: right;
                font-size: 0.25rem;
            }

        }
        .main{
            width:100%;
            height:0.8rem;
            a:nth-child(1){
                margin-left: 5%;
            }
            a{
                width:35%;
                height: 0.6rem;
                float: left;
                margin: 0.1rem 0;
                font-size: 0.3rem;
                line-height: 0.6rem;
                background:#facb25;
                color: #fff;
                border-radius: 5px;
            }
            a:nth-child(2){
                margin-left: 20%;
                background: #ea4c32;
            }
            .gamebtn{
                width:90%;
                margin: 0.1rem auto;
                height: 0.8rem;
                background: #219be4;
                font-size: 0.3rem;
                line-height: 0.8rem;
                color:#fff;
                border-radius: 3px;
            }
        }

    }
}
</style>