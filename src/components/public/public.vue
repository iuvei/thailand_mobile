<template>
    <div class='PublicLoad'>
        <img src="http://mobile.beike188.com/modelTTC/images/public/load.gif" alt="">
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    .PublicLoad{
        position: fixed;
        left:0;
        top:0;
        right:0;
        bottom:0;
        padding-top: 5rem;
        background:rgba(0,0,0,0.5);
        z-index:150;
    }
</style>