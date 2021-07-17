import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { apiUrl } from '@/common/config'
import storage from '@/common/storage.service'

const instance = axios.create({
  timeout: 100000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const requestHandler = request => {
  request.headers['Authorization'] = storage.get('Token')
  return request
}

const errorHandler = error => {
  if (error.status === 401) {}
  return Promise.reject(error)
}

const successHandler = response => {
  return response
}

instance.interceptors.request.use(request => requestHandler(request))

instance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error.response)
)

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = apiUrl.API_URL
  },

  callApi (method, url, params) {
    return Vue.axios[method](url, params)
  }
}

export default ApiService
