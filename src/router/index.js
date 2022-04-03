import { createRouter, createWebHashHistory } from 'vue-router'
import AboutView from "../views/AboutView.vue";

const routes = [
    {
      path: "/",
      name: "AboutView",
      component: AboutView,
    },
    {
      path: "/blog",
      name: "BlogView",
      component: () =>
        import( "@/views/BlogView.vue"),
    },
    {
      path: "/post/:id",
      name: "PostView",
      component: () =>
        import( "@/views/PostView.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () =>
        import( "@/views/ContactView.vue"),
    }
  ]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
