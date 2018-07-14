/**
 * Created by Administrator on 2017/6/16. Bug
 */
import store from '@/router/store'
export default{
    install(Vue,options){
        Vue.prototype.$BugNewPaymentList = function (vm,data) {//新添加
            var t = this;
            store.dispatch("incrwaitionValue",true);
            store.dispatch("inceuserNew",{id:7,judgment:false,err:"",PaymentList:""});
            t.$ajax.call(this,data,store.state.userNew.jrg+'PlatformPay/getPaymentList',function (obj) {
                store.dispatch("incrwaitionValue",false);
                if(obj === 0){
                }else if(obj === 1){
                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请求超时，请稍后再试...'});
                    return;
                }else if(obj.status === 'error'){
                    store.dispatch("inceuserNew",{id:7,judgment:false,err:obj.msg,PaymentList:''});
                    return vm.$router.push({path:store.state.bankcard.src});
                }else {
                    store.dispatch("inceuserNew",{id:7,judgment:true,err:obj.msg,PaymentList:obj.typeList});
                    return vm.$router.push({path:store.state.bankcard.src});
                }
            })
        }
        Vue.prototype.$BugNewWithDraw=function(vm,data){
            var t = this;
            store.dispatch("incrwaitionValue",true);
            t.$ajax.call(this,data,store.state.userNew.jrg+'User/WithDraw',function (obj) {
                store.dispatch("incrwaitionValue",false);
                if(obj === 0){
                }else if(obj === 1){
                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请求超时，请稍后再试...'});
                    return;
                }else if(obj.msg == "success"){
                    store.dispatch("incrajax",{id:0});
                    vm.tk.credit='';
                    vm.tk.password='';
                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'申请成功'});
                }else{
                    vm.tk.credit='';
                    vm.tk.password='';
                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:obj.msg});
                }
            })
        }
        /**
         * 添加银行卡 User/addUserCard ok
         */
        Vue.prototype.$BugNewAddCard=function (vm,data) {
            var t = this;
            store.dispatch("incrwaitionValue",true);
            t.$ajax.call(this,data,store.state.userNew.jrg+'User/addUserCard',function (obj) {
                store.dispatch("incrwaitionValue",false);
                if(obj === 0){
                }else if(obj === 1){
                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请求超时，请稍后再试...'});
                    return;
                }else if(obj.msg == 'success'){
                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'添加成功'});
                    vm.$router.push({path:'/userBankCard'});
                }else{
                    vm.addtext.password='';
                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:obj.msg});
                }
            })
        }
        /**
         * 删除银行卡  User/delUserCard ok
         */
        Vue.prototype.$BugNewdeletebank=function(vm,data) {
            var t = this;
            store.dispatch("incrwaitionValue",true);
            t.$ajax.call(this,data,store.state.userNew.jrg+'User/delUserCard',function (obj) {
                store.dispatch("incrwaitionValue",false);
                if(obj === 0){
                }else if(obj === 1){
                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请求超时，请稍后再试...'});
                    return;
                }else if(obj.msg == "success"){
                    store.dispatch("inceuserNew",{id:9,cardNum:""});
                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'删除成功'});
                    vm.ctpop=false;
                    vm.userId.password="";
                   return vm.$router.push({path:'/userBankCard'});
                }else{
                    vm.userId.password="";
                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:obj.msg});
                }
            })
        }
        /**
         * 'User/getBalance'
         */
        Vue.prototype.$BugNewRefresh= function(vm,data,el){
            var t = this;
            store.dispatch("incrwaitionValue",true);
            t.$ajax.call(this, data,store.state.userNew.jrg+'User/getBalance', function (obj) {
                store.dispatch("incrwaitionValue",false);
                if(obj === 0){
                }else if(obj === 1){
                }else if(obj.balance == '维护中'){
                    el.innerHTML= '维护中'
                }else{
                    el.innerHTML=parseFloat(obj.balance).toFixed(2)
                }
            })
        }
        /**
         * 平台之间转账 User/TransferTo - User/TransferFrom ok
         */
        Vue.prototype.$BugNewtransfer=function (vm,data,src) {
            var t = this,s ="";
            store.dispatch("incrwaitionValue",true);
            if(src === "User/TransferTo"){
                s = "User/TransferTo"
            }else{
                s = "User/TransferFrom"
            }
            t.$ajax.call(this,data,store.state.userNew.jrg+s,function (obj) {
                store.dispatch("incrwaitionValue",false);
                if(obj === 0){
                }else if(obj === 1){
                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请求超时，请稍后再试...'});
                    return;
                }else{
                    var  Num = obj.msg;
                    switch (Num) {
                        case '01':
                            store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'转账平台错误'});
                            vm.LoginImg();
                            break;
                        case '02':
                            store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'转账金额错误'});
                            vm.LoginImg();
                            break;
                        case '03':
                            store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'token验证失败,如有疑问，请咨询客服'});
                            vm.LoginImg();
                            break;
                        case "04":
                            store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'图形验证码错误'});
                            vm.LoginImg();
                            break;
                        case "05":
                            store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'转账未完成,请稍后再试'});
                            vm.LoginImg();
                            break;
                        case "06":
                            store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'余额不足'});
                            vm.LoginImg();
                            break;
                        case "07":
                            store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'钱包查询出错'});
                            vm.LoginImg();
                            break;
                        case "error":
                            store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'系统错误,请稍后再试'});
                            vm.LoginImg();
                            break;
                        case "success":
                            store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'转账成功'});
                            store.dispatch("incrajax",{id:0});
                            vm.tran={credit:'', type:'', imgcode:'', uuid:''};
                            vm.TypeInquireAll();
                            vm.LoginImg();
                            break;
                        case "process":
                            store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'维护中'});
                            vm.LoginImg();
                            break;
                    }
                }
            })
        }
        /**
         * 在线支付 bk/BankPay.do ok
         */
        Vue.prototype.$BugNewBankPay=function (vm,data) {
            var t = this;
            t.$BankPayAtion(data,function (err) {
                if(err){
                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:err});
                    return;
                }
                store.dispatch("incrwaitionValue",true);
                t.$ajax.call(this,data,store.state.userNew.jrg+'bk/BankPay.do',function (obj) {
                    store.dispatch("incrwaitionValue",false);
                    if(obj === 0){
                    }else if(obj === 1){
                        store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请求超时，请稍后再试...'});
                        return;
                    }else if(obj.status == 'success'){
                        data.name= "";
                        data.amount = "";
                        data.account = "";
                        data.ctime= vm.GetDateT();
                        vm.webApp = true;
                    }else if(obj.status == 'faild'){
                        store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'失败,如有疑问，请联系在线客服'});
                    }else{
                        store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:obj.Msg});
                    }
                })
            })
        }
        /**
         * 修改登录密码  User/changePassword ok
         */
        Vue.prototype.$BugNewmodifylogin=function (vm,data) {
            var t = this;
            t.$changePassword(data,function (err) {
                if(err){
                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:err});
                    return
                }
                store.dispatch("incrwaitionValue",true);
                t.$ajax.call(this,data,store.state.userNew.jrg+"User/changePassword",function (obj) {
                    store.dispatch("incrwaitionValue",false);
                    if(obj === 0){
                    }else if(obj === 1){
                        store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请求超时，请稍后再试...'});
                    }else  if(obj.msg == "success"){
                        vm.mflgpas={password:'', npassword:'', renpassword:''};
                        store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'修改成功'});
                    }else{
                        store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:obj.msg});
                    }
                })
            })
        }
        /**
         * 修改取款密码 User/changeQkpwd ok
         */
        Vue.prototype.$BugNewchangeQkpwd = function(vm,data){//修改取款密码
            var t = this;
            t.$changeQkpwd(data,function (err) {
                if(err){
                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:err});
                    return
                }
                store.dispatch("incrwaitionValue",true);
                t.$ajax.call(this,data,store.state.userNew.jrg+"User/changeQkpwd",function (obj) {
                    store.dispatch("incrwaitionValue",false);
                    if(obj === 0){
                    }else if(obj === 1){
                        store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'请求超时，请稍后再试...'});
                    }else  if(obj.msg == "success"){
                        vm.bankpass={password:'', npassword:'', renpassword:''};
                        store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'修改成功'});
                    }else{
                        vm.bankpass={password:'', npassword:'', renpassword:''};
                        store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:obj.msg});
                    }
                })
            })
        }
        //支付宝  Ys/aliPay.do 未完成  失败
        Vue.prototype.$aliPay = function (Fata,url,vm) {
            $.ajax({
                type:"post",
                data:Fata,
                timeout : 10000,
                url:url,
                async:true,
                cache:false,
                success:function (data) {
                    vm.$store.dispatch("incrwaitionValue",false);
                    vm.$store.dispatch("incrpaydata",'');
                    if(data.status== 'success'){
                        vm.$store.dispatch("incealipayscanpaynum",0);
                        vm.$store.dispatch("incealipayscanpay",null);
                        if(data.res_type == '1'){
                            vm.$store.dispatch("incealipayscanpaynum",1);
                            if(data.html != undefined || data.html != ""){
                                data.html = data.html.replace(/<body/gi, '<div')
                                data.html = data.html.replace(/body>/gi, 'div>')
                                vm.$store.dispatch("incealipayscanpay",data.html);
                            }
                            vm.$router.push({path:'/AlipayscanPay'})
                            return
                        }
                        if(data.res_type == '2'){
                            vm.$store.dispatch("incealipayscanpaynum",2);
                            data.user_name = data.user_name.substring(3);
                            vm.$store.dispatch("incealipayscanpay",data);
                            vm.$router.push({path:'/AlipayscanPay'})
                            return
                        }
                        if(data.res_type == '3'){
                            vm.$store.dispatch("incealipayscanpaynum",3);
                            data.user_name = data.user_name.substring(3);
                            vm.$store.dispatch("incealipayscanpay",data);
                            vm.$router.push({path:'/AlipayscanPay'})
                            return
                        }else if(data.res_type == '4'){
                            window.location.href=data.html;
                            return;
                        }
                    }else{
                        store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:data.msg});
                    }
                },
                error:function (xhr,textStatus) {
                    vm.$store.dispatch("incrwaitionValue",false);
                    if(textStatus=='timeout'){
                        store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'响应超时'});
                    }else{
                        store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'网络异常'});

                    }
                }
            })
        }
    }
}