<template>
  <div>
    <v-navigation-drawer
      app
      permanent
      v-model="drawer"      
      expand-on-hover
    >
      <v-list>
        <v-list-group
          :value="false"
          prepend-icon="mdi-account-circle"
        >
          <template v-slot:activator>
            <v-list-item-title>Meu Perfil</v-list-item-title>
          </template>
          <v-list
            nav
            dense
          >
            <v-list-item link>
              <v-list-item-title>Meu cadastro</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title>Minhas publicações</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list-group>

        <v-list-group
          :value="false"
          prepend-icon="mdi-search-web"
        >
          <template v-slot:activator>
            <v-list-item-title>Achou um pet?</v-list-item-title>
          </template>
          <v-list
            nav
            dense
          >
            <v-list-item link>
              <v-list-item-title>Procure seu dono</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-title>Divulgue para adoção</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list-group>

        <v-list>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-paw</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Encontre seu pet</v-list-item-title>
          </v-list-item>
          
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-tag-heart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Adote seu pet</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-heart-box</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Nossa causa</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-thought-bubble</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Histórias</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-phone</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Fale conosco</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sair</v-list-item-title>
          </v-list-item>
        </v-list>

      </v-list>
    </v-navigation-drawer>
    <v-content
      fluid
    >
      <v-container
        class="py-8 px-6"
        fluid
      >
        <v-row>
          <v-col
            cols="12"
          >
            <v-card>
              <v-card-text>
                <h3>Obrigado por me ajudarem a achar meus humanos de estimação!</h3>
                <p>Eu sou o Bolota, e há 4 meses me perdi dos meus humanos em um passeio no parque.
                  Mas fui encontrado bem, graças ao site Find My Friend! Conheça a minha história e
                  de outros pets na aba "Histórias".</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols='6'>
            <v-card>
              <v-card-title>Conte-nos sua experiência</v-card-title>
              <v-card-text>
                <form>
                  <div class="stars-container">
                    <div class="rating">
                        <i class="rating__star far fa-star"></i>
                        <i class="rating__star far fa-star"></i>
                        <i class="rating__star far fa-star"></i>
                        <i class="rating__star far fa-star"></i>
                        <i class="rating__star far fa-star"></i>
                      </div>
                  </div>
                </form>

                <v-radio-group
                  v-model="row"
                  row
                >
                  <v-radio
                    label="Encontrei um pet"
                    value="radio-1"
                  ></v-radio>
                  <v-radio
                    label="Adotei um pet"
                    value="radio-2"
                  ></v-radio>
                  <v-radio
                    label="Perdi meu pet"
                    value="radio-3"
                  ></v-radio>
                  <v-radio
                    label="Adotei um pet"
                    value="radio-4"
                  ></v-radio>
                </v-radio-group>

                <v-radio-group
                  v-model="row"
                  row
                >
                  <v-radio
                    label="Recomendaria o site"
                    value="radio-1"
                  ></v-radio>
                  <v-radio
                    label="Não recomendaria"
                    value="radio-2"
                  ></v-radio>
                </v-radio-group>
                <v-text-field label="Título"></v-text-field>
                <v-textarea
                  name="input-7-1"
                  label="Comentários"
                  hint="Comente sobre sua experiência"
                ></v-textarea>
                <v-card-actions class="d-flex justify-end">
                  <v-btn
                    color="primary"
                    elevation="2"
                    outlined
                  >LIMPAR</v-btn> 
                  <v-btn
                    color="primary"
                    elevation="2"
                  >POSTAR</v-btn> 
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card>
              <v-card-title>Classificação</v-card-title>
              <v-data-table
                :headers="headers"
                :items="desserts"
                :items-per-page="5"
                class="elevation-1"
              ></v-data-table>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>
<script>
export default {
    data () {
      return {
        headers: [
          { text: 'Classificação', value: 'classificacao' },
          {
            text: 'Título',
            align: 'start',
            sortable: false,
            value: 'titulo',
          },
          { text: 'Nota', value: 'nota' },
        ],
        desserts: [
          {
            classificacao: 'Ótima',
            titulo: 'Muito bom',
            nota: 10.0,
          },
          {
            classificacao: 'Ótima',
            titulo: 'Consegui encontrar meu pet',
            nota: 10.0,
          },
          {
            classificacao: 'Ótima',
            titulo: 'Gostei do site',
            nota: 10.0,
          },
          {
            classificacao: 'Ótima',
            titulo: 'Adotei meu primeiro pet',
            nota: 10.0,
          },
        ],
      }
    },
  }

</script>
<style>
.stars-container {
    margin-top: 10px;
    display: grid;
    place-items: center;
}

.rating {
    position: relative;
    width: 180px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .3em;
    padding: 5px;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 0 2px #b3acac;
 }
 
 .rating__result {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-10px) translateX(-5px);
    z-index: -9;
    font: 3em Arial, Helvetica, sans-serif;
    color: #ebebeb8e;
    pointer-events: none;
 }
 
 .rating__star {
    font-size: 1.3em;
    cursor: pointer;
    color: #dabd18b2;
    transition: filter linear .3s;
 }
 
 .rating__star:hover {
    filter: drop-shadow(1px 1px 4px gold);
 }

</style>
