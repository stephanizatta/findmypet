<template>
  <div class="Login">
     <form id="form-cadastro">
      <fieldset>   
        <h1>Login</h1>
        <form action="/action_page.php"></form>
        <input type="e-mail" id="fname" class="input" name="fname" placeholder="E-mail"> <br><br>
        <input type="password" id="lname" class="input" name="lname" placeholder="Senha" autocomplete="on"> <br><br>

        <input type="checkbox" id="lembrardemim" name="lembrardemim" onclick="autocomplete(on)">
        <label for="lembrardemim">  Lembrar de mim </label>

        <p id="esqueceu-senha">
          Esqueceu sua senha?
          <a href="http://localhost:8080/RedefinirSenha.vue#/redefinir-senha"
            >Clique aqui
          </a>.
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

      </fieldset>  
    </form> 
  </div>
</template>

<script></script>

<style>
h1 {
  font-size: 50px;
  margin-bottom: 50px;
}

.input {
  width: 20rem;
  height: 1.2rem;
}

#lembrardemim {
  margin-bottom: 2rem;
}

#btn-entrar {
  position: absolute;
}

button:hover {
  background-color: rgb(18, 187, 94);
}

#esqueceu-senha{
  margin-left: -5rem;
  padding-bottom: 1.5rem;
}

#lembrardemim{
  margin-left: -12rem;
}

.btn-login{
  padding-bottom: 2.5rem;
}
</style>