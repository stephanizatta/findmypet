<template>
  <div class="Login">
    <h1>Login</h1>
    <v-card class="justify-center">
      <form action="/action_page.php"></form>
      <input
        type="e-mail"
        id="fname"
        class="input"
        name="fname"
        placeholder="E-mail"
      /><br /><br />
      <input
        type="password"
        id="lname"
        class="input"
        name="lname"
        placeholder="Senha"
        autocomplete="on"
      /><br /><br />
    </v-card>
    <input
      type="checkbox"
      id="lembrardemim"
      name="lembrardemim"
      onclick="autocomplete(on)"
    />
    <label for="lembrardemim">Lembrar de mim </label>
    <p id="esqueceu-senha">
      Esqueceu sua senha?
      <a href="http://localhost:8080/RedefinirSenha.vue#/redefinir-senha"
        >Clique aqui</a
      >.
    </p>
    <div class="btn-login">
      <button>Entrar</button>
    </div>
    <div>
      <p id="rodape-pet">
        Perdeu ou encontrou um pet e quer divulgá-lo? Faça seu cadastro
        <a href="http://localhost:8080/cadastro.html#/cadastro">aqui</a>.
      </p>
    </div>
  </div>
</template>
<script></script>
<style>
#body-login {
  text-align: center;
  position: absolute;
  width: 70%;
  left: 15%;
  right: 15%;
  height: 80%;
}

h1 {
  font-size: 50px;
  margin-bottom: 50px;
  position: center;
}

.input {
  width: 20rem;
  height: 1.2rem;
  margin-left: 490px;
}

#div-botao {
  position: absolute;
  top: 500px;
  margin-left: 550px;
  left: 200px;
}

#lembrardemim {
  margin-bottom: 2rem;
  margin-left: 550px;
}

#esqueceu-senha {
  margin-left: 490px;
}

#btn-entrar {
  position: absolute;
  top: 500px;
  left: 200px;
}

.button:hover {
  position: absolute;
  top: 500px;
  left: 200px;
  background-color: rgb(18, 187, 94);
}
</style>