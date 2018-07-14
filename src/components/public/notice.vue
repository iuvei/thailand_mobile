<template>
    <div class="notice row">
        <div class='notice-area'>
            <b class="Lft iconfont icon-laba"></b>
            <div class="notice-Box">
                <div class="Notice_Wrapper">
                    <a href="javascript:void (0);">
                        {{annouationNew.announcement}}
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    var vm,t;
    export default {
        data () {
            return {
                Ber:0
            }
        },
        computed: {
            annouationNew:function () {//判断登录
                return this.$store.state.annouationNew;
            }
        },
        mounted: function () {
            vm = this;
            clearInterval(t);
            t=setInterval(function(){
                vm.init();
            },80);
        },
        methods: {
            init:function () {
                var Num = $('.Notice_Wrapper a').width();
                this.Ber++;
                if(this.Ber >= Num){
                    this.Ber = 0 ;
                    $('.Notice_Wrapper').css('left',this.Ber);
                }else{
                    $('.Notice_Wrapper').css('left',-this.Ber+'px');
                }
            }
        },
        created(){
        },
        components: {}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    .notice, .notice .notice .notice-area, .notice-Box{
        width:100%;
    }
    .notice{
        margin-top: 0.1rem;
        font-size: 0;
    .notice-area,.notice-area .Lft,.notice-Box,.notice-Box p{
        height: 0.6rem;
    }
    .notice-area{
        position: relative;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        background: #fff;
        border-radius: 3px;
        border-bottom: 1px solid #ededed;
    .Lft{
        width:0.5rem;
        top:0;
        tex-align:center;
        position: absolute;
    }
    .Lft{
        left:0;
        line-height: 0.6rem;
        font-size: 0.5rem;
        color:#219be4;
    }
    .notice-Box{
        width:100%;
        overflow: hidden;
        height: 0.6rem;
        position: relative;
    .Notice_Wrapper {
        position: absolute;
        top:0;
        left:0;
        height: 0.6rem;
        line-height:0.6rem;
        text-align: left;
        transition: all 0.03s;
        min-width: 3500px;
        font-size: 0.25rem;
    a{
        display: inline-block;
        min-width: 6rem;
        word-wrap:break-word
    }
    }
    }
    }
    }
</style>