# creating-node-application
Criação de uma aplicação em node do curso GoStack da Rocktseat na parte de ambientes e conceitos.

## Instalação

É necessário ter instalado o [node.js](https://github.com/nvm-sh/nvm), [yarn](https://yarnpkg.com/en/docs/install) ou npm. Eu estou usando yarn.

1. Instalar algum software para testar as rotas post, put e delete, como [Postman](https://www.getpostman.com/) ou [Insomnia](https://insomnia.rest/). Eu estou usando o Insomnia.
2. Clone o repositório: `git clone git@github.com:BrunoCesarAngst/creating-node-application.git`.
3. Instalar pacotes: `npm install ou yarn`.
4. Rodar: `yarn dev`.
5. Acesse o browser: `http://localhost:3000/users`.
6. Abra o software de teste de rotas.
7. Crie a primeira requisição tipo "Mostrar todos usuários" com o método GET, no endereço http://localhost:3000/users
![mostrando todos os usuários](https://github.com/BrunoCesarAngst/creating-node-application/blob/master/images/mostrando%20todos%20os%20usu%C3%A1rios%20imagem%20de%2002-dezembro-2019%20as%2022:28:21%20em%20uma%20segunda%20da%20semana%2049.png "mostrando todos os usuários")

8. Mostrar um usuário inexistente, com o método GET, no endereço http://localhost:3000/users/4
![mostrando um usuário inválido](https://github.com/BrunoCesarAngst/creating-node-application/blob/master/images/mostrando%20um%20usu%C3%A1rio%20inv%C3%A1lido%20imagem%20de%2002-dezembro-2019%20as%2022:30:59%20em%20uma%20segunda%20da%20semana%2049.png "mostrando um usuário inválido")

9. Mostrar um usuário, com o método GET, no endereço http://localhost:3000/users/3
![mostrando um usuário](https://github.com/BrunoCesarAngst/creating-node-application/blob/master/images/mostrando%20um%20usu%C3%A1rio%20v%C3%A1lido%20imagem%20de%2002-dezembro-2019%20as%2022:32:38%20em%20uma%20segunda%20da%20semana%2049.png "mostrando um usuário")

10. Criando um novo usuário com a informação *name* errada, com o método POST, no endereço http://localhost:3000/users
![criando um novo usuário com a informação name errada](https://github.com/BrunoCesarAngst/creating-node-application/blob/master/images/criando%20um%20novo%20usu%C3%A1rio%20com%20a%20informa%C3%A7%C3%A3o%20name%20errada%20imagem%20de%2002-dezembro-2019%20as%2022:40:57%20em%20uma%20segunda%20da%20semana%2049.png "criando um novo usuário com a informação name errada")

11. Criando um novo usuário, com o método POST, no endereço http://localhost:3000/users
![criando um novo usuário](https://github.com/BrunoCesarAngst/creating-node-application/blob/master/images/criando%20um%20novo%20usu%C3%A1rio%20imagem%20de%2002-dezembro-2019%20as%2022:42:59%20em%20uma%20segunda%20da%20semana%2049.png "criando um novo usuário")

12. Editando um usuário inexistente, com o método PUT, no endereço http://localhost:3000/users/5
![Editando um usuário inexistente](https://github.com/BrunoCesarAngst/creating-node-application/blob/master/images/editando%20um%20usu%C3%A1rio%20inexistente%20imagem%20de%2002-dezembro-2019%20as%2022:45:14%20em%20uma%20segunda%20da%20semana%2049.png "Editando um usuário inexistente")

13. Editando um usuário com a informação *name* errada, com o método PUT, no endereço http://localhost:3000/users/4
![Editando um usuário com a informação name errada](https://github.com/BrunoCesarAngst/creating-node-application/blob/master/images/editando%20usu%C3%A1rio%20com%20a%20informa%C3%A7%C3%A3o%20name%20errada%20imagem%20de%2002-dezembro-2019%20as%2022:47:13%20em%20uma%20segunda%20da%20semana%2049.png "Editando um usuário com a informação name errada")

14. Editando um usuário, com o método PUT, no endereço http://localhost:3000/users/4
![Editando um usuário](https://github.com/BrunoCesarAngst/creating-node-application/blob/master/images/editando%20um%20usu%C3%A1rio%20imagem%20de%2002-dezembro-2019%20as%2022:52:41%20em%20uma%20segunda%20da%20semana%2049.png "Editando um usuário")

15. Deletando um usuário inexistente, com o método DELETE, no endereço http://localhost:3000/users/5
![Deletando um usuário inexistente](https://github.com/BrunoCesarAngst/creating-node-application/blob/master/images/deletando%20um%20usu%C3%A1rio%20inexistente%20imagem%20de%2002-dezembro-2019%20as%2022:53:58%20em%20uma%20segunda%20da%20semana%2049.png "Deletando um usuário inexistente")

16. Deletando um usuário, com o método DELETE, no endereço http://localhost:3000/users/4
![Deletando um usuário](https://github.com/BrunoCesarAngst/creating-node-application/blob/master/images/deletando%20um%20usu%C3%A1rio%20imagem%20de%2002-dezembro-2019%20as%2022:55:06%20em%20uma%20segunda%20da%20semana%2049.png "Deletando um usuário")

### Comandos dados para a criação da aplicação:

`yarn init -y` que cria o arquivo package.json que pode criar o pacote(biblioteca) de distribuição, mas, também guardas as referências para as dependências que formos instalando via npm ou yarn

`yarn add express` o Express é micro-frame-work

Criamos o arquivo *index.js*, que é a nossa porta de entrada da nossa aplicação e começamos a trabalher dentro dele.

Nessa aplicação os dados estão sendo armazenados dentro de um Array, dentro do própio arquivo index.js, ou seja, 

`yarn add nodemon -D` para automatizar o processo de reinicialização do servidor a cada alteração no modo de desenvolvimento -D