<template>
    <div class='modifyloginpass'>
        <Top :text="text"></Top>
        <div class="Return">
            <router-link to="/MemberCentre">
                <img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">
            </router-link>
        </div>
        <div class="row modifypassbox">
            <form action="">
                <div class="ipt">
                    <label for="login_pass">旧密码</label>
                    <input  v-model="mflgpas.password" id="login_pass" maxlength="12" minlength="6" type="password" placeholder="请输入旧密码">
                </div>
                <div class="ipt">
                    <label for="login_new_pass">新密码</label>
                    <input v-model="mflgpas.npassword" id="login_new_pass" minlength="6" maxlength="12" type="password" placeholder="请输入新密码">
                </div>
                <div class="ipt">
                    <label for="">确认密码</label>
                    <input v-model="mflgpas.renpassword" minlength="6" maxlength="12" type="password" placeholder="确认密码">
                </div>
                <p class="text"><!-- react-text: 2717 -->密码须为<!-- /react-text --><span class="Orgrise">6～12位英文或数字</span><!-- react-text: 2719 -->且符合a~z字元或0~9<!-- /react-text --></p>
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
                text:"修改登录密码",
                mflgpas:{
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
        mounted() {
        },
        methods:{
          submit:function () {
              vm=this;
              vm.$BugNewmodifylogin(vm,vm.mflgpas)
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
.modifyloginpass{
    width:100%;
    font-size: 0;
}

</style>