<template>
    <div class='BuyColorWrapper alearfix'>
        <Top :text="text"></Top>
        <div class="Return">
            <router-link to="/">
                <img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">
            </router-link>
        </div>
        <div class="BuyColorNav">
            <router-link to="/LowColor">
                IG彩票 （新）
            </router-link>
            <router-link to="/AllColor">
                IG彩票
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                text:'传统彩',
            }
        },
        mounted() {
        },
        computed: {
        },
        methods:{
        },
        created() {
        },
        components: {
            Top,
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.BuyColorWrapper{
    position: relative;
    width:100%;
    .BuyColorNav{
        width: 100%;
        height: 0.7rem;
        a{
            float: left;
            width: 50%;
            background: #fff;
            font-size: 0.25rem;
            line-height: 0.7rem;
        }
        .router-link-active{
            color:#219be4;
            border-bottom: 2px solid #219be4;
            /*border-radius: 3px;*/
        }
    }
}
</style>