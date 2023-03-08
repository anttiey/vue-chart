<template>
  <div class="w-75 m-auto p-5 border">
    <canvas id="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';
export default {
  name: 'LineChartComponent',
  props: {},
  setup() {
    onMounted(() => {
      console.log("Component mounted");
      const ctx = document.getElementById('myChart');
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
      })

      myChart;
    })
  }
}
</script>

<style scoped></style>console.log("Component mounted");
const ctx = document.getElementById('myChart');
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  },
})

myChart;