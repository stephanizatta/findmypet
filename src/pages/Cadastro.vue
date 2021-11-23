<template>
  <div id="about">  
  
    <form id="form-cadastro">
      <fieldset>                               
        <h1>Cadastre-se</h1>
        <input v-model="nome" name="nome" type="text" class="inputs" id="nome" placeholder="Nome completo">  
        <input v-model="email" type="email" class="inputs" id="email" placeholder="E-mail"> <br>   
        <input v-model="celular" type="tel" class="inputs" id="celular" placeholder="Celular"> <br>    
        <input v-model="endereco" type="text" class="inputs" id="endereco" placeholder="Endereço">   
        <input v-model="nr_residencial" type="number" class="inputs" id="nr-residencia" placeholder="Nº"> <br>
        <input v-model="complemento" type="text" class="inputs" id="complemento" placeholder="Complemento"> <br>
        <input v-model="senha" type="password" class="inputs" id="senha" placeholder="Senha"> <br>
        <input v-model="repita_senha" type="password" class="inputs" id="repita-senha" placeholder="Repita sua senha"> <br>
        <select v-model="pergunta_seguranca" name="pergunta-seguranca" class="inputs" id="pergunta-seguranca" placeholder="Selecione">
          <option value="" disabled selected>Selecione</option>
          <option value="nm-primeiro-pet" selected>Nome do seu primeiro pet</option>    
          <option value="anos-primeiro-pet">Com quantos anos teve seu primeiro pet</option>    
          <option value="quantos-pets-teve">Quantos pets você já teve</option>    
          <option value="raca-ultimo-pet">Raça do seu último pet</option>    
          <option value="primeiro-pet">Qual foi seu primeiro pet</option>    
          <option value="pet-favorito">Qual seu pet favorito</option>    
        </select> <br>
        <input v-model="resposta" type="text" class="inputs" id="resposta" placeholder="Resposta"> <br><br> 
      
        <div id="div-botoes">
          <input type="reset" class="botoes" id="btn-limpar" name="btn-limpar" value="Limpar">
          <input type="submit" class="botoes" id="btn-enviar" name="btn-enviar" value="Enviar" @click="verificaCampos()">
        </div>
      </fieldset>
    </form>
  </div> 
</template>

<script>
  export default {
    name: 'Cadastro',
    data() { 
      return {
        nome: '',
        email: '',
        celular: '',
        endereco: '',
        nr_residencial: '',
        complemento: '',
        senha: '',
        repita_senha: '',
        pergunta_seguranca: '',
        resposta: '',
      }
    },

    methods: {
      verificaCampos() {
        if(this.nome == '' ||
          this.email == '' ||
          this.celular == '' ||
          this.endereco == '' ||
          this.nr_residencial == '' ||
          this.complemento == '' ||
          this.senha == '' ||
          this.resposta == ''
        ){
          alert("Todos os campos devem ser preenchidos!");
          return false;
        }

        if (this.pergunta_seguranca == ""){
          alert('Escolha uma pergunta de segurança');
        }

        if(this.repita_senha != this.senha) {
          alert("As senhas não correspondem");
          return false;
        }
      }
    }
  }
</script>

<style>
  fieldset{
    padding-bottom: 2rem;
  }

  #form-cadastro{
    width:70%;
    left: 15%;
    right: 15%;
    text-align: center;
    position: absolute;
  }

  h1{
    font-size: 2.5rem;
    padding-top: 2rem;
    padding-bottom: 1.5rem;
  }

  #endereco{
    width: 390px;
    margin-right: 10px;
  }
  #nr-residencia{
    width: 80px;
  }
  #pergunta-seguranca{
    width: 480px;
    height: 1.3rem;
    margin-top: 3px
  }

  #div-botoes{
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    margin-right: 1rem;
  }

  .botoes{
    height: 2rem;
    width: 5rem;
    margin-right: 13px;
    float: right;
    border: 2px groove rgb(192, 192, 192);
  }

  .botoes:hover {
    background-color: rgb(197, 197, 197);
  }

  .inputs{
    width: 30rem;
    height: 1.2rem;
    border: 2px groove rgb(192, 192, 192);
    margin-bottom: 3px;
  }
</style>
