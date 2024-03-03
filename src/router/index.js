import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: import("@/views/Home.vue"),
  },
  {
    path: "/country/:name",
    name: "country",
    component: import("@/views/Country.vue"),
  },
];

const router = createRouter({
  history: createWebHistory("https://countries-sable-five.vercel.app/"),
  routes,
});

export default router;
