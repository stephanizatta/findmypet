# findmypet

## Sumário

 <a href="#sobre">Sobre</a><br>
 <a href="#pre">Pré-configuração</a><br>
 <a href="#config">Configuração</a> <br>

<a name="sobre"/>

## :hatching_chick: Sobre

**Find My Pet** é um projeto fruto de uma série de trabalhos avaliativos da matéria de Programação Web, do curso de Bacharelado de Sistemas de Informação da Universidade Regional de Blumenau (FURB). O desenvolvimento parte por um grupo de três pessoas (Ana Maria, Brenda e Stephani) e do Vinícius.

As tecnologias empregadas no projeto são:
- Vue.JS;
- Vuetify;
- PHP.

<a name="pre"/>

## :baby_chick: Pré-configuração

Para que seja possível configurar o projeto, é necessário que você tenha instalado um gerenciador de pacote (como o `npm` ou o `yarn`).
Como exemplo, abaixo segue o passo a passo de como instalar o NPM.

### Baixando e instalando o NodeJS

1. Pelo navegador, acesse o site https://nodejs.org/en/
2. Na página, clique no botão de instalação do LTS. Um arquivo será baixado;
3. Após baixado, execute o arquivo de instalação;
4. Faça a instalação normal/recomendada.

### Acessando o terminal

1. No Windows, abra o menu Iniciar;
2. Em seguida, pesquise pelo terminal de sua preferência. Para este exemplo, utilizaremos o **Windows PowerShell**. Procure por ele;
> Você também pode utilizar outro terminal, como o Windows Terminal, disponível na Microsoft Store gratuitamente.
3. Com o botão direito do mouse, clique sobre o programa;
4. Dentre as opções, escolha "**Executar como administrador**";
5. Caso seja exibido um alerta de segurança, clique em "**Sim**";

### Acessando o diretório de desenvolvimento

Agora você precisa acessar o local onde estará seu repositório. Para este exemplo, vamos assumir que o *PowerShell* iniciou o terminal em `C:/Users/Usuario` e queremos chegar até `C:/Code`.

#### Forma menos otimizada
1. Na janela que se abrir, digite `cd ..`
> Isso fará com que você regresse uma pasta, de `C:/Users/Usuario` para `C:/Users`
2. Em seguida, digite novamente `cd ..`
> Agora você regrediu para a pasta `C:`
3. Agora é necessário acessar a pasta `Code`. Portanto, digite `cd Code`

Pronto. A pasta foi acessada com sucesso.
> Precisa criar uma pasta e gostaria de fazê-lo pelo terminal? Digite o código `mkdir NomeDaPastaAqui` e, em seguida, `cd NomeDaPastaAqui` para acessá-la.

#### Forma rápida
1. Na janela que se abrir, digite o comando `cd ../../Code`

<a name="config"/>

## :chicken: Configurando o projeto
Antes de mais nada, é necessário ter instalado na sua máquina um gerenciador de pacote. Como por exemplo ´yarn´ ou ´npm´, como já mencionado no tópico acima.
Dito isso, vamos ao passo a passo:

### 1. Clone o projeto
Vá até a pasta desejada e digite o seguinte código:
```
git clone https://github.com/stephanizatta/findmypet.git
```

### 2. Entre na pasta "findmypet"
```
cd findmypet
```
> `cd` é o comando para acessar um caminho, como avançar em uma pasta ou voltar à pasta raiz.

### 3. Instale as dependências
"Dependências" são todos os arquivos que são necessários para que o projeto esteja plenamente funcional.
O comando a seguir **instalará estas dependencias**, permitindo que seu computador seja capaz de rodá-lo sem problemas.
```
npm install
```

### 3. Inicialize o server
Para a magia acontecer, bota pra correr
```
npm run serve
```

### 4. Confira seu navegador
Após isso, o seu projeto estará rodando localmente. Confira o endereço `localhost:8080`

COMANDOS ADICIONAIS:

### Compila e minifica os arquivos para produção
```
npm run build
```

### Verifica erros de sintaxe e escrita de código
```
npm run lint
```
