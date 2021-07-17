import { LOGIN, LOGOUT } from './actions.type'
import { SET_AUTH, PURGE_AUTH } from './mutations.type'
import ApiService from '../common/api.service'
import storage from '@/common/storage.service'
import router from '../router'

const state = {
  authData: null
}

const getters = {}

const actions = {
  [LOGIN] (context, credentials) {
    return new Promise(resolve => {
      ApiService.callApi('post', '/login', credentials)
        .then((res) => {
          context.commit(SET_AUTH, res.data)
          resolve(res.data)
        })
    })
  },
  [LOGOUT] (context) {
    context.commit(PURGE_AUTH)
  }
}

const mutations = {
  [SET_AUTH] (state, data) {
    storage.save('Token', data.accessToken)
    storage.save('refreshToken', data.refreshToken)
    router.push({ path: '/' })
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
