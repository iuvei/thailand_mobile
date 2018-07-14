<template>
    <div class='ScanCodebank'>
      <div class="Return">
        <router-link to="/ScanCode">
          <img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">
        </router-link>
      </div>
      <Top :text="text"></Top>
      <p class="Lcode-p" v-if="btn != true">暂无可选二维码，联系管理员配置
        <router-link class="Lcode-a" to="/NoteSingle">在线客服</router-link>
      </p>
      <div class="row" v-if="btn === true">
        <p class="Lcode-p" >只能扫描支付哦，如有疑问请联系
          <router-link class="Lcode-a" to="/NoteSingle">在线客服</router-link>
        </p>
        <div class="LcodeboxImg">
          <div v-if="btn === true" class="ImgCode">
            <img :src="UImg" alt="">
          </div>
        </div>
        <p class="Lcode-p">扫描二维码付款成功后，填写汇款信息！</p>
      </div>
      <div class="Lcodebox">
        <div  class="Lcodebox-pass">
        <label>存款金额</label>
        <input type="text" v-model="Fata.amount" v-numd  id="ip15" placeholder="请输入存款金额">
        </div>
        <p class="pass-text"style="margin-bottom: 0.1rem;padding-left: 0.1rem;line-height: 0.5rem">* 单笔限额{{min}}~{{man}}</p>

        <div class="Lcodebox-pass"style="margin-top: 0.1rem;">
        <label>订单号</label>
        <input id="ip16" v-model="Fata.orderNum" v-num maxlength="4" type="text" placeholder="请输入后4位订单号">
        </div>
        <p class="pass-text"style="margin-bottom: 0.1rem;padding-left: 0.1rem;line-height: 0.5rem">* 请填写您订单号的后四位</p>
      </div>
      <a v-show="btn" class="Lcodebox-a" @click="submit()">提交</a>
      <div class="Lscan-text">
        <h6>温馨提示：</h6>
        <!--<p>1.请使用您本人的支付宝账户进行存款</p>-->
        <p>1.申请的存款金额必须与实际存款金额一致</p>
        <p>2.成功存款后，可点击【历史记录】查看详情</p>
        <p>3.支付遇到困难？请联系客服人员获得帮助</p>
      </div>
      <div class="webApp" v-show="webApp">
        <div class="content">
          <h2 class="title">系统提示 <b class="cuo rf" @click="drot()">×</b></h2>
          <p class="main">提交成功！<br>
            如有疑问，请及时联系 <router-link to="/NoteSingle">
              在线客服
            </router-link>确认汇款信息，谢谢！
          </p>
          <div class="item">
            <router-link  @click="drot()" to="/NoteSingle">
              在线客服
            </router-link>
            <a href="javascript:void(0)" @click="drot()">知道了</a>
          </div>

        </div>
      </div>
    </div>
