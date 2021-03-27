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
  getters: {
    getGender: (state) => state.gender,
    getYear: (state) => state.year,
    getMonth: (state) => state.month,
    getDay: (state) => state.day,
    getMaxDay: (state) => state.maxDay,
    getQuestion1: (state) => state.question1,
    getQuestion2: (state) => state.question2,
    getQuestion3: (state) => state.question3,
    getMessage: (state) => state.message,
  },
  mutations: {
    updateGender(state, gender) {
      state.gender = gender
    },
    updateYear(state, year) {
      state.year = year
    },
    updateMonth(state, month) {
      state.month = month
    },
    updateDay(state, day) {
      state.day = day
    },
    updateMaxDay(state) {
      state.maxDay = new Date(state.year, state.month, 0).getDate();
    },
    updateQuestion1(state, question1) {
      state.question1 = question1
    },
    updateQuestion2(state, question2) {
      state.question2 = question2
    },
    updateQuestion3(state, question3) {
      state.question3 = question3
    },
    updateMessage(state, message) {
      state.message = message
    },
  },
  actions: {
  },
  modules: {
  }
})
