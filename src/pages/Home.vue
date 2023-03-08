<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <router-link to="/bar"><button type="button" class="btn btn-outline-secondary m-3">Bar Chart</button></router-link>
    <router-link to="/pie"><button type="button" class="btn btn-outline-secondary m-3">Pie Chart</button></router-link>
    <router-link to="/doughnut"><button type="button" class="btn btn-outline-secondary m-3">Doughnut Chart</button></router-link>
    <router-link to="/line"><button type="button" class="btn btn-outline-secondary m-3">Line Chart</button></router-link>
  </div>
</template>

<scirpt>
  export default {
    name: "Home",
    components: {},
  }
</scirpt>

<style scoped>
</style>