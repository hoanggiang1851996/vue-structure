import Vue from 'vue'
import Vuex from 'vuex'

import system from './system.module'
import auth from './auth.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    system,
    auth
  }
})
