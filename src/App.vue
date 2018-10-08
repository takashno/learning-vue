<!-- Template部 -->
<template comments>
  <div id="app">
    <!-- 共通ヘッダ -->
    <global-header/>
    <div class="container-fluid">
      <div class="row" style="height:100%;">
        <!-- 共通サイドバー -->
        <global-sidebar></global-sidebar>
        <!-- メインコンテンツ -->
        <router-view/>
      </div>
    </div>
    <!-- 共通フッター -->
    <global-footer/>
  </div>
</template>

<!-- Script部 -->
<script>
import GlobalHeader from '@/components/parts/header/GlobalHeader.vue'
import GlobalFooter from '@/components/parts/footer/GlobalFooter.vue'
import GlobalSidebar from '@/components/parts/sidebar/GlobalSidebar.vue'

export default {
  name: 'app',
  components: {
    GlobalHeader,
    GlobalFooter,
    GlobalSidebar
  }
}
</script>

<!-- CSS部 -->
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
