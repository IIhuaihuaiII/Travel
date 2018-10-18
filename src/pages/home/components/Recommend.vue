<template>
    <div>
        <header class="recom-title">热门推荐</header>
        <ul>
            <router-link
                tag="li"
                class="item border-bottom"
                v-for="(item,index) in list"
                :key="index"
                :to="'/detail/'+ item.id"
            >
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="info-title mixins">{{item.title}}</p>
                    <p class="info-desc mixins">{{item.desc}}</p>
                    <button class="info-button">查看详情</button>
                </div>
               
            </router-link>
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
        margin-top:.2rem;
        line-height: .8rem;
        background:#eee;
        text-indent:.2rem;
    }
    .item{
        display:flex;
        overflow: hidden;
        height:1.9rem;     
    }
    .item .item-img{
        width:1.7rem;
        height:1.7rem;
        padding:.1rem;
        border-radius: .2rem;
    }
    .item .item-info{
        flex:1;
        padding:.1rem;
        min-width:0;
    }
    .item-info .info-title{
        line-height: .36rem;
        font-size: .32rem;
    }
    .item-info .info-desc{
        margin-top:.1rem;
        line-height:.3rem;
        color:#999;
    }
    .item-info .info-button{
        background-color:#ff9300;
        margin-top:.1rem;
        padding:0.05rem .1rem;
        border-radius: .06rem;
        font-size: .24rem;
        color:#fff;
    }
    .mixins{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>

