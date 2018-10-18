<template>
    <div>
        <div class="search">
            <input 
                class="search-input" type="text" 
                placeholder="输入城市名或拼音"
                v-model="keyword"
            />
        </div>
        <div class="search-content" ref="search" v-show="keyword">
            <ul>
                <li 
                    class="content-item border-bottom"
                    v-for="item of list" 
                    :key="item.id"
                    @click="handleCityClick(item.name)"
                >
                    {{item.name}}
                </li>
                <li class="content-item border-bottom"
                    v-show="hasNoData"
                >
                    没有找到指定数据
                </li>
            </ul>
        </div>
    </div>
    
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name:'CitySearch',
    props:{
        cities:Object
    },
    data(){
        return{
            keyword:'',
            list:[],
            timer:null
        }
    },
    methods:{
        handleCityClick(city){
            this.$store.commit('changeCity',city)
            this.$router.push('/')
        }
    },
    computed:{
        hasNoData(){
            return !this.list.length
        }
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list = [];
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                for(let i in this.cities){
                    this.cities[i].forEach((value) => {
                        if(value.spell.indexOf(this.keyword) > -1 || 
                            value.name.indexOf(this.keyword) > -1){
                                result.push(value)
                        }
                    })
                }
                this.list = result
            },100)
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.search)
    }
}
</script>
<style scoped>
    .search{
        padding:0 .1rem;
        height:.72rem;
        background-color:#00bcd4;
    }
    .search .search-input{
        box-sizing: border-box;
        padding:0 .1rem;
        width:100%;
        border-radius: .06rem;
        height:.62rem;
        line-height:.62rem;
        text-align: center;
        color:#666;
    }
    .search-content{
        overflow: hidden;
        position:absolute;
        top:1.58rem;
        left:0;
        right:0;
        bottom:0;
        z-index:1;
        background-color: #eee;
    }
    .search-content .content-item{
        line-height: .62rem;
        padding-left:.2rem;
        background-color: #fff;
        color:#666;
    }
</style>
