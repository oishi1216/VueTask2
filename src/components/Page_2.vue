<template>
  <div>
    <div class="contents">
      <div class="contents-head">
        <p class="step">STEP3</p>
          <p class="info"><i class="fa fa-file-text"></i>ご相談内容をご記入ください</p>
      </div>
      <div class="contents-main">
        <div class="insurance">
          <p class="item">-ご相談内容-</p>
          <div class="contents-message">
            <textarea value="message" @input="messageUpdate"></textarea>
          </div>
        </div>
      </div>
     </div> 
    <div class="btn-area">
      <div class="btn prev">
        <router-link to="/page1" class="button is-primary">前へ戻る<i class="fa fa-angle-right"></i></router-link>
      </div>
      <div class="btn next">   
        <router-link to="/page3" class="button is-primary">次へ進む<i class="fa fa-angle-right"></i></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    messageUpdate(e) {
      console.log(e.target.value);
      this.$store.commit('messageUpdate',e.target.value)
    },
  },
  computed: {
    ...mapState(["message"]),
  },
}
</script>

<style>
.fa-file-text {
  color: #4d4d4d;
  margin-right: 5px;
}

.contents-message {
  text-align: center;
}

textarea {
  height: 400px;
  width: 100%;
  border-radius: 3px;
  margin-bottom: 10px;
  border: 1px solid #d3d3d3;
}
</style>
