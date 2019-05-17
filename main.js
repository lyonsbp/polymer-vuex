document.addEventListener('DOMContentLoaded', () => {
  const store = new Vuex.Store({
    state: {
      message: "From the vuex store",
      count: 0
    },
    mutations: {
      updateText(state, payload) {
        state.message = payload
      },
      addOne(state) {
        state.count++
      }
    }
  })
  store.subscribe((mutation, state) => {
    window.dispatchEvent(new Event(`vuex-${mutation.type}`))
  })
  Vue.config.devtools = true
  let vm = new Vue({
    el: '#vue-app',
    data: {
      initialText: "Hello from Vue"
    },
    computed: {
      message() {
        return this.$store.state.message
      },
      count() {
        return this.$store.state.count
      }
    },
    store
  })
  window.vm = vm
})