import { createStore } from 'vuex'
import router from '@/router/index.js'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  plugins: [createPersistedState()],
  state: {
    todo: [
      {
        text: 'Hello world',
        done: false,
      },
    ],
    authorization: {
      login: 'Admin',
      password: '12345'
    },
    authorizationType: false
  },
  actions: {
    GET_LOGIN: ({commit}, data) => {
      commit('LOGIN', data)
    },
    GET_EXIT: ({commit}) => {
      commit('EXIT')
    },


    GET_POST: ({commit}, data) => {
      commit('POST', data)
    },
    GET_DONE: ({commit}, data) => {
      commit('DONE', data)
    },
    GET_PUT: ({commit}, data) => {
      commit('PUT', data)
    },
    GET_DELETE: ({commit}, data) => {
      commit('DELETE', data)
    },
    GET_LOGOUT: ({commit}) => {
      commit('EXIT')
    },
  },
  mutations: {
    LOGIN: (state, data) => {
      if(data.login === state.authorization.login && data.password === state.authorization.password){
        router.push('/todo')
        return state.authorizationType = true
      }
    },
    EXIT: (state) => {
      router.push('/')
      return state.authorizationType = false
    },
    DELETE: (state, data) => {
      return state.todo.splice(data, 1)
    },
    DONE: (state, data) => {
      return state.todo[data].done = !state.todo[data].done
    },
    PUT: (state, data) => {
      return state.todo[data.id].text = data.text
    },

    POST: (state, data) => {
      return state.todo.push(
          {
            text: data,
            done: false,
          }
      )
    },

  },
  getters: {

  },
  modules: {
  }
})
