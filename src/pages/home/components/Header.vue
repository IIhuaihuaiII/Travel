<template>
    <header class="header">
        <div class="header-left">
            <span class="iconfont icon-back">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{this.city}}
                <span class="iconfont icon-arrow">&#xe64a;</span>
            </div>
        </router-link>        
    </header>
</template>
<script>
import {mapState} from 'vuex'
export default {
    name:'HomeHeader',
    computed:{
        ...mapState(['city'])
    }
}
</script>
<style scoped>
    .header{
        display:flex;
        height:.86rem;
        background-color:#00bcd4;
        line-height: .86rem;
        color:#fff;
    }
    .header .header-left{
        width:.64rem;
        float:left;
    }
    .header-left .icon-back{
        display: block;
        text-align: center;
        font-size: .4rem;
    }
    .header .header-input{
        flex:1;
        height:.64rem;
        margin-top:.12rem;
        margin-left:.2rem;
        padding-left: .2rem;
        background-color: #fff;
        border-radius: .1rem;
        line-height: .64rem;
        color:#ccc;
    }
    .header .header-right{
        float:right;
        min-width:1.24rem;
        padding:0 .1rem;
        text-align: center;
        color:#fff;
    }
    .header-right .icon-arrow{
        margin-left:-.04rem;
        font-size:.24rem;
    }
</style>


