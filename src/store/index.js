import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '北京'
try{
    if(localStorage.city){
        defaultCity = localStorage.city
    }
}catch(e){}

export default new Vuex.Store({
    state:{
        city:localStorage.city || '北京'
    },
    mutations:{
        changeCity(state,city){
            state.city = city
            try{
                localStorage.city = city
            }catch(e){}
        }
    }
})