<template>
  <div>
    <h1 class="w-50 text-center mt-5 mb-5 m-auto bg-secondary bg-gradient text-white p-4 rounded-pill">Chart.js Visualization in Vue</h1>
    <div class="w-50 bg-light m-auto pt-5 pb-5 mb-5">
      <RouterView />
    </div>
    <div class="w-50 m-auto d-flex justify-content-end mb-5">
      <router-link to="/"><button class="btn btn-secondary">뒤로 가기</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
}
</script>

<style>
* {
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
