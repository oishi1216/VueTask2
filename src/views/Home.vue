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
          <label><input type="radio" value="男性" name="gender" @change="genderUpdate">男性</label>
          <label><input type="radio" value="女性" name="gender" @change="genderUpdate">女性</label>
        </div>
        <p class="item">-生年月日-</p>
        <div class="contents-select">
          <select id="year" v-model="year" @change="yearBoth">
            <option v-for="era in years" :value="era.year" :key="era.year">{{ era.label }}</option>
          </select>
          年
          <select id="month" v-model="month" @change="monthBoth">
            <option v-for="month in months" :value="month" :key="month.id">{{ month }}</option>
          </select>
          月
          <select id="day" v-model="day" @change="dayUpdate">
            <option v-for="day in $store.state.maxDay" :value="day" :key="day.id">{{ day }}</option>
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
import { mapState } from 'vuex'

export default {
  data() {
    return {
      years: yearList,
      months: monthNum,
    }
  },
  methods: {
    genderUpdate(e) {
      console.log(e.target.value);
      this.$store.commit('genderUpdate',e.target.value)
    },
    yearBoth(e) {
      this.yearUpdate(e);
      this.getMaxDay();
    },
    yearUpdate(e) {
      this.$store.commit('yearUpdate',e.target.value)
      console.log(e.target.value);
      },
    monthBoth(e) {
      this.monthUpdate(e);
      this.getMaxDay();
    },   
    monthUpdate(e) {
      this.$store.commit('monthUpdate',e.target.value)
      console.log(e.target.value);
      },
    dayUpdate(e) {
      this.$store.commit('dayUpdate',e.target.value)
      console.log(e.target.value);
      },
    getMaxDay(){
      this.$store.commit('getMaxDay')
    },
  },
  computed: {
  ...mapState(["gender", "year", "month", "day"]),
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