</template>
<script>
  var vm;
  import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                text:'确认支付',
                man:'-',
                min:'-',
                btn:true,
                Fata:{
                    id:'',
                    amount:'',
                    orderNum:'',
                    transfertime:'',
                    type:''
                },
                UImg:'',
                webApp:false
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            },
            Scan:function () {//模拟银行卡是否存在
                return this.$store.state.Scan;
            }
        },
        mounted: function () {
            vm = this;
            console.log(vm.Scan)
            vm.Fata.type =  vm.Scan;
            vm.$ajax({type:vm.Scan},vm.userNew.jrg+'alipayPaymentScanCode/getQRCode',function (data) {
                vm.$store.dispatch("incrwaitionValue",false);
                if(data.status === "success"){
                    if(data.msg != undefined){
                      $('#ip16').attr('disabled',true);
                      $('#ip15').attr('disabled',true);
                        vm.Fata.amount = '暂停使用';
                        vm.Fata.orderNum = '暂停使用';
                      return vm.btn = false;
                    }else{
                        vm.Fata.id = data.id;
                        vm.btn = true;
                        $('#ip16').attr('disabled',false);
                        $('#ip15').attr('disabled',false);
                        vm.Fata.amount = '';
                        vm.Fata.orderNum = '';
                        vm.man = data.maxquota;
                        vm.min = data.minquota;
                        vm.UImg =data.accountimg
                    }
                }else{
                    vm.$router.push({path:'/ScanCode'});
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'网络异常，请稍后重试'});
                }
            });
            vm.Fata.transfertime=vm.GetDateT();
        },
        methods: {
            drot:function () {
              this.webApp = false;
            },
            GetDateT:function () {
                var d,s;
                d = new Date();
                s = d.getFullYear() + "-";             //取年份
                s = s + (d.getMonth() + 1) + "-";//取月份
                s += d.getDate() + " ";         //取日期
                s += d.getHours() + ":";       //取小时
                s += d.getMinutes() + ":";    //取分
                s += d.getSeconds();         //取秒
                return(s);
            },
            submit:function () {
                if(vm.Fata.amount === ""){
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请输入存款金额'});
                    return;
                }
                if(vm.Fata.amount < vm.min || vm.Fata.amount > vm.man){
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'金额不能低于'+vm.min+'元 或 高于'+vm.man});
                    return;
                }
                if(vm.Fata.orderNum === "" || vm.Fata.orderNum.length != 4){
                    vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请输入后4位订单号'});
                    return;
                }
                vm.$store.dispatch("incrwaitionValue",true);
                vm.$ajax(vm.Fata,vm.userNew.jrg+'alipayPaymentScanCode/getOrder',function (data) {
                    vm.$store.dispatch("incrwaitionValue",false);
                    if(data.status === "success"){
                        vm.Fata.amount = '';
                        vm.Fata.orderNum = '';
                        vm.webApp = true;
                        return;
                    }else{
                        vm.$store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:data.msg});
                        return;
                    }
                });
            }
        },
        components: {
            Top
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.ScanCodebank{
  .webApp{
    position: fixed;
    top:0;
    left:0;
    bottom: 0;
    width: 100%;
    font-size: 0;
    min-height: 100%;
    z-index: 105;
    background: rgba(0,0,0,0.5);
    .content{
      margin: 50% auto;
      width: 90%;
      height: 3rem;
      border-radius: 3px;
      background: #fff;
      .title{
        height: 0.6rem;
        line-height: 0.6rem;
        font-weight: 900;
        margin: 0;
        border-bottom: 1px solid #e5e5e5;
        font-size: 0.3rem;
        text-align: left;
        padding-left: 0.25rem;
        .cuo{
          margin-right: 0rem;
          text-align: center;
          width: 0.8rem;
          font-size: 0.45rem;
          /*float: right;*/
        }
      }
      .main{
        padding-top: 0.3rem;
        padding-bottom: 0.1rem;
        line-height: 0.4rem;
        font-size: 0.25rem;
        a{
          color:blue;
        }
      }
      .item{
        border-top:1px solid #e5e5e5;
        height: 0.9rem;
        a{
          display: inline-block;
          width: 2rem;
          height: 0.6rem;
          line-height: 0.6rem;
          font-size: 0.3rem;
          border-radius: 3px;
          margin: 0.2rem 0.5rem;
          border-bottom: none;
          background:#219be4;
          color:#fff;

        }

      }
    }

  }
  .Lcode-p{
    font-size:0.28rem;
    text-align: left;
    padding-left: 0.2rem;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    border-bottom:1px solid #bfbfbf;
    .Lcode-a{
      color:#0000EE;
    }
  }
.box-p{
  width: 100%;
  height: 0.7rem;
  line-height: 0.7rem;
  padding-left: 0.2rem;
  font-size: 0.3rem;
  font-weight: 600;
  text-align: left;
  border-radius: 3px;
}
  .Lcodebox{
    margin: 0 auto;
    width: 100%;

    .Lcodebox-pass{
      position: relative;
        height: 0.8rem;
        background:#fff;
        border-radius: 3px;
        font-size: 0.3rem;
      label{
        position: absolute;
        left:0;
        top:0;
        height: 0.8rem;

        line-height: 0.8rem;
        text-align: center;
        width: 1.5rem;
        float: left;
      }
      input{
        width: 100%;
        padding-left: 1.6rem;
        height: 0.6rem;
        margin-top: 0.1rem;
        outline: none;
        font-size: 0.26rem;
      }
      input:disabled{
        background: #e5e5e5;
        color:#999;
      }
    }
    .pass-text{
      font-size: 0.26rem;
      text-align: left;
      color: #F57E21;
    }
  }
  .Lcodebox-a{
    display: block;
    margin: 5% auto;
    width: 95%;
    height: 0.7rem;
    line-height: 0.7rem;
    font-size: 0.4rem;
    border-radius: 3px;
    color:#fff;
    background:#219be4;
  }
  .Lscan-text{
    margin-top: 0.1rem;
    padding-left: 0.2rem;
    font-size: 0.28rem;
    text-align: left;
    color:#666666;
  h6{
    font-size: 0.3rem;
    font-weight: 600;
  }
  p{
    height: 0.5rem;
    line-height: 0.5rem;
  }
 }
}
.LcodeboxImg{
  height: 3.5rem;
  .ImgCode{
    width: 50%;
    height: 3.5rem;
    margin: 0 auto;
    img{
      width: 100%;
      vertical-align: top;
      height: 100%;
      background: #fff;
    }
  }
}

</style>
