﻿<template>
    <div class='NotFoundComponent'>
        <!--<Top :text="text"></Top>-->
        <div class='TopHeader'>
            {{text}}
            <!--传统彩票真人视讯，-->
        </div>
        <div class="Return">
            <router-link to="/">
                <img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">
            </router-link>
        </div>
        <div class="bg">
            <img src="http://mobile.beike188.com/modelTTC/images/public/34324.jpg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                text:'系统提示'
            }
        },
        components: {
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.NotFoundComponent{
    width:100%;
    font-size: 0.3rem;
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index: 2;
    background: #fff;
    .bg{
        width:100%;
        margin-top: 1rem;
    }
}
.TopHeader{
    width:100%;
    position: fixed;
    top:0;
    left:0;
    height: 0.8rem;
    text-align: center;
    font-size: 0.35rem;
    font-weight: 100;
    color:#fff;
    z-index: 100;
    line-height: 0.8rem;
    background: #219be4;
}
</style>