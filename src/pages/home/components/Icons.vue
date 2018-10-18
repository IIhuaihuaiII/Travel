<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) in pages" :key="index">
                <div 
                    class="icon"
                    v-for="item in page"
                    :key="item.id"
                >
                    <div class="icon-img">
                        <img class="icon-imgcontent" :src="item.imgUrl">
                    </div>           
                    <p class="icon-desc">{{item.desc}}</p>
                </div> 
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {    
    name:'HomeIcons',
    props:{
        list:Array
    },
    data(){
        return{
           swiperOption:{
               autoplay:false
           } 
        }
    },
    computed: {
        pages () {
        const pages = []
        this.list.forEach((item, index) => {
            const page = Math.floor(index / 8)
            if (!pages[page]) {
            pages[page] = []
            }
            pages[page].push(item)
        })
        return pages
        }
  }
}
</script>
<style>
    .icons >>> .swiper-container{
        height:0;
        padding-bottom: 50%;
    }
    .icons{
        margin-top:.1rem;
        padding-top:.2rem;
    }
    .icons .icon{
        position: relative;
        overflow: hidden;
        float:left;
        padding-bottom:25%;
        width:25%;
        height:0;
    }
    .icon .icon-img{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:.4rem;
        box-sizing: border-box;
        padding:.1rem;
    }
    .icon-img .icon-imgcontent{
        display:block;
        margin:0 auto;
        height:70%;
    }

    .icon .icon-desc{
        position:absolute;
        left:0;
        right:0;
        bottom:0; 
        height:.64rem;
        line-height: .4rem;
        text-align: center;
        color:#333;
    }
</style>


