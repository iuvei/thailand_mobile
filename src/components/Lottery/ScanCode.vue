<template>
    <div class='ScanCode'>
        <div class="Return">
            <router-link to="/deposit">
                <img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">
            </router-link>
        </div>
        <Top :text="text"></Top>
      <div class="Lscanbox row">
          <div class="row" data-Type="3" @click="Page($event)">
              <a href="javascript:void(0)" class="Lscan-a row">
                  <div class="lf">
                      <i class="x-icon x-icon-tenpay"></i>
                  </div>
                  <p class="rf">财付通</p>
              </a>
          </div>
          <div class="row" data-Type="1" @click="Page($event)">
              <a href="javascript:void(0)" class="Lscan-a row" >
                  <div class="lf">
                      <i class="x-icon x-icon-Alipay"></i>
                  </div>
                  <p class="rf">支付宝</p>
              </a>
          </div>
            <div class="row" data-Type="2" @click="Page($event)">
                <a href="javascript:void(0)" class="Lscan-a row" >
                    <div class="lf">
                        <i class="x-icon x-icon-wechat"></i>
                    </div>
                    <p class="rf">微信支付</p>
                </a>
            </div>
      </div>
    </div>
</template>

<script>
    var el,vm;
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                text:'扫码支付',
                Type:null
            }
        },
        computed: {
        },
        mounted: function () {
        },
        methods: {
            Page:function (event) {
                vm = this;
                el = event.currentTarget;
                vm.Type = el.getAttribute('data-Type');
                vm.$store.dispatch("incrscan",vm.Type);
                vm.$router.push({path:'/ScanCodebank'});
            }
        },
        created(){
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.ScanCode{
  .Lscanbox{
    margin: 5% auto;
    width: 96%;
    border-radius: 3px;
    .Lscan-a{
      display: block;
      margin-top: 0.3rem;
      font-size: 0.35rem;
      color: #1f1919;
      background: #fff;
        border-radius: 3px;
        border:1px solid #bfbfbf;
        i{
            margin-top: 0.2rem;
            margin-left: 0.1rem;
        }
      p{
        display: block;
        height: 1.2rem;
        line-height: 1.2rem;
        padding-right: 0.2rem;
        color: #FA7C15;
        font-weight: 600;
        text-align: right;
      }
    }
  }

}
</style>
