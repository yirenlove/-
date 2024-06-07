import Vue from "vue";
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        cityId:110100,
        cityName:'北京',
        cinemaList:[]
    },
    actions:{
        getCinemaList(context,id){
            axios.get(`https://m.maizuo.com/gateway?cityId=${id}&ticketFlag=1&k=7440307`, {
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16921931654992916661469185","bc":"110100"}',
                'X-Host':'mall.film-ticket.cinema.list'
            }
        }).then((res)=>res.data.data.cinemas).then((res)=>{ context.commit('changeCinemaList',res) }).catch((err)=>{console.log(err);})
        }
    },
    mutations:{
        changeCityId(state,id){
            state.cityId = id
        },
        changeCityName(state,name){
            state.cityName = name
        },
        changeCinemaList(state,list){
            state.cinemaList = list
        },
        clearCinemaList(state){
            state.cinemaList = []
        }

    }
})