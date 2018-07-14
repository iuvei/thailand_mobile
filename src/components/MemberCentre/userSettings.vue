<template>
    <div class='userSettings'>
        <!--<div class="Return">-->
            <!--<router-link to="/MemberCentre">-->
                <!--<img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">-->
            <!--</router-link>-->
        <!--</div>-->
        <div class="userSettingsBox">
            <p class="title">账户安全设置</p>
            <div class="SettingsBox row">
                <router-link to="/modifyloginpass">
                   登录密码
                </router-link>
                <router-link to="/modifybankpass">
                   取款密码
                </router-link>
            </div>
        </div>
        <router-view></router-view>
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
        },
        methods:{
        },
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.userSettings{
    width:100%;
    font-size: 0;
    .userSettingsBox{
        .title{
            font-size: 0.2rem;
            height: 0.5rem;
            text-align: left;
            padding-left:0.2rem;
            color:#999;
            margin: 0;
            line-height: 0.5rem;
        }
        .SettingsBox{
            font-size:0;
            a{
                float: left;
                width: 50%;
                height:0.8rem;
                line-height: 0.8rem;
                padding-left: 0.2rem;
                color:#000;
                background: #fff;
                text-align: center;
                margin-bottom: 0.2rem;
                font-size: 0.28rem;
                position: relative;
            }
            .router-link-active{
                color:#219be4;
                border-bottom: 1px solid #219be4;
            }
        }
        .drop{
            height: 0.8rem;
            width:90%;
            line-height: 0.8rem;
            font-size: 0.35rem;
            border-radius: 3px;
            color:#fff;
            margin: 0.5rem auto;
        }
    }
}
</style>