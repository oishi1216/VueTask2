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
            <label><input type="radio" value="yes" v-model="insurance">はい</label>
            <label><input type="radio" value="no" v-model="insurance">いいえ</label>
          </div>
        </div>
        <div class="hospitalization" v-if="insurance">
          <p class="item">現在入院中ですか。または、最近3カ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
          <div class="contents-radio2">
            <label><input type="radio" value="yes" v-model="nowHospitalization">はい</label>
            <label><input type="radio" value="no" v-model="nowHospitalization">いいえ</label>
          </div>
        </div>
        <div class="hospitalization" v-if="nowHospitalization">
          <p class="item">過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
          <div class="contents-radio2">
            <label><input type="radio" value="yes" v-model="pastHospitalization">はい</label>
            <label><input type="radio" value="no" v-model="pastHospitalization">いいえ</label>
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
  data() {
    return {
      insurance: '',
      nowHospitalization: '',
      pastHospitalization: '',
    }
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
}

</style>
