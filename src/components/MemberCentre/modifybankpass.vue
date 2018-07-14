<template>
    <div class='modifybankpass'>
        <Top :text="text"></Top>
        <div class="Return">
            <router-link to="/MemberCentre">
                <img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">
            </router-link>
        </div>
        <div class="row modifypassbox">
            <form action="">
                <div class="ipt">
                    <label for="pass">旧密码</label>
                    <input id="pass" v-num minlength="4" maxlength="6" v-model="bankpass.password" type="password" placeholder="请输入资金密码">
                </div>
                <div class="ipt">
                    <label for="npass">新密码</label>
                    <input id="npass" v-num v-model="bankpass.npassword" minlength="4" maxlength="4" type="password" placeholder="请输入4位数字的资金密码">
                </div>
                <div class="ipt">
                    <label for="rpass">确认密码</label>
                    <input id="rpass" v-num maxlength="4" minlength="4" v-model="bankpass.renpassword" type="password" placeholder="确认密码">
                </div>
                <p class="text"><!-- react-text: 2717 -->资金密码须为<!-- /react-text --><span class="Orgrise">4位数字</span><!-- react-text: 2719 -->且符合0~9字元<!-- /react-text --></p>
                <div class="ModifyBtn" @click="submit()">确 认</div>
            </form>
        </div>
    </div>
</template>

<script>
    var vm;
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                text:"修改资金密码",
                bankpass:{
                    password:'',
                    npassword:'',
                    renpassword:''
                }
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        methods: {
            submit: function () {
                vm = this;
                vm.$BugNewchangeQkpwd(vm,vm.bankpass)
            }
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import "css/modifypass.less";
.modifybankpass{
    width:100%;
    font-size: 0;
}
</style>