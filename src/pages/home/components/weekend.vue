<template>
    <div>
        <header class="recom-title">周末去哪儿</header>
        <ul>
            <li class="item border-bottom"
                v-for="(item,index) in list"
                :key="index"
            >   
                <div class="item-wrapper">
                     <img class="wrapper-img" :src="item.imgUrl" alt="">
                </div>               
                <div class="item-desc">
                    <p class="desc-title mixins">{{item.title}}</p>
                    <p class="desc-grade mixins">{{item.desc}}</p>
                </div>
               
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'HomeRecommend',
    props:{
        list:Array
    }
}
</script>
<style scoped>
    .recom-title{
        line-height: .8rem;
        background:#eee;
        text-indent:.2rem;
    }
    .item{
        display:flex;
        flex-direction:column;
        overflow: hidden;
        height:4rem;   

    }
    .item .item-wrapper{
        overflow: hidden;
        height:0;
        padding-bottom:37.09%;
    }
    .item-wrapper .wrapper-img{
        width:100%;
    }
    .item .item-desc{
        flex:1;
        padding:.1rem;
        min-width:0;
    }
    .item-desc .desc-title{
        line-height: .36rem;
        font-size: .32rem;
    }
    .item-desc .desc-grade{
        margin-top:.1rem;
        line-height:.3rem;
        color:#999;
    }
    .mixins{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>

