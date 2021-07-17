export default {
  get (key) {
    return window.localStorage.getItem(key)
  },

  save (key, data) {
    window.localStorage.setItem(key, data)
  },

  destroy (key) {
    window.localStorage.removeItem(key)
  }
}
