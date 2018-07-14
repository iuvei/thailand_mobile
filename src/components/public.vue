<template>
    <div class='Public'>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        },
        computed: {
        },
        components: {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    .Public{
        position: fixed;
        left:0;
        top:0;
        right:0;
        padding-top: 0.8rem;
        bottom:0;
        background:#f5f5f9 ;
        z-index:2;
        overflow: auto;
        padding-bottom: 0.8rem;
    }
</style>