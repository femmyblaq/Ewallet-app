import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import Login from "../views/Login.vue";
// import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgetPass.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },

  {
    path: "/forgotPassword",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    children: [
      {
        path: "/fund_account",
        name: "FundAccount",
        component: () => import("../views/FundAcc.vue"),
      },
      {
        path: "/withdraw",
        name: "Withdraw",
        component: () => import("../views/Withdraw.vue"),
      },
      {
        path: "/set_pin",
        name: "SetPin",
        component: () => import("../views/SetPin.vue"),
      },
      {
        path: "/payment",
        name: "Payment",
        component: () => import("../views/Payment.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
