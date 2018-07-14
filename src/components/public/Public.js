/**
 * Created by Administrator on 2017/6/8. Bug
 */
import store from '@/router/store'
export default{
    install(Vue,options){
        // 新
        Vue.prototype.$ajax=function (objs,src,callback) {
            $.ajax({
                type:"post",
                data:objs,
                timeout : 10000,
                url:src,
                async:true,
                cache:false,
                success:function (data) {
                    callback(data);
                },
                error:function (xhr,textStatus) {
                    var id;
                    if(textStatus=='timeout'){
                        store.dispatch("incrwaitionValue",false);
                        id = 1
                    }else{
                        store.dispatch("incrwaitionValue",false);
                        id = 0
                    }
                    callback(id)
                }
            })
        };
        //游戏
        Vue.prototype.$BugPlaygame = function (vm,data,src) {
            var t = this;
            t.$ajax.call(this ,{},store.state.userNew.jrg+'checklogin.do',function (ObjMsg) {
                if(ObjMsg === 0){
                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'登录失败'});
                    return;
                }else if(ObjMsg === 1){
                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'登录失败'});
                    return;
                }else if(ObjMsg.msg == "faild"){
                    return  vm.$router.push({path:'/login'});
                }else if(ObjMsg.msg == "islogin"){
                     return  vm.$router.push({path:'/login'});
                }else if(ObjMsg.msg == "success"){
                    if(data.gameType === 'GAMEMG'  || data.gameType === 'GAMEHABA'){
                        return vm.$router.push({path:'/'+data.gameType});
                    }else if(data.gameType === 'PT'){
                        vm.$store.dispatch("incrwaitionValue",true);
                        if(store.state.userNew.userMoney === ""){
                            store.dispatch("incrajax",{id:0});
                        }
                        t.$ajax.call(this,{gameType:"PT", model:'mobile', gameID:'hb'},src,function (Obj) {
                            vm.$store.dispatch("incrwaitionValue",false);
                            if(Obj === 0){
                            }else if(Obj === 1){
                                store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'响应超时'});
                                vm.$store.dispatch("incrgamepop",{id:0,judgment:false});
                                return;
                            }else if(Obj.msg == "error"){
                                store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'系统错误'});
                                vm.$store.dispatch("incrgamepop",{id:0,judgment:false});
                            }else if(Obj.msg =='process'){
                                store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'维护中'});
                                vm.$store.dispatch("incrgamepop",{id:0,judgment:false});
                            }else{
                                vm.$store.dispatch("incrgamepop",{id:0,judgment:true});
                                store.dispatch("incrajax",{id:10,data:{BType:"PT"}});
                                vm.$store.dispatch("incrgamepop",{id:2,src:Obj.msg});
                            }
                        });
                    }else{
                        let type = "";
                        vm.$store.dispatch("incrwaitionValue",true);
                        if(store.state.userNew.userMoney === ""){
                            store.dispatch("incrajax",{id:0});
                        }
                        if(data.gameType === "IGLOTTERY" || data.gameType === "IGLOTTO"){
                            type = 'IG';
                        }else if(data.gameType === "IGPJLOTTERY" || data.gameType === "IGPJLOTTO"){
                            type = 'IGPJ';
                        }else{
                            type = data.gameType;
                        }
                        t.$ajax.call(this,data,src,function (Obj) {
                            vm.$store.dispatch("incrwaitionValue",false);
                            if(Obj === 0){
                            }else if(Obj === 1){
                                store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'响应超时'});
                                vm.$store.dispatch("incrgamepop",{id:0,judgment:false});
                                return;
                            }else if(Obj.msg == "error"){
                                store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'系统错误'});
                                vm.$store.dispatch("incrgamepop",{id:0,judgment:false});
                            }else if(Obj.msg =='process'){
                                store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'维护中'});
                                vm.$store.dispatch("incrgamepop",{id:0,judgment:false});
                            }else{
                                store.dispatch("incrajax",{id:10,data:{BType:type}});
                                vm.$store.dispatch("incrgamepop",{id:0,judgment:true});
                                vm.$store.dispatch("incrgamepop",{id:2,src:Obj.msg});
                            }
                        });
                    }
                }
            })
        }
        // 登录
        Vue.prototype.$BugLogin = function (vm,data) {
            var  t = this;
            t.$loginaction.call(this, data, function (err) {
                if(err) {
                    vm.LoginImg();
                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:err});
                    return;
                }
                store.dispatch("incrwaitionValue",true);
                data.tname = store.state.userNew.cagent + data.tname;
                t.$ajax.call(this, data,store.state.userNew.jrg+'login.do', function (Obj) {
                    store.dispatch("incrwaitionValue",false);
                    if(Obj === 0){
                        store.dispatch("inceuserNew",{id:0,Login:false});
                        store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'登录失败'});
                        return;
                    }else if(Obj === 1){
                        store.dispatch("inceuserNew",{id:0,Login:false});
                        store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'登录失败'});
                        return;
                    }else if(Obj.status === "faild"){
                        store.dispatch("inceuserNew",{id:0,Login:false});
                        store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:Obj.errmsg});
                        vm.LoginImg();
                        return;
                    }else if(Obj.status === 'ok'){
                        store.dispatch("decrement",true);
                        store.dispatch("inceuserNew",{id:2,Login:true,userName:Obj.userName.substring(3),userkey:Obj.userKey,balance:Obj.balance});
                        return vm.$router.push({path:'/'});
                    }
                })
            })
        }
        // 注册
        Vue.prototype.$BugRegister = function (vm,data) {
            var t = this;
            t.$registeredaction.call(this,data,function (err) {
                if(err) {
                    vm.LoginImg();
                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:err});
                    return;
                }
                store.dispatch("incrwaitionValue",true);
                data.proxyname=store.state.userNew.proxyname;
                data.cagent=store.state.userNew.cagent;
                data.reqkpwd=data.qkpwd;
                t.$ajax.call(this , {}, store.state.userNew.jrg+'User/getToken',function (Objmsg) {
                    data.reguuid = Objmsg.msg;
                    t.$ajax.call(this,data,store.state.userNew.jrg+'User/register',function (Obj) {
                        if(Obj === 0){
                            store.dispatch("inceuserNew",{id:0,Login:false});
                            store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'登录失败'});
                            return;
                        }else if(Obj === 1){
                            store.dispatch("inceuserNew",{id:0,Login:false});
                            store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'登录失败'});
                            return;
                        }else{
                            var msg=Obj.msg;
                            store.dispatch("incrwaitionValue",false);
                            switch (msg) {
                                case '001':
                                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'用户名为空'});
                                    vm.LoginImg();
                                    break;
                                case '002':
                                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'用户名格式不正确'});
                                    vm.LoginImg();
                                    break;
                                case '003':
                                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'手机号为空'});
                                    vm.LoginImg()
                                    break;
                                case '004':
                                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'手机号不正确'});
                                    vm.LoginImg()
                                    break;
                                case '005':
                                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'密码为空'});
                                    vm.LoginImg()
                                    break;
                                case '006':
                                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'确认密码为空'});
                                    vm.LoginImg()
                                    break;
                                case '007':
                                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'两次密码不一致'});
                                    vm.LoginImg()
                                    break;
                                case '008':
                                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'密码格式不正确'});
                                    vm.LoginImg()
                                    break;
                                case '009':
                                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'账号已存在'});
                                    vm.LoginImg()
                                    break;
                                case '010':
                                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'reguuid为空,如有疑问联系在线客服'});
                                    vm.LoginImg()
                                    break;
                                case '011':
                                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext: '图片验证码为空'});
                                    vm.LoginImg()
                                    break;
                                case '012':
                                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext: '图片验证码错误'});
                                    vm.LoginImg()
                                    break;
                                case '013':
                                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'取款密码为空'});
                                    vm.LoginImg()
                                    break;
                                case '014':
                                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'确认取款密码为空'});
                                    vm.LoginImg()
                                    break;
                                case '015':
                                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'两次取款密码不一致'});
                                    vm.LoginImg()
                                    break;
                                case '016':
                                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'取款密码格式不正确'});
                                    vm.LoginImg()
                                    break;
                                case '017':
                                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'取款密码不能与登录密码相同'});
                                    vm.LoginImg()
                                    break;
                                case 'success':
                                    store.dispatch("inceuserNew",{id:2,Login:true,userName:Obj.userName.substring(3),userkey:Obj.userKey,balance:Obj.balance});
                                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'注册成功,已登录'});
                                    vm.$router.push({path:'/'});
                                    break;
                                case 'error':
                                    store.dispatch("inceCloseNew",{id:1,Closepop:true,Closepoptext:'网络异常'});
                                    vm.LoginImg()
                                    break;
                            }
                        }
                    })
                })
            })
        }
        //退出 ok
        Vue.prototype.$BugNewdropOut=function (vm,data,src) {
            var t = this;
            store.dispatch("incrwaitionValue",true);
            t.$ajax.call(this, data, src, function (obj) {
                store.dispatch("incrwaitionValue",false);
                if(obj === 0){
                }else if(obj === 1){
                    store.dispatch("inceuserNew",{id:2,Login:false,userName:"",userkey:"",balance:""});
                }else{
                    store.dispatch("inceuserNew",{id:2,Login:false,userName:"",userkey:"",balance:""});
                    vm.$router.push({path:'/LogIn'});
                }
            })
        }
    }
}