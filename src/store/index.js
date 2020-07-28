import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:localStorage.getItem('access_token') || null 
  },
  getters:{
    loggedIn(state){
      return state.token !== null
    }
  },
  mutations: {
    LOGIN(state, token){
      state.token = token
    }
  },
  actions: {
    LOGIN(context, credentials){
      return new Promise((resolve, reject)=>{
        axios.post('/login',{
          email: credentials.email,
          password: credentials.password
        })
        .then(response=>{
          const token = response.data.access_token
          localStorage.setItem('access_token', token)
          context.commit('LOGIN', token)
          resolve(response)
        })
        .catch(error =>{
          console.log(Error)
          reject(error)
        })
      })
    },
    REGISTER:(context,data) =>{
      return new Promise((resolve, reject)=>{
        axios.post(`register`,
        {
          name: data.name, 
          email: data.email, 
          password: data.password
        })
        .then(response =>{
          resolve(response)
        })
        .catch(error=>{
          reject(error)
        })
      })
    }
  },
  modules: {
  }
})
