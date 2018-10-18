<template>
    <ul class="list">
        <li class="item" 
            v-for="item in letters" 
            :key="item"
            :ref="item"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
            @click="handleClick"
        >{{item}}</li>
    </ul>
</template>
<script>
export default {
    name:'CityAlphabet',
    props:{
        cities:Object
    },
    data(){
        return{
            touchStatus:false,
            timer:null
        }
    },
    computed:{
        letters(){
            const letters = []
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    methods:{
        handleClick(e){
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart(){
            this.touchStatus = true
        },
        handleTouchMove(e){
            if(this.touchStatus){
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    const touchY = e.touches[0].clientY -166
                    const index = Math.floor(touchY/20)
                    if(index >=0 && index < this.letters.length){
                        this.$emit('change',this.letters[index])
                    }
                },16)
            }
        },
        handleTouchEnd(){
            this.touchStatus = false
        }
    }
}
</script>
<style scoped>
    .list{
        display:flex;
        flex-direction: column;
        position:absolute;
        top:3.2rem;
        right:0;
        width:.4rem;
    }
    .list .item{
        line-height: .4rem;
        text-align: center;
        color: #00bcd4;
    }
</style>

