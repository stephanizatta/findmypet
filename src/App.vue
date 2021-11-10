<template>
  <v-app>
    <v-app-bar app>
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> -->
        <v-title>Find My Pet</v-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn text>
        <router-link class="text-decoration-none" :to="{ name: 'login' }">
          Login
        </router-link>
      </v-btn>
      <v-btn text>
        <router-link class="text-decoration-none" :to="{ name: 'cadastro' }">
          Cadastro
        </router-link>
      </v-btn>
      <v-btn text>
        <router-link
          class="text-decoration-none"
          :to="{ name: 'redefinirSenha' }"
        >
          Redefinir Senha
        </router-link>
      </v-btn>
      <v-btn text>
        <router-link class="text-decoration-none" to="/home">
          Home
        </router-link>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
