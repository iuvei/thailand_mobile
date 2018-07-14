<template>
    <div class='integral'>
        <Top :text="text"></Top>
        <div class="Return">
            <router-link to="/MemberCentre">
                <img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">
            </router-link>
        </div>
        <div class="integralbox">
            <div class="row title-main">
                <div class="lf main">
                    <span class="" style="color:orange">{{integral}}</span>积分
                </div>
                <div class="rf main">
                    <router-link style="text-decoration: underline;color:#219be4;" to="/integralRecording">
                        兑换记录
                    </router-link>
                </div>
            </div>
            <h2 class="title">
                奖品清单
            </h2>
            <div class="row integralList">
                <div class="col-6 main">
                    <div class="list-box">
                        <p class="Img">
                            <img   src="" alt="">
                        </p>
                        <h2 class="main-title"></h2>
                        <div class="sup-btn">
                            <div class="col-7 tad">
                               465456 积分
                            </div>
                            <div class="col-5 tad">
                                <span class="integral-btn" @click="submit($event)">兑换</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 main" v-for="v in objData" :data-id="v.id">
                    <div class="list-box">
                        <p class="Img">
                            <img   :src="v.icon" alt="">
                        </p>
                        <h2 class="main-title">{{v.pluname}}</h2>
                        <div class="sup-btn">
                            <div class="col-6 tad">
                                {{v.price}}积分
                            </div>
                            <div class="col-6 tad">
                                <span class="integral-btn" @click="submit($event)">兑换</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="confirm">
                <div class="confirmBox">
                    <h2 class="titletext">完善配送信息</h2>
                    <form action="">
                        <div class="item">
                            <label for="">添加数量:</label>
                            <div class="tad">
                                <span @click="jian">-</span>
                                <input v-model="obj.num" type="text">
                                <span @click="jia">+</span>
                            </div>
                        </div>
                        <div class="item">
                            <label for="">配送至:</label>
                            <select name="" @change='select' id="" ref="province" class="province">
                                <option  value="">选择-省-</option>
                                <option  v-for='(v,key) in $list' :value='key'>{{v.name}}</option>
                            </select>
                            <select name=""  @change='city' id="" class="city">
                                <option value="">选择-市-</option>
                                <option v-for='(index,key) in cities' :value='index.id'>{{index.name}}</option>
                            </select>
                        </div>
                        <div class="item">
                            <label for="">详细地址:</label>
                            <input type="text" placeholder="家庭详细地址">
                        </div>
                        <div class="item">
                            <label for="">
                                收货人姓名:
                            </label>
                            <input type="text" placeholder="姓名">
                        </div>
                        <div class="item">
                            <label for="">
                                手机号:
                            </label>
                            <input type="text" placeholder="手机号">
                        </div>
                        <div class="item">
                            <label for="">备注:</label>
                            <input type="text" placeholder="备注">
                        </div>
                        <div class="submitgral" @click="submitform()">提交</div>
                        <p class="sub-text">
                            信息提交后，<br> 我们将会第一时间联系您确认物品，<br>
                            请耐心等待。
                        </p>
                    </form>
                </div>
            </div>
            <div v-show="wrapperInt" class="wrapperInt">
                <div class="coum">
                    <p class="text">是否要兑换此奖品</p>
                    <div class="row">
                        <a class="lf tad" href="javascript:void (0)">确定</a>
                        <a @click="drop()" class="rf tad" href="javascript:void (0)">取消</a>
                    </div>
                </div>
            </div>
            <!--<div class="row" v-show="pages">-->
                <!--<pagination :change="pageCb" :page-size="7" :total="total"  layout="total,pager" size="small"></pagination>-->
            <!--</div>-->
        </div>
    </div>
