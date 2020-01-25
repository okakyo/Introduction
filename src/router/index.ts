import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/views/Home.vue";
import About from "@/components/views/About.vue";
import SignIn from "@/components/views/Signin.vue";
import Setting from "@/components/views/account/Setting.vue";
import Account from "@/components/views/account/Accounts.vue";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn
  },
  {
    path: "/setting",
    name: "setting",
    component: Setting
  },
  {
    path: "/account",
    name: "accounts",
    component: Account
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 認証チェックを実装するための実装
/*
router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  let currentUser = firebase.auth().currentUser;
  if (requiresAuth) {
    if (!currentUser) {
      next({
        path: '/signin',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  } else {
    next();
  }
})*/

export default router;
