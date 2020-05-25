import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    username: '',
    loggedIn: false
  },
  mutations: {
    setLoggedIn (state, status) {
      state.loggedIn = status
    },
    setUsername (state, name) {
      state.username = name
    }
  },
  actions: {
    setLoggedIn ({ commit }, status) {
      commit('setLoggedIn', status)
    },
    setUsername ({ commit }, name) {
      commit('setUsername', name)
    }
  },
  getters: {
    getLoggedIn (state) {
      return state.loggedIn
    }
  }
})
