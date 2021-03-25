<template>
  <div>
    <header>
      <div class="header-left">{{logo}}</div>
      <div class="header-right">
      <a href="#">{{login}}</a>
      <p>|</p>
      <a href="#">{{registration}}</a>
      </div>
    </header>

    <router-view/>

  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: 'Sample App',
      login: 'ログイン',
      registration: '新規登録',
    }
  },
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
</style>

<style>
header {
  background-color: #f5f5f5;
  width: 100%;
  height: 70px;
  margin: 0;
  border-bottom: 1px solid #000;
}

.header-left {
  margin-left:25px;
  height: 70px;
  line-height: 70px;
  display: inline-block;
}

.header-right {
  float: right;
  font-size: 5px;
  margin: 7px 5px
}

.header-right a {
  text-decoration: none;
  color: #000;
}

.header-right p {
  display: inline-block;
  margin: 0 5px;
}
</style>
