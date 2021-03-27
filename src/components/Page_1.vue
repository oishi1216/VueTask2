<template>
  <div>
    <div class="contents">
      <div class="contents-head">
        <p class="step">STEP2</p>
          <p class="info"><i class="fas fa-chalkboard-teacher"></i>以下にお答えください</p>
      </div>
      <div class="contents-main">
        <div class="insurance">
          <p class="item">現在、生命保険に加入されていますか？</p>
          <div class="contents-radio2">
            <label><input type="radio" value="はい" name="getQuestion1" @change="updateQuestion1">はい</label>
            <label><input type="radio" value="いいえ" name="getQuestion1" @change="updateQuestion1">いいえ</label>
          </div>
        </div>
        <div class="hospitalization" v-if="getQuestion1">
          <p class="item">現在入院中ですか。または、最近3カ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
          <div class="contents-radio2">
            <label><input type="radio" value="はい" name="getQuestion2" @change="updateQuestion2">はい</label>
            <label><input type="radio" value="いいえ" name="getQuestion2" @change="updateQuestion2">いいえ</label>
          </div>
        </div>
        <div class="hospitalization" v-if="getQuestion2">
          <p class="item">過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
          <div class="contents-radio2">
            <label><input type="radio" value="はい" name="getQuestion3" @change="updateQuestion3">はい</label>
            <label><input type="radio" value="いいえ" name="getQuestion3" @change="updateQuestion3">いいえ</label>
          </div>
        </div>
      </div>
     </div> 
    <div class="btn-area">
      <div class="btn prev">
        <router-link to="/" class="button is-primary">前へ戻る<i class="fa fa-angle-right"></i></router-link>
      </div>
      <div class="btn next">   
        <router-link to="/page2" class="button is-primary">次へ進む<i class="fa fa-angle-right"></i></router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    updateQuestion1(e) {
      this.$store.commit('updateQuestion1',e.target.value)
    },
    updateQuestion2(e) {
      this.$store.commit('updateQuestion2',e.target.value)
    },
    updateQuestion3(e) {
      this.$store.commit('updateQuestion3',e.target.value)
    },
  },
  computed: {
    getQuestion1() {
      return this.$store.getters.getQuestion1
    },
    getQuestion2() {
      return this.$store.getters.getQuestion2
    },
    getQuestion3() {
      return this.$store.getters.getQuestion3
    },
  },
}
</script>

<style>
.contents-radio2 {
  padding: 10px 5px;
  margin: 0 25px
}

.contents-radio2 label {
  margin-right: 10px;
  font-size: 15px;
}

</style>
