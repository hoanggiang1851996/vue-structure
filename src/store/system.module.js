import { COLLAPSE_SIDEBAR } from './actions.type'
import { CHANGE_COLLAPSE } from './mutations.type'

const state = {
  isCollapse: false
}

const getters = {
  isCollapse (state) {
    return state.isCollapse
  }
}

const actions = {
  [COLLAPSE_SIDEBAR] (context) {
    context.commit(CHANGE_COLLAPSE)
  }
}

const mutations = {
  [CHANGE_COLLAPSE] (state) {
    state.isCollapse = !state.isCollapse
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
