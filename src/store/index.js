import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gender: '',
    year: 1990,
    month: 1,
    day: 1,
    maxDay: 31,
    question1: '',
    question2: '',
    question3: '',
    message: '',
  },
  mutations: {
    genderUpdate(state, gender) {
      state.gender = gender
    },
    yearUpdate(state, year) {
      state.year = year
    },
    monthUpdate(state, month) {
      state.month = month
    },
    dayUpdate(state, day) {
      state.day = day
    },
    getMaxDay(state) {
      state.maxDay = new Date(state.year, state.month, 0).getDate();
    },
    question1Update(state, question1) {
      state.question1 = question1
    },
    question2Update(state, question2) {
      state.question2 = question2
    },
    question3Update(state, question3) {
      state.question3 = question3
    },
    messageUpdate(state, message) {
      state.message = message
    },
  },
  actions: {
  },
  modules: {
  }
})
