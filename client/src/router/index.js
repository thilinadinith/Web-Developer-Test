import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CartView from "../views/CartView.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/cart",
    name: "cartView",
    component: CartView
    ,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/CartView.vue"),

  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
