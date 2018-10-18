<template>
    <div class="list" ref="wrapper">
        <div>
            <section class="area">
                <header class="title border-topbottom">当前城市</header>
                <ul class="button-list">
                    <li class="list-wrapper">
                        <div class="button">{{this.currentCity}}</div>
                    </li>                
                </ul>
            </section>
            <section class="area">
                <header class="title border-topbottom">热门城市</header>
                <ul class="button-list">
                    <li class="list-wrapper"
                        v-for="item in hot"
                        :key="item.id"
                        @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </li>   
                </ul>
            </section>
            <section class="area" 
                v-for="(item,key) in cities"
                :key="key"
                :ref="key"
            >
                <header class="title border-topbottom">{{key}}</header>
                <ul class="item-list">
                    <li class="item border-bottom"
                        v-for="innerItem in item"
                        :key="innerItem.id"
                        @click="handleCityClick(innerItem.name)"
                    >
                        {{innerItem.name}}
                    </li>
                </ul>
            </section>
        </div>        
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
export default {
    name:'CityList',
    props:{
        hot:Array,
        cities:Object,
        letter:String
    },
    methods:{
        handleCityClick(city){
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    computed:{
        ...mapState({
            currentCity:'city'
        })
    },
    watch:{
        letter(){
            if(this.letter){
                const element = this.$refs[this.letter][0]
                console.log(element)
                this.scroll.scrollToElement(element)
            }
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper)
    }
}
</script>
<style scoped>
    .border-topbottom:before,
    .border-topbottom:after{
        border-color:#ccc;
    }
    .border-bottpm::before{
         border-color:#ccc;
    }
    .list{
        position:absolute;
        overflow: hidden;
        top:1.58rem;
        left:0;
        right:0;
        bottom:0;
    }
    .list .title{
        padding-left:.2rem;
        background-color:#eee;
        line-height: .54rem;
        font-size: .26rem;
        color:#666;
    }
    .list .button-list{
        overflow: hidden;
        padding:.1rem .6rem .1rem .1rem;
    }
    .button-list .list-wrapper{
        width:33.33%;
        float:left;
    }
    .list-wrapper .button{
        margin:.1rem;
        padding:.1rem 0;
        border:.02rem solid #ccc;
        border-radius: .1rem;
        text-align: center;
    }
    .item-list .item{
        padding-left:.2rem;
        line-height: .76rem;
    }
</style>
