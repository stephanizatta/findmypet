<template>
  <div class="about">
    <form id="form-cadastro">
      <fieldset>  
        <h1>Redefinir Senha</h1>
        <input v-model="email" class="input" type="email" id="emailNumero" name="emailNumero" placeholder="Insira seu e-mail"><br>
          <p id="ou">- ou -</p>
          <input v-model="pergunta_seguranca" class="input" type="text" id="perguntaSeg" name="perguntaSeg" placeholder="Resposta da pergunta de seguranca"><br><br>
          <div id="botao">
            <input type="submit" class='button' id='button' value="Enviar" @click="verificaCampos()">
            <p id="nova-conta"><a href="http://localhost:8080/Cadastro.Vue#/cadastro">Criar nova conta</a></p>
          </div>
      </fieldset>  
    </form>     
  </div>
</template>

<script>
  export default {
    methods:{
      setCookie(){
        this.$cookies.set("email","perguntaSeg");
      }
    }
  };
</script>

<script>
export default {
  name: 'Redefinis Senha',
  data() { 
    return {
      email: '',
      pergunta_seguranca: '',
    }
  },

  methods: {
    verificaCampos() {
      if(this.email == '' && this.pergunta_seguranca == ''){
        alert("Preencha um dos campos!");
        return false;
      } else {
        alert("Um e-mail foi lhe enviado para redefinir sua senha!");
      }
    }
  }
}
</script>

<style>
  .input {
    width: 20rem;
    height: 1.2rem;
    border: 2px groove rgb(192, 192, 192);
  }

  .button{
    height: 2rem;
    width: 5rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50px;
    border: 2px groove rgb(192, 192, 192);  
  }

  .button:hover {
    background-color: rgb(197, 197, 197);
  }

  #nova-conta{
    padding-bottom: 50px;
  }

  #ou{
    padding-top: 10px;
  }
</style>
