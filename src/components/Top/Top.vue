<template>
    <div class='TopHeader Org'>
        {{text}}
        <!--传统彩票真人视讯，-->
    </div>
</template>

<script>
    export default {
        props: {
            text: {
                type: String
            }
        },
        data () {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
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
}
</style>