<template>
    <div class='NoteSingle'>
        <Top :text="text"></Top>
        <div class="wrapper">
            <div class="wrapper-box">
                <h2>联系方式</h2>
                <p>
                    <span class="icon-kefu iconfont"></span>
                    <a  style="color:#2e3e4e;display: block;height: 0.8rem;" href="https://chat.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=725083&configID=47416&jid=7232909603&s=1">
                        <img src="http://mobile.beike188.com/modelTTC/images/zx.gif" alt="" style="height: 0.8rem;top:0;left: 0">
                    </a>
                </p>
                <p v-if="userNew.applet != true" class="">
                    <span class="iconfont icon-qq-copy"></span>
                    <a style="display:block;" href="javascript:void(0)">30080114</a>
                </p>
                <p v-if="userNew.applet === true" class="">
                    <span class="iconfont icon-qq-copy"></span>
                    <a style="display:block;" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=30080114&site=qq&menu=yes"><img  border="0" src="http://wpa.qq.com/pa?p=2:30080114:41" alt="点击这里给我发消息" title="点击这里给我发消息"/>30080114</a>
                </p>
                <p><span class="iconfont icon-youxiang"></span>tiantiancaipiao@gamil.com</p>
                <router-link class="returnhome" to="/">
                    返回首页
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                text:'在线服务'
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        mounted:function(){
            console.log(this.userNew)
        },
        methods:{
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.NoteSingle,{
    width:100%;
}
.NoteSingle{
    .wrapper{
        position: fixed;
        left:0;
        top:0;
        right:0;
        bottom:0;
        background: rgba(0,0,0,0.56);
        z-index: 300;
        .wrapper-box{
            width:80%;
            margin: 40% auto;
            height: 4.2rem;
            background: #fff;
            border-radius: 5px;
            h2{
                font-size: 0.3rem;
                height: 0.8rem;
                line-height: 0.8rem;
                border-bottom: 1px solid #e5e5e5;
            }
            p{
                position: relative;
                width:64%;
                margin: 0 auto;
                text-align: left;
                height: 0.8rem;
                line-height: 0.8rem;
                padding-left: 1rem;
                font-size: 0.25rem;
                span{
                    position: absolute;
                    left:0.2rem;
                    top:0;
                    width:0.5rem;
                    height: 0.5rem;
                    font-size: 0.4rem;
                    text-align: center;
                }
                a{
                    position: relative;
                    display: block;
                    img{
                        position: absolute;
                        top:0.12rem;
                        width: 1.6rem;
                        height: 0.5rem;
                        left: 1.3rem;
                    }
                }
            }
            p:nth-child(2){
                span{
                    color:red;
                }
            }
            p:nth-child(3){
                span{
                    color:#219be4;
                }
            }
            p:nth-child(4){
                span{
                    color:blue;
                }
            }
            .kefulianjie a:nth-child(3){
                position: relative;
                top:8px;
            }
            .returnhome{
                display:block;
                font-size: 0.3rem;
                color:#fff;
                height: 0.6rem;
                line-height: 0.6rem;
                border-radius: 3px;
                width:50%;
                margin: 0.1rem auto;
                background:#219be4;
            }
        }
    }
}
</style>