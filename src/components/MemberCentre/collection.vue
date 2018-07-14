<template>
    <div class='collection'>
        <Top :text="text"></Top>
        <div class="Return">
            <router-link to="/MemberCentre">
                <img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">
            </router-link>
        </div>
        <div class="wrapper-cen">
            <div class="row Mobileouhui" v-for="v in annouationNew.offer">
                <h2 @click="fun($event)">
                    <img :src="v.img1" :title="v.mobile" alt="">
                </h2>
                <p>
                    <img :src="v.img2" :title="v.mobile" alt="">
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    var vm,el;
    import Top from '../Top/Top.vue'
    export default {
        data () {
            return {
                text:'优惠活动',
                obj:''
            }
        },
        computed: {
            annouationNew() {
                return this.$store.state.annouationNew;//获取游戏
            }
        },
        mounted() {
            vm=this;
        },
        methods:{
            fun:function (event) {
                el = event.currentTarget;
                $(el).next().toggle()
            }
        },
        components: {
            Top
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.collection{
    min-width:100%;
    .wrapper-cen{
        margin-top: 0.15rem;
        border-bottom: 1rem;
    }
    .Mobileouhui{
        width:95%;
        margin: 0 auto;
        h2{
            width:100%;
            margin-bottom: 0.1rem;
            img{
                width:100%;
                height: 100%;
                border-radius: 3px;
            }
        }
        p{
            min-height: 1rem;
            margin-top: 0.05rem;
            display: none;
            width:100%;
            img{
                width:100%;
            }
        }
    }
}
</style>