// router.js
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./components/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("./components/About.vue"),
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(), // Use createWebHistory for history mode (optional but recommended for SPAs)
  routes,
});

export default router;
