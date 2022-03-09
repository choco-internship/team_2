import Cart from "../pages/Cart"
import Home from "../pages/Home"
import Register from "../pages/Register"
import Orders from "../pages/Orders"
import Details from "../pages/Details"
import Login from "../pages/Login"
import Menu from "../pages/Menu"
import Rakhmet from "../pages/Rakhmet"
import {createRouter, createWebHistory} from  "vue-router"

const auth = JSON.parse(localStorage.getItem('user'))?.access_token

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/orders",
    component: Orders
  },
  {
    path: "/rakhmet",
    component: Rakhmet
  },
  {
    path: "/menu/:id",
    component: Menu
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/"
  }
]

const authRoutes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/orders",
    component: Orders
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
    component: Cart
  },
  {
    path: "/menu/:id",
    component: Menu
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/"
  }
]

const router = createRouter({
  routes: auth ? authRoutes : routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;