</template>
<script>
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                text:'积分商城',
                integral:1000000,
                wrapperInt:false,
                objData:null,
                obj:{
                    id:'',
                    num:1,
                    deliverName:'',
                    deliverPhone:'',
                    deliverAddress:'',
                    deliverRmk:''
                },
                cities:null
            }
        },
        computed: {
            userNew:function () {//判断登录
                return this.$store.state.userNew;
            }
        },
        mounted: function () {
            let vm =this;
            vm.select()
        },
        methods: {
            city:function() {
                let vm = this, province,city;
                province=$(".province").find("option:selected").text();
                city=$(".city").find("option:selected").text();
                vm.obj.deliverAddress = province + ',' + city;
                console.log(vm.obj)
//                var province= $('.province').text();
//                var city =$('.city').text();
            },
            select: function(){
                let vm = this;
                if(vm.$refs.province.value ==""){
                    $('.city')[0].selectedIndex = 0;
                    $(".city").attr("disabled","disabled");
                }else if(vm.$refs.province.value !=""){
                    $('.city')[0].selectedIndex = 1;
                    $(".city").removeAttr("disabled");
                    var a = vm.$refs.province.value;
                    var list = vm.$list;
                    vm.cities = list[a].cities;
                }
            },
            submit:function (event) {
                let vm =this,el;
                el = event.currentTarget;
                if(parseFloat(el.parentElement.previousElementSibling.innerHTML) >  vm.integral){
                    vm.$store.dispatch("incrClosepoptext",'您的积分不足');
                    vm.$store.dispatch("incrClosepop",true);
                    return;
                }
                vm.obj.id = el.getAttribute('data-id');
                vm.wrapperInt = true;
            },
            submitform:function () {
                console.log(this.obj)
            },
            jia:function () {
              let vm =this;
                vm.obj.num++
            },
            jian:function () {
                let vm =this;
                if(vm.obj.num <= 1 ){
                    vm.obj.num =1
                }else{
                    vm.obj.num--
                }
            },
            drop:function () {
                let vm =this;
                vm.wrapperInt = false;
            },
            confirm:function () {
                vm.wrapperInt = false;
            }
        },
        created(){
            let vm =this;
            vm.$ajax({},vm.jrg+'integral/goodsList',function (obj) {
                vm.objData = obj.result
            })
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.confirm{
    position: fixed;
    left:0;
    top:0;
    right:0;
    bottom: 0;
    background: rgba(0,0,0,0.6);
    z-index: 130;
    .confirmBox{
        width: 90%;
        margin:2rem auto;
        height: 7.5rem;
        border-radius: 3px;
        background: #fff;
        .titletext{
            height: 0.8rem;
            line-height: 0.8rem;
            background: #219be4;
            color:#fff;
            font-size: 0.3rem;
        }
        form{
            width: 100%;
            .item{
                border-bottom: 1px solid #e5e5e5;
                height: 0.7rem;
                label{
                    float: left;
                    width: 30%;
                    padding-right: 0.1rem;
                    text-align: right;
                    font-size: 0.3rem;
                    line-height: 0.7rem;
                }
                input,select,.tad{
                    float: left;
                    margin-top: 0.15rem;
                    height: 0.4rem;
                    line-height: 0.4rem;
                    font-size: 0.25rem;
                    outline: none;
                }
                input,textarea,.tad{
                    width: 70%;
                }
                .tad{
                    span{
                        float: left;
                        height: 0.4rem;
                        width: 0.6rem;
                        text-align: center;
                        font-size: 0.35rem;
                        color:#fff;
                        line-height: 0.4rem;
                        background: #219be4;

                    }
                    span:nth-child(1){
                        border-bottom-left-radius: 3px;
                        border-top-left-radius: 3px;
                    }
                    span:nth-child(3){
                        border-bottom-right-radius: 3px;
                        border-top-right-radius: 3px;
                    }
                    input{
                        width: 1.5rem;
                        margin-top: 0;
                        border: 1px solid #219be4;
                        text-align: center;
                        height: 0.4rem;
                    }
                }
                select{
                    width: 30%;
                }
                input{

                }
            }
            .submitgral{
                width: 5rem;
                margin: 0.2rem auto;
                height: 0.6rem;
                border-radius: 3px;
                line-height: 0.6rem;
                font-size: 0.35rem;
                background: #219be4;
                color:#fff;
            }
            .sub-text{
                line-height: 0.35rem;
                font-size: 0.3rem;
                padding:0 0.2rem;
                text-align: left;
                color:#222;
            }
        }
    }
}
.wrapperInt{
    position: fixed;
    left:0;
    top:0;
    right: 0;
    bottom:0;
    background: rgba(0,0,0,0.5);
    z-index: 150;
    .coum{
        width: 5rem;
        margin: 50% auto;
        height: 3rem;
        padding-top: 0.3rem;
        border-radius: 3px;
        background: #fff;
        .text{
            height: 1.6rem;
            line-height: 1.6rem;
            font-size: 0.3rem;
            color:#219be4;
        }
        .tad{
            width: 2rem;
            border-radius: 3px;
            font-size: 0.3rem;
            height: 0.6rem;
            line-height: 0.6rem;
        }
        .tad:nth-child(1){
            margin-left: 0.2rem;
            background: #219be4;
            color:#fff;
        }
        .tad:nth-child(2){
            margin-right: 0.2rem;
            background: #e0e0e0;
        }
    }
}
.integral{
    font-size: 0;
    width: 100%;
    .integralbox{
        width: 100%;
        .title-main{
            height: 0.6rem;
            padding: 0 0.15rem;
            .main{
                line-height: 0.6rem;
                font-size: 0.3rem;
            }
        }
        .title{
            font-size: 0.35rem;
            font-weight: 900;
            height: 0.6rem;
            background: #fff;
            color:#b9dadc;
            line-height: 0.6rem;
        }
        .integralList{
            width: 100%;
            .main{
                padding: 0.2rem;
                .list-box{
                    width: 100%;
                    height: 3.3rem;
                    border-radius: 3px;
                    background: #fff;
                    -webkit-box-sizing: border-box;
                    -moz-box-sizing: border-box;
                    box-sizing: border-box;
                    box-shadow: 0px 0px 10px 1px #999;
                    .Img{
                        height: 2rem;
                        padding: 0.1rem;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .main-title{
                        height: 0.6rem;
                        line-height: 0.6rem;
                        font-size: 0.3rem;
                        text-align: left;
                        padding-left: 0.2rem;
                    }
                    .sup-btn{
                        padding:0 0.15rem;
                        height: 0.7rem;
                        .tad{
                            line-height: 0.7rem;
                            font-size: 0.23rem;
                        }
                        .tad:nth-child(1){
                            text-align: left;
                        }
                        .tad:nth-child(2){
                            text-align: right;
                        }
                        .integral-btn{
                            border-radius: 20px;
                            padding: 0.05rem 0.3rem;
                            background: #c1432f;
                            color:#fff;
                        }
                    }
                }
            }
        }
    }


}
</style>