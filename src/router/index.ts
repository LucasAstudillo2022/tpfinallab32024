import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginCuenta from "../views/LoginCuenta.vue";
import TransaccionesDia from "@/views/TransaccionesDia.vue";
import MovimientosHistoricos from "../views/MovimientosHistoricos.vue";
import AnalisisActual from "@/views/AnalisisActual.vue";
import AnalisisInver from "../views/AnalisisInver.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: LoginCuenta,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/transacciones",
    name: "transacciones",
    component: TransaccionesDia,
  },
  {
    path: "/movimientos",
    name: "movimientos",
    component: MovimientosHistoricos,
  },
  {
    path: "/analisisactual",
    name: "analisisactual",
    component: AnalisisActual,
  },
  {
    path: "/analisisinver",
    name: "analisisinver",
    component: AnalisisInver,
  }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
