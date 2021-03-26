<template>
  <div>
    <div class="contents">
      <div class="contents-head">
        <p class="step">STEP1</p>
          <p class="info"><i class="fas fa-address-card fa-inverse my-gray"></i>お客様の情報を入力してください</p>
      </div>
      <div class="contents-main">
        <p class="item">-性別-</p>
        <div class="contents-radio">
          <label><input type="radio" value="男性" name="getGender" @change="updateGender">男性</label>
          <label><input type="radio" value="女性" name="getGender" @change="updateGender">女性</label>
        </div>
        <p class="item">-生年月日-</p>
        <div class="contents-select">
          <select id="year" v-model="getYear" @change="yearBoth">
            <option v-for="era in years" :value="era.year" :key="era.year">{{ era.label }}</option>
          </select>
          年
          <select id="month" v-model="getMonth" @change="monthBoth">
            <option v-for="month in months" :value="month" :key="month.id">{{ month }}</option>
          </select>
          月
          <select id="day" v-model="getDay" @change="updateDay">
            <option v-for="day in getMaxDay" :value="day" :key="day.id">{{ day }}</option>
          </select>
          日
        </div>
      </div>
    </div>
    <div class="btn-area">
      <div class="btn next">  
        <router-link to="/page1" class="button is-primary">次へ進む<i class="fa fa-angle-right"></i></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { yearList, monthNum } from "/src/helpers/definition";

export default {
  data() {
    return {
      years: yearList,
      months: monthNum,
    }
  },
  methods: {
    updateGender(e) {
      this.$store.commit('updateGender',e.target.value)
    },
    yearBoth(e) {
      this.updateYear(e);
      this.updateMaxDay();
    },
    updateYear(e) {
      this.$store.commit('updateYear',e.target.value)
      },
    monthBoth(e) {
      this.updateMonth(e);
      this.updateMaxDay();
    },   
    updateMonth(e) {
      this.$store.commit('updateMonth',e.target.value)
      },
    updateDay(e) {
      this.$store.commit('updateDay',e.target.value)
      },
    updateMaxDay(){
      this.$store.commit('updateMaxDay')
    },
  },
  computed: {
    getGender() {
      return this.$store.getters.getGender
    },
    getYear() {
      return this.$store.getters.getYear
    },
    getMonth() {
      return this.$store.getters.getMonth
    },
    getDay() {
      return this.$store.getters.getDay
    },
    getMaxDay() {
      return this.$store.getters.getMaxDay
    },
  },
}
</script>

<style>
.contents {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 60%;
  margin: 60px auto 25px auto;
  color: #2c3e50;
  border: 1px solid #31cccc;
  padding: 0px;
  border-radius: 2px;
}

.contents-head {
    padding: 0px;
    background-color: #ccffff;
    font-size: 0;
    height: 35px;
    border-bottom: 1px solid #31cccc;
}

.step {
  display: inline-block;
  background-color: #00aaff;
  font-size: 10px;
  padding: 2px 5px 1px 5px;
  color: #fff;
  border-radius: 2px;
  margin: 0px;
  position: relative;
  top: -1px;
  left: -1px;
}

.fas {
  color: #4d4d4d;
  margin-right: 5px;
}

.info {
  font-size: 15px;
  color: #4d4d4d;;
  margin: 0;
  position: relative;
  top: -10px;
  text-align: center;
}

.contents-main {
  margin: 10px 7px;
}

.item {
  font-size: 12px;
  margin: 15px 20px 10px 20px;
  color: #6ea8cc;
}

.contents-radio {
  padding: 10px 5px;
}

.contents-radio label {
  margin-right: 10px;
  font-size: 15px;
}

.contents-select{
  margin: 0 0 15px 5px;
}

.contents-select select{
  padding:5px;
}

.btn-area{
  text-align: center;
}

.btn{
  display: inline-block;
  margin: 0px 10px;
}

.fa-angle-right{
  margin-left: 10px;
}
</style>
