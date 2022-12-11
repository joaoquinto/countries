import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: import(/* webpackChunkName: "about" */ "@/views/Home.vue"),
  },
  {
    path: "/country/:name",
    name: "country",
    component: import(/* webpackChunkName: "about" */ "@/views/Country.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
