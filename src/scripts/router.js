import Home from "@/pages/Home.vue";
import BarChartComponent from "@/components/BarChartComponent.vue";
import PieChartComponent from "@/components/PieChartComponent.vue";
import DoughnutChartComponent from "@/components/DoughnutChartComponent.vue";
import LineChartComponent from "@/components/LineChartComponent.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: '/', component: Home },
  { path: '/bar', component: BarChartComponent },
  { path: '/pie', component: PieChartComponent },
  { path: '/doughnut', component: DoughnutChartComponent },
  { path: '/line', component: LineChartComponent },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router;