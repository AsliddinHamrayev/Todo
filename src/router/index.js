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
  {
    path: "/login",
    name: "Login",
    component: function () {
      return import("../views/Login.vue");
    },
  },
  {
    path: "/register",
    name: "Register",
    component: function () {
      return import("../views/Register.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
