<template>
    <div class="pop-wrapper">
        <div class="wrapper_main">
            <h3>系统提示</h3>
            <div class="text">{{CloseNew.Closepoptext}}</div>
            <div @click='Close' class="Close_button Org">确定</div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        },
        computed: {
            CloseNew() {
                return this.$store.state.CloseNew;
            }
        },
        methods: {
            Close:function(){
                this.$store.dispatch("inceCloseNew",{id:0,Closepop:false});
            }
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    .pop-wrapper{
        position: fixed;
        left:0;
        top:0;
        right: 0;
        bottom: 0;
        z-index: 105;
        background: rgba(0,0,0,0.6);
    h3{
        font-weight: 500;
        height: 1rem;
        text-align: center;
        font-size: 0.4rem;
        line-height:1rem;
    }
    .text{
        width:100%;
        height: 1.8rem;
        font-size:0.3rem;
        padding: 0.5rem 0.2rem;

        text-align: center;
        border-bottom: 1px solid #bfbfbf;
        border-top: 1px solid #bfbfbf;
    }
    .wrapper_main{
        /*position: relative;*/
        width:94%;
        text-align: center;
        height: 4.2rem;
        margin: 40% auto;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 0.1rem;
        background: #FFF;
        font-size: 0.3rem;
    .Close_button{
        /*position: absolute;*/
        /*right:-0.7rem;*/
        display: inline-block;
        border-radius: 4px;
        height:0.8rem;
        line-height: 0.8rem;
        text-align: center;
        margin-top: 0.3rem;
        color:#fff;
        width:2rem;
    img{
        width:100%;
    }
    }
    }
    }
</style>