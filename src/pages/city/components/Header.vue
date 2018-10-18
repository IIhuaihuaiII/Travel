<template>
    <header class="header">
        <router-link to="/">
            <span class="iconfont icon-back">&#xe624;</span>
        </router-link>        
        城市选择       
    </header>
</template>
<script>
export default {
    name:'CityHeader'
}
</script>
<style scoped>
    .header{
        position: relative;
        overflow: hidden;
        height:.86rem;
        background-color:#00bcd4;
        line-height: .86rem;
        text-align: center;
        font-size:.32rem;
        color:#fff;
    }
    .header .icon-back{
        position:absolute;
        left:0;
        width:.64rem;
        text-align: center;
        font-size: .4rem;
        color:#fff;
    }
</style>
