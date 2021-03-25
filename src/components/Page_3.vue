<template>
  <div>
    <div class="contents">
      <div class="contents-head">
        <p class="step">STEP4</p>
          <p class="info"><i class="fa fa-file-text"></i>以下の内容をご確認ください</p>
      </div>
      <div class="contents-main">
          <p class="item">-性別-</p>
          <p class="answer">{{this.$store.state.gender}}</p>
          <p class="item">-生年月日-</p>
          <p class="answer">{{this.$store.state.year}}年{{this.$store.state.month}}月{{this.$store.state.day}}日</p>
          <p class="item">-現在、生命保険に加入されていますか？-</p>
          <p class="answer">{{this.$store.state.question1}}</p>
          <p class="item">-現在入院中ですか。または、最近3カ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</p>
          <p class="answer">{{this.$store.state.question2}}</p>
          <p class="item">-過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？-</p>
          <p class="answer">{{this.$store.state.question3}}</p>
          <p class="item">-ご相談内容-</p>
          <p class="answer">{{this.$store.state.message}}</p>   
      </div>
     </div> 
    <div class="btn-area">
      <div class="btn prev">
        <router-link to="/page2" class="button is-primary">前へ戻る<i class="fa fa-angle-right"></i></router-link>
      </div>
      <div class="btn next">   
        <router-link to="/page3" class="button is-primary">送信<i class="fa fa-angle-right"></i></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(["gender", "year", "month", "day","question1", "question2", "question3","message"]),
  },
}
</script>

<style>
.answer{
  font-size: 15px;
  margin: 15px 35px;
}
</style>
