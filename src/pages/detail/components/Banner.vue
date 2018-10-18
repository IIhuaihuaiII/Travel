<template>
    <div class="banner">
        <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="">
        <div class="banner-info">
            <p class="info-title">故宫(AAAAA景区)</p>
            <p class="info-number">
                <span class="iconfont number-icon">&#xe60f;</span>
                10
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name:'DetailBanner'
}
</script>
<style scoped>
    .banner{
        position: relative;
        overflow: hidden;
        height:0;
        padding-bottom:55%;
    }
    .banner .banner-img{
        width:100%;
    }
    .banner .banner-info{
        display:flex;
        position:absolute;
        left:0;
        right:0;
        bottom:0;
        line-height: .6rem;
        color:#fff;
        background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
    }
    .banner-info .info-title{
        flex:1;
        font-size: .32rem;
        padding:0 .2rem;
    }
    .banner-info .info-number{
        height:.32rem;
        margin-top:.14rem;
        padding:0 .4rem;
        line-height:.32rem;
        font-size: .24rem;
        border-radius: .2rem;
        background-color:rgba(0,0,0,.6)
    }
    .info-number .number-icon{
        font-size:.24rem;
    }
</style>

