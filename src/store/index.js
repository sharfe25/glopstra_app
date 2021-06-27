import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:false,
    menu:'home',
    name:'',
    infoAforo:{}
  },
  mutations: {
    setOptionMenu(state,opcion){
      state.menu=opcion
    },
    setName(state,name){
      state.name=name
    },
    setInfoAforo(state,info){
      state.infoAforo=info
    }
  },
  actions: {
    getInfoUser({commit},email){
      const path = 'http://160.153.253.91:3200/sedauser';
      let config = {
          headers: {
              auth:localStorage.getItem('token')
          }
      }
      axios.post(path,email,config).then((res) => res.data)
      .then((items)=>{
        commit('setName',items.results.name);
      })
      .catch((error) => {
          console.log(error)
      })
    },
    getAforo({commit},email){
      const path = 'http://160.153.253.91:3200/searchaforo';
      let config = {
          headers: {
              auth:localStorage.getItem('token')
          }
      }
      axios.post(path,email,config).then((res) => res.data)
      .then((items)=>{
        commit('setInfoAforo',items.results);
      })
      .catch((error) => {
          console.log(error)
      })
    },
  },
  modules: {
  }
})
