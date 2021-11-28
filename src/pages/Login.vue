<template>
  <div class="Login">
     <form id="form-cadastro">
      <fieldset>   
        <h1>Login</h1>
        <form action="/action_page.php"></form>
        <input v-model="email" type="e-mail" id="fname" class="input" name="fname" placeholder="E-mail"> <br><br>
        <input v-model="senha" type="password" id="lname" class="input" name="lname" placeholder="Senha" autocomplete="on"> <br><br>

        <input type="checkbox" id="lembrardemim" name="lembrardemim" onclick="setCookie">
        
        <label for="lembrardemim">  Lembrar de mim </label>

        <p id="esqueceu-senha">
          Esqueceu sua senha?
          <a href="http://localhost:8080/RedefinirSenha.vue#/redefinir-senha"
            >Clique aqui
          </a>.
        </p>

        <div class="btn-login">
          <button @click="verificaCampos()">Entrar</button>
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

<script>
export default {
    name: 'Login',
    data() { 
      return {
        email: '',
        senha: '',
      }
    },

    methods: {
      verificaCampos() {
        if(this.email == '' || this.senha == ''){
          alert("Todos os campos devem ser preenchidos!");
          return false;
        }
      }
    }
  }
</script>

<style>
h1 {
  font-size: 50px;
  margin-bottom: 50px;
}

.input {
  width: 20rem;
  height: 1.2rem;
  border: 2px groove rgb(192, 192, 192);
}

#lembrardemim {
  margin-bottom: 2rem;
}

#esqueceu-senha{
  margin-left: -5rem;
  padding-bottom: 1.5rem;
}

#lembrardemim{
  margin-left: -12rem;
}

.btn-login{
  height: 2rem;
  width: 5rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  border: 2px groove rgb(192, 192, 192);  
}

.btn-login:hover {
  background-color: rgb(197, 197, 197);
}
</style>

<script>
export default {
   methods:{
     setCookie(){
         // it sets the cookie called `username`
       this.$cookies.set("lname","fname");
     }
   }
};
</script>