<template>
  <div class="w-75 m-auto p-5 border">
    <canvas id="myChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import { onMounted } from 'vue';
export default {
  name: 'DoughnutChartComponent',
  props: {
  },
  setup() {
    onMounted(() => {
      console.log("Component mounted");
      const ctx = document.getElementById('myChart');
      const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: [
            'Red',
            'Blue',
            'Yellow'
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
        },
      })

      myChart;
    })
  }
}
</script>

<style scoped></style>
