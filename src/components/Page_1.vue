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
            <label><input type="radio" value="はい" name="question1" @change="question1Update">はい</label>
            <label><input type="radio" value="いいえ" name="question1" @change="question1Update">いいえ</label>
          </div>
        </div>
        <div class="hospitalization" v-if="question1">
          <p class="item">現在入院中ですか。または、最近3カ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
          <div class="contents-radio2">
            <label><input type="radio" value="はい" name="question2" @change="question2Update">はい</label>
            <label><input type="radio" value="いいえ" name="question2" @change="question2Update">いいえ</label>
          </div>
        </div>
        <div class="hospitalization" v-if="question2">
          <p class="item">過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
          <div class="contents-radio2">
            <label><input type="radio" value="はい" name="question3" @change="question3Update">はい</label>
            <label><input type="radio" value="いいえ" name="question3" @change="question3Update">いいえ</label>
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
import { mapState } from 'vuex'

export default {
  methods: {
    question1Update(e) {
      console.log(e.target.value);
      this.$store.commit('question1Update',e.target.value)
    },
    question2Update(e) {
      console.log(e.target.value);
      this.$store.commit('question2Update',e.target.value)
    },
    question3Update(e) {
      console.log(e.target.value);
      this.$store.commit('question3Update',e.target.value)
    },
  },
  computed: {
  ...mapState(["question1", "question2", "question3"]),
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
