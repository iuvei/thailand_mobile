<template>
    <div class='infoMain'>
        <Top :text="text"></Top>
        <div class="Return">
            <router-link to="/MemberCentre">
                <img src="http://mobile.beike188.com/modelTTC/images/LogIn/LogIn.png" alt="">
            </router-link>
        </div>
        <div class="row RecordBox">
            <form action="">
                <div class="row">
                    <div class="col-8">
                        <div class="item">
                            <label for="">开始时间</label>
                            <datepicker id="detepik" placeholder="日期" :options="StartTimeDay"></datepicker>
                        </div>
                        <div class="item">
                            <label for="">结束时间</label>
                            <datepicker id="detepik" placeholder="日期" :options="EndTimeDay"></datepicker>

                        </div>
                    </div>
                    <div class="col-4">
                        <div class="item">
                            <!--<label for="">转账状态</label>-->
                            <!--<select name="" id=""><option value="">所有</option> <option value="OUT">转入游戏</option> <option value="IN">转入平台</option></select>-->
                            <label for="">类型</label>
                            <select id="Asele" name="">
                                <option value="">所有</option>
                                <option value="0">未读</option>
                                <option value="1">已读</option>
                            </select>
                        </div>
                        <div class="item">
                            <!--<label for="">游戏类型</label>-->
                            <!--<select id="Asele" name=""><option value="0">请选择游戏</option> <option value="CG">Cagayan88视讯</option> <option value="AGIN">AGIN国际厅</option> <option value="SB">申博视讯</option> <option value="OG">OG视讯</option> <option value="DS">DS视讯</option> <option value="BBIN">BBIN视讯</option> <option value="PT">PT电子</option> <option value="MG">MG电子</option> <option value="HABA">HABA电子</option> <option value="HG">皇冠</option> <option value="IG">彩票</option></select>-->
                        </div>
                    </div>
                </div>
                <div style="margin-top: 0.1rem;" class="RecordBoxBtn item Org">提交</div>
            </form>

        </div>
    </div>
</template>
<script>
    import Top from '../Top/Top.vue'
    import { zh } from 'flatpickr/dist/l10n/zh';
    export default {
        data () {
            return {
                text:'信息公告',
                StartTimeDay: {
                    locale: zh,
                    enable: [
                        {
                            from: new Date().fp_incr(-31),
                            to: new Date().fp_incr(-1) // 7 days from now
                        }
                    ],
                    enableTime: true,
                    enableSeconds:true
                },
                EndTimeDay: {
                    locale: zh,
                    enable: [
                        {
                            from: new Date().fp_incr(-30),
                            to: "today" // 7 days from now
                        }
                    ],
                    enableTime: true,
                    enableSeconds:true
                }
            }
        },
        computed: {
            game() {
                return this.$store.state.game;//获取游戏
            }
        },
        components: {
            Top
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
    @import "css/recording.less";
.infoMain{
    width:100%;
}
</style>