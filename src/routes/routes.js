import VCart from "../pages/v-cart"
import VHome from "../pages/v-home"
import VRegister from "../pages/v-register"
import MyOrders from "../pages/MyOrders"
import Details from "../pages/Details"
import Menu from "../pages/Menu"
import Rakhmet from "../pages/Rakhmet"
import {createRouter, createWebHistory} from  "vue-router"

const routes = [
  {
    path: "/",
    component: VHome
  },
  {
    path: "/orders",
    component: MyOrders
  },
  {
    path: "/orders/:id",
    component: Details
  },
  {
    path: "/rakhmet",
    component: Rakhmet
  },
  {
    path: "/cart",
    component: VCart
  },
  {
    path: "/menu/:id",
    component: Menu
  },
  {
    path: "/register",
    component: VRegister
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/"
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;