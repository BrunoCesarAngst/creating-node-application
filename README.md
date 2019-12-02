# creating-node-application
Criação de uma aplicação em node do curso GoStack da Rocktseat na parte de ambientes e conceitos.

## Instalação

É necessário ter o nodejs instalado e o yarn ou npm.

1. Instalar algum software para testar as rotas post, put e delete, como [Postman](https://www.getpostman.com/) ou [Insomnia](https://insomnia.rest/). Eu estou usando o Insomnia.
2. Clone o repositório: `git clone git@github.com:BrunoCesarAngst/creating-node-application.git`.
3. Instalar pacotes: `npm install ou yarn`.
4. Rodar: `yarn dev`.
5. Acesse o browser: `http://localhost:3000/users`.
6. Abra o software de teste de rotas.
7. Crie a primeira requisição tipo "Mostrar todos usuários" com o método GET, no endereço http://localhost:3000/users
7. Crie outra requisição tipo "Mostrar um usuário" com o método GET, no endereço http://localhost:3000/users/users/1

### Comandos dados para a criação da aplicação:

`yarn init -y` que cria o arquivo package.json que pode criar o pacote(biblioteca) de distribuição, mas, também guardas as referências para as dependências que formos instalando via npm ou yarn

`yarn add express` o Express é micro-frame-work

Criamos o arquivo *index.js*, que é a nossa porta de entrada da nossa aplicação e começamos a trabalher dentro dele.

Nessa aplicação os dados estão sendo armazenados dentro de um vetor dentro do própio arquivo index.js, ou seja, 

`yarn add nodemon -D` para automatizar o processo de reinicialização do servidor a cada alteração no modo de desenvolvimento -D