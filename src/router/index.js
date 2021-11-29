import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tasks",
    name: "Task",
    component: function () {
      return import("../views/Tasks.vue");
    },
  },
  {
    path: "/create-task",
    name: "Add",
    component: function () {
      return import("../views/CreateTask.vue");
    },
  },

  {
    path: "/profile",
    name: "Profile",
    component: function () {
      return import("../views/Profile.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
