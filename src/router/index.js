import Vue from "vue";
import VueRouter from "vue-router";

import Cadastro from "../pages/Cadastro.vue";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import RedefinirSenha from "../pages/RedefinirSenha.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/cadastro",
      name: "cadastro",
      component: Cadastro,
    },
    {
      path: "/redefinir-senha",
      name: "redefinirSenha",
      component: RedefinirSenha,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});